alert("Salut");
// ceci est un commentaire
console.log("hello");

const prenom = "Mathieu";
console.log(prenom); //la const ne bouge pas

let $ = 5;
$ += 5;
console.log($);

let phrase1 = "je test";
let phrase2 = " le js";
let phrase3 = phrase1 + phrase2;
let phrase4 = " bonjour" + phrase1 + phrase2;
let phrase5 = phrase4 + $;
console.log(phrase3);
console.log(phrase4);
console.log(phrase5);

let array = [24, "je", false];
let object = {
  prenom: "Mathieu",
  age: 31,
};
console.log(typeof object);
