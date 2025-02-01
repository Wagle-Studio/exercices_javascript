import { Horde } from "./Horde.js";

export class Voleur extends Horde {
  #dague;

  constructor(dague, vie, pouvoir, force) {
    super(vie, pouvoir, force);
    this.#dague = dague;
  }

  volerUnInconnu() {
    console.log(
      "Voleur à volé un inconnu avec " + this.force + " point de force"
    );
  }
}
