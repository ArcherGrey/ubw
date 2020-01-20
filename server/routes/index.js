const Router = require("koa-router");
const router = new Router({ prefix: "/api" });

router.get("/login", (ctx, next) => {
  ctx.body = { data: "22" };
  ctx.status = 200;
  console.log(new Date().toString());
});

module.exports = router;
