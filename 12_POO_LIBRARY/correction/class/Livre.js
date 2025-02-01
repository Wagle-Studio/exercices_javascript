export class Livre {
  #titre;
  #auteur;
  #publication;

  constructor(titre, auteur, publication) {
    this.#titre = titre;
    this.#auteur = auteur;
    this.#publication = publication;
  }

  getTitre() {
    return this.#titre;
  }

  setTitre(titre) {
    this.#titre = titre;
  }

  getAuteur() {
    return this.#auteur;
  }

  setAuteur(auteur) {
    this.#auteur = auteur;
  }

  getPublication() {
    return this.#publication;
  }

  setPublication(publication) {
    this.#publication = publication;
  }

  afficherInfos() {
    return `${this.#titre} par ${this.#auteur}, publié en ${
      this.#publication
    }.`;
  }
}
