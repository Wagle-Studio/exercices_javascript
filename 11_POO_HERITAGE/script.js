// ========================================================================
// Exercice 1 : Création de la Classe Personnage
// ========================================================================
// Objectif : Créer des personnages avec des classes et de l'encapsulation.

// 1. Définissez la classe `Personnage` avec des propriétés privées : `vie`, `pouvoir`,
//    `force` dans son propre fichier.
// 2. Implémentez un `constructor` pour ces propriétés.
// 3. Ajoutez des accesseurs (getters) et des mutateurs (setters).

// ========================================================================
// Exercice 2 : Héritage avec Horde et Alliance
// ========================================================================
// Objectif : Dérivez `Personnage` pour créer des factions spécifiques.

// 1. Définissez la classe `Horde` héritant de la classe `Personnage` dans son propre fichier.
//      Surchargez la méthode `get force` du parent, pour retourner la valeur actuelle + 10.

// 2. Définissez la classe `Alliance` héritant de la classe `Personnage` dans son propre fichier.
//      Surchargez la méthode `get pouvoir` du parent, pour retourner la valeur actuelle + 10.

// ========================================================================
// Exercice 3 : Spécialisation avec Voleur et Archer
// ========================================================================
// Objectif : Définir des rôles spécifiques dans les factions.

// 1. Créez `Voleur` qui étend la classe `Horde` avec une propriété `dagues`.
//      Ajoutez la méthode `volerUnInconnu` qui affichera dans la console :
//      `Le Voleur à volé un inconnu avec une force de <force_du_personnage>`

// 2. Créez `Archer` qui étend la classe `Alliance` avec une propriété `arc`.
//      Ajoutez la méthode `tirerUneFleche` qui affichera dans la console :
//      `Le Archer à tiré une flêche avec un pouvoir de <pouvoir_du_personnage>`

// ========================================================================
// Exercice 4 : Tests des Personnages
// ========================================================================
// Objectif : Instanciez et testez les fonctionnalités des personnages.

// 1. Testez `volerUnInconnu` avec une instance de `Voleur`.
// 2. Testez `tirerUneFleche` avec une instance de `Archer`.

// ========================================================================
// Résultat Final
// ========================================================================
// Utilisez ces classes pour créer et interagir avec des personnages variés.
// Explorez les interactions entre les différentes méthodes.
