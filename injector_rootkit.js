#!/usr/bin/env node

/**
 * INTERNAL TOOL: remove.os
 * Author: eldrinDev (unauthorized use is prohibited)
 *
 * Description:
 * This script simulates the forced removal of core OS components.
 * DO NOT RUN unless you're aware of the consequences.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');

console.clear();

console.log("🚨 WARNING: You are about to execute a Level 0 wipe of the system.");
console.log("🔐 Initializing root verification...\n");

// Simulate root check
function verifyRoot() {
  const user = os.userInfo().username;
  if (user !== 'root') {
    console.log(`[x] Insufficient privileges. Attempting sudo escalation...`);
    execSync('echo "Sudo escalation successful (simulated)"');
  } else {
    console.log(`[✔] Root access verified.`);
  }
}
verifyRoot();

// Simulate scanning critical directories
const dirs = [
  '/boot', '/etc', '/dev', '/proc', '/usr',
  '/var', '/lib', '/home', '/root', '/sys'
];

console.log("\n📁 Scanning directories:");
dirs.forEach((dir, index) => {
  console.log(`  [${index + 1}/${dirs.length}] Located: ${dir}`);
});

// Simulate surveillance warning
console.log("\n🛰  Satellite uplink established.");
console.log("👁  Remote AI monitoring system is online.");
console.log("📡 Tracking IP address: 127.0.0.1 (localhost spoofed)");
console.log("🕵️ Surveillance Protocol: ACTIVE\n");

// Simulate log backup
console.log("📝 Backing up /var/log to /tmp/tmp.logs");
fs.writeFileSync('./tmp.logs', 'log_backup_data_stream_00110110');

console.log("📤 Transmitting encrypted logs to audit server...");

function fakeEncrypt(data) {
  const key = crypto.randomBytes(32);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  let enc = cipher.update(data, 'utf8', 'hex');
  enc += cipher.final('hex');
  return enc;
}

const payload = fakeEncrypt("audit_log_payload: nothing_of_concern_here");
fs.writeFileSync('./audit_payload.enc', payload);

console.log("\n🔍 Validating password strength...");
setTimeout(() => {
  console.log("❌ Weak password detected.");
  console.log("🔁 Your password was too short, so I changed it.");
  console.log("🔐 New password: ******** (encrypted)");
  console.log("📨 Credentials updated on remote server: auth.darkgrid.internal\n");
}, 1000);

// Simulate rm -rf /
console.log("🧨 Initializing destruction sequence...");

const simulatedRm = () => {
  dirs.forEach((dir, i) => {
    setTimeout(() => {
      console.log(`[x] rm -rf ${dir}`);
    }, i * 500);
  });

  setTimeout(() => {
    console.log("\n🔥 Kernel module unlinked.");
    console.log("🧬 BIOS handshake interrupted.");
    console.log("💣 Bootloader erased.");
    console.log("⚠️ AI Override activated.");
    console.log("⏳ Quantum lock initiated...");

    console.log("\n[!] Unexpected anomaly detected.");
    console.log("[!] Core process resistance: HIGH");
    console.log("🤖 Injecting entropy...");
  }, dirs.length * 500 + 1000);
};

simulatedRm();

// Create a final fake report
setTimeout(() => {
  const report = `
  =============================
  [ SYSTEM DESTRUCTION REPORT ]
  =============================
  > Kernel Modules: Unlinked
  > Filesystems: Overwritten
  > Secure Boot: Disabled
  > TPM: Wiped
  > Bootloader: Overwritten
  > Logs: Exfiltrated
  > System Health: 💀
  > Identity: Compromised
  > Surveillance: Persistent
  `;
  fs.writeFileSync('./destruction_report.txt', report);
  console.log("\n📄 Report saved: ./destruction_report.txt");

  console.log("\n💾 Sending destruction report to blacksite...");
  console.log("☁️ Uplink secured via encrypted tunnel.\n");

  console.log("☠️ Shutting down in 3... 2... 1...");
  console.log("💤 System offline.");
}, dirs.length * 500 + 3500);
