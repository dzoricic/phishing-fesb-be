const db = require('../queries/groupQueries');

const getGroups = (req, res, next) => {
    return db.getGroups(req, res);
}

const getGroup = (req, res, next) => {
    return db.getGroup(req, res);
}

const addGroup = (req, res, next) => {
    return db.addGroup(req, res);
}

const updateGroup = (req, res, next) => {
    return db.updateGroup(req, res);
}

const deleteGroup = (req, res, next) => {
    return db.deleteGroup(req, res);
}

module.exports = {
    getGroups,
    getGroup,
    addGroup,
    updateGroup,
    deleteGroup,
};