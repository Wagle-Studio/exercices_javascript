// ========================================================================
// Exercice 1 : Multiplication avec `map`
// ========================================================================
// Objectif : Créez un nouveau tableau où chaque élément est multiplié par 1.2.
//
// 1. Utilisez `map` sur `mapArray` pour multiplier chaque élément par 1.2.
// 2. Stockez le résultat dans un nouveau tableau et affichez-le.

const mapArray = [1, 3.5, 59, 11];

// ========================================================================
// Exercice 2 : Filtrage avec `filter`
// ========================================================================
// Objectif : Sélectionnez uniquement les prénoms courts (6 lettres ou moins).
//
// 1. Appliquez `filter` sur `filterArray` pour récupérer les prénoms de 6 lettres maximum.
// 2. Stockez les résultats dans un nouveau tableau et affichez-le.

const filterArray = ["Aissatou", "Thomas", "Théo", "Bertrand"];

// ========================================================================
// Exercice 3 : Vérification avec `some`
// ========================================================================
// Objectif : Vérifiez la présence de l'élément "pomme" dans le tableau.
//
// 1. Utilisez `some` sur `someArray` pour tester la présence de "pomme".
// 2. Affichez le résultat du test (true ou false).

const someArray = ["banane", "concombre", "pomme", "courgette"];

// ========================================================================
// Exercice 4 : Création de chaînes avec `map` (Niveau 2)
// ========================================================================
// Objectif : Concaténez le nom et le prénom de chaque utilisateur.
//
// 1. Utilisez `map` sur `map2Array` pour créer un tableau de chaînes "nom prénom".
// 2. Affichez le tableau résultant.

const map2Array = [
  { surname: "Cristiano", name: "Ronaldo" },
  { surname: "James", name: "LeBron" },
  { surname: "Conor", name: "McGregor" },
];

// ========================================================================
// Exercice 5 : Filtrage avancé avec `filter` (Niveau 2)
// ========================================================================
// Objectif : Sélectionnez les produits avec plus de 10 unités en stock.
//
// 1. Appliquez `filter` sur `filter2Array` pour sélectionner les produits bien approvisionnés.
// 2. Affichez les produits filtrés.

const filter2Array = [
  { product: "banane", quantity: 23 },
  { product: "courgette", quantity: 5 },
  { product: "pomme", quantity: 11 },
];

// ========================================================================
// Exercice 6 : Vérification avancée avec `some` (Niveau 2)
// ========================================================================
// Objectif : Testez si au moins un film est du genre "action".
//
// 1. Utilisez `some` sur `some2Array` pour chercher un film d'action.
// 2. Affichez le résultat du test (true ou false).

const some2Array = [
  { movie: "banane", type: "humor" },
  { movie: "courgette", type: "drama" },
  { movie: "pomme", type: "thriller" },
];
