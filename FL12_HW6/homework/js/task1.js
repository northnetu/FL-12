var a = parseInt(prompt('Value a ='));
var b = parseInt(prompt('Value b ='));
var c = parseInt(prompt('Value c ='));
if (isNaN(a) || isNaN(b) || isNaN(c) || a===0) {
    console.log('Invalid input data');
}
let d = b * b - 4 * a * c;
if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    console.log('x1 = ' + x1 + ' x2 = ' + x2);
} else if (d === 0) {
    let x = -b / 2 * a;
    console.log('x = ' + x);
} else {
    console.log('No solution');
}