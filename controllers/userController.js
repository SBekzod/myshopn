let userControllers = module.exports;

userControllers.getUserMainData = (req, res) => {
  console.log("controller: getUserMainData");
  res.json({ user: "martin" });
  //   res.render("project", { user: user });
};

userControllers.getHomeData = (req, res) => {
  console.log("controller: getHomeData");
  res.json({ user: "martin" });
  // res.render("home", { user: user });
};

userControllers.getContactData = (req, res) => {
  console.log("controller: getContactData");
  res.json({ user: "martin" });
  //   res.render("contact", { user: user });
};

userControllers.postCotrollerData = (req, res) => {
  console.log("controller: postCotrollerData");
  console.log(`req.body ::: `, req.body);
  const data = req.body;
  res.json({ state: "success", data: data });
};
