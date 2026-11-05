// if else , else if

//if võimaldab meil teha otsuseid, kui tingimus on tõene, siis käivitub if plokk, kui tingimus on väär

//if täitab looksulgedes {} oleva pöoko, kui tingimus on tõene, kui tingimus on väär, siis if plokk vahele jäetakse

const age = 20;
if (age >= 18) {
    console.log(" Täiskasvanu.");
} else {
    console.log("noor.");
}


//2.
const points = 30;
if (points >= 90) {
    console.log("Suurepärane!");
} else if (points >= 50) {
    console.log("Arvestatud!");
} else {
    console.log("Proovige uuesti!");
}

//3.
const hasTicket = true;
const hasInvitation = false;
const isBlocked = false;
if ((hasTicket || hasInvitation) && !isBlocked) {
    console.log("Sisenemine lubatud.");
}

//ülesanne
const number = 11;
//kontrolimine, kas number on paaris või paaritu
if (number % 2 === 0) {
    console.log("Number on paaris.");
} else {
    console.log("Number on paaritu.");
}

