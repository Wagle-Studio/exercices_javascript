// ========================================================================
// Exercice 1 : Création et Utilisation d'une Classe pour Gérer une Barre de Vie
// ========================================================================
// Objectif : Pratiquer la création d'une classe et l'instanciation d'objets
// pour gérer une barre de vie dans un jeu.

// 1. Définissez une classe `BarreDeVie` avec les propriétés : `id`, `vie` (points de vie) et
//    `couleur` (couleur de la barre en fonction des points de vie).

// 2. Définissez le `constructor`, attendant une valeur pour `vie` et une pour `couleur`,
//    `couleur` prenant par défaut la valeur "green".

// 3. Dans le constructeur, utilisez ce code pour une valeur aléatoire de `id` :
//    `Math.floor(Math.random() * 9999) + 1`

// 4. Créez une instance de `BarreDeVie` et utilisez `console.log` pour vérifier.

// ========================================================================
// Exercice 2 : Ajout de Méthodes pour Modifier les Points de Vie
// ========================================================================
// Objectif : Évoluer `BarreDeVie` par l'ajout de méthodes pour incrémenter
// et décrémenter les points de vie, avec mise à jour de la couleur de la barre.

// 1. Ajoutez `incrementLife` sans paramètres. Elle augmente la vie de 10, sans dépasser 100.

// 2. Ajoutez `decrementLife` réduisant la vie de 10, sans tomber sous 0.

// 3. Testez ces méthodes via une instance de `BarreDeVie` et `console.log`.
//    Instancier votre barre de vie puis décrémenter deux fois puis incrémenter une fois.
//    Utilisez console.log entre chaque action pour vérifier que cela fonctionne correctement.

// ========================================================================
// Exercice 3 : Création d'une Méthode pour Générer l'Élément HTML de la Barre de Vie
// ========================================================================
// Objectif : Développer dans `BarreDeVie` une méthode pour créer et retourner
// l'élément HTML de la barre de vie.

// 1. Ajoutez `createLifeBare` sans paramètres.

// 2. Créez un `div` pour la barre, avec la classe `lifeBareContainer`.

// 3. Créez un `div` pour la barre de vie, avec la classe `lifeBare`,
//    définissez `width` avec la propriété `life` avec un "%" (90 point de vie = 90%),
//    définissez `background-color`  avec la propriété `color`,
//    et l'`id` selon la propriété `id`.

// 4. Insérez la `div` `lifeBare` dans `lifeBareContainer`.

// 5. La méthode retourne le conteneur.

// 6. Testez `createLifeBare` avec une instance de `BarreDeVie` et ajoutez
//    le résultat dans le HTML, par exemple dans l'élément `#targetLifeBare1`.

// ========================================================================
// Exercice 4 : Mise à Jour de la Valeur Visuelle de la Barre de Vie
// ========================================================================
// Objectif : Ajouter dans `BarreDeVie` une méthode pour actualiser l'affichage
// HTML de la barre de vie selon les changements de propriétés.

// 1. Ajoutez `updateLifeBareValue` sans paramètres.

// 2. Récupérez l'élément HTML de la barre via `id` avec `document.getElementById`.

// 3. Mettez à jour la `width` de cet élément selon `life` (attention au "%").

// 4. Changez la `background-color` selon `color`.

// 5. Testez `updateLifeBareValue` après avoir modifié `life` ou `color`.

// ========================================================================
// Exercice 5 : Création de Boutons pour Modifier les Points de Vie
// ========================================================================
// Objectif : Enrichir `BarreDeVie` avec des méthodes pour des boutons
// augmentant ou diminuant la vie et actualisant l'affichage.

// 1. Ajoutez `createIncrementButton` sans paramètres.
//    a. Créez un `button` "Augmenter +".
//    b. Ajoutez un écouteur pour `incrementLife` et `updateLifeBareValue` au clic.
//    c. Retournez le `button`.

// 2. Ajoutez `createDecrementButton` sans paramètres.
//    a. Créez un `button` "Diminuer -".
//    b. Ajoutez un écouteur pour `decrementLife` et `updateLifeBareValue` au clic.
//    c. Retournez le `button`.

// 3. Testez ces méthodes avec une instance de `BarreDeVie` et intégrez les boutons
//    dans le HTML pour observer les changements de la barre de vie.

// ========================================================================
// Exercice 6 : Intégration des Éléments de la Barre de Vie dans le Document HTML
// ========================================================================
// Objectif : Développer dans `BarreDeVie` une méthode pour insérer la barre de vie
// et les boutons dans un élément HTML via son identifiant.

// 1. Ajoutez `injectIntoHtml` acceptant `htmlTargetId`, l'identifiant de l'élément cible.

// 2. Utilisez `document.getElementById` avec `htmlTargetId` pour l'élément cible.

// 3. Générez l'élément HTML de la barre de vie avec `createLifeBare`.

// 4. Créez les boutons avec `createIncrementButton` et `createDecrementButton`.

// 5. Insérez la barre de vie et les boutons dans l'élément cible avec `append`.

// 6. Testez `injectIntoHtml` avec l'identifiant d'un élément HTML pour intégrer
//    la barre de vie et vérifiez le fonctionnement des interactions.

// ========================================================================
// Résultat Final
// ========================================================================
// Une fois les exercices précédents réalisés je n'ai besoin que de ces 3 lignes de code pour créer
// ma barre de vie totalement fonctionnelle.

// import { LifeBare } from "./class/LifeBare.js";
// const lifeBare1 = new LifeBare(100);
// lifeBare1.injectIntoHtml("targetLifeBare1");
