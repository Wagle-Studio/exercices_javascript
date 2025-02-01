import { Livre } from "./Livre.js";

export class LivreIllustre extends Livre {
  #illustrateur;

  constructor(titre, auteur, publication, illustrateur) {
    super(titre, auteur, publication);
    this.#illustrateur = illustrateur;
  }

  afficherInfos() {
    const infoDuLivre = super.afficherInfos();

    return `${infoDuLivre} Illustré par ${this.#illustrateur}.`;
  }
}
