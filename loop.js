//Tsükkel on korduv tegevus, mis kestab seni, kuni on täidetud mingi tingimus.

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log("Summa on: " + sum);

for (const number of numbers) {
    console.log(number);
}

//3.
let lives = 3;
while (lives > 0) {
    console.log("Elusid alles: " + lives);
    lives--;
}

//4.
let count = 0;
do {
    console.log("Loendur: " + count);
    count++;
} while (count < 5);

//lõpmatu tsükkel (!!!)
//while (true) {
//    console.log("See tsükkel kestab igavesti!");
//}

//ülesanne
//leidke massiivist kõik paaris arvud ja kuvage need konsooli
const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (const number of numbersArray) {
    if (number % 2 === 0) {
        console.log(number + " on paaris arv.");
    }
}