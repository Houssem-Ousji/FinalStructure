module.exports.errorHandle = async (error,page) => {
  console.log(error.toString());
  await page.screenshot({
    path: "screenshots/third_step_failed.png",
    fullPage: true,
  });
  throw new Error(error)
};
