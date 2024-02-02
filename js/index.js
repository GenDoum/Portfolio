function toggleLanguageDropdown() {
  var dropdown = document.getElementById("languageDropdown");
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
}

function toggleMenu() {
  var navbar = document.querySelector('.navbar');
  var menuButton = document.querySelector('.menu-button');
  var closeButton = document.querySelector('.close-button');

  if (navbar.classList.contains('show-menu')) {
    // Le menu est déjà ouvert, fermez-le en supprimant la classe show-menu
    navbar.classList.remove('show-menu');
    // Affichez le bouton de menu
    menuButton.style.display = 'inline-block';
    // Cachez le bouton de fermeture
    if (closeButton) {
      closeButton.style.display = 'none';
      // Supprimez le bouton de fermeture du DOM
      navbar.removeChild(closeButton);
    }
  } else {
    // Le menu est fermé, ouvrez-le en ajoutant la classe show-menu
    navbar.classList.add('show-menu');
    // Cachez le bouton de menu
    menuButton.style.display = 'none';
    // Créez et affichez le bouton de fermeture
    if (!closeButton) {
      closeButton = document.createElement('button');
      closeButton.className = 'close-button';
      closeButton.innerHTML = '✕';
      closeButton.onclick = toggleMenu;

      // Remplacez le bouton de menu par le bouton de fermeture dans le DOM
      navbar.appendChild(closeButton);
    } else {
      closeButton.style.display = 'inline-block';
    }
  }
}