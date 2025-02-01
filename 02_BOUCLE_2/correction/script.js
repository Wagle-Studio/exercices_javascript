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
console.group("Exercice 1");
console.log(data);
console.groupEnd();

// ========================================================================
// Exercice 2 : Séparation des Produits
// ========================================================================
const phones = data.telephones;
const consoles = data.consoles;

console.group("Exercice 2");
console.log(phones);
console.log(consoles);
console.log(phones[0]); // iPhone 13
console.log(consoles[3]); // PlayStation 4
console.groupEnd();

// ========================================================================
// Exercice 3 : Fusion des Tableaux
// ========================================================================
const products = phones.concat(consoles);

console.group("Exercice 3");
console.log(products);
console.groupEnd();

// ========================================================================
// Exercice 4 : Extraction des Marques
// ========================================================================
let productBrandsExerciceFour = [];

for (let index = 0; index < products.length; index++) {
  const product = products[index];
  productBrandsExerciceFour.push(product.brand);
}

console.group("Exercice 4");
console.log(productBrandsExerciceFour);
console.groupEnd();

// ========================================================================
// Exercice 5.1 : Filtrage par Marque
// ========================================================================
let productBrandsExerciceFive = [];

for (let index = 0; index < products.length; index++) {
  const product = products[index];
  if (product.brand === "Samsung" || product.brand === "Sony") {
    productBrandsExerciceFive.push(product);
  }
}

console.group("Exercice 5.1");
console.log(productBrandsExerciceFive);
console.groupEnd();

// ========================================================================
// Exercice 5.2 : Fonction de Filtrage par Marque
// ========================================================================
function getBrandProduct(brand, products) {
  let brandProducts = [];
  for (let index = 0; index < products.length; index++) {
    const product = products[index];
    if (product.brand === brand) {
      brandProducts.push(product);
    }
  }
  return brandProducts;
}

console.group("Exercice 5.2");
const filteredBrandProducts = getBrandProduct("Apple", products);
console.log(filteredBrandProducts);
console.groupEnd();

// ========================================================================
// Exercice 6.1 : Calcul des Ventes Totales
// ========================================================================
let totalAppleSellProducts = 0;
let totalNintendoSellProducts = 0;

for (let index = 0; index < products.length; index++) {
  const product = products[index];
  if (product.brand === "Apple") {
    totalAppleSellProducts += product.estimatedTotalSales;
  }
  if (product.brand === "Nintendo") {
    totalNintendoSellProducts += product.estimatedTotalSales;
  }
}

console.group("Exercice 6.1");
console.log("Vente total d'Apple: " + totalAppleSellProducts);
console.log("Vente total de Nintendo: " + totalNintendoSellProducts);
console.groupEnd();

// ========================================================================
// Exercice 6.2 : Fonction pour le Total des Ventes par Marque
// ========================================================================
function getBrandTotalSell(brand, products) {
  let totalBrandSell = 0;
  for (let index = 0; index < products.length; index++) {
    const product = products[index];
    if (product.brand === brand) {
      totalBrandSell += product.estimatedTotalSales;
    }
  }
  return totalBrandSell;
}

console.group("Exercice 6.2");
const totalBrandSell = getBrandTotalSell("Nintendo", products);
console.log(totalBrandSell);
console.groupEnd();
