import Task from "./Task.js";

export default class Todolist {
  /**
   * Le préfixe "#" indique que la propriété est privée et ne peut pas être accédée en dehors de la classe.
   * Cela renforce l'encapsulation et la sécurité de la classe.
   *
   * Propriété privée "#tasks" utilisée pour stocker les tâches de la liste des tâches à faire..
   */
  #tasks;

  /**
   * Le constructeur permet de créer une nouvelle instance de Todolist avec un tableau de tâches à faire.
   * Il initialise la propriété "#tasks" de l'objet Todolist avec les données fournies en paramètres, ou un tableau vide par défaut.
   *
   * @param {Task[]} #tasks Un tableau de tâches (instances de Task) à initialiser dans la Todolist.
   */
  constructor(tasks = []) {
    this.#tasks = tasks;
  }

  /**
   * Cette méthode permet d'accéder en lecture au tableau des tâches stockés dans la propriété privée "#tasks".
   * Elle fournit un moyen sûr de récupérer le tableau des tâches sans permettre la modification directe.
   *
   * @returns {Task[]} La liste actuelle des tâches dans la Todolist.
   */
  getTasks() {
    return this.#tasks;
  }

  /**
   * Cette méthode permet de définir le tableau des tâches stockés dans la propriété privée "#tasks".
   * Elle fournit un moyen sûr de définir le tableau des tâches sans permettre la modification directe.
   *
   * @param {Task[]} tasks
   */
  setTasks(tasks) {
    this.#tasks = tasks;
  }

  /**
   * Ajoute une nouvelle tâche à la liste des tâches à faire.
   *
   * @param {string} titled Le titre de la tâche à ajouter.
   * @param {Date} deadline Le titre de la tâche à ajouter.
   * @param {number} priority Le niveau de priorité de la tâche à ajouter.
   */
  addTask(titled, deadline, priority) {
    let instanceTask = new Task(titled, deadline, priority);
    this.#tasks.push(instanceTask);
  }

  /**
   * Supprime une tâche de la liste des tâches à faire en se basant sur son ID.
   * Cette méthode parcours la liste des tâches, filtre celles dont l'identifiant ne correspond pas à l'identifiant fourni,
   * et met à jour la liste des tâches avec celles restantes, effectuant ainsi la suppression de la tâche spécifiée.
   *
   * @param {number} tasktoRemoveId L'identifiant de la tâche à supprimer de la liste des tâches.
   */
  removeTask(tasktoRemoveId) {
    let tasksToKeep = [];

    for (let i = 0; i < this.#tasks.length; i++) {
      const task = this.#tasks[i];

      if (task.getId() != tasktoRemoveId) {
        tasksToKeep.push(task);
      }
    }

    this.#tasks = tasksToKeep;
  }

  /**
   * Crée le markup HTML pour la liste des tâches à faire.
   * Cette méthode génère une liste HTML pour les tâches, incluant chacune des tâches à faire.
   * Elle utilise la propriété privée "#tasks" pour créer la liste des tâches à faire.
   *
   * @returns {HTMLElement} La liste des tâches à faire.
   */
  createTodolistMarkup() {
    const todolist = document.createElement("ul");
    todolist.id = "todolist";

    for (let i = 0; i < this.#tasks.length; i++) {
      const taskMarkup = this.#tasks[i].createTaskMarkup();
      const todolistItem = document.createElement("li");

      todolistItem.append(taskMarkup);
      todolist.append(todolistItem);
    }

    return todolist;
  }
}
