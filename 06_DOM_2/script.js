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
// Objectif : Familiarisez-vous avec les structures des tableaux fournis.
//
// 1. Affichez les données du tableau "telephones" dans la console.
// 2. Affichez les données du tableau "utilisateurs" dans la console.

// ========================================================================
// Exercice 2 : Vérification du Stock
// ========================================================================
// Objectif : Indiquez la disponibilité du stock pour un téléphone sélectionné.
//
// 1. Lorsqu'un téléphone est sélectionné et la recherche soumise :
//    a. Affichez dans le paragraphe avec l'ID 'infoExo1' :
//       - Un message confirmant la disponibilité et le nombre en stock si disponible.
//       - Un message invitant à revenir plus tard en cas d'indisponibilité.

// ========================================================================
// Exercice 3 : Authentification Utilisateur
// ========================================================================
// Objectif : Gérez l'authentification des utilisateurs.
//
// 1. Lorsqu'une adresse email et un mot de passe valides sont saisis :
//    a. Affichez le message de succès dans le paragraphe avec l'ID 'successExo2',
//       incluant le nom, le prénom et le rôle de l'utilisateur.
//
// 2. Lorsqu'une adresse email et un mot de passe invalides sont saisis :
//    a. Affichez le message d'erreur dans le paragraphe avec l'ID 'errorExo2'.
