const Router = require("koa-router");
const router = new Router({ prefix: "/api" });

router.get("/login", (ctx, next) => {
  // ctx.body = "hello";
  console.log("hello");
});

module.exports = router;
