// functon on nimega käskude kogum, mis täidab kindlat ülesannet.
// funktsioonid aitavad meil koodi korrastada ja korduvkasutada.

function sayHello() {
    console.log("Tere!");
}
sayHello(); //kutsume funktsiooni välja
sayHello(); //kutsume funktsiooni välja

//2. parameetrid ja argumendid
function greet(name) {
    console.log("Tere, " + name + "!");
}
greet("Alice");
greet("Bob");
greet("charlie");

//3. tagastamine / return
//return tagastab tulemuse ja lõpetab funktsiooni täitmise
function add(a, b) {
    return a + b;
}
const result = add(5, 10);
console.log("Summa on: " + result);

//4. funktsioonaalne avaldis (function expression)
const multiply = function (a, b) {
    return a * b;
}
const product = multiply(5, 10);
console.log("Toode on: " + product);

//5. arrow function
const divide = (a, b) => {
    return a / b;
}
const quotient = divide(10, 2);
console.log("Jagatis on: " + quotient);

//ülesanne
//kirjutage funktsioon, mis võtab argumendiks numbri ja tagastab selle numbri ruudu
const square = (n) => {
    return n * n;
}
const squared = square(5);
console.log("Ruut on: " + square(5));