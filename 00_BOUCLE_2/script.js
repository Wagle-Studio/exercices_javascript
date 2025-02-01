const data = {
  telephones: [
    {
      product: "iPhone 13",
      brand: "Apple",
      estimatedTotalSales: 100000000,
    },
    {
      product: "Samsung Galaxy S21",
      brand: "Samsung",
      estimatedTotalSales: 60000000,
    },
    {
      product: "iPhone 12",
      brand: "Apple",
      estimatedTotalSales: 50000000,
    },
    {
      product: "Xiaomi Redmi Note 10",
      brand: "Xiaomi",
      estimatedTotalSales: 45000000,
    },
    {
      product: "Samsung Galaxy A52",
      brand: "Samsung",
      estimatedTotalSales: 40000000,
    },
  ],
  consoles: [
    {
      product: "PlayStation 2",
      brand: "Sony",
      estimatedTotalSales: 155000000,
    },
    {
      product: "Nintendo DS",
      brand: "Nintendo",
      estimatedTotalSales: 154000000,
    },
    {
      product: "Game Boy/Game Boy Color",
      brand: "Nintendo",
      estimatedTotalSales: 118700000,
    },
    {
      product: "PlayStation 4",
      brand: "Sony",
      estimatedTotalSales: 116000000,
    },
    {
      product: "PlayStation",
      brand: "Sony",
      estimatedTotalSales: 102500000,
    },
  ],
};

// ========================================================================
// Exercice 1 : Exploration des Données
// ========================================================================
// Objectif : Familiarisez-vous avec la structure des données fournies.
//
// 1. Utilisez console.log pour afficher les données du tableau "data".

// ========================================================================
// Exercice 2 : Séparation des Produits
// ========================================================================
// Objectif : Séparez les produits en deux catégories : téléphones et consoles.
//
// 1. Créez deux constantes pour stocker les téléphones et les consoles.
// 2. Affichez le contenu de ces deux constantes dans la console.
// 3. Affichez uniquement l'objet représentant l'iPhone 13.
// 4. Affichez uniquement l'objet représentant la Playstation 4.

// ========================================================================
// Exercice 3 : Fusion des Tableaux
// ========================================================================
// Objectif : Fusionnez les tableaux de consoles et de téléphones.
//
// 1. Fusionnez les tableaux "consoles" et "téléphones" en une constante "products".
// 2. Affichez le contenu de "products" dans la console.

// ========================================================================
// Exercice 4 : Extraction des Marques
// ========================================================================
// Objectif : Extrayez toutes les marques présentes dans "products".
//
// 1. Stockez les marques dans un nouveau tableau.
// 2. Affichez ce nouveau tableau dans la console.

// ========================================================================
// Exercice 5.1 : Filtrage par Marque
// ========================================================================
// Objectif : Sélectionnez les produits des marques Samsung et Sony.
//
// 1. Extrayez les produits des marques Samsung et Sony dans un nouveau tableau.
// 2. Affichez ce nouveau tableau dans la console.

// ========================================================================
// Exercice 5.2 : Fonction de Filtrage par Marque
// ========================================================================
// Objectif : Créez une fonction pour filtrer les produits par marque.
//
// 1. La fonction accepte une chaîne "brand" pour le nom de la marque.
// 2. La fonction accepte un tableau "products" pour les produits.
// 3. Retournez un tableau des produits de la marque spécifiée.

// ========================================================================
// Exercice 6.1 : Calcul des Ventes Totales
// ========================================================================
// Objectif : Calculez le total des ventes pour Nintendo et Apple.
//
// 1. Calculez le total des ventes pour les consoles Nintendo et les téléphones Apple.
// 2. Affichez ces totaux dans la console.
// 3. Utilisez une seule boucle pour le calcul.

// ========================================================================
// Exercice 6.2 : Fonction pour le Total des Ventes par Marque
// ========================================================================
// Objectif : Calculez le total des ventes pour une marque spécifiée.
//
// 1. Créez une fonction qui prend "brand" pour le nom de la marque.
// 2. La fonction prend un tableau "products" pour les produits.
// 3. Retournez le total des ventes pour la marque spécifiée.
