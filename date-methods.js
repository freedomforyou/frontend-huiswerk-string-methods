// Huiswerk String Methods Koos Dorssers
//
/* Opdracht 0: voorbeeld */
// Maak een nieuw date-object aan voor dit huidige moment en log dit in de terminal
// ---- Verwachte uitkomst: 2021-04-06T14:54:34.062Z (afhankelijk van het moment)

console.log("Voorbeeld opdracht:")
console.log("---------------------------------------------------------")
console.log(" ")

const currentDay = new Date();
console.log(currentDay);

console.log("---------------------------------------------------------")
console.log(" ")

/* Opdracht 1 */
// 1a. Maak een nieuw date-object aan voor dit huidige moment en log het aantal uren in de terminal
// 1b. Log daarna het aantal minuten in de terminal
// ---- Verwachte uitkomsten:
// Uren: 16 (als er een vier in de klok zit op het moment van aanroepen)
// Minuten: 36 (als het 16:36 is op het moment van aanroepen)

console.log("Opdracht 1:")
console.log("---------------------------------------------------------")
console.log(" ")

const newDay = new Date();
console.log(newDay.getHours());
console.log(newDay.getMinutes());

console.log("---------------------------------------------------------")
console.log(" ")

/* Opdracht 2 */
// Format het date-object dat je bij de vorige vraag hebt gemaakt naar een leesbare datum
// ---- Verwachte uitkomst: Tue Apr 06 2021 (afhankelijk van het moment)

console.log("Opdracht 2:")
console.log("---------------------------------------------------------")
console.log(" ")

const thisDay = new Date();

const shortOptions = {
    weekday: 'short',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

const englishShortDate = thisDay.toLocaleDateString('en-EN', shortOptions);
console.log(englishShortDate)

console.log("---------------------------------------------------------")
console.log(" ")