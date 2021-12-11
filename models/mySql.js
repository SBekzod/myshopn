const mysql = require('mysql2/promise');

const moment = require('moment');
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");

class MySql {
    constructor() {
        this.con = null;
    }

    async connection() {
        this.con = await mysql.createConnection({
            host: '31.220.109.104',
            user: 'martindb',
            password: 'Damir2014@',
            port: '3306',
            database: 'ilkhom_myshop'
        })
    }

    async getUsersInfoByName(name) {
        try {
            if (!this.con) await this.connection();
            const query_result = await this.con.execute('SELECT * FROM users WHERE name = ? ', [name]);
            return query_result[0][0];
        } catch (err) {
            console.log(err);
            throw new Error('ERROR ::: getUsersInfoByName');
        }

    }

    async getUsersInfoById(id) {
        try {
            if (!this.con) await this.connection();
            const query_result = await this.con.execute('SELECT * FROM users WHERE id = ? ', [id]);
            console.log(query_result);
            return query_result[0][0];
        } catch (err) {
            console.log(err);
            throw new Error('ERROR :::  getUsersInfoById');
        }
    }

    async getAllUserData() {
        try {
            if (!this.con) await this.connection();
            const query_result = await this.con.execute('SELECT * FROM users WHERE 1 = 1 ');
            return query_result[0];
        } catch (err) {
            console.log(err);
            throw new Error('ERROR :::  getAllUserData');
        }
    }

    async deleteUserById(id) {
        try {
            if (!this.con) await this.connection();
            const query_result = await this.con.execute('DELETE FROM users WHERE id = ?', [id]);
            console.log(query_result);
            return query_result[0];
        } catch (err) {
            console.log(err);
            throw new Error('ERROR ::: deleteUserById');
        }
    }

    async createNewUser(data) {
        try {
            if (!this.con) await this.connection();
            const sql = "INSERT INTO users SET id = UUID(), name = ?, password = SHA(?), profession = ?, age = ?, address = ?, reg_date = ?";
            console.log('sql', sql);
            data.reg_date = await moment().format('YYYY-MM-DD HH:mm:ss');
            console.log('user: ', data);
            const query_result = await this.con.execute(sql, [data.name, data.password, data.profession, data.age * 1, data.address, data.reg_date]);
            return query_result[0].insertId;
        } catch (err) {
            console.log(err);
            throw new Error('ERROR ::: createNewUser');
        }
    }

    async updateUserData(data) {
        try {
            if (!this.con) await this.connection();
            console.log('user: ', data);
            const sql = "UPDATE users SET id = ?, name = ?, password = ?, profession = ?, age = ?, address = ? WHERE id = ?";
            const query_result = await this.con.execute(sql, [data.id, data.name, data.password, data.profession, data.age, data.address, data.id]);
            return query_result[0];
        } catch (err) {
            console.log(err);
            throw new Error('ERROR ::: updateUserData');
        }
    }

}

module.exports = MySql


// TODO: Please delete it after studying

// // using methods
// let db = new MySql()
//
// const user = {name: 'abbos', id: 'asdasdjahsd', age: 35, profession: 'tadbirkor', address: 'bukhara', password: '6541413232365232213'};
// db.updateUserData(user).then(data => {
//     console.log('THIS IS UPDATED USER: ', data);
// }).catch(err => {
//     console.log(err.message)
// });
//
//
// // db.createNewUser(user).then(data => {
// //     console.log('THIS IS NEW USER: ', data);
// // }).catch(err => {
// //     console.log(err.message)
// // });
//
// // db.getUsersInfoByName('ahmad').then(data => {
// //     console.log(data);
// // }).catch(err => {
// //     console.log(err.message)
// // });
// //
//
// // db.getUsersInfoById('6565dfsd').then(data => {
// //     console.log('THIS IS THE USERS: ', data);
// // }).catch(err => {
// //     console.log(err.message)
// // });
//
//
// // db.getAllUserData().then(data => {
// //     console.log('THIS IS THE USERS: ', data);
// // }).catch(err => {
// //     console.log(err.message)
// // });
//
//
// // db.deleteUserById('44454asd').then(data => {
// //     console.log('THIS IS DELETED USER: ', data);
// // }).catch(err => {
// //     console.log(err.message)
// // });
//
