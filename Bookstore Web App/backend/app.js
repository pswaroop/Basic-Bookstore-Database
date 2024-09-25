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

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// Helper function to log SQL queries
/*
const logQuery = (query) => {
  console.log(`Executing query: ${query}`);
};
*/

// Handle database queries
app.get('/books', (req, res) => {
  pool.query(
    `SELECT b.book_id, b.title, a.name AS author, b.price, 
            DATE_FORMAT(b.publication_date, '%Y-%m-%d') AS publication_date, b.stock 
     FROM Books b 
     JOIN Authors a ON b.author_id = a.author_id`,
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
  
});

app.get('/authors', (req, res) => {
  pool.query(
    `SELECT author_id, name, DATE_FORMAT(birthdate, '%Y-%m-%d') AS birthdate 
     FROM Authors`,
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
  
});

app.get('/customers', (req, res) => {
  pool.query('SELECT * FROM Customers', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
  
});

app.get('/orders', (req, res) => {
  pool.query(
    `SELECT order_id, customer_id, DATE_FORMAT(order_date, '%Y-%m-%d') AS order_date, status 
     FROM Orders`,
    (err, results) => {
      if (err) throw err;
      res.json(results);
    }
  );
  
});

app.get('/orderdetails', (req, res) => {
  pool.query('SELECT * FROM OrderDetails', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
  
});
