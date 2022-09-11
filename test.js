const Pool = require('pg').Pool

const pool = new Pool({
  user: 'doadmin',
  host: 'db-postgresql-nyc1-96436-do-user-12367674-0.b.db.ondigitalocean.com',
  database: 'defaultdb',
  password: 'AVNS_RBa3W-LJJ9L8gCz23OT',
  port: 25060,
})

pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    console.log(results.rows)
    // response.status(200).json()
  })