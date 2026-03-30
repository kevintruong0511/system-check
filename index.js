#!/usr/bin/env node

import os from 'os';
import chalk from 'chalk';
import Table from 'cli-table3';

function formatGB(bytes) {
    return (bytes / (1024 ** 3)).toFixed(2);
}

function getCPUUsage() {
    const cpus = os.cpus();

    return cpus.map(cpu => {
        const total = Object.values(cpu.times).reduce((a, b) => a + b);
        const idle = cpu.times.idle;
        return ((1 - idle / total) * 100).toFixed(1);
    });
}

function clearScreen() {
    process.stdout.write('\x1Bc');
}

function showSystemInfo() {
    clearScreen();

    console.log(chalk.green(chalk.bold("===== SYSTEM MONITOR =====\n")));

    // Basic info
    console.log(chalk.cyan("OS:"), os.platform(), `(${os.type()})`);
    console.log(chalk.cyan("Arch:"), os.arch());
    console.log(chalk.cyan("Hostname:"), os.hostname());
    console.log(chalk.cyan("User:"), os.userInfo().username);
    console.log(chalk.cyan("Uptime:"), (os.uptime() / 3600).toFixed(2), "hours");

    console.log("");

    // RAM
    const total = formatGB(os.totalmem());
    const free = formatGB(os.freemem());

    console.log(chalk.yellow("RAM:"));
    console.log(`Total: ${total} GB`);
    console.log(`Free : ${free} GB`);

    console.log("");

    // CPU
    const usage = getCPUUsage();
    const table = new Table({
        head: ["Core", "Usage (%)"],
    });

    usage.forEach((u, i) => {
        table.push([`Core ${i}`, u + "%"]);
    });

    console.log(chalk.magenta("CPU Usage:"));
    console.log(table.toString());

    console.log("\nPress Ctrl + C to exit");
}

// refresh mỗi 2 giây
setInterval(showSystemInfo, 2000);