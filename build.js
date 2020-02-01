// 仅在 Windows 上。
const { spawn } = require("child_process");

// -k 是执行完命令不关闭cmd
const bat1 = spawn("cmd.exe", ["/k", "build.bat"]);
const bat2 = spawn("cmd.exe", ["/k", "build2.bat"]);

bat1.on("exit", code => {
  console.log(`子进程1退出，退出码 ${code}`);
});
bat2.on("exit", code => {
  console.log(`子进程2退出，退出码 ${code}`);
});
