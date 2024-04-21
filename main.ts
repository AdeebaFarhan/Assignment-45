let person:string = "Eric";
console.log(`Hello ${person}, would you like to learn some Python today?”`);

let names :string = "Adeeba";
let titleCaseName: string = names.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

console.log(names.toLowerCase());
console.log(names.toUpperCase());
console.log(titleCaseName);

let famousPerson: string = "Albert Einstein";
let famousQuote: string =
  "A person who never made a mistake never tried anything new.";
let message: string = `${famousPerson} once said ,  ${famousQuote}`;
console.log(message);

let personName: string = "\t\n Adeeba khan \t\n";
console.log(personName);
let strippedName: string = personName.trim();
console.log(strippedName);

let variable: string = "\t\n Im a student \t\n";
console.log("namesWithWhiteSpace:");
console.log(variable);
let strippedNameVariable: string = variable.trim();
console.log("\n Stripped Name");
console.log(strippedNameVariable);

console.log(5 + 3); // Addition: 5 + 3 = 8
console.log(10 - 2); // Subtraction: 10 - 2 = 8
console.log(4 * 2); // Multiplication: 4 * 2 = 8
console.log(16 / 2); // Division: 16 / 2 = 8

let favouriteNumber: number = 10
let message:string=("here is my favourite number");
console.log(`${message},${favouriteNumber}`);

let friend:string[]=["adeeba","maha","hamza","raffay"];
let greet:string=("Hello My friend whatsapp");
console.log(`${greet},${friend[0]}`);
console.log(`${greet},${friend[1]}`);
console.log(`${greet},${friend[2]}`);
console.log(`${greet},${friend[3]}`);

let transporation:string[]=["motorbike","Honda motor cycle","BMX"];
let message:string= ("I would like to own a");
console.log(`${message} ${transporation[0]}`)
console.log(`${message} ${transporation[1]}`)
console.log(`${message} ${transporation[2]}`)
console.log(`${message} ${transporation[3]}`)

let guestList:string[]=["adeeba","khan","farhan"];
let message:string=("I would like to invite for a dinner");
console.log(`Dear${message} ${guestList[0]}`);
console.log(` Dear${message} ${guestList[1]}`);
console.log(` Dear${message} ${guestList[2]}`);

console.log(`${guestList[0]} can't make it dinner`);
guestList[0]="maha";

console.log(`\nDear ${guestList[0]} ${message}`);
console.log(`Dear ${guestList[1]} ${message}`);
console.log(`Dear ${guestList[2]} ${message}`);
console.log("\n Good news I found a bigger dinner table");

guestList.unshift("rehman");
guestList.splice(2,0, "mariyum")
guestList.push("kiran");

console.log("\n New invitations");
for(let guest of guestList){
    console.log(`Dear ${guest}, you are invited to dinner. Please join us.`);
}

console.log("\n Sorry, we can't invite you to dinner.");
while(guestList.length>2){
    let removedGuest= guestList.pop();
    console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
}
console.log(`\nInvitations to the two remaining guests:`);
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are still invited to dinner. Please join us.`);
}

// Remove the last two names from the list
guestList.pop();
guestList.pop();

// Printing the empty list
console.log("\nAfter removing all guests, the list is now empty:");
console.log(guestList);

let places:string[]=["Pakistan","America","London","Brazil"];
console.log("Original Order:", places);
console.log("Alphabetical Order:",[...places].sort());
console.log("Original Order still:",places);
console.log("Reverse Alphabetic Orders:",[...places].sort().reverse());
console.log("Original Order:", places);
places.reverse();
console.log("Reverse Alphabets:",places)
places.reverse()
console.log("Back to original:",places);
places.sort();
console.log("Sorted in Alphabetic order:",places);
places.sort((a,b)=>b.localeCompare(a));
console.log("Sorted in reverse Alphabetic:",places);

let guestList:string[]=["Adeeba","Maha","Kiran","Araj"]
console.log(`you're inviting  ${guestList.length}  people to dinner in our place`)

let cities:string[]=["Karachi","Lahore","Islamabad","Peshawar"];
console.log("List of Cities:",cities);

