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
    console.log("controller: getLogout");
    res.cookie('myShopUser', null, {maxAge: 0, httpOnly: false});
    res.end('You have been logged out');
};

userControllers.getLogIn = async (req, res) => {
    try {
        console.log("controller: getLogIn");
        const user = new UserModel();
        const user_data = await user.getLogInMethod(req.body);
        if(user_data) {
            delete user_data.password;
            const user_token = createNewTokens(user_data);
            res.cookie('myShopUser', user_token, {maxAge: 60 * 60 * 1000, httpOnly: false});
            res.json({state: "success", user: user_data});
        } else {
            res.json({state: 'password or name does not match'});
        }
    } catch (err) {
        console.log('ERROR ::: getLogIn');
        console.log(err);
        res.json({state: 'something went wrong'});
    }
};

userControllers.validateUser = (req, res, next) => {
    try {
        let cookie = req.cookies;
        if (Object.keys(cookie).length == 0 || !cookie.hasOwnProperty('myShopUser')) {
            res.json({state: 'authentication failed'});
        } else {
            const user_token = cookie['myShopUser'];
            const decoded_data = jwt.verify(user_token, secret);
            console.log('decoded_data', decoded_data);
            if (!decoded_data.hasOwnProperty('name')) {
                req.verifiedUser = decoded_data;
                next();
            } else {
                throw new Error('Hacking state');
            }
        }
    } catch (err) {
        console.log('ERROR ::: cont.validateUser')
        console.log(err);
        res.json({state: 'something went wrong'})
    }
};

userControllers.getUsersOnlyData = (req, res) => {
    res.json({state: 'success', username: req.verifiedUser.name});
};


const createNewTokens = (user_data) => {
    console.log(`THIS IS THE REQ DATA : ${user_data}`);
    const token = jwt.sign({
        data: user_data
    }, secret, {expiresIn: 60 * 60});
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
