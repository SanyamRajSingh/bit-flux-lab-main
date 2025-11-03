import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { ArrowRightLeft } from "lucide-react";

type ConversionMode = "binary-to-gray" | "gray-to-binary";

interface ConversionStep {
  index: number;
  formula: string;
  calculation: string;
  result: string;
}

const BinaryGrayConverter = () => {
  const [mode, setMode] = useState<ConversionMode>("binary-to-gray");
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [steps, setSteps] = useState<ConversionStep[]>([]);
  const [showSteps, setShowSteps] = useState(false);
  const [error, setError] = useState(false);

  const validateInput = (value: string): boolean => {
    return /^[01]+$/.test(value) && value.length > 0;
  };

  const binaryToGray = (binary: string): { result: string; steps: ConversionStep[] } => {
    const bits = binary.split("");
    const gray: string[] = [];
    const conversionSteps: ConversionStep[] = [];

    // First bit stays the same
    gray[0] = bits[0];
    conversionSteps.push({
      index: 0,
      formula: `G₀ = B₀`,
      calculation: `G₀ = ${bits[0]}`,
      result: bits[0],
    });

    // XOR each bit with the previous bit
    for (let i = 1; i < bits.length; i++) {
      const xorResult = (parseInt(bits[i - 1]) ^ parseInt(bits[i])).toString();
      gray[i] = xorResult;
      conversionSteps.push({
        index: i,
        formula: `G₍ = B₍₋₁₎ ⊕ B₍`,
        calculation: `G₍ = ${bits[i - 1]} ⊕ ${bits[i]} = ${xorResult}`,
        result: xorResult,
      });
    }

    return { result: gray.join(""), steps: conversionSteps };
  };

  const grayToBinary = (gray: string): { result: string; steps: ConversionStep[] } => {
    const bits = gray.split("");
    const binary: string[] = [];
    const conversionSteps: ConversionStep[] = [];

    // First bit stays the same
    binary[0] = bits[0];
    conversionSteps.push({
      index: 0,
      formula: `B₀ = G₀`,
      calculation: `B₀ = ${bits[0]}`,
      result: bits[0],
    });

    // XOR each gray bit with the previous binary bit
    for (let i = 1; i < bits.length; i++) {
      const xorResult = (parseInt(binary[i - 1]) ^ parseInt(bits[i])).toString();
      binary[i] = xorResult;
      conversionSteps.push({
        index: i,
        formula: `B₍ = B₍₋₁₎ ⊕ G₍`,
        calculation: `B₍ = ${binary[i - 1]} ⊕ ${bits[i]} = ${xorResult}`,
        result: xorResult,
      });
    }

    return { result: binary.join(""), steps: conversionSteps };
  };

  const handleConvert = () => {
    if (!validateInput(input)) {
      setError(true);
      setTimeout(() => setError(false), 400);
      return;
    }

    setShowSteps(false);
    setError(false);

    const conversion =
      mode === "binary-to-gray" ? binaryToGray(input) : grayToBinary(input);

    setResult(conversion.result);
    setSteps(conversion.steps);

    // Animate steps appearing
    setTimeout(() => setShowSteps(true), 100);
  };

  const toggleMode = () => {
    setMode(mode === "binary-to-gray" ? "gray-to-binary" : "binary-to-gray");
    setInput("");
    setResult("");
    setSteps([]);
    setShowSteps(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-background via-background to-muted/20">
      <Card className="w-full max-w-3xl glass-card p-8 space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            BinaryGrayify
          </h1>
          <p className="text-muted-foreground">
            Interactive Binary ↔ Gray Code Converter
          </p>
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center justify-center gap-4">
          <Button
            onClick={toggleMode}
            variant="outline"
            size="lg"
            className="group relative overflow-hidden border-primary/50 hover:border-primary hover:bg-primary/10 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              {mode === "binary-to-gray" ? "Binary → Gray" : "Gray → Binary"}
              <ArrowRightLeft className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
            </span>
          </Button>
        </div>

        {/* Input Section */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground/80">
              {mode === "binary-to-gray" ? "Binary Input" : "Gray Code Input"}
            </label>
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter binary number (e.g., 1101)"
              className={`font-mono text-lg h-12 bg-muted/50 border-primary/30 focus:border-primary focus:ring-primary/20 ${
                error ? "shake border-destructive" : ""
              }`}
              onKeyDown={(e) => e.key === "Enter" && handleConvert()}
            />
            {error && (
              <p className="text-sm text-destructive animate-pulse">
                Please enter a valid binary number (only 0s and 1s)
              </p>
            )}
          </div>

          <Button
            onClick={handleConvert}
            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 active:scale-95 transition-all duration-200 pulse-scale"
          >
            Convert
          </Button>
        </div>

        {/* Result Section */}
        {result && (
          <div className="space-y-4 fade-in">
            <div className="p-6 rounded-lg glass-card result-glow">
              <h3 className="text-sm font-medium text-muted-foreground mb-2">
                Result:
              </h3>
              <p className="text-3xl font-mono font-bold text-primary">
                {result}
              </p>
            </div>

            {/* Steps Section */}
            {showSteps && (
              <div className="space-y-3 slide-down">
                <h3 className="text-lg font-semibold text-foreground/90 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-primary to-accent rounded-full" />
                  Step-by-Step Conversion:
                </h3>
                <div className="space-y-2">
                  {steps.map((step, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-muted/30 border border-primary/10 hover:border-primary/30 transition-all duration-300"
                      style={{
                        animation: `fadeIn 0.5s ease-out ${index * 0.1}s backwards`,
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </span>
                        <div className="flex-1 space-y-1">
                          <p className="font-mono text-sm text-muted-foreground">
                            {step.formula.replace("₍", `₍`)}
                          </p>
                          <p className="font-mono text-base">
                            {step.calculation}
                          </p>
                          <p className="text-sm">
                            <span className="text-muted-foreground">
                              Result:{" "}
                            </span>
                            <span className="font-mono font-semibold text-accent">
                              {step.result}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Info Footer */}
        <div className="pt-4 text-center text-sm text-muted-foreground border-t border-primary/10">
          <p>
            {mode === "binary-to-gray"
              ? "Binary to Gray: G₀ = B₀, Gᵢ = Bᵢ₋₁ ⊕ Bᵢ"
              : "Gray to Binary: B₀ = G₀, Bᵢ = Bᵢ₋₁ ⊕ Gᵢ"}
          </p>
        </div>
      </Card>
    </div>
  );
};

export default BinaryGrayConverter;
