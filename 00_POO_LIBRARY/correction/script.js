import { Livre } from "./class/Livre.js";
import { Bibliotheque } from "./class/Bibliotheque.js";
import { LivreIllustre } from "./class/LivreIllustre.js";

// ========================================================================
// Exercice 1 : Création et Utilisation d'une Classe Simple
// ========================================================================
// Objectif : Pratiquer la création d'une classe et l'instanciation d'objets
// à partir de cette classe.

const livre1 = new Livre("Into the wild", "Jon Krakauer", 1996);
const livre2 = new Livre("Atomic Habits", "James Clear", 2018);

// console.log(livre1.afficherInfos());

// ========================================================================
// Exercice 2 : Gestion d'une Collection de Livres
// ========================================================================
// Objectif : Étendre l'utilisation des classes pour gérer une collection
// d'objets.

const livres = [livre1, livre2];

const bibliotheque = new Bibliotheque(livres);

// bibliotheque.afficherBibliothèque();

const livre3 = new Livre("Plaidoyer pour l'altruisme", "Matthieu Ricard", 2013);

bibliotheque.ajouterLivre(livre3);

// bibliotheque.afficherBibliothèque();

// ========================================================================
// Exercice 3 : Pratique de l'Héritage en POO
// ========================================================================
// Objectif : Utiliser l'héritage pour spécialiser des classes.

const livreIllustre1 = new LivreIllustre(
  "Un journée à Simplon",
  "Capucine",
  "2024",
  "Guillaume.B"
);

console.log(livreIllustre1.afficherInfos());
