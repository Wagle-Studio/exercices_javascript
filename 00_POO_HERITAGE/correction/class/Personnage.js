export class Personnage {
  #vie;
  #pouvoir;
  #force;

  constructor(vie, pouvoir, force) {
    this.#vie = vie;
    this.#pouvoir = pouvoir;
    this.#force = force;
  }

  get vie() {
    return this.#vie;
  }

  set vie(vie) {
    this.#vie = vie;
  }

  get pouvoir() {
    return this.#pouvoir;
  }

  set pouvoir(pouvoir) {
    this.#pouvoir = pouvoir;
  }

  get force() {
    return this.#force;
  }

  set force(force) {
    this.#force = force;
  }
}
