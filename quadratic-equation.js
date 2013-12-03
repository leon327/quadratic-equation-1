/**
 * Created by serg on 03.12.13.
 */
var a = 2;
var b = 6;
var c = 4;

var d = Math.pow(b, 2) - (4*a*c);
if (d>0)
    {
        if (d == 0)
            {
                var x1 = (-b + Math.sqrt(d))/(2*a);
                console.log("x1 = x2 = "+x1);
            }
        else
            {
                var x1 = (-b + Math.sqrt(d))/(2*a);
                var x2 = (-b - Math.sqrt(d))/(2*a);
                console.log("x1= "+x1+"; x2= "+x2);
            }
    }
else
    {
        console.log("Нет корней !")
    }

