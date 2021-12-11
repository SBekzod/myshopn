let userControllers = module.exports;
const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');
const secret = 'drfjgndfklgjdfgkl5565sdfgsdg4sd';


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
            user = new UserModel();
        await user.createNewUserDataMethod(req_data);
        delete req_data.password;
        const user_token = createNewTokens(req_data);
        res.cookie('myShopUser', user_token, {maxAge: 60 * 60 * 1000, httpOnly: false});
        res.json({state: "success", user: req_data});
    } catch (err) {
        console.log(err);
        res.end("<script>alert('something went wrong')</script>");
    }

};

userControllers.getLogout = (req, res) => {
    res.cookie('myShopUser', null, {maxAge: 0, httpOnly: false});
    res.end('You have been logged out');
};

const createNewTokens = (user_data) => {
    console.log(`THIS IS THE REQ DATA : ${user_data}`);
    const token = jwt.sign({
        data: user_data
    }, secret, { expiresIn: 60 * 60 });
    console.log(token);
    return token
};


// TODO: Please create Author controllers later
// userControllers.getAuthorData = (req, res) => {
//     console.log("controller: getAuthorData");
//     const user = new UserModel();
//     const data = user.getAuthorDataMethod();
//     res.json(data);
// };
