const Pool = require('pg').Pool;
const pool = new Pool({
    user: 'osxkqgrz',
    host: 'dumbo.db.elephantsql.com',
    database: 'osxkqgrz',
    password: 'bl-oWWhCbK61gGnRjaILmCBQSJ4nxg6Y',
    ssl: { rejectUnauthorized: false }
})

const getAll = (req, res) => {
    pool.query('SELECT * FROM passwords', (error, results) => {
        if (error) {
            res.status(500).json({ message: "Internal error." })
        } else {
            res.status(200).json(results.rows)
        }
    })
}

const getById = (req, res) => {
    pool.query('SELECT * FROM passwords WHERE id = $1', [req.params.id], (error, results) => {
        if (error) {
            res.status(500).json({ message: "Internal error." })
        }
        if (results.rows.length > 0) {
            res.status(200).json(results.rows[0])
        } else {
            res.status(404).json({ message: "Not found." })
        }
    })
}

const getByEmail = (req, res) => {
    const { email } = req.body;

    pool.query('SELECT * FROM passwords WHERE email = $1', [email], (error, results) => {
        if (error) {
            res.status(500).json({ message: "Internal error." })
        }
        if (results.rows.length > 0) {
            res.status(200).json(results.rows[0])
        } else {
            res.status(404).json({ message: "Not found." })
        }
    })
}


const create = (req, res) => {
    const { email, password } = req.body;
    const time = new Date().toUTCString();

    pool.query('INSERT INTO passwords("email", "password", "createdat") VALUES ($1, $2, $3)', [email, password, time], (error, results) => {
        if (error) {
            res.status(500).json({ message: "Internal error." })
        } else {
            res.status(202).json({ message: "Accepted." })
        }
    })
}

const deleteById = (req, res) => {
    pool.query('DELETE FROM passwords WHERE id = $1', [req.params.id], (error, results) => {
        if (error) {
            res.status(500).json({ message: "Internal error." })
        } else {
            res.status(200).json({ message: "Success." })
        }
    })
}

const deleteByEmail = (req, res) => {
    const { email } = req.body;

    pool.query('DELETE FROM passwords WHERE email = $1', [email], (error, results) => {
        if (error) {
            res.status(500).json({ message: "Internal error." })
        }
        res.status(200).json({ message: "Success." })
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