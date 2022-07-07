/* Opdracht 0: voorbeeld */
// Check de lengte van onderstaande string en log dit in de terminal
// ---- Verwachte uitkomst: 10

console.log("Voorbeeld opdracht:")
console.log("---------------------------------------------------------")
console.log(" ")

const word = "zoetsappig";
console.log(word.length);

console.log("---------------------------------------------------------")
console.log(" ")

/* Opdracht 1 */
//  Check of het woord "Banaan" langer is dan het woord "Aardappel" en log dit in de terminal.
// ---- Verwachte uitkomst: false

console.log("Opdracht 1:")
console.log("---------------------------------------------------------")
console.log(" ")

const fruit = "Banaan";
const vegetable = "Aardappel";

if (fruit.length > vegetable.length) {
    console.log(true);
    } else {
    console.log(false);
    }

console.log("---------------------------------------------------------")
console.log(" ")

/* Opdracht 2 */
//  Zorg ervoor dat de laatste letter van het woord in fruit en vegetable (hierboven) in de terminal gelogd wordt.
//  Tip: bedenk 1 manier die voor beide woorden zou werken.
// ---- Verwachte uitkomst voor fruit: "n"
// ---- Verwachte uitkomst voor vegetable: "l"

console.log("Opdracht 2:")
console.log("---------------------------------------------------------")
console.log(" ")

const a = fruit.length
const b = vegetable.length
console.log(fruit.substring(a-1))
console.log(vegetable.substring(b-1))

console.log("---------------------------------------------------------")
console.log(" ")

/* Opdracht 3 */
//  Haal de spaties aan het begin en eind van onderstaande zin weg en log dit in de terminal
// ---- Verwachte uitkomst: "De kat krabt de krullen van de trap"

console.log("Opdracht 3:")
console.log("---------------------------------------------------------")
console.log(" ")

const userInput = "  De kat krabt de krullen van de trap ";
console.log(userInput.trim())

console.log("---------------------------------------------------------")
console.log(" ")


/* Opdracht 4 */
// Check of het woord "Fantastisch" in onderstaande zin voorkomt en log dit in de terminal.
// ---- Verwachte uitkomst: true

console.log("Opdracht 4:")
console.log("---------------------------------------------------------")
console.log(" ")

const story = "We vinden de behaalde resultaten werkelijk prachtig. Fantastisch, nietwaar?"

if (story.includes("Fantastisch")) {
    console.log(true);
} else {
    console.log(false);
}

console.log("---------------------------------------------------------")
console.log(" ")


/* Opdracht 5 */
// Knip de vraag van bovenstaande tekst (story) af, zodat alleen het eerste gedeelte overblijft en log dit in de terminal.
// ---- Verwachte uitkomst: "We vinden de behaalde resultaten werkelijk prachtig."

console.log("Opdracht 5:")
console.log("---------------------------------------------------------")
console.log(" ")

storyArray = story.split(" F")
console.log(storyArray[0])

console.log("---------------------------------------------------------")
console.log(" ")


/* Opdracht 6 */
// Maak van onderstaand bedrag een Nederlands bedrag door het volgende te doen:
// * Vervang het dollar-teken voor een euro-teken
// * Vervang de punt voor een komma
// Log dit in de terminal.
// ---- Verwachte uitkomst: "€35,59"

console.log("Opdracht 6:")
console.log("---------------------------------------------------------")
console.log(" ")

const price = "$35.59";
console.log(price.replaceAll("$","€") && price.replaceAll(".", ","))

console.log("---------------------------------------------------------")
console.log(" ")




