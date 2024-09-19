const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const config = require('./config.json');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static('frontend'));

// Create a connection to the database
const pool = mysql.createPool({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

// Handle database queries
app.get('/books', (req, res) => {
  pool.query('SELECT * FROM Books', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/authors', (req, res) => {
  pool.query('SELECT * FROM Authors', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/customers', (req, res) => {
  pool.query('SELECT * FROM Customers', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/orders', (req, res) => {
  pool.query('SELECT * FROM Orders', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.get('/orderdetails', (req, res) => {
  pool.query('SELECT * FROM OrderDetails', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
