# 🧠 Bit-Flux Lab
### *Binary ↔ Gray Code Converter*

A simple yet efficient web application that converts **Binary to Gray Code** and **Gray Code to Binary** instantly.  
Built using **HTML, CSS, and JavaScript**, this project is perfect for understanding how Gray code works and for quick conversions while studying digital electronics or computer architecture.

---

## 🚀 Features
- 🔄 **Two-way conversion**:  
  Convert **Binary → Gray** and **Gray → Binary**.  
- ⚡ **Instant results**:  
  Real-time conversion on input.  
- 🧮 **Error handling**:  
  Detects invalid binary or gray input.  
- 💻 **Lightweight & fast**:  
  Runs entirely in the browser — no backend required.  
- 🎨 **Clean UI**:  
  Simple and intuitive interface for quick testing.

---

## 🧩 What is Gray Code?
Gray code is a **binary numeral system** where two successive values differ in only **one bit**.  
It’s widely used in **digital encoders**, **communication systems**, and **error-minimized hardware transitions**.

### 🧠 Conversion Rules
- **Binary → Gray Code**  
  - The **most significant bit (MSB)** of the Gray code = MSB of binary.  
  - Every next Gray bit = XOR of the previous binary bit and the current binary bit.  

  Example:  
  Binary: `1011` → Gray: `1110`  

- **Gray → Binary**  
  - The **MSB** of binary = MSB of Gray.  
  - Every next binary bit = XOR of the previous binary bit and the current Gray bit.  

  Example:  
  Gray: `1110` → Binary: `1011`

---

## 🧠 How It Works
Internally, the app:
1. Reads the input string.  
2. Validates that it contains only `0` and `1`.  
3. Uses **bitwise XOR (`^`)** operations to perform conversions.  
4. Displays the output instantly in the corresponding text field.

---

## 📂 Project Structure
```
bit-flux-lab-main/
│
├── index.html        → Main webpage
├── style.css         → Styling for UI
├── script.js         → Core logic (conversion functions)
└── README.md         → Project documentation
```

---

## ⚙️ Usage
1. **Clone the repository**
   ```bash
   git clone https://github.com/SanyamRajSingh/bit-flux-lab-main.git
   cd bit-flux-lab-main
   ```
2. **Open the App**
   - Double-click `index.html` or  
   - Serve it locally:
     ```bash
     npx live-server
     ```
3. **Enter a number** in either Binary or Gray input field.  
4. The converted value will appear automatically.

---

## 🧮 Example Conversions

| Binary | Gray Code |
|:------:|:----------:|
| 0000 | 0000 |
| 0001 | 0001 |
| 0010 | 0011 |
| 0011 | 0010 |
| 0100 | 0110 |
| 0101 | 0111 |
| 0110 | 0101 |
| 0111 | 0100 |

---

## 🧰 Technologies Used
- **HTML5**
- **CSS3**
- **JavaScript (ES6)**

---

## 💡 Future Improvements
- Dark/light theme toggle  
- Copy-to-clipboard button  
- Binary ↔ Decimal ↔ Gray three-way converter    

---

## 📜 License
This project is open-source under the **MIT License**.  
Feel free to fork, modify, and use it for educational or project purposes.

---

