// ========================================================================
// Exercice 1 : Multiplication avec `map`
// ========================================================================
const mapArray = [1, 3.5, 59, 11];

const exercice1 = mapArray.map((arrayItem) => arrayItem * 1.2);

console.group("Exercice 1");
console.log(exercice1);
console.groupEnd();

// ========================================================================
// Exercice 2 : Filtrage avec `filter`
// ========================================================================
const filterArray = ["Aissatou", "Thomas", "Théo", "Bertrand"];

const exercice2 = filterArray.filter((arrayItem) => arrayItem.length <= 6);

console.group("Exercice 2");
console.log(exercice2);
console.groupEnd();

// ========================================================================
// Exercice 3 : Vérification avec `some`
// ========================================================================
const someArray = ["banane", "concombre", "pomme", "courgette"];

const exercice3 = someArray.some((arrayItem) => arrayItem === "pomme");

console.group("Exercice 3");
console.log(exercice3);
console.groupEnd();

// ========================================================================
// Exercice 4 : Création de chaînes avec `map` (Niveau 2)
// ========================================================================
const map2Array = [
  { surname: "Cristiano", name: "Ronaldo" },
  { surname: "James", name: "LeBron" },
  { surname: "Conor", name: "McGregor" },
];

const exercice4 = map2Array.map(
  (arrayItem) => arrayItem.surname + " " + arrayItem.name
);

console.group("Exercice 4");
console.log(exercice4);
console.groupEnd();

// ========================================================================
// Exercice 5 : Filtrage avancé avec `filter` (Niveau 2)
// ========================================================================
const filter2Array = [
  { product: "banane", quantity: 23 },
  { product: "courgette", quantity: 5 },
  { product: "pomme", quantity: 11 },
];

const exercice5 = filter2Array.filter((arrayItem) => arrayItem.quantity > 10);

console.group("Exercice 5");
console.log(exercice5);
console.groupEnd();

// ========================================================================
// Exercice 6 : Vérification avancée avec `some` (Niveau 2)
// ========================================================================
const some2Array = [
  { movie: "banane", type: "humor" },
  { movie: "courgette", type: "drama" },
  { movie: "pomme", type: "thriller" },
];

const exercice6 = some2Array.some((arrayItem) => arrayItem.type === "action");

console.group("Exercice 6");
console.log(exercice6);
console.groupEnd();
