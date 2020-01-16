// .env-default.js 文件
// 不同环境访问不同的路径
const api = {
  develop: "http://localhost:8080",
  mock: "http://localhost",
  feature: "http://localhost",
  test: "http://xxxx",
  production: "http://xxxx"
};

export const baseURL = api[process.env.NODE_ENV || "dev"];
