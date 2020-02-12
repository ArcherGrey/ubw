// 注册用户
module.exports = async (ctx, next) => {
  console.log(ctx.request.query);
  ctx.status = 200;
  // 传过来的查询参数就是用户名和密码
  const userInfo = ctx.request.query;

  // 先查询是否存在相同用户名的用户

  const queryList = await ctx.db
    .collection("users")
    .find({ userName: userInfo.userName })
    .toArray();

  // 点击注册的情况
  if (userInfo.type === "注册") {
    // 存在用户名相同的账号
    if (queryList.length > 0) {
      ctx.body = { message: "已存在该用户名", code: 401 };
      // ctx.status = 401;
    } else {
      const res = await ctx.db
        .collection("users")
        .insert({ userName: userInfo.userName, password: userInfo.password });
      ctx.body = { message: "注册成功", code: 200 };
      // ctx.status = 200;
    }
  } else {
    // 点击登录的情况
    // 不存在该用户
    if (queryList.length === 0) {
      ctx.body = { message: "不存在该用户", code: 401 };
      // ctx.status = 401;
    } else if (queryList[0].password !== userInfo.password) {
      ctx.body = { message: "密码错误", code: 401 };
      // ctx.status = 401;
    } else {
      ctx.body = { message: "登录成功", code: 200 };
      // ctx.status = 200;
    }
  }

  console.log(new Date().toString());
};
