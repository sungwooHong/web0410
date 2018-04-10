var express = require('express');
var _= require('underscore');
var app = express();

 var bodyParser = require('body-parser');
 app.use(bodyParser.json()); // support json encoded bodies
 app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.get('/', (req, res) => {
  res.charset = 'UTF-8';
  console.log(req.query);
  res.send('GET으로 넘어온 name은 '+ req.query.name + '입니다.');
} );

//template 템플릿
app.get('/rowcol', (req, res) =>{
res.charset='UTF-8';
  var checkbox = '<input type= "checkbox">';
  var row = req.query.row;
  var col = req.query.col;
  var string = '';
  string +='<form>';
  for (var i = 0; i< col; i++){
  string += checkbox;
  }
  string +='</form>';

  var result = '';
  for(var i=0; i < row; i++) {
    result += string;
  }

  res.send(result);
} );

app.post('/', (req, res) => {
  res.charset = 'UTF-8';
  res.send('POST로 넘어온 name은 '+ req.body.name + '입니다.');
} );


app.listen(8080, () => console.log('Example app listening on port 8080!'));
