const db = require('../queries/passwordQueries');

const getAll = (req, res, next) => {
    return db.getAll(req, res);
}

const getById = (req, res, next) => {
    return db.getById(req, res);
}

const getByEmail = (req, res, next) => {
    return db.getByEmail(req, res);
}

const create = (req, res, next) => {
    return db.create(req, res);
}

const deleteById = (req, res, next) => {
    return db.deleteById(req, res);
}

const deleteByEmail = (req, res, next) => {
    return db.deleteByEmail(req, res);
}

module.exports = {
    getAll,
    getById,
    getByEmail,
    create,
    deleteById,
    deleteByEmail
};