Define objects containing information about different countries
const countries = [
  {
    name: "USA",
    capital: "Washington, D.C.",
    population: 331449281,
    language: "English",
  },
  {
    name: "France",
    capital: "Paris",
    population: 65273511,
    language: "French",
  },
  {
    name: "Japan",
    capital: "Tokyo",
    population: 126476461,
    language: "Japanese",
  },
  {
    name: "Brazil",
    capital: "Brasília",
    population: 213993437,
    language: "Portuguese",
  },
];

// Print the information about each country
console.log("Information about different counntries:");
countries.forEach((country) => {
  console.log(
    `Country: ${country.name}, Capital : ${country.capital}, Population: ${country.population},Language: ${country.language} `
  );
});
//intentional errror
let numbers:any[]=[1,2,3,4,,5,6];
console.log(numbers[10]);
console.log(numbers[2]);

let x = 5;
let y = 6;
let z = 10;
console.log(x == y); //false iska matlub hai ka kiya yah values aik dusre ka baraabar hai
console.log(x != y); //true is ka matlub hai ka yahvalues kiya aik dusrey ka baradbar nhi hia
console.log(x >= z); //iska matlub hai kiya ya value x is sa bari hai yah barabar hai
console.log(z <= y); //iska matlub hai ka yah y z sa chota hai yah iska barabar hai
console.log(x > y);
console.log(z < x);
console.log(x > y && y < x);
console.log(x == y || z < y);

let alienColor:string = "green";

if(alienColor == "green"){
  console.log("Your earned 5 points")

};
let alienColors:string= "red";
if(alienColors == "green"){
  console.log("Your earned 5 points")
}

let alienColor:string = "green";
if (alienColor === "green"){
  console.log("You're earned 5 points")
}
else{
  console.log("YOure scored 15")};

  let alienColors:string = "red";
if (alienColors === "green"){
  console.log("You're earned 5 points")
}
else{
  console.log("YOure scored 15")};

let alienColor: string = "green";
if (alienColor === "green") {
  console.log("player earned 5 points");
} else if (alienColor === "yellow") {
  console.log("Player earned 10 points");
} else if (alienColor === "red") {
  console.log("Player earned 15 points");
}

let alienColor1: string = "yellow";

if (alienColor1 === "green") {
  console.log("player earned 5 points");
} else if (alienColor1 === "yellow") {
  console.log("Player earned 10 points");
} else if (alienColor1 === "red") {
  console.log("Player earned 15 points");
}

let alienColor2: string = "red";

if (alienColor2 === "green") {
  console.log("player earned 5 points");
} else if (alienColor2 === "yellow") {
  console.log("Player earned 10 points");
} else if (alienColor2 === "red") {
  console.log("Player earned 15 points");
};

let age: number = 25; // Assigning a value for the variable age

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

let favouriteFruit:string[]=["Banana","Grapes","Orange"];
if(favouriteFruit.includes("Banana")){
console.log("I really love Banana")
}
if(favouriteFruit.includes("Mango")){
  console.log("I loves mangoes")
}
if(favouriteFruit.includes("Grapes")){
  console.log("I loves Grapes")
};

let names: string[] = ["Adeeba", "Admin", "Maha", "bilal", "Horain"];
if(names.length === 0){
  console.log("We need to find somw users")
}else{
for (let usersName of names) {
  if (usersName === "Admin") {
    console.log(" Admin Would you like to see a update");
  } else {
    console.log("Hi users" + usersName);
  }
}
};

let usersName: string[] = []; // Empty array of usernames

if (usersName.length === 0) {
    console.log("We need to find some users!");
} else {
    for (let names of usersName) {
        if (names === "Admin") {
            console.log("Would you like to see updates?");
        } else {
            console.log("Hi " + names);
        }
    }
}

let currentUser:string[]=["Adeeba","Maha","Khan","Raffay","Hamza"]
let newUsersName:string[]=["Ali","Farhan","Adeeba","Maha","kiran"];
for(let newUsersNames of newUsersName){
    if(currentUser.some(user => user.toLowerCase()===newUsersNames.toLowerCase())){
        console.log(`Sorry, the username '${newUsersNames}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${newUsersNames}' is available.`);
    }
}

