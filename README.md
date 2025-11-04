# 🚀 BinaryGrayify

**BinaryGrayify** is a sleek and interactive web app built using **React.js** that allows users to easily **convert between Binary and Gray codes**.  
It provides an intuitive interface, real-time conversion, and educational value for digital electronics enthusiasts and learners.

---

## 🎯 Project Overview
BinaryGrayify helps users understand and perform conversions between **binary** and **Gray codes**, which are essential in **digital communication systems** and **error minimization**.  
The app instantly converts input as you type, offering a smooth, modern, and visually appealing experience.

---

## 🧠 Features
- 🔄 Convert **Binary → Gray Code** and **Gray → Binary**  
- ⚡ Instant real-time conversion  
- ✅ Input validation for correct binary format  
- 🎨 Minimal, responsive UI built with React  
- 🧩 Easy-to-understand logic and open-source  

---

## ⚙️ Tech Stack

| Layer | Technology | Purpose |
|-------|-------------|----------|
| Frontend Framework | **React.js (with JSX)** | Component-based UI rendering |
| Styling | **CSS3 / Tailwind CSS (optional)** | Clean, responsive UI |
| Logic | **JavaScript (ES6)** | Conversion algorithms & interactivity |
| Build Tool | **Vite** | Fast development & optimized builds |
| Structure | **HTML (via JSX)** | Layout definition inside components |
| Version Control | **Git & GitHub** | Collaboration and hosting |

---

## 🧩 Core Logic

### 🔹 Binary → Gray Code
```js
const binaryToGray = (binary) => {
  let gray = parseInt(binary, 2) ^ (parseInt(binary, 2) >> 1);
  return gray.toString(2).padStart(binary.length, '0');
};
```

### 🔹 Gray Code → Binary
```js
const grayToBinary = (gray) => {
  let binary = gray[0];
  for (let i = 1; i < gray.length; i++) {
    binary += (binary[i - 1] ^ gray[i]).toString();
  }
  return binary;
};
```

---

## 🖥️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/SanyamRajSingh/BinaryGrayify.git

# Navigate to the project directory
cd BinaryGrayify

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open the link provided by Vite (usually `http://localhost:5173/`).

---

## 🧾 Educational Insight
**Binary and Gray codes** are essential in **digital systems** for minimizing transition errors.  
BinaryGrayify visually demonstrates these conversions, making it an excellent learning tool for electronics, logic design, and computer science students.

---

## 🧑‍💻 Contributing
Contributions are always welcome!  
Feel free to fork the repo, submit issues, or create pull requests.

---

## 📜 License
This project is licensed under the **MIT License** — free to use, modify, and distribute.
