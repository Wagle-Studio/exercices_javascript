const data = [
  "Kévin",
  "Théophile",
  "Tiphaine",
  "Ana",
  "Max",
  "Alexandre",
  "Elisa",
];

// ========================================================================
// Exercice 1 : Afficher les prénoms de plus de 4 caractères
// ========================================================================
// Objectif : Affichez uniquement les prénoms ayant plus de 4 caractères.
//
// 1. Parcourez le tableau "data".
// 2. Utilisez console.log pour afficher les prénoms répondant au critère.

console.group("Exercice 1");

for (let index = 0; index < data.length; index++) {
  const surname = data[index];
  console.log(surname);
}

console.groupEnd();

// ========================================================================
// Exercice 2 : Filtrer les chiffres inférieurs à 200 000
// ========================================================================
const numbers = [250000, 150000, 100, 500000, 199999];

// Objectif : Affichez uniquement les nombres inférieurs à 200 000.
//
// 1. Parcourez le tableau "numbers".
// 2. Utilisez console.log pour afficher les nombres inférieurs à 200 000.

console.group("Exercice 2");

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];

  if (number < 200000) {
    console.log(number + " est plus petit que 200 000");
  }
}

console.groupEnd();

// ========================================================================
// Exercice 3 : Trouver les nombres pairs
// ========================================================================
const nums = [23, 42, 56, 77, 90, 101];

// Objectif : Affichez uniquement les nombres pairs du tableau.
//
// 1. Parcourez le tableau "nums".
// 2. Utilisez console.log pour afficher les nombres pairs.

console.group("Exercice 3");

for (let i = 0; i < nums.length; i++) {
  if (nums[i] % 2 == 0) {
    console.log(nums[i] + " est un nombres pairs");
  }
}

console.groupEnd();

// ========================================================================
// Exercice 4 : Ajouter un préfixe aux prénoms
// ========================================================================
// Objectif : Ajoutez le préfixe "Hello" avant chaque prénom.
//
// 1. Parcourez le tableau "data".
// 2. Affichez chaque prénom précédé de "Hello" dans la console.

// Exemple attendu : "Hello Kévin"

console.group("Exercice 4");

for (let i = 0; i < data.length; i++) {
  console.log("Hello " + data[i]);
}

console.groupEnd();

// ========================================================================
// Exercice 5 : Calculer la somme des nombres
// ========================================================================
const values = [10, 20, 30, 40, 50];

// Objectif : Calculez la somme totale des nombres.
//
// 1. Parcourez le tableau "values".
// 2. Affichez la somme totale dans la console.

// Exercice 5.1 : Fonction de calcul de la somme
// 1. Créez une fonction qui accepte un tableau de nombres en paramètre.
// 2. La fonction doit retourner la somme totale des nombres.

console.group("Exercice 5");

let total = 0;

for (let i = 0; i < values.length; i++) {
  total += values[i];
}

console.log("Valeur total : " + total);

console.groupEnd();

// ========================================================================
// Exercice 6 : Trouver les prénoms contenant "e"
// ========================================================================
// Objectif : Affichez uniquement les prénoms contenant la lettre "e".
//
// 1. Parcourez le tableau "data".
// 2. Utilisez console.log pour afficher les prénoms contenant "e".

console.group("Exercice 6");

for (let i = 0; i < data.length; i++) {
  const element = data[i];

  if (element.includes("e") || element.includes("E") || element.includes("é")) {
    console.log("Le prénom " + element + " contient bien la lettre e");
  }
}

console.groupEnd();

// ========================================================================
// Exercice 7 : Multiplier tous les nombres par 2
// ========================================================================
const smallNumbers = [1, 2, 3, 4, 5];

// Objectif : Multipliez chaque nombre par 2.
//
// 1. Parcourez le tableau "smallNumbers".
// 2. Affichez chaque nombre multiplié par 2 dans la console.

console.group("Exercice 7");

for (let i = 0; i < smallNumbers.length; i++) {
  console.log(smallNumbers[i] * 2);
}

console.groupEnd();

// ========================================================================
// Exercice 8 : Transformer les prénoms en majuscules
// ========================================================================
// Objectif : Affichez chaque prénom en majuscules.
//
// 1. Parcourez le tableau "data".
// 2. Utilisez console.log pour afficher chaque prénom en majuscules.

console.group("Exercice 7");

for (let i = 0; i < data.length; i++) {
  console.log(data[i].toUpperCase());
}

console.groupEnd();
