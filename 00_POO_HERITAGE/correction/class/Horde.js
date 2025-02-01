import { Personnage } from "./Personnage.js";

export class Horde extends Personnage {
  constructor(vie, pouvoir, force) {
    super(vie, pouvoir, force);
  }

  get force() {
    return super.force + 10;
  }
}
