// Watch out for NaN. If you use NaN in a mathematical operation, the result will also be NaN:

let nan = NaN;
let u = 5;
let nanadd = nan + u;
console.log(nanadd);

let nan1 = NaN;
let nan0 = "12";
let nan2 = nan1 + nan0;
console.log(nan2);

let nantype = NaN;
console.log(typeof nantype);

let s = 2;
let t = 0;
let infinity = s / t;
console.log(infinity);
//  type of infinity also number

let myNumber = 2;
let txt = "";
while (myNumber != Infinity) {
  myNumber = myNumber * myNumber;
  txt = txt + myNumber + "<br>";
}
document.getElementById("demo inf").innerHTML = txt;

let infa = 12 / 0;
console.log(infa);
let infb = -12 / 0;
console.log(infb);
console.log(typeof infb);
// finding the type of infinity

// toExponential() returns a string, with a number rounded and written using exponential notation.
let expo=23.233455
document.write(expo.toExponential(3))
// toFixed() returns a string, with the number written with a specified number of decimals:
let tofix=8955.9039303
document.write(tofix.toFixed(4))
// toPrecision() returns a string, with a number written with a specified length:
let topre=234.23
document.write(topre.toPrecision()
)
// valueOf() returns a number as a number.

let value=245;
document.write(value.valueOf())

// converting variables to numbers



document.getElementById("numbervar").innerHTML=

  Number(true) + "<br>" +
  Number(false) + "<br>" +
  Number("10") + "<br>" + 
  Number("  10") + "<br>" +
  Number("10  ") + "<br>" +
  Number(" 10  ") + "<br>" +
  Number("10.33") + "<br>" + 
  Number("10,33") + "<br>" +
  Number("10 33") + "<br>" +
  Number("John");
