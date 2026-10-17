//muutuja on väärtuse nimi ( nagu silt)

let score;
score = 100; // määrame muutuja väärtuse
let age = 25;

const score1 = 0; // määrame muutuja väärtuse
score1 = 50; // muutame muutuja väärtust
console.log("Score1: " + score1); // väljasta muutuja väärtus

let age1; //deklaratsioon ilma väärtuseta
age1 = 30; // määrame muutuja väärtuse

const prise = 3;
const deliveryFee = 2;
const totalCost = prise + deliveryFee;
console.log("Total Cost: " + totalCost); // väljasta muutuja väärtus

//inkrement ja dekrement
let Apples = 5;
apples++; //suuremine muutuja väärtust 1 võrra
console.log("Apples: " + apples);  // võljasta muutuja väärtus
apples--; // vähendame muutuja väärtust 1 võrra
console.log("Apples: " + apples); // võljasta muutuja väärtus




//+=
let apples = 10;
apples = 10; // vänendamine muutuja väärtust 10 võrra
//points = points - 10; // sama mis ülal
console.log("Apples: " + apples); // väljasta muutuja väärtus



// kuidas muuta muutuja väärtust
let a = 5
let b = 10
//peab olema a ja b väärtus vahetatud
a = b // nüüd a väärtus on 10 - vale
const temp = a; // salvesatame a väärtuse ajutisse muutujasse
a = b; // nüüd a väärtus on 10
b = temp; // nüüd b väärtus on 5
console.log("a: " + a + ", b: " + b) // väljasta muutuja väärtus

//nähtavus (scope) - kui muutuja on näntav
const value = 100; //globaalne muutuja, nähtav kogu koodis
{
    const value = 200; // kohalik muutuja, nähtav ainult selles blockis
    console.log("local value: " + value); // v'ljasta kohalik muutuja väärtus

}
console.log("Global value: " + value); // Väljasta kohalik muutuja väärtus



//objeckti omistamisel kooperitakse ainult viide 
const firstObject = { name: "Alice"};
const seconObject = firstObject
seconObject.name = "Bob"; // muudame seconObject omandust
console.log("First object name: " + firstObject.name);


//kopeerimine väärtuse järgi
const firstValue = {score: 100};
const secondValue = {...firstValue};
secondValue.score = 200; // muudame secondValue omandust
console.log("First value score: " + firstValue.score); //väljasta firstValue omadust
console.log("Second value score: " + secondValue.score); // väljasta secondValue omandust
 
