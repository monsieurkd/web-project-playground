var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mysql = require('mysql2');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const cors = require('cors');

var app = express();

app.use(cors());
// view engine setup
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })
app.use('/users', usersRouter);
app.use(express.json()); // This line is crucial

// Create a connection object
const connection = mysql.createConnection({
  host: 'db', // or the IP address of your MySQL server
  user: 'root', // your MySQL username
  password: 'password', // your MySQL password
  database: 'volunteer', // the name of the database you want to connect to
  port:3306
});

// Connect to the database
connection.connect(error => {
  if (error) {
    console.error('An error occurred while connecting to the database:', error);
    return;
  }

  console.log('Connected to the database successfully.');
});

app.get('/api/read/events', (req, res) => {
  connection.query(`SELECT * FROM event`, (error, results) => { 
    if (error) {
      return res.status(500).send(error);
    }
    res.json(results);
  });
});

app.post('/api/create/events', (req, res) => {
  const data = req.body;
  console.log(req.body);
  const sql = "INSERT INTO event (name, location, date, description) VALUES (?, ?, ?, ?)";
  connection.query(sql, [data.name, data.location, data.date, data.description], (error, results, fields) => {
    if (error) throw res.send(res.body);
    res.send('Data inserted');
  });
});


app.get('/api/get/user', async (req, res) => {
  try {
    const [rows] = connection.query('SELECT email, password, phonenumber, role FROM users WHERE id = ?', [1]);
    if (rows.length === 1) {
      const user = rows[0];
      res.json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});



app.listen(3000, () => {
  console.log("app is listening on http://localhost:3000");
});

module.exports = app;


