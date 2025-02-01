import { Alliance } from "./Alliance.js";

export class Archer extends Alliance {
  #arc;

  constructor(arc, vie, pouvoir, force) {
    super(vie, pouvoir, force);
    this.#arc = arc;
  }

  tirerUneFleche() {
    console.log(
      "Archer à tiré une flêche avec " + this.pouvoir + " point de pouvoir"
    );
  }
}
