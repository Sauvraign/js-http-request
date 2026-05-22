// URL de l'API : à décommenter lors de la mise en place du requêtage
// const API_URL = "https://jsonplaceholder.typicode.com/users";

// TODO : Variable pour stocker les utilisateurs
// let users = [];

/**
 * Récupère les utilisateurs depuis l'API
 *
 * A décommenter lors de la mise en placec du requêtage
 */
async function fetchUsers() {
  // TODO
  // 1. faire une requête fetch vers l'API
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    console.log(users);
    // TODO A COMPLETER

    
    // 4. appeler la fonction displayUsers()

  });
}

/**
 * Crée une carte HTML pour un utilisateur
 * @param {Object} user Un json qui contient les informations utilisateur
 * @returns {HTMLElement}
 */
function createUserCard(user) {
  const card = document.createElement("div");

  // TODO : compléter le contenu de la carte
  // card.innerHTML = '<h2>' + user.name + '</h2>';
  // card.innerHTML = '<div class="card"> <div class="card-header"> <h2>' + user.name + '</h2> </div> </div>';

  card.innerHTML = `<div class="card">
                      <div class="card-header">
                          <h2>${user.name}</h2>
                          <p>${user.username}</p>
                      </div>
                          <h3>Contact</h3>
                      <div class="bloc-pointille">
                          <p>${user.email}</p>
                          <p>${user.phone}</p>
                          <p>${user.website}</p>
                      </div>
                          <h3>Address</h3>
                      <div class="bloc-pointille">
                          <p>
                            ${user.address.street}
                            ${user.address.suite}</p>
                          <p>${user.address.city}
                            ${user.address.zipcode}
                          </p>
                      </div>
                    </div>`;

  return card;
}

/**
 * Affiche tous les utilisateurs dans la page
 */
function displayUsers() {
  // TODO
  // fetch("https://jsonplaceholder.typicode.com/users")
  // .then(response => response.json())
  // .then(users => {
  //   console.log(users);
  // });
  // 1. Récupérer l'élément #user-directory
  let userDirectoryDiv = document.getElementById("globale");

  // 2. Parcourir la liste "users"
  for (let i = 0; i < users.length; i++) {
    // 3. Créer une carte pour chaque utilisateur
    const card = createUserCard(users[i]);
    // Pour se faire, appeler la fonction "createUserCard"

    // 4. Ajouter la carte dans le DOM au bon endroit
    userDirectoryDiv.appendChild(card);
  }
}

/**
 * Point d'entrée de l'application
 */
function init() {
  displayUsers();
}

// Lancement de l'application
init();
