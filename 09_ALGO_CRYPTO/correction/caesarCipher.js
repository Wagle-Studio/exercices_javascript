console.log('loaded script: ceaserCipher - correction à venir');

// ========================================================================
// Implémentation du Chiffrement et Déchiffrement par Décalage
// ========================================================================
// Objectifs :
// - Comprendre et appliquer le principe du chiffrement par décalage (Chiffre de César).
// - Créer un algorithme de chiffrement avec une clé de décalage variable.
// - Développer un algorithme de déchiffrement connaissant la clé.

// Ressource utile :
// Consultez l'article Wikipedia sur le chiffrement par décalage pour plus d'informations :
// https://fr.wikipedia.org/wiki/Chiffrement_par_d%C3%A9calage

// ========================================================================
// Exercice 1 : Chiffrement
// ========================================================================
// Objectif : Écrire une fonction pour chiffrer un message en utilisant une clé de décalage.

// Instructions :
// 1. Écrivez une fonction `chiffrer` qui prend une chaîne de caractères (message) et un entier (clé de décalage).
// 2. Décalez chaque lettre du message vers l'avant dans l'alphabet d'un nombre de positions égal à la clé.
//    Exemple : Avec une clé de 3, 'A' devient 'D', 'B' devient 'E', etc.
// 3. Les caractères non alphabétiques doivent rester inchangés.
// 4. La fonction doit retourner le message chiffré.

// ========================================================================
// Exercice 2 : Déchiffrement
// ========================================================================
// Objectif : Écrire une fonction pour déchiffrer un message en utilisant la clé de décalage.

// Instructions :
// 1. Écrivez une fonction `dechiffrer` qui prend une chaîne de caractères (message chiffré) et un entier (clé de décalage).
// 2. Décalez chaque lettre du message chiffré vers l'arrière dans l'alphabet d'un nombre de positions égal à la clé.
// 3. Les caractères non alphabétiques doivent rester inchangés.
// 4. La fonction doit retourner le message déchiffré.

// Exemples :
// - `chiffrer("Bonjour", 3)` devrait renvoyer "Erqmrxu".
// - `dechiffrer("Erqmrxu", 3)` devrait renvoyer "Bonjour".

// Contraintes et Conseils :
// - Gérez correctement le passage de 'Z' à 'A' dans l'alphabet, et vice-versa.
// - Traitez les lettres majuscules et minuscules.
// - Testez vos fonctions avec différentes clés de décalage et messages.
