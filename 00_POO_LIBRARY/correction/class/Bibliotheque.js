export class Bibliotheque {
  #livres;

  constructor(livres = []) {
    this.#livres = livres;
  }

  getLivres() {
    return this.#livres;
  }

  setLivres(livres) {
    this.livres = livres;
  }

  ajouterLivre(livre) {
    this.#livres.push(livre);
  }

  afficherBibliothèque() {
    console.group("La biliothèque contient");
    for (let i = 0; i < this.getLivres().length; i++) {
      const livre = this.#livres[i];
      console.log(livre.afficherInfos());
    }

    console.groupEnd();
  }
}
