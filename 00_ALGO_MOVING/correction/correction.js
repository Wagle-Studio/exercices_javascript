function delay(ms) {
  // Crée une pause dans l'exécution du code pour une durée spécifiée en millisecondes (`ms`).
  // Retourne une promesse qui se résout après le délai, permettant l'utilisation avec `await` dans les fonctions asynchrones.
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function getStorageLength(storageId) {
  const storage = document.getElementById(storageId);
  const storageLength = storage.children.length;

  // Retourne le nombre d'éléments (cartons) dans le conteneur spécifié par `storageId`.
  return storageLength;
}

async function moveBoxFromStorageToAnOther(
  initialStorageId,
  nextStorageId,
  truckCapacity
) {
  const initialStorage = document.getElementById(initialStorageId);
  const nextStorage = document.getElementById(nextStorageId);

  if (!initialStorage || !nextStorage) return;

  // Déplace les cartons d'un conteneur à un autre à intervalles réguliers, limité par `truckCapacity`.
  for (let i = 0; i < truckCapacity; i++) {
    // Attend avant de déplacer le prochain carton.
    await delay(500);

    // Effectue le déplacement seulement si le conteneur initial contient des cartons.
    if (initialStorage.children.length > 0) {
      const movingBox = initialStorage.children[0];
      nextStorage.append(movingBox);
    }
  }
}

async function handleCompleteTravel(truckCapacity) {
  // Simule un voyage de déménagement : charge les cartons, attend, puis les décharge.
  moveBoxFromStorageToAnOther(
    "toRelocateStorage",
    "movingStorage",
    truckCapacity
  );

  // Utilise `delay` pour simuler le temps de chargement basé sur `truckCapacity`.
  await delay(truckCapacity * 500 + 1500);

  // Simule un voyage de déménagement : charge les cartons, attend, puis les décharge.
  moveBoxFromStorageToAnOther("movingStorage", "movedStorage", truckCapacity);

  // Utilise `delay` pour simuler le temps de déchargement basé sur `truckCapacity`.
  await delay(truckCapacity * 500 + 1500);
}

async function handleCompleteRelocation(boxToMove, truckCapacity) {
  await handleCompleteTravel(truckCapacity);
  const currentToRelocateStorageLength = getStorageLength("toRelocateStorage");
  const currentMovedStorageLength = getStorageLength("movedStorage");

  // Calcul le nombre total de cartons déplacés.
  const movedBoxValue = currentMovedStorageLength;

  // Calcule le nombre de voyages en divisant le nombre de cartons déplacés par la capacité du camion,
  // arrondi au nombre supérieur pour inclure les voyages partiellement remplis.
  const travelValue = Math.ceil(movedBoxValue / truckCapacity);

  // Met à jour les compteurs pour le nombre total de cartons déplacés et le nombre total de voyages effectués.
  updateCounters(movedBoxValue, travelValue);

  // Gère le processus de déménagement complet. Répète les voyages jusqu'à ce que tous les cartons soient déplacés.
  // Utilise la récursivité pour gérer les voyages successifs jusqu'à ce que le stockage initial soit vide.
  if (currentToRelocateStorageLength > 0) {
    handleCompleteRelocation(boxToMove, truckCapacity);
  }

  return;
}

function updateCounters(movedBoxValue, travelValue) {
  const movedBoxCounter = document.getElementById("movedBoxCounter");
  const travelCounter = document.getElementById("travelCounter");

  // Met à jour les compteurs visuels pour les cartons déplacés et le nombre de voyages effectués.
  if (movedBoxCounter && travelCounter) {
    movedBoxCounter.innerText = movedBoxValue;
    travelCounter.innerText = travelValue;
  }
}

function initializeToRelocateStorage(boxToMove) {
  // Prépare le stockage initial en créant et ajoutant des éléments 'box' pour chaque carton à déménager.
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < boxToMove; i++) {
    const box = document.createElement("div");
    box.className = "box";
    fragment.appendChild(box);
  }

  const toRelocateStorage = document.getElementById("toRelocateStorage");
  if (toRelocateStorage) {
    toRelocateStorage.appendChild(fragment);
  }
}

