// Sélection des éléments HTML par leurs classes
const daysEl = document.querySelector('#timeday');
const hourEl = document.querySelector('#timehour');
const minuteEl = document.querySelector('#timeminute');
const secondEl = document.querySelector('#timeseconds');

// Fonction pour calculer et mettre à jour le compte à rebours
function timeCountDown() {
  // Date actuelle
  const nowDate = new Date();

  // Date de nouvel an en millisecondes depuis l'époque (1er janvier 1970)
  const newYearDate = new Date("January 17, 2024 14:01:00").getTime();

  // Calcul de la différence de temps en millisecondes entre la date actuelle et la date de nouvel an
  const timeDifference = newYearDate - nowDate;

  // Calcul des jours, heures, minutes et secondes à partir de la différence de temps
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

  
  // Mise à jour du contenu des éléments HTML avec les valeurs calculées
  daysEl.textContent = `${days}`;
  hourEl.textContent = `${hours}`;
  minuteEl.textContent = `${minutes}`;
  secondEl.textContent = `${seconds}`;
}

// Appel initial de la fonction pour afficher le compte à rebours au chargement de la page
timeCountDown();

// Mise à jour du compte à rebours toutes les secondes
setInterval(timeCountDown, 1000);






//FOND




document.addEventListener('DOMContentLoaded', function () {
  // Tableau d'images
  var images = [
    'angela1.jpeg',
    'angela2.jpeg',
    'angela3.jpeg',
    'angela4.jpeg',
    'angela5.jpeg',
    'angela6.jpeg',
    'angela7.jpeg',
    'angela8.jpeg',
    'angela9.jpeg',
    'angela10.jpeg',
    'angela11.jpeg',
    'angela12.jpeg',
    

    
  ];

  // Choisir une image aléatoire
  var randomIndex = Math.floor(Math.random() * images.length);
  var randomImage = images[randomIndex] + '?r=' + Math.random();

  // Appliquer l'image au fond d'écran
  document.body.style.backgroundImage = 'url(' + randomImage + ')';

  console.log('Image chargée : ' + randomImage);
});

