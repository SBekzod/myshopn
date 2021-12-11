
class UserModel {
    constructor() {
        this.user = {name: 'martini'}
        this.contact_id = "sdafasdfasd";
        this.contact = null;
    }

    async getUserMainDataMethod () {
        try {
            await this.onDelay();
            return this.user;
        } catch (err) {
            console.log('ERROR ::: model.getUserMainDataMethod');
            throw err;
        }
    }

    getContactDataMethod () {
        return this.contact_id;
    }

    getAuthorDataMethod() {
        return this.contact;
    }

    postControllerData(data) {
        this.contact = data;
        return this.contact;
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