function insertHtmlDomElement(
  targetElementId,
  newElementMarkup,
  newElementId,
  newElementClass,
  newElementText
) {
  const htmlTargetElement = document.getElementById(targetElementId);

  if (!htmlTargetElement || !newElementMarkup) return;

  // Crée et insère un nouvel élément HTML dans le DOM, avec des options pour id, classe et texte.
  const newElement = document.createElement(newElementMarkup);
  if (newElementId) newElement.id = newElementId;
  if (newElementClass) newElement.classList.add(newElementClass);
  if (newElementText) newElement.innerText = newElementText;
  htmlTargetElement.append(newElement);

  // Supprime la classe 'invisible' de l'élément parent pour le rendre visible.
  htmlTargetElement.classList.remove("invisible");
}

function doesHtmlDomElementExist(elementId) {
  // Vérifie si un élément avec l'ID spécifié existe dans le DOM. Retourne un booléen.
  return document.getElementById(elementId);
}

function displayErrorMessage(containerId, errorElementId, errorMessage) {
  const errorAlreadyDisplayed = doesHtmlDomElementExist(errorElementId);

  // Affiche un message d'erreur sous un élément spécifié, sauf s'il est déjà affiché.
  if (!errorAlreadyDisplayed) {
    insertHtmlDomElement(
      containerId,
      "p",
      errorElementId,
      "errorMessage",
      errorMessage
    );
  }
}

function removeHtmlDomElement(elementId) {
  const htmlTargetElement = document.getElementById(elementId);

  // Supprime l'élément spécifié du DOM, s'il existe.
  if (htmlTargetElement) {
    htmlTargetElement.remove();
  }
}

function getGameSettings() {
  const inputBoxToMove = document.getElementById("boxToMove");
  const inputTruckCapacity = document.getElementById("truckCapacity");
  const settings = { boxToMove: null, truckCapacity: null };

  // Récupère et valide les paramètres du jeu depuis les champs de saisie. Affiche des messages d'erreur si nécessaire.
  if (inputBoxToMove.value) {
    removeHtmlDomElement("boxToMoveErrorMsg");
    settings.boxToMove = parseInt(inputBoxToMove.value);
  } else {
    displayErrorMessage(
      "boxToMoveError",
      "boxToMoveErrorMsg",
      "Vous devez définir un nombre de cartons à déménager"
    );
  }

  // Récupère et valide les paramètres du jeu depuis les champs de saisie. Affiche des messages d'erreur si nécessaire.
  if (inputTruckCapacity.value) {
    removeHtmlDomElement("truckCapacityErrorMsg");
    settings.truckCapacity = parseInt(inputTruckCapacity.value);
  } else {
    displayErrorMessage(
      "truckCapacityError",
      "truckCapacityErrorMsg",
      "Vous devez définir une capacité au camion"
    );
  }

  // Retourne les paramètres du jeu ou 'null' si les paramètres sont invalides.
  return settings.boxToMove && settings.truckCapacity ? settings : null;
}

function resetBoxStorages() {
  const storageContainers = [
    "toRelocateStorage",
    "movingStorage",
    "movedStorage",
  ];

  // Réinitialise tous les conteneurs de stockage en supprimant tous leurs éléments enfants.
  storageContainers.forEach((containerId) => {
    const container = document.getElementById(containerId);
    if (container) {
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
    }
  });
}

function launchRelocation() {
  // Déclenche le processus de déménagement en réinitialisant les stockages, récupérant les paramètres du jeu, et commençant le déménagement.
  resetBoxStorages();
  const gameSettings = getGameSettings();

  if (gameSettings && gameSettings.boxToMove && gameSettings.truckCapacity) {
    initializeToRelocateStorage(gameSettings.boxToMove);
    updateCounters(0, 0);
    handleCompleteRelocation(
      gameSettings.boxToMove,
      gameSettings.truckCapacity
    );
  }
}

const launchButton = document.getElementById("launchButton");

if (launchButton) {
  launchButton.addEventListener("click", launchRelocation);
}
