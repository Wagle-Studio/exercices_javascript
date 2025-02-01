const data = [
  {
    city: "Mumbai",
    country: "Inde",
    population: 21700000,
  },
  {
    city: "Istanbul",
    country: "Turquie",
    population: 15500000,
  },
  {
    city: "Delhi",
    country: "Inde",
    population: 30300000,
  },
  {
    city: "Shanghai",
    country: "Chine",
    population: 27000000,
  },
  {
    city: "Le Caire",
    country: "Égypte",
    population: 10800000,
  },
  {
    city: "São Paulo",
    country: "Brésil",
    population: 22000000,
  },
  {
    city: "Lahore",
    country: "Pakistan",
    population: 13200000,
  },
  {
    city: "Pékin",
    country: "Chine",
    population: 21500000,
  },
  {
    city: "Dhaka",
    country: "Bangladesh",
    population: 12500000,
  },
  {
    city: "Tokyo",
    country: "Japon",
    population: 37400000,
  },
];

// ========================================================================
// Exercice 1 : Exploration des Données
// ========================================================================
console.group("Exercice 1");
console.log(data);
console.log(data[5]);
console.groupEnd();

// ========================================================================
// Exercice 2 : Calcul de la Population Totale
// ========================================================================
let totalPopulationExerciceTwo = 0;
for (let index = 0; index < data.length; index++) {
  totalPopulationExerciceTwo += data[index].population;
}

console.group("Exercice 2");
console.log(totalPopulationExerciceTwo);
console.groupEnd();

// ========================================================================
// Exercice 2.1 : Fonction de Calcul de la Population Totale
// ========================================================================
function calculTotalPopulation(arrayOfCountries) {
  return arrayOfCountries.reduce((acc, cur) => acc + cur.population, 0);
}

const totalPopulation = calculTotalPopulation(data);

console.group("Exercice 2.1");
console.log(totalPopulation);
console.groupEnd();

// ========================================================================
// Exercice 3 : Affichage de la Population par city
// ========================================================================
console.group("Exercice 3");
data.forEach((city) =>
  console.log(`La ville ${city.city} a ${city.population} habitants`)
);
console.groupEnd();

// ========================================================================
// Exercice 3.1 : Fonction d'Affichage de la Population
// ========================================================================
function logCityPopulation(cityName, cityPopulation) {
  console.log(`La ville ${cityName} a ${cityPopulation} habitants`);
}

console.group("Exercice 3.1");
data.forEach((city) => logCityPopulation(city.city, city.population));
console.groupEnd();

// ========================================================================
// Exercice 4 : Filtrage des citys par Population
// ========================================================================
let citiesOverTwentyMillion = data
  .filter((city) => city.population > 20000000)
  .map((city) => city.city);

console.group("Exercice 4");
console.log(citiesOverTwentyMillion);
console.groupEnd();

// ========================================================================
// Exercice 5 : Tri des citys par Population Décroissante
// ========================================================================
let citiesSortedByPopulation = [...data].sort(
  (a, b) => b.population - a.population
);

console.group("Exercice 5");
console.log(citiesSortedByPopulation);
console.groupEnd();
