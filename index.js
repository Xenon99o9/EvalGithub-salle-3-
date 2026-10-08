const form = document.getElementById('inscriptionForm');
const messageBox = document.getElementById('messageConfirmation');

form.addEventListener('submit', function (event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupération des données saisies par l'utilisateur
  const donnees = {
    nom: document.getElementById('nom').value.trim(),
    email: document.getElementById('email').value.trim(),
    telephone: document.getElementById('telephone').value.trim(),
    evenement: document.getElementById('evenement').value
  };

  // Affichage du message de comfirmation de la console  
  console.log('Inscription enregistrée :', donnees);

  // Message de confirmation pour l'utilisateur
  messageBox.textContent = `Merci ${donnees.nom}, votre inscription à l'événement a bien été enregistrée !`;
  messageBox.className = 'message success';

  // Réinitialisation du formulaire
  form.reset();
});