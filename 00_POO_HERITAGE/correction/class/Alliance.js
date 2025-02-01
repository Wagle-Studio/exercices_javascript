import { Personnage } from "./Personnage.js";

export class Alliance extends Personnage {
  constructor(vie, pouvoir, force) {
    super(vie, pouvoir, force);
  }

  get pouvoir() {
    return super.pouvoir + 10;
  }
}
