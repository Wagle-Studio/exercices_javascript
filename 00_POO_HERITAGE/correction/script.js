import { Archer } from "./class/Archer.js";
import { Voleur } from "./class/Voleur.js";

const nouvelArcher = new Archer("Simplon", 100, 50, 10);
nouvelArcher.tirerUneFleche();

const nouveauVoleur = new Voleur("42", 100, 10, 50);
nouveauVoleur.volerUnInconnu();
