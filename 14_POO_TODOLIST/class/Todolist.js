// ========================================================================
// Classe Todolist
// ========================================================================
// Objectif : Créez une classe Todolist pour gérer une liste de tâches.

// 1. Propriétés privées :
//    a. `#tasks` : Un tableau pour stocker les instances de la classe Task.
// Utilisez le préfixe "#" pour indiquer que cette propriété est privée.

// 2. Constructeur :
//    a. Le constructeur doit accepter un tableau de `Task` en paramètre, avec une valeur par défaut à un tableau vide.
//    b. Initialisez la propriété `#tasks` avec le paramètre fourni.

// 3. Méthodes d'accès :
//    a. `getTasks()` : Doit retourner le tableau actuel des tâches stockées dans `#tasks`.
//    b. `setTasks(tasks)` : Permet de définir le tableau des tâches. Prend un tableau de `Task` en paramètre et met à jour `#tasks`.

// 4. Gestion des tâches :
//    a. `addTask(title, deadline, priority)` : Doit créer une nouvelle instance de `Task` avec les paramètres fournis
//       et l'ajouter à `#tasks`.
//    b. `removeTask(taskId)` : Doit supprimer de `#tasks` la tâche dont l'ID correspond à `taskId`. Utilisez `getId()` de la
//       classe `Task` pour comparer les ID.

// 5. Affichage :
//    a. `createTodolistMarkup()` : Génère et retourne le HTML nécessaire pour afficher la liste des tâches.
//       Utilisez `createTaskMarkup()` de chaque instance de `Task` pour générer le HTML de chaque tâche, puis assemblez-les dans un élément `<ul>` avec l'ID "todolist".

// Notes :
// - Utilisez des boucles pour itérer sur le tableau des tâches lorsque nécessaire.
// - Faites attention à l'encapsulation en utilisant les propriétés privées et les méthodes d'accès.
