# 🚀 System Monitor

A lightweight, real-time system monitoring tool built with Node.js. Track your OS details, RAM usage, and per-core CPU performance directly from your terminal.

## ✨ Features

- 💻 **OS Info**: Displays platform, architecture, hostname, user, and uptime.
- 🧠 **RAM Tracking**: Real-time total and free memory overview.
- ⚡ **CPU Per-Core Monitoring**: Detailed usage percentage for each core in a clean table format.
- 🔄 **Live Refresh**: Automatically updates every 2 seconds.
- 🎨 **Rich Aesthetics**: Beautifully formatted with `chalk` and `cli-table3`.

## 🛠 Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/system-check.git
   cd system-check
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🚀 Usage

Run the monitor using:
```bash
node index.js
```

Or run it as a command if globally linked:
```bash
npm link
system-check
```

## 📦 Tech Stack

- [Node.js](https://nodejs.org/) - Runtime environment
- [Chalk](https://www.npmjs.com/package/chalk) - Terminal styling
- [cli-table3](https://www.npmjs.com/package/cli-table3) - Clean table output in console

## 📄 License

This project is licensed under the [ISC](https://opensource.org/licenses/ISC) License.

---
*Made with ❤️ by [Khang](https://github.com/your-username)*
