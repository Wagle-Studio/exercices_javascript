// ========================================================================
// Classe Task
// ========================================================================
// Objectif : Créez une classe Task pour représenter une tâche individuelle dans une TodoList.

// 1. Propriétés privées :
//    a. `#id` : Un identifiant unique pour chaque tâche. Utilisez `Math.floor(Math.random() * 9999) + 1` pour générer un ID aléatoire.
//    b. `#title` : Le titre de la tâche.
//    c. `#deadline` : La date limite pour réaliser la tâche.
//    d. `#priority` : Le niveau de priorité de la tâche, où "0" est non prioritaire, "1" est prioritaire, et "2" est urgent.

// 2. Constructeur :
//    a. Le constructeur doit accepter `title`, `deadline`, et `priority` en tant que paramètres.
//    b. Initialisez `#id` avec un ID aléatoire.
//    c. Initialisez `#title`, `#deadline`, et `#priority` avec les valeurs fournies.

// 3. Méthodes d'accès :
//    a. `getId()` : Retourne l'identifiant unique de la tâche.
//    b. `getTitle()` et `setTitle(title)` : Pour obtenir et définir le titre de la tâche.
//    c. `getDeadline()` et `setDeadline(deadline)` : Pour obtenir et définir la date limite de la tâche.
//    d. `getPriority()` et `setPriority(priority)` : Pour obtenir et définir la priorité de la tâche.

// 4. Affichage :
//    a. `createTaskMarkup()` : Génère et retourne le HTML nécessaire pour afficher la tâche. Cette méthode doit créer un conteneur `div`,
//       inclure un bouton pour valider la tâche (avec gestion de la priorité par classes CSS), le titre, et la date limite de la tâche.

// Notes :
// - Assurez-vous d'utiliser correctement les propriétés privées et de fournir des méthodes d'accès sécurisées pour modifier ces propriétés.
// - Lors de la génération du markup HTML, utilisez les propriétés de l'instance pour remplir les données pertinentes.
