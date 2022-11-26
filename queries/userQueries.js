const { generateId, resolvePhotoURL } = require('../services/userService');

const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'SecretSanta',
    password: 'Lozinka2432',
    port: 5432,
})

const getUsers = (req, res) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getUser = (req, res) => {
    pool.query('SELECT * FROM users WHERE user_id = $1', [req.params.user_id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const addUser = (req, res) => {
    const { username, pin, photo_url, email_address } = req.body;
    const user_id = generateId();
    const photo = resolvePhotoURL(photo_url);
    const isDeleted = false;

    pool.query('INSERT INTO users VALUES ($1, $2, $3, null, $4, $5, $6)', [user_id, username, pin, photo, isDeleted, email_address], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const updateUser = (req, res) => {
    const {username, pin, photo_url, email_address} = req.body;
    const user_id = req.params.user_id;

    pool.query('UPDATE users SET username=$1, pin=$2, photo_url=$3, email_address=$4 WHERE user_id = $5', [username, pin, photo_url, email_address, user_id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const addSecretSantaToUser = (req, res) => {
    const { secret_santa } = req.body;
    const user_id = req.params.user_id;

    pool.query('UPDATE users SET secret_santa=$1 WHERE user_id = $2', [secret_santa, user_id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const addUserToGroup = (req, res) => {
    const user_id = req.params.user_id;
    const group_id = req.params.group_id;

    pool.query('UPDATE users SET group_id=$1 WHERE user_id = $2', [group_id, user_id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const deleteUser = (req, res) => {
    const user_id = req.params.user_id;

    pool.query('UPDATE users SET isDeleted=true WHERE user_id = $1', [user_id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

module.exports = {
    getUsers,
    getUser,
    addUser,
    updateUser,
    addSecretSantaToUser,
    addUserToGroup,
    deleteUser,
}