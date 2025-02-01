// Import des class nécessaires.
import Todolist from "./class/Todolist.js";
import Task from "./class/Task.js";

// Capture HTML où afficher la liste des choses à faire.
const htmlTodolistTarget = document.querySelector(".container > div");

// Capture HTML du bouton de soumission d'une nouvelle tâche à faire.
const htmlNewTaskSubmitButton = document.querySelector(".submitButton");

// Initialise trois objet "Task" représentant une tâche à faire.
const task1 = new Task("Ranger les placards", new Date(), "2");
const task2 = new Task("Nettoyer la voiture", new Date(), "0");
const task3 = new Task("Acheter du shampoing", new Date(), "1");

// Initialise un objet "Todolist" avec les tâches créées précédemment.
const todolist = new Todolist([task1, task2, task3]);

// Utilise la méthode "createTodolistMarkup" de l'objet "Todolist" pour générer le markupt HTML de la liste des tâches à faire.
const todolistMarkup = todolist.createTodolistMarkup();

// Insert le markup HTML de la liste des choses à faire dans le DOM HTML.
htmlTodolistTarget.appendChild(todolistMarkup);

// Ecoute l'évènement "DOMContentLoaded" pour ajouter un eventListener sur les boutons de validation d'une tâche à faire.
// Il est nécessaire d'attendre que le contenu du DOM soit chargé pour pouvoir capturer les boutons en question car ceux-ci
// sont injectés dans le DOM HTML grâce à Javascript et ne sont donc pas présent au chargement initial de la feuille HTML.
document.addEventListener("DOMContentLoaded", addValidateTaskEventListener);

// Ajoute les écouteurs d'évènements nécessaires à la validation des tâches.
function addValidateTaskEventListener() {
  // Récupère l'ensemble des éléments HTML avec la class "validateTaskButton"
  const validateTaskButtons = document.querySelectorAll(".validateTaskButton");

  // Parcours le tableau d'élément HTML et ajoute à chacun d'entre eux un eventListener
  for (let i = 0; i < validateTaskButtons.length; i++) {
    const validateTaskButton = validateTaskButtons[i];

    // L'écouteur d'évènement en question sera déclenché au clique de l'utilisateur et exécutera
    // le code nécessaire à la validation de la tâche à faire réalisée.
    validateTaskButton.addEventListener("click", validateTask);
  }
}

function validateTask(event) {
  // Lorsque l'utilisateur clique sur le bouton de validation, l'eventListener chargé d'écouter l'évènement met à disposition le paramètre de fonction "event".
  // Celui-ci contient une clé "target" qui est une référence à l'élément HTML sur lequel l'utilisateur a cliqué, ici le bouton de validation d'une tâche.
  // Cette référence à l'élément HTML cliqué me permet de récupérer l'attribut "dataset-taskId" que j'ai préalablement mise en place pour véhiculer l'ID de la tâche.
  const taskToValidateId = event.target.dataset.taskId;

  // Grâce à l'ID de la tâche cliqué je suis en capacité d'utiliser la méthode "removeTask" de l'objet "todolist" ayant pour but de supprimer une tâche de la liste.
  todolist.removeTask(taskToValidateId);

  // Utilise la fonction "refreshHtmlTodolistMarkup" et "addValidateTaskEventListener" nécessaire à :
  // - refreshHtmlTodolistMarkup : Fonctions nécessaires au rafraîchissement de la liste des tâches à faire dans le DOM HTML.
  // - addValidateTaskEventListener : Ajoute les écouteurs d'évènements nécessaires à la validation des tâches.
  refreshHtmlTodolistMarkup();
  addValidateTaskEventListener();
}

// Fonctions nécessaires au rafraîchissement de la liste des tâches à faire dans le DOM HTML.
function refreshHtmlTodolistMarkup() {
  // Capture la liste actuelle des tâches à faire.
  const currentHtmlTodolist = document.getElementById("todolist");

  // Supprime la liste récupérée.
  currentHtmlTodolist.remove();

  // Utilise la méthode "createTodolistMarkup" de l'objet "Todolist" pour générer le markupt HTML de la liste des tâches à faire.
  const todolistMarkup = todolist.createTodolistMarkup();

  // Insert le markup HTML de la liste des choses à faire dans le DOM HTML.
  htmlTodolistTarget.appendChild(todolistMarkup);
}

// Ecoute l'évènement "click" sur le bouton de soumission d'une nouvelle tâche à faire.
htmlNewTaskSubmitButton.addEventListener("click", () => {
  // Capture des inputs : "taskTitle", "taskDeadline" et "taskPriority"
  const htmlInputTaskTitle = document.getElementById("taskTitle");
  const htmlInputTaskDeadline = document.getElementById("taskDeadline");
  const htmlInputTaskPriority = document.getElementById("taskPriority");

  // Si les inputs ont pus être capturés.
  if (htmlInputTaskTitle && htmlInputTaskDeadline && htmlInputTaskPriority) {
    // Stock la valeur de chaque input dans une variable.
    const taskTitle = htmlInputTaskTitle.value;
    const taskDeadline = new Date(htmlInputTaskDeadline.value);
    const taskPriority = htmlInputTaskPriority.value;

    // Utilise la méthode "addTask" de l'objet "Todolist" pour ajouter une tâche à réaliser dans la liste des tâches à faire.
    todolist.addTask(taskTitle, taskDeadline, taskPriority);

    // Utilise la fonction "refreshHtmlTodolistMarkup" et "addValidateTaskEventListener" nécessaire à :
    // - refreshHtmlTodolistMarkup : Fonctions nécessaires au rafraîchissement de la liste des tâches à faire dans le DOM HTML.
    // - addValidateTaskEventListener : Ajoute les écouteurs d'évènements nécessaires à la validation des tâches.
    refreshHtmlTodolistMarkup();
    addValidateTaskEventListener();
  }
});
