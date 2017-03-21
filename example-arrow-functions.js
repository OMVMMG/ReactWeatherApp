// var names = ['Andrew', 'Julie', 'Jen'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach( (name) => {
//   console.log('arrowFunc', name);
// });
//
// names.forEach((name) => console.log(name));
//
// var returnMe = (name) => name + '!';
// console.log(returnMe('Andres'));
//
// var person = {
//   name: 'Andrew',
//   greet: function () {
//     names.forEach( (name) => {
//       console.log(this.name + ' says ih to ' + name)
//     });
//   }
// };
//
// person.greet();

// Challenge Area
function add (a, b) {
  return a + b;
}

//addExpression
var expression = (a, b) => a + b;

//addStatement
var statement = (a, b) => {
  return a + b;
}

console.log(add(1, 3));
console.log(add(9, 0));

console.log(statement(5, 7));
console.log(statement(19, 1));

console.log(expression(1, 3));
console.log(expression(9, 0));
