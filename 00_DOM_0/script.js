// ========================================================================
// Exercice 1 : Création et Insertion d'un Élément Paragraph
// ========================================================================
// Objectif : Créer un élément <p>, lui attribuer du texte et une classe,
// puis l'insérer dans le DOM.
//
// 1. Utilisez la fonction JS pour créer un élément <p>.
// 2. Ajoutez la classe 'exo1' à cet élément pour le style CSS.
// 3. Donner le texte suivant à l'élément créé : 'Hello World'.
// 4. Insérez cet élément dans la <div> avec l'id 'targetExo1'.

// ========================================================================
// Exercice 2 : Donner du style au HTML
// ========================================================================
// Objectif : Ajouter du style à des éléments HTML.
//
// 1. Mettre un background color à l'élément avec l'id 'article'.
// 2. Mettre un border en pointillé noir à l'élément avec l'id 'article'.
// 3. Mettre l'élément avec l'id 'para1' en bleu.
// 4. Mettre l'élément avec l'id 'para2' en gras.
// 5. Ajouter la classe 'colorfull' à l'élément avec l'id 'para3'.
// 6. Changer le texte de l'élément avec l'id 'articleTitle'.
// 7. Changer l'attribut href du lien avec l'id 'articleLink' pour aller sur https://www.lilo.org/.
// 8. Selectionner tous les éléments avec la classe 'para' grâce à querySelectorAll et les mettre en italic.

// ========================================================================
// Exercice 3 : Fonction de Création d'Éléments Paragraph
// ========================================================================
// Objectif : Écrire une fonction pour créer des éléments <p> avec un texte.
//
// 1. Créez une fonction qui prend un paramètre 'text' (string).
// 2. Cette fonction créer un élément <p> et assigne la valeur de 'text'
//    comme contenu.
// 3. La fonction doit retourner l'élément <p> créé.

// ========================================================================
// Exercice 3.1 : Génération d'Éléments Paragraph à partir d'un Tableau
// ========================================================================
// Objectif : Créer des éléments <p> pour chaque string d'un tableau.

var countries = [
  "France",
  "Brazil",
  "South Africa",
  "Australia",
  "China",
  "Canada",
];

// 1. Parcourez un tableau de strings donné.
// 2. Utilisez la fonction de 2.1 pour générer un <p> par string.
// 3. Stockez chaque <p> dans un nouveau tableau.

// ========================================================================
// Exercice 3.2 : Insertion d'Éléments Paragraph dans le DOM
// ========================================================================
// Objectif : Insérer les éléments <p> créés dans une <div> spécifique.
//
// 1. Parcourez le tableau d'éléments <p> créés.
// 2. Insérez chaque <p> dans la <div> avec l'id 'targetExo2'.
