const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const port = 3000;
const path = require('path');
const app = express();
const todos = [
  "Wash the car"
];

app.use(express.static(__dirname + '/public'));
app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/', function(req, res){
  res.send('Hello World!');
});

app.get('/todo', function(req, res){
  res.render('index');
});

app.post("/todo", function (req, res) {
  todos.push(req.body.todo);
  res.redirect('/todo');
})

app.listen(port, function(){
  console.log("The server is running on port 3000")
});
