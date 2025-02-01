export default class Task {
  /**
   * Propriété privée "#id" indique l'identifiant unique de la tâche à faire.
   */
  #id;

  /**
   * Le préfixe "#" indique que la propriété est privée et ne peut pas être accédée en dehors de la classe.
   * Cela renforce l'encapsulation et la sécurité de la classe.
   *
   * Propriété privée "#title" indique le titre de la tâche à faire.
   */
  #title;

  /**
   * Propriété privée "#deadline" indique la date limite pour réaliser la tâche à faire.
   */
  #deadline;

  /**
   * Propriété privée "#priority" indique le niveau de priorité de la tâche à faire.
   * - 0 : la tâche n'est pas prioritaire.
   * - 1 : la tâche est prioritaire.
   * - 2 : la tâche est urgente.
   */
  #priority;

  /**
   * Le constructeur permet de créer une nouvelle instance de Task avec un titre et une date limite de réalisation.
   * Il initialise les propriétés "#title", "#deadline", "#priority" de l'objet Task avec les données fournies en paramètres.
   *
   * @param {string} title Le titre de la tâche.
   * @param {Date} deadline La date limite de réalisation de la tâche.
   * @param {number} priority Le niveau de priorité de la tâche.
   */
  constructor(title, deadline, priority) {
    this.#id = Math.floor(Math.random() * 9999) + 1;

    this.#title = title;
    this.#deadline = deadline;
    this.#priority = priority;
  }

  /**
   * @returns {number} L'identifiant unique de la tâche à faire.
   */
  getId() {
    return this.#id;
  }

  /**
   * Cette méthode permet d'accéder en lecture au titre de la tâche stocké dans la propriété privée "#title".
   * Elle fournit un moyen sûr de récupérer le titre sans permettre la modification directe.
   *
   * @returns {string} Le titre de la tâche.
   */
  getTitle() {
    return this.#title;
  }

  /**
   * Cette méthode permet de définir le titre de la tâche stocké dans la propriété privée "#title".
   * Elle fournit un moyen sûr de définir le titre de la tâche sans permettre la modification directe de l'intitulé.
   *
   * @param {string} title Le nouveau titre de la tâche.
   */
  setTitle(title) {
    this.#title = title;
  }

  /**
   * @returns {Date} La date limite de réalisation de la tâche.
   */
  getDeadline() {
    return this.#deadline;
  }

  /**
   * @param {Date} deadline La nouvelle date limite de réalisation de la tâche.
   */
  setDeadline(deadline) {
    this.#deadline = deadline;
  }

  /**
   * @returns {number} Le niveau de priorité de la tâche à faire.
   */
  getPriority() {
    return this.#priority;
  }

  /**
   * @param {number} priority Le nouveau niveau de priorité de la tâche à faire
   */
  setPriority(priority) {
    this.#priority = priority;
  }

  /**
   * Crée le markup HTML pour la tâche.
   * Cette méthode génère un conteneur HTML pour la tâche, incluant un bouton de validation, le titre et la date limite.
   * Elle utilise les propriétés privées "#title", "#deadline", "#priority" pour remplir le contenu.
   *
   * @returns {HTMLElement} Le conteneur HTML de la tâche.
   */
  createTaskMarkup() {
    const taskContainer = document.createElement("div");

    const taskValidateButton = document.createElement("button");
    taskValidateButton.classList.add("validateTaskButton");
    taskValidateButton.dataset.taskId = this.#id;

    switch (this.#priority) {
      case "1":
        taskValidateButton.classList.add("priority");
        break;
      case "2":
        taskValidateButton.classList.add("urgent");
        break;
      default:
        taskValidateButton.classList.add("notPriority");
    }

    const taskTitle = document.createElement("p");
    taskTitle.innerText = this.#title;

    const taskDeadline = document.createElement("p");
    taskDeadline.innerText = new Date(this.#deadline).toDateString();

    taskContainer.append(taskValidateButton, taskTitle, taskDeadline);

    return taskContainer;
  }
}
