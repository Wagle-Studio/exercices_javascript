// ========================================================================
// Exercice 1 : Création et Utilisation d'une Classe Simple
// ========================================================================
// Objectif : Pratiquer la création d'une classe et l'instanciation d'objets
// à partir de cette classe.
//
// 1. Définissez une classe `Livre` avec les propriétés : `titre`, `auteur`
//    et `année de publication`.
// 2. Ajoutez à la classe `Livre` une méthode `afficherInfos()` qui retourne
//    une chaîne de caractères contenant toutes les informations du livre,
//    sous la forme "Titre par Auteur, publié en Année."
// 3. Instanciez un objet `livre1` de la classe `Livre` avec des valeurs
//    spécifiques et utilisez la méthode `afficherInfos()` dans un console.log()
//    pour afficher ses informations.

// ========================================================================
// Exercice 2 : Gestion d'une Collection de Livres
// ========================================================================
// Objectif : Étendre l'utilisation des classes pour gérer une collection
// d'objets.
//
// 1. Définissez une classe `Bibliotheque` avec la propriété : `livres` qui sera
//    initialisé avec un tableau vide si le constructor ne reçoit pas de paramètres
//    lorsque la classe est instancié.
// 2. Cette classe doit inclure une méthode `ajouterLivre(livre)`
//    pour ajouter un objet `Livre` à la collection.
// 3. Ajoutez une méthode `afficherBibliothèque()` à la classe `Bibliothèque`
//    pour afficher les informations de tous les livres dans la collection.
// 4. Instanciez un objet `bibliotheque` de la classe `Bibliothèque` et
//    utilisez les méthodes `ajouterLivre(livre)` et `afficherBibliothèque()`
//    pour gérer et afficher la collection de livres.

// ========================================================================
// Exercice 3 : Pratique de l'Héritage en POO
// ========================================================================
// Objectif : Utiliser l'héritage pour spécialiser des classes.
//
// 1. Créez une classe `LivreIllustré` qui hérite de la classe `Livre` de
//    l'exercice 1. Ajoutez une propriété supplémentaire `illustrateur` à
//    cette classe.
// 2. Surchargez la méthode `afficherInfos()` dans la classe `LivreIllustré`
//    pour qu'elle inclue également le nom de l'illustrateur dans l'affichage
//    des informations, sous la forme "Titre par Auteur, publié en Année. Illustré par Illustrateur"
// 3. Instanciez un objet de la classe `LivreIllustré` avec des valeurs spécifiques
//    et utilisez la méthode `afficherInfos()` pour afficher ses informations.
