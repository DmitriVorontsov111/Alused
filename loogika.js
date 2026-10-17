//Laualambi sisselülitamine

//Reegel: lamp põüleb, kui elektrivool on olemas ja lüliti on sisse lülitatud.

const PowerOn = true; // Elektrivool on olemas
const SwitchOn = true; // Lüliti on sisse lülitatud

const result = PowerOn && SwitchOn; // kontrollimine, kas lamp põleb
console.log("Kas lamp põleb? " + result); // väljasta tulemus

//2. Veebitunni avamine
//reegel: Tunni avamiseks on väja internetiühendus ja linki

// internetiühendus olemas
const InternetOn = true;
// link olemas
const HasLink = true;
const result2 = InternetOn && HasLink; // kontrollimine, kas veebitund on avatud
console.log("Kas veebitund on avatud? " + result2); // väljasta tulemus

//&& - loogiline JA (AND) operaator //konjunktsioon
//|| - loogiline VÕI (OR) operaator //disjunktsioon

//3. Ostu eest saab tasumine
//Reegel: sularahas või pangakaardiga

const CashAvailable = true; // Sularaha olemas
const HasCard = true; // Pangakaart olemas

const result3 = CashAvailable || HasCard; // kontrollimine, kas saab tasuda
console.log("Kas saab tasuda? " + result3); // väljasta tulemus

//4. Teate saamine
//Reegel: teate on saadud, kui saabus e-kiri või SMS
const EmailReceived = true; // E-kiri saabus
const SMSReceived = false; // SMS ei saabunud
const result4 = EmailReceived || SMSReceived; // kontrollimine, kas teade on saadud
console.log("Kas teade on saadud? " + result4); // väljasta tulemus

//5. Akna avamine
//Reegel: võib avada , kui vihma ei saja
const IsRaining = false; // Vihma ei saja
const result5 = !IsRaining; // kontrollimine, kas akent võib avada
console.log("Kas akent võib avada? " + result5); // väljasta tulemus

//6. Serveri käivitamine
//Reegel: vaja on sisselülitatud on arvutit , paigaldatud operatsioonisüsteem ja serveri tarkvara
const ComputerOn = true; // Arvuti on sisse lülitatud
const OSInstalled = true; // Operatsioonisüsteem on paigaldatud
const HasPermission = false; // käivitamisõigus on olemas

const result6 = ComputerOn && OSInstalled && HasPermission; // kontrollimine, kas serveri saab käivitada
console.log("Kas serveri saab käivitada? " + result6); // väljasta tulemus


//7.kooli jõudmine
//Reegel: kooli saab minna bussi, jalgratta või (||) vanete autoga
const BusAvailable = false; // Buss on saadaval
const BikeAvailable = true; // Jalgratas on saadaval
const ParentsCarAvailable = false; // Vanemate auto on saadaval
const result7 = BusAvailable || BikeAvailable || ParentsCarAvailable; // kontrollimine, kas kooli saab minna
console.log("Kas kooli saab minna? " + result7); // väljasta tulemus

//8. Filmi vaatamine
//Reegel: vaja on internetiühendust ning tellimust või ostetud veebiseansi piletit
const InternetHOmeON = false; // Internetiühendus on olemas
const HasSubscription = true; // Tellimus on olemas
const Hasticket = true; // veebiseansi pilet on ostetud
const result8 = InternetHOmeON && (HasSubscription || Hasticket); // kontrollimine, kas filmi saab vaadata
console.log("Kas filmi saab vaadata? " + result8); // väljasta tulemus


//9. piknik
//Reegel: Vaja on toitu ning kuiva ilma või katusega lehtlat
const FoodAvailable = true; // Toit on olemas
const Rainy = false; // on vihma
const HasShelter= true; // Katusega lehtla on olemas
const result9 = FoodAvailable && (Rainy || HasShelter); // kontrollimine, kas piknikku saab pidada
console.log("Kas piknikku saab pidada? " + result9); // väljasta

//10. Uuenduse allalaadimine
//Reegel: Vaja on internetiühendust ning ja kettaruumi
//Madal akutase koos ühendamata laadijaga keelab allalaadimise
const InternetConnection = true; // Internetiühendus on olemas
const HasDiskSpace = true; // Kettaruum on olemas
const LowBattery = true; // Madal aku tase
const ChargerConnected = false; // Laadija on ühendatud
const result10 = InternetConnection && HasDiskSpace && (!LowBattery || ChargerConnected); // kontrollimine, kas uuendust saab alla laadida
console.log("Kas uuendust saab alla laadida? " + result10); // väljasta tulemus

//11. valmis tellimuse kättesaamine
//Reegel: Tellimuse peab olema valimis, kuller või väljatuspunkt saadaval ning väljastamine blokeerimata
const OrderReady = true; // Tellimus on valmis
const CourierAvailable = false; // Kuller on saadaval
const PickupPointAvailable = true; // Väljatuspunkt on saadaval
const Blocked = false; // Väljastamine on blokeeritud
const result11 = OrderReady && (CourierAvailable || PickupPointAvailable) && !Blocked; // kontrollimine, kas tellimust saab kätte
console.log("Kas tellimust saab kätte? " + result11); // väljasta tulemus 