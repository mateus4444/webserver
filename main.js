const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use('/static', express.static('public'))
const urlencodedParser = bodyParser.urlencoded({extended: false});

app.get('/', function(req, res){

  res.sendFile(__dirname + "/index.html")
})

app.get('/register', urlencodedParser, function(req, res){
  res.sendFile(__dirname + "/register.html")
})

app.get('/info', urlencodedParser,function(req, res){
  res.send("info")
})

app.post('/register', urlencodedParser, function(req, res) {
  if(!req.body) return res.sendStatus(400);
  console.log(req.body);
  res.send(`${req.body.fullName} + ${req.body.password}`);

})

app.use(function(err, req, res, next){

 res.status(500);
 res.send('500 — Ошибка сервера');
});

app.use(function(req, res){ // промежуточное

 res.status(404);
 res.send("404 - Страница не найдена");
});

app.listen(2000);
