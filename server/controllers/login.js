module.exports = async (ctx, next) => {
  ctx.body = { data: "123" };
  ctx.status = 200;
  const result = await ctx.db.collection("users").insert({ name: "haha" });
  const userId = result.ops[0]._id.toString();

  ctx.body = await ctx.db
    .collection("users")
    .find()
    .toArray();
  console.log(new Date().toString());
};
