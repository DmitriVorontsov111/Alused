const number = 5;
const result1 = number.toString(2); // Konverteerime arvu 5 binaarsüsteemi
console.log("Arv Binaarsüsteemis: " + result1); // väljasta tulemus

// näinteks meil on 6
/*
6/2 = 3 jääk 0
3/2 = 1 jääk 1
1/2 = 0 jääk 1
110
*/
const number2 = 6;
const result2 = number2.toString(8); // Konverteerime arvu 6 oktaalsüsteemi
console.log("Arv 6 Oktaalsüsteemis: " + result2); // väljasta tulemus


const binaryNumber = "110";
const result3 = parseInt(binaryNumber, 2); // Konverteerime binaararvu 110 kümnendsüsteemi
console.log("Binaararv 110 Kümnendsüsteemis: " + result3); // väljasta tulemus


const binary = "1010";
const result4 = parseInt(binary, 2); // Konverteerime binaararvu 1010 kümnendsüsteemi
console.log("Binaararv 1010 Kümnendsüsteemis: " + result4); // väljasta tulemus

const number3 = 0;
const result5 = number3.toString(16); // Konverteerime arvu 0 heksadesüsteemi
console.log("Arv 0 Heksadesüsteemis: " + result5); // väljasta tulemus

const number1 = 110;
const result = number1.toString(2); // Konverteerime arvu 110 binaarsüsteemi
console.log("Arv 110 Binaarsüsteemis: " + result); // väljasta tulemus
const number4 = 6871;
const result7 = number4.toString(16); // Konverteerime arvu 6871 heksadesüsteemi
console.log("Arv 6871 Heksadesüsteemis: " + result7); // väljasta tulemus    
