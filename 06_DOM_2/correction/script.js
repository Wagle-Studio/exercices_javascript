const telephones = {
  telephones: [
    {
      modele: "iphone_13",
      stock: 8,
    },
    {
      modele: "iphone_14",
      stock: 0,
    },
    {
      modele: "samsung_s14",
      stock: 3,
    },
    {
      modele: "samsung_s15",
      stock: 0,
    },
    {
      modele: "xiaomi_note_10",
      stock: 5,
    },
    {
      modele: "xiaomi_pixel_6",
      stock: 10,
    },
  ],
};

const utilisateurs = {
  utilisateurs: [
    {
      email: "wolff.kevin@protonmail.com",
      nom: "Dupont",
      prenom: "Marie",
      mot_de_passe: "aaaa",
      role: "Administrateur",
    },
    {
      email: "martin@simplon.co",
      nom: "Martin",
      prenom: "Pierre",
      mot_de_passe: "password",
      role: "Invité",
    },
    {
      email: "garcia@simplon.co",
      nom: "Garcia",
      prenom: "Ana",
      mot_de_passe: "0000",
      role: "Administrateur",
    },
    {
      email: "smith@simplon.co",
      nom: "Smith",
      prenom: "John",
      mot_de_passe: "simplon",
      role: "Invité",
    },
    {
      email: "nguyen@simplon.co",
      nom: "Nguyen",
      prenom: "Thanh",
      mot_de_passe: "admin",
      role: "Administrateur",
    },
  ],
};

// ========================================================================
// Exercice 1 : Exploration des Données
// ========================================================================
console.group("Exercice 1");
console.log(telephones);
console.log(utilisateurs);
console.groupEnd();

// ========================================================================
// Exercice 2 : Vérification du Stock
// ========================================================================
const HTMLSelectInput = document.getElementById("phone");
const HTMLSearchButton = document.getElementById("productSearchButton");
const HTMLTargetExerciceTwo = document.getElementById("infoExo1");

function verifyProductStock() {
  const selectInputValue = HTMLSelectInput.value;

  for (let index = 0; index < telephones.telephones.length; index++) {
    const productInformation = telephones.telephones[index];

    if (productInformation.modele === selectInputValue) {
      if (productInformation.stock > 0) {
        HTMLTargetExerciceTwo.innerText = `Super choix ! ${productInformation.stock} produit(s) en stock`;
      } else {
        HTMLTargetExerciceTwo.innerText = `Mince ... Nous n'avons plus de stock, revenez plus tard !`;
      }
    }
  }
}

if (HTMLSearchButton && HTMLSelectInput && HTMLTargetExerciceTwo) {
  HTMLSearchButton.addEventListener("click", verifyProductStock);
}

// ========================================================================
// Exercice 3 : Authentification Utilisateur
// ========================================================================
const HTMLEmailInput = document.getElementById("email");
const HTMLPasswordInput = document.getElementById("password");
const HTMLSuccessTarget = document.getElementById("successExo2");
const HTMLErrorTarget = document.getElementById("errorExo2");
const HTMLSubmitButton = document.getElementById("signInButton");

function verifySignInSubmition() {
  const emailInputValue = HTMLEmailInput.value;
  const passwordInputValue = HTMLPasswordInput.value;

  for (let index = 0; index < utilisateurs.utilisateurs.length; index++) {
    const userInformation = utilisateurs.utilisateurs[index];

    if (userInformation.email === emailInputValue) {
      if (userInformation.mot_de_passe === passwordInputValue) {
        HTMLSuccessTarget.innerText = `Bonjour ${userInformation.nom} ${userInformation.prenom}, vous êtes connecté en tant que ${userInformation.role}`;
      } else {
        HTMLErrorTarget.innerText = "Identifiants inconnus";
      }
    }
  }
}

if (
  HTMLEmailInput &&
  HTMLPasswordInput &&
  HTMLSuccessTarget &&
  HTMLErrorTarget &&
  HTMLSubmitButton
) {
  HTMLSubmitButton.addEventListener("click", verifySignInSubmition);
}
