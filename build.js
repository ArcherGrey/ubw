// 仅在 Windows 上。
const { spawn } = require("child_process");
const bat = spawn("cmd.exe", ["/k", "build.bat"]);

bat.stdout.on("data", data => {
  console.log(data.toString());
});

bat.stderr.on("data", data => {
  console.error(data.toString());
});

bat.on("exit", code => {
  console.log(`子进程退出，退出码 ${code}`);
});
