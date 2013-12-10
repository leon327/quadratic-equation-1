/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 */
var express = require('express');
var app = express();
app.get('/:a/:b/:c', function(req, res){
  res.send(quadro(parseInt(req.params.a), parseInt(req.params.b),parseInt(req.params.c)));
});

app.listen(3100);


var quadro = function quadraticEquation(a, b, c) {
  var x1;
  var x2;
  var res = {
    x1:0,
    x2:0
  }
  if (typeof (a) === 'number' &&
      typeof (b) === 'number' &&
      typeof (c) === 'number') {
    var d = Math.pow(b, 2) - (4 * a * c);
    if (d >= 0) {
      if (d == 0) {
        res.x1 = res.x2 = (-b + Math.sqrt(d)) / (2 * a);
      } else {
        res.x1 = (-b + Math.sqrt(d)) / (2 * a);
        res.x2 = (-b - Math.sqrt(d)) / (2 * a);
      }
      return res;
    } else {
      return ('Нет корней !');
    }
  } else {
    return ('Введите переменные !');
  }
}


