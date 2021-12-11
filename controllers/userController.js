let userControllers = module.exports;
const UserModel = require('../models/userModel');

userControllers.getUserMainData = async (req, res) => {
    try {
      console.log("controller: getUserMainData");
      const user = new UserModel();
      const data = await user.getUserMainDataMethod();
      res.json(data);
    } catch (err) {
      console.log('ERROR ::: cont.getUserMainData')
      console.log(err);
      res.end('something went wrong');
    }
};

userControllers.getAuthorData = (req, res) => {
    console.log("controller: getAuthorData");
    const user = new UserModel();
    const data = user.getAuthorDataMethod();
    res.json(data);
};

userControllers.getContactData = (req, res) => {
    console.log("controller: getContactData");
    const user = new UserModel();
    const data = user.getContactDataMethod();
    res.json(data);
};

userControllers.postControllerData = (req, res) => {
    console.log("controller: postControllerData");
    console.log(`req.body ::: `, req.body);
    const req_data = req.body,
        user = new UserModel(),
        data = user.postControllerData(req_data);
    res.json({state: "success", data: data});
};
