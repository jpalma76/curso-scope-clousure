// Variables

var a; // Declarando
var b = 'b'; // Declarando / asignamos
b = 'bb'; // Reasignacion
var a = 'aa'; // Redeclaracion


// Global scope
var fruit = 'Apple'; // Global

console.log(fruit);

function bestFruit() {
    console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; // global
    console.log(country);
}
countries();
console.log(country);
/* al declarar una variable dentro de una
funcion sin asignarle el tipo de variable la estamos
haciendo global, javascript la considera automáticamente como 
una variable de tipo global.
si la declaramos con const, let o var automáticamente la 
estamos transformando en variable local */