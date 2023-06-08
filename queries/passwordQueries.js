const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'osxkqgrz',
    host: 'dumbo.db.elephantsql.com',
    database: 'osxkqgrz',
    password: 'bl-oWWhCbK61gGnRjaILmCBQSJ4nxg6Y',
    connectionTimeoutMillis : 5000,
    idleTimeoutMillis : 30000,
    query_timeout: 5000
})

const getAll = (req, res) => {
    pool.query('SELECT * FROM passwords', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
}

const getById = (req, res) => {
    pool.query('SELECT * FROM passwords WHERE id = $1', [req.params.id], (error, results) => {
        if (error) {
            throw error
        }
        if (results.rows.length > 0) {
            res.status(200).json(results.rows[0])
        } else {
            res.status(404)
        }
    })
}

const getByEmail = (req, res) => {
    const { email } = req.body;

    pool.query('SELECT * FROM passwords WHERE email = $1', [email], (error, results) => {
        if (error) {
            throw error
        }
        if (results.rows.length > 0) {
            res.status(200).json(results.rows[0])
        } else {
            res.status(404)
        }
    })
}


const create = (req, res) => {
    const { email, password } = req.body;
    const time = new Date().toUTCString();

    pool.query('INSERT INTO passwords("email", "password", "createdat") VALUES ($1, $2, $3)', [email, password, time], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200)
    })
}

const deleteById = (req, res) => {
    pool.query('DELETE FROM passwords WHERE id = $1', [req.params.id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200)
    })
}

const deleteByEmail = (req, res) => {
    const { email } = req.body;

    pool.query('DELETE FROM passwords WHERE email = $1', [email], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200)
    })
}

module.exports = {
    getAll,
    getById,
    getByEmail,
    create,
    deleteById,
    deleteByEmail
}