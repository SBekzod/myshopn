let userControllers = module.exports;
const UserModel = require('../models/userModel');

userControllers.getAllUsersData = async (req, res) => {
    try {
      console.log("controller: getAllUsersData");
      const user = new UserModel();
      const data = await user.getAllUsersDataMethod();
      // res.json(data);
        res.render('project');
    } catch (err) {
      console.log('ERROR ::: cont.getAllUsersData')
      console.log(err);
      res.end('something went wrong');
    }
};

userControllers.prepareNewUserData = (req, res) => {
    console.log("controller: prepareNewUserData");
    res.render('create-process');
};

userControllers.createNewUserData = async (req, res) => {
    console.log("controller: createNewUserData");
    console.log(`req.body ::: `, req.body);
    const req_data = req.body,
        user = new UserModel(),
        data = await user.createNewUserDataMethod(req_data);
    res.json({state: "success", insert_id: data});
};



// TODO: Please create Author controllers later
// userControllers.getAuthorData = (req, res) => {
//     console.log("controller: getAuthorData");
//     const user = new UserModel();
//     const data = user.getAuthorDataMethod();
//     res.json(data);
// };
