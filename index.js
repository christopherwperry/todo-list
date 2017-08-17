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
  todo.push(req.body.todo);
  res.redirect('/');
});

app.post("/move", function (req, res) {
  console.log(req.body.complete);
  for (let i = 0;  i < todo.length; i++){
    if(req.body.complete === todo[i]){
      todo.splice(i,1);
    }
  };
  completed.push(req.body.complete);
  res.redirect('/');
})

app.listen(port, function(){
  console.log("The server is running on port 3000");
});
