const Koa = require("koa");
const app = new Koa();
const router = require("./routes/index");
const path = require("path");

// require 'koa2-connect-history-api-fallback' middleware
const { historyApiFallback } = require("koa2-connect-history-api-fallback");

// use historyApiFallback
app.use(
  historyApiFallback({
    // index: "/index.html"
  })
);
app.use(require("koa-static")(path.join(path.dirname(__dirname), "./dist")));
// app.use(require("koa-static")(path.join(path.dirname(__dirname), "./src")));
// 路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(8080);
console.log("服务器已启动,端口8080");
