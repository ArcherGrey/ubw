const Router = require("koa-router");
const router = new Router({ prefix: "/api" });
const login = require("../controllers/login.js");

router.get("/login", login);

module.exports = router;
