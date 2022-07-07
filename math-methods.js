// Huiswerk String Methods Koos Dorssers
//
/* Opdracht 0: voorbeeld */
// Log het cijfer PI in de terminal
// ---- Verwachte uitkomst: 3.141592653589793

console.log("Voorbeeld opdracht:")
console.log("---------------------------------------------------------")
console.log(" ")

console.log(Math.PI);

console.log("---------------------------------------------------------")
console.log(" ")

/* Opdracht 1: */
// Bereken de omtrek van een cirkel met een diameter van 4 en log dit in de terminal. De eenheid (cm, meters, etc. maakt niet uit).
// Tip: de formule is omtrek = diameter * pi
// ---- Verwachte uitkomst: 12.566370614359172

console.log("Opdracht 1:")
console.log("---------------------------------------------------------")
console.log(" ")

const diameter = 4
const cirkel = Math.PI * diameter
console.log(cirkel);

console.log("---------------------------------------------------------")
console.log(" ")


/* Opdracht 2: */
// Bereken de omtrek van een cirkel met een diameter van 12 en rond dit af naar een heel getal. Log dit in de terminal.
// ---- Verwachte uitkomst: 38

console.log("Opdracht 2:")
console.log("---------------------------------------------------------")
console.log(" ")

const newDiameter = 12
const newCirkel = Math.PI * newDiameter
console.log(Math.round(newCirkel));

console.log("---------------------------------------------------------")
console.log(" ")

/* Opdracht 3: */
// Bereken de wortel van 9 en log dit in de terminal
// ---- Verwachte uitkomst: 3

console.log("Opdracht 3:")
console.log("---------------------------------------------------------")
console.log(" ")

console.log(Math.sqrt(9));

console.log("---------------------------------------------------------")
console.log(" ")

/* Opdracht 4: */
// Genereer een willekeurig getal tussen de 0 en 1 en doe dan een check:
// * is het willekeurige getal groter dan 0.5 ? Log dan het getal met "Het glas is halfvol" in de terminal
// * is het willekeurige getal kleiner dan 0.5 ? Log dan het getal met "Het glas is half leeg" in de terminal
// Tip: iedere keer als je het script opnieuw draait (wel even een extra spatie toevoegen o.i.d.) is dit getal anders ;)
// ---- Verwachte uitkomst: Bijbehorende zin afhankelijk van de uitkomst

console.log("Opdracht 4:")
console.log("---------------------------------------------------------")
console.log(" ")

const a = Math.random()
function testNum(a) {
    let result;
    if (a > 0.5) {
        result = "Het glas is halfvol";
    } else {
        result = "Het glas is half leeg";
    }
    return result;
}
console.log(a)
console.log(testNum(a));


console.log("---------------------------------------------------------")
console.log(" ")