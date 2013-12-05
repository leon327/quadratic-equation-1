/**
 *@param {number} a;
 *@param {number} b;
 *@param {number} c;
 */
function quadraticEquation(a, b, c) {
  var x1;
  var x2;
  if (typeof (a) === 'number' &&
      typeof (b) === 'number' &&
      typeof (c) === 'number')
  {
    var d = Math.pow(b, 2) - (4 * a * c);
    if (d >= 0)
    {
      if (d == 0)
      {
        x1 = x2 = (-b + Math.sqrt(d)) / (2 * a);
      }
      else
      {
        x1 = (-b + Math.sqrt(d)) / (2 * a);
        x2 = (-b - Math.sqrt(d)) / (2 * a);
      }
      console.log('x1= ' + x1 + '; x2= ' + x2);
    }
    else
    {
      console.error('Нет корней !');
    }
  }
  else
  {
    console.error('Введите переменные !');
  }
}
quadraticEquation(2 , 6 , 4);

