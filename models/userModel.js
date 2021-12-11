const MySql = require('./mySql');

class UserModel {
    constructor() {
        this.db = new MySql();
        this.user = null;
    }

    async getAllUsersDataMethod() {
        try {
            const users = await this.db.getAllUserData();
            return users;
        } catch (err) {
            console.log('ERROR ::: model.getAllUsersDataMethod');
            throw err;
        }
    }

    async createNewUserDataMethod(data) {
        try {
            const new_user = await this.db.createNewUser(data);
            return new_user;
        } catch (err) {

        }
    }

    onDelay() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('hey what is up!!');
            }, 3000);
        });
    }

}

module.exports = UserModel;