// importing node modules
const express = require('express');
const app = express();
const mysql = require('mysql');
const port = 5000;


app.use(express.json());

// using this middleware because I was geting the error that I could not fetch to the productsjson api endpoint because of CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000'); // front end server (react app)
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// storing mysql database information in connection variable
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'nodelogin'
  });


  // establishing connection the database and logging if the connection was successful or not
  connection.connect((error) => {
    if (error) {
      console.error('Error connecting to the database:', error);
    } else {
      console.log('Connected to the database!');
    }
  });


  // read all data from the mysql database
  app.get('/productsjson', (req, res) => {
    const query = 'SELECT * FROM plantproducts';
  
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Error executing the query:', error);
        res.status(500).send('Internal Server Error');
      } else {
        res.status(200).json(results);
      }
    });
  });

// establishing port connection for server (running on port 5000)
  app.listen(port, () => {
    console.log(`App is running on port ${port}...`);
  });
  

