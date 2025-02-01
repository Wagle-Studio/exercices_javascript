console.log('loaded script: vigenereCipher');

// ========================================================================
// Implémentation du Chiffre de Vigenère
// ========================================================================
// Objectifs :
// - Comprendre le fonctionnement du chiffre de Vigenère et sa table de correspondance.
// - Écrire un algorithme pour chiffrer un message en utilisant une clé de longueur variable.

// Ressource utile :
// Consultez l'article Wikipedia sur le chiffre de Vigenère pour plus d'informations :
// https://en.wikipedia.org/wiki/Vigen%C3%A8re_cipher

// ========================================================================
// Exercice 1 : Chiffrement avec le Chiffre de Vigenère
// ========================================================================
// Objectif : Créer une fonction pour chiffrer un texte en utilisant une clé.

// Instructions :
// 1. Créez une fonction `chiffrer_vigenere` qui prend un texte et une clé en entrée.
// 2. La clé doit se répéter pour correspondre à la longueur du message.
// 3. Associez chaque lettre à un nombre (A=0, B=1, ...). Utilisez la formule de chiffrement : Chiffré[i] = (Texte[i] + Clé[i]) % 26.
// 4. La fonction doit retourner le message chiffré.

// ========================================================================
// Exercice 2 : Déchiffrement avec le Chiffre de Vigenère
// ========================================================================
// Objectif : Écrire une fonction pour déchiffrer un texte en utilisant la clé.

// Instructions :
// 1. Écrivez une fonction `dechiffrer_vigenere` qui prend le message chiffré et la clé en entrée.
// 2. Utilisez la formule inverse pour le déchiffrement : Texte[i] = (Chiffré[i] - Clé[i] + 26) % 26.
// 3. La fonction doit retourner le message déchiffré.

// Exemples :
// - Chiffrer 'B' avec la clé 'C' donne 'D', car (1 + 2) % 26 = 3.

// Contraintes et Conseils :
// - Répétez la clé correctement pour couvrir toute la longueur du message.
// - Gérez les cas où les lettres du message ou de la clé ne sont pas en majuscules.
// - Testez vos fonctions avec divers messages et clés pour assurer leur fiabilité.
