// Code exécuté au chargement de la page.
window.onload = function () {
  // S'il y a un élément avec la clé "couleur" sauvegardé dans le localStorage.
  if (localStorage.getItem("couleur") !== null) {
    // Assigne la couleur sauvegardée dans le localStorage comme valeur de l'input couleur.
    document.getElementById("couleur").value = localStorage.getItem("couleur");

    // Exécute la fonction UpdateBackgroundColor.
    UpdateBackgroundColor();
  }
};

// Fonction chargée de changer la couleur de la page selon la valeur de l'input couleur.
function UpdateBackgroundColor() {
  // Récupère la valeur de l'input couleur.
  const inputColorValue = document.getElementById("couleur").value;

  // Récupère l'élément HTML avec l'id "exerciceBody".
  const exerciceBody = document.getElementById("exerciceBody");

  // Applique la couleur sélectionnée dans l'input couleur au corps de la page.
  exerciceBody.style.backgroundColor = inputColorValue;

  // Crée / met à jour la valeur sauvegardée dans le localStorage sous la clé "couleur".
  localStorage.setItem("couleur", inputColorValue);
}

// Fonction chargée d'afficher le paragraphe de succès si la couleur sélectionnée est ma préférée.
function afficherMessage() {
  const message = "<p>Très bon choix ! Cette couleur est magnifique ! ☻</p>";

  // Récupère l'élément HTML avec l'id "encartMessage".
  const messageBox = document.getElementById("encartMessage");

  // Récupère la valeur de l'input couleur.
  const inputColorValue = document.getElementById("couleur").value;

  // Ma couleur préférée.
  const favoriteColor = "#326a1a";

  if (inputColorValue === favoriteColor) {
    // Enlève la classe "invisible", ajoute la classe "visible" et le contenu du message si la couleur est la préférée.
    messageBox.classList.remove("invisible");
    messageBox.classList.add("visible");
    messageBox.innerHTML = message;
  }
}

// Fonction chargée d'exécuter les fonctions de changement de couleurs + message succès.
function ChangerCouleurEtAfficherMessage() {
  UpdateBackgroundColor();
  afficherMessage();
}
