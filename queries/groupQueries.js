const { generateId } = require('../services/userService');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'SecretSanta',
    password: 'Lozinka2432',
    port: 5432,
})

const getGroups = (req, res) => {
    pool.query('SELECT * FROM users_groups', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getGroup = (req, res) => {
    pool.query('SELECT * FROM users_groups WHERE group_id = $1', [req.params.group_id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const addGroup = (req, res) => {
    const { name } = req.body;
    const group_id = generateId();
    const isDeleted = false;

    pool.query('INSERT INTO users_groups VALUES ($1, $2, $3)', [group_id, name, isDeleted], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const updateGroup = (req, res) => {
    const { name } = req.body;
    const groupId = req.params.group_id;

    pool.query('UPDATE users_groups SET name=$1 WHERE group_id = $2', [name, groupId], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const deleteGroup = (req, res) => {
    const user_id = req.params.group_id;

    pool.query('UPDATE users_groups SET isDeleted=true WHERE group_id = $1', [user_id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getGroups,
    getGroup,
    addGroup,
    updateGroup,
    deleteGroup,
}