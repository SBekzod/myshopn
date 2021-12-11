const MySql = require('./mySql');

class UserModel {
    constructor() {
        this.db = new MySql();
        this.user = null;
    }

    async getAllUsersDataMethod () {
        try {
            const users = await this.db.getAllUserData();
            return users;
        } catch (err) {
            console.log('ERROR ::: model.getAllUsersDataMethod');
            throw err;
        }
    }

    createNewUserDataMethod () {
        return null;
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