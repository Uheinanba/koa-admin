exports.index = async ctx => {
  const title = 'home';
  await ctx.render('index', {
    title,
  });
};
