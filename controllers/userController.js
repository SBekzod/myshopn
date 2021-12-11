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
    try {
        console.log("controller: createNewUserData");
        const req_data = req.body,
            user = new UserModel(),
            data = await user.createNewUserDataMethod(req_data);
        res.cookie('myShopUser', JSON.stringify(req_data), {maxAge: 1 * 60 * 1000, httpOnly: false});
        res.json({state: "success", insert_id: data});
    } catch (err) {
        console.log(err);
        res.end("<script>alert('something went wrong')</script>");
    }

};


// TODO: Please create Author controllers later
// userControllers.getAuthorData = (req, res) => {
//     console.log("controller: getAuthorData");
//     const user = new UserModel();
//     const data = user.getAuthorDataMethod();
//     res.json(data);
// };