let number:number[]=[1,2,3,4,5,6,7,8,9]
for(let numbers of number){
    let ordinalEnding;
    if(numbers ==1 ){
     ordinalEnding = "st";
    }else if(numbers == 2){
        ordinalEnding="nd";
    }else if(numbers === 3){
        ordinalEnding = "rd";

    }else{
        ordinalEnding ="th";
    }
    console.log(`${numbers}${ordinalEnding}`)
};

let favouritePizza:string[]=["Peproni","Marghrita","BBQ"];
for(let pizza of favouritePizza){
    console.log(pizza)
};
for(let pizza of favouritePizza){
    console.log(`I really like ${pizza} pizza`);

}

console.log("I really like pizza");

let animals:string[]=["Dog","Cat","Rabbit"];
console.log("Animals:");
for(let animal of animals){
    console.log(animal)
}

console.log("\nStatement about each animals");
for(let animal of animals){
console.log(` A ${animal} would make a great pet`)
};

function makeShirt(size:string,message:string):void{
 console.log(`You've order T-shirt size ${size} and message ${message}`)
}
makeShirt("small","Hello fam");

function makeShirt(size:string = "Large",message:string = "I love Typescript"):void{
      console.log(`You've order T-shirt size ${size} and message ${message}`)
     }
     makeShirt();
     makeShirt("medium");
     makeShirt("small","Typescript is fun");

function describeCities(city:string,country:string= "japan"){
    console.log(`${city} is in ${country}`)
}
describeCities("Karachi","Pakistan");
describeCities("Kabul","Afghanistan");
describeCities("Tokyo");

function cityCountry(city:string,country:string):string{
    return `${city},${country}`
}
console.log(cityCountry("Lahore","Pakistan"));
console.log(cityCountry("Madina","Saudia Arabia"));
console.log(cityCountry("Mumbia","India"));

interface Album{
    artist:string;
    title:string;
    tracks?:number
}
function makeAlbum(artistName:string,titleName:string,numTrack?:number):Album{
  const album :Album ={
    artist: artistName,
    title: titleName
  };
  if(numTrack !== undefined){
    album.tracks = numTrack
}
return album;
}
const album1 : Album = makeAlbum("Artist1","Album1");
const album2 : Album = makeAlbum("Artist2","Album3",12);
const album3 : Album = makeAlbum("Artist3","Album2",4);

console.log(album1)
console.log(album2)
console.log(album3)

let magicians:string[]=["Robert","Lorence","Nobita","Doremon"];

function showMagicians(magicians:string[]){
    magicians.forEach(magicians =>{
        console.log(magicians)
    })
};
function makeGreat(magicians:string[]):string[]{
    const greatMagician:string[]=[]
    for(let i = 0;i < magicians.length ; i++){
        greatMagician.push ("the Great" + magicians[i])
    }
    return greatMagician;
};
const magicianss: string[] = ["Robert", "Lorence", "Nobita", "Doremon"];

const originalMagicians: string[] = magicianss.slice(); // Create a copy of the original array

const greatMagicians: string[] = makeGreat(originalMagicians);

console.log("Original Magicians:");
showMagicians(originalMagicians);

console.log("\nGreat Magicians:");
showMagicians(greatMagicians);

function makeSandwich(...items: string[]): void {
  console.log("Sandwhich Summary");
  if (items.length === 0) {
    console.log("You order a empty Sandwhich");
  } else {
    console.group("You ordered a sandwich with the following items:");
  }items.forEach((items) => {
    console.log("-" + items);
  });
  
  console.log("")
}
makeSandwich();
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss Cheese");
makeSandwich("Peanut Butter", "Jelly");

interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
}

function createCar(manufacturer: string, model: string, ...args: { [key: string]: any }[]): Car {
    const car: Car = { manufacturer, model };
    args.forEach(arg => {
        const [key, value] = Object.entries(arg)[0];
        car[key] = value;
    });
    return car;
}

// Example usage
const car = createCar("Toyota", "Corolla", { color: "blue", year: 2022 });
const car1 = createCar("Suzuki", "Revo", { color: "black", year: 2022 });
console.log(car,"\n",car1);

