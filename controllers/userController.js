const db = require('../queries/userQueries');

const getUsers = (req, res, next) => {
    return db.getUsers(req, res);
}

const getUser = (req, res, next) => {
    return db.getUser(req, res);
}

const addUser = (req, res, next) => {
    return db.addUser(req, res);
}

const updateUser = (req, res, next) => {
    return db.updateUser(req, res);
}

const addSecretSantaToUser = (req, res, next) => {
    return db.addSecretSantaToUser(req, res);
}

const addUserToGroup = (req, res, next) => {
    return db.addUserToGroup(req, res);
}

const deleteUser = (req, res, next) => {
    return db.deleteUser(req, res);
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    addSecretSantaToUser,
    addUserToGroup,
    deleteUser
};