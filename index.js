const express = require('express');
const mustache = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const port = 3000;
const path = require('path');
const app = express();

let todo = [
  "Wash the car",
  "Take out trash",
  "Pay Rent",
  "Wash dog"
]

let completed = [
  "Shower",
  "Eat Breakfast",
  "Exercise",
  "Mail letters"
]

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('mustache', mustache());
app.set('views', './views');
app.set('view engine', 'mustache');

app.get('/', function(req, res){
  res.render('index', {todo: todo, completed: completed});
});

app.post("/", function (req, res) {
  console.log(req.body.todo);
  console.log(this.value);
  if (req.body.todo){
    todo.push(req.body.todo);
    res.redirect('/');
  } else {
    todo.pop(this.value);
    completed.push(this.value);
    res.redirect('/');
  }
});

app.listen(port, function(){
  console.log("The server is running on port 3000");
});
