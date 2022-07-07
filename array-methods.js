// Huiswerk String Methods Koos Dorssers
//
/* Opdracht 0: voorbeeld */
// Verwijder het laatste item van onderstaande array en log dit in de terminal
// Log daarna de originele array om te kijken of deze waarde ook echt verwijderd is en de array nu korter is geworden
// ---- Verwachte uitkomst: 'Vanille extract' en [ 'Eieren', 'Bloem', 'Bakpoeder' ]

console.log("Voorbeeld opdracht:")
console.log("---------------------------------------------------------")
console.log(" ")

const cookieIngredients = ["Eieren", "Bloem", "Bakpoeder", "Vanille extract"];

const lastItem = cookieIngredients.pop();
console.log(lastItem);
console.log(cookieIngredients);

console.log("---------------------------------------------------------")
console.log(" ")

/* Opdracht 1: */
// Voeg een nieuw item toe aan onderstaande array en log de gehele array in de terminal om te kijken is het gelukt is
// ---- Verwachte uitkomst: [ 'Hawai', 'Margherita', 'Salami' ]

console.log("Opdracht 1:")
console.log("---------------------------------------------------------")
console.log(" ")

const pizzas = ["Hawai", "Margherita"];

const newItem = pizzas.push("Salami");
console.log(newItem);
console.log(pizzas);

console.log("---------------------------------------------------------")
console.log(" ")

/* Opdracht 2: */
// Verwijder het éérste item van onderstaande array en log dit in de terminal
// Log daarna de originele array om te kijken of deze waarde ook echt verwijderd is en de array nu korter is geworden
// ---- Verwachte uitkomst: 'Noten' en [ 'Eieren', 'Bloem', 'Cacao', 'Chocoladestukjes', 'Bakpoeder' ]

console.log("Opdracht 2:")
console.log("---------------------------------------------------------")
console.log(" ")

const brownieIngredients = ["Noten", "Eieren", "Bloem", "Cacao", "Chocoladestukjes", "Bakpoeder"];

const firstItem = brownieIngredients.shift();
console.log(firstItem);
console.log(brownieIngredients);

console.log("---------------------------------------------------------")
console.log(" ")

/* Opdracht 3: */
// Draai de volgorde van onderstaande array met namen om en log de gehele array in de terminal om te kijken is het gelukt is
// ---- Verwachte uitkomst: [ 'Piet', 'Jan', 'Henk' ]

console.log("Opdracht 3:")
console.log("---------------------------------------------------------")
console.log(" ")

const names = ["Henk", "Jan", "Piet"];

console.log(names.reverse());

console.log("---------------------------------------------------------")
console.log(" ")


/* Opdracht 4: */
// Onderstaande array bevat een lijst met plaatsnamen. Voeg de naam "Amsterdam" toe tussen Utrecht en Maastricht.
// ---- Verwachte uitkomst: [ 'Utrecht', 'Amsterdam', 'Maastricht', 'Eindhoven' ]

console.log("Opdracht 4:")
console.log("---------------------------------------------------------")
console.log(" ")

const cities = ["Utrecht", "Maastricht", "Eindhoven"];
cities.splice(1,0,"Amsterdam")

console.log(cities);

console.log("---------------------------------------------------------")
console.log(" ")

