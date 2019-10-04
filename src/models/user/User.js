export default class User {
    constructor(id, login, avatar = null, roles = []) {
        this.id = id;
        this.setLogin(login);
        this.setAvatar(avatar);
        this.roles = roles;
    }

    static create({id = 0, login = 'Guest', avatar = null, roles = []} = {}) {
        return new User(id, login, avatar, roles);
    }

    getId() {
        return this.id;
    }

    getLogin() {
        return this.login;
    }

    getAvatar() {
        return this.avatar;
    }

    getRoles() {
        return this.roles;
    }

    hasRole(roleName) {
        return this.roles.includes(roleName);
    }

    setLogin(login) {
        if (typeof login !== 'string') {
            throw new TypeError('Login must be string');
        }
        if (login.length === 0) {
            throw new TypeError('Login must be non empty string');
        }
        this.login = login;
        return this;
    }

    setAvatar(avatar) {
        if (avatar === null) {
            this.avatar = null;
        } else {
            if (typeof avatar !== 'string') {
                throw new TypeError('Avatar must be string');
            }
            if (avatar.length === 0) {
                throw new TypeError('Avatar must be non empty string');
            }
            this.avatar = avatar;
        }
        return this;
    }
}
