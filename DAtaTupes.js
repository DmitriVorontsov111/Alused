// Andmetüüp ja andmestruktuur

let age = 25; // number
console.log("Type of age: " + typeof age); // väljasta andmetüübi

const name = "John"; // string
console.log("Type of name: " + typeof name); // väljasta andmetüübi

const isGreater = 10 > 5;
console.log("Type of isGreater: " + typeof isGreater); // väljasta andmetüübi

//Muuuja ilma väärtuseta
let answer;
console.log("Type of answer: " + typeof answer); // väljasta andmetüübi

//null väärtus
const emptyValue = null;
console.log("Type of emptyValue: " + typeof emptyValue); // väljasta andmetüübi
console.log(emptyValue === null); // väljasta väärtus

const bb = 5;
const cc = 10;
console.log(bb === cc); // väljasta väärtus


//võrdleme arvude ja stringide liitmist
console.log(5 + 5); // Arvude liitmine
console.log("5" + "5"); // Stringide liitmine


//Teisendame
const text = String(25); // teisendame numbri stringiks
console.log("Type of text: " + typeof text); // väljasta andmetüübi

//objektid ja massiivid
const student = {
    name: "Alice",
    age: 20,
}
console.log(student.name); // väljasta objekti omadus

const student2 = {
    name: "Bob",
    age: 22,

}
student2.age = 23; // muutame objekti omadust
student2.school = "High School"; // lisame uue omaduse
console.log(student2.name, student.age, student2.school); // väljasta objekti omadused

//Massiiv
const grades = [90, 85, 92];
console.log("Grades: " + grades[2]); // väljasta massiiv
console.log(Array.isArray(grades) + ": " + grades); // väljasta massiiv

//pesastatud objeck
const student3 = {
    name: "Charlie",
    address: {
        city: "New York",
        zip: "10001"
    }
};
console.log(student3.name , student3.address.city, student3.address.zip);  // väljasta pesastatud objekti omadus


//set
const colors = new Set(["red", "green", "blue", "red", "green"]);
const uniqueColors = new Set(colors); // loome unikaalsete värvide komplekti
console.log("Unique Colors: " + Array.from(uniqueColors)); // kontrolimine, kas komplektis on "blue"
console.log(uniqueColors.has("blue")); // väljasta kpmplekti suurus
console.log(uniqueColors.size); // väljasta komplekti suuurus

const cars = new Set(["DMW", "Toyota", "Honda", "BMW", "Toyota"]);
const uniqueCars = new Set(cars); // loome unikaalsete autode komplekti
console.log("Unique Cars: " + Array.from(uniqueCars)); // väljasta unikaalsed autod
console.log(uniqueCars.has("BMW")); // kontrollimine, kas komplektis on "BMW"
console.log(uniqueCars.size); // väljasta komplekti suurus

const cars2 = {Bmw: "BMW", Toyota: "Toyota", Honda: "Honda", BMW: "BMW", Toyota: "Toyota"};
const uniqueCars2 = new Set(Object.values(cars2));
console.log("Unikaalsed automargid: " + Array.from(uniqueCars2)); // väljasta unikaalsed automargid
console.log("Massiivi suurus enne set-i:" +cars.lenght); // väljasta massiivi suurus
console.log("Massiivi suurus pärast set-i:" +uniqueCars.size); // väljasta komplekti suurus

