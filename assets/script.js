const slides = [
	{
	  "image": "slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image": "slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];
// Ajout des event listeners sur les flèches
document.querySelector('#banner .arrow_left').addEventListener('click', () => {
	console.log("Flèche gauche cliquée !");
	updateActiveDot(); 
	goToSlide(currentIndex - 1);
  });
  
  document.querySelector('#banner .arrow_right').addEventListener('click', () => {
	console.log("Flèche droite cliquée !");
	updateActiveDot(); 
	goToSlide(currentIndex + 1);
  });
  

  // Fonction pour créer les points
  function createDots() {
	const dotsContainer = document.querySelector('.dots');
  
	// Supprime les points existants
	dotsContainer.innerHTML = '';
  
	// Ajoute un point pour chaque slide
	slides.forEach((slide, index) => {
	  const dot = document.createElement('div');
	  dot.classList.add('dot');
	  dotsContainer.appendChild(dot);
  
	  // Ajoute un écouteur d'événement pour changer de slide lors du clic sur le point
	  dot.addEventListener('click', () => {
		goToSlide(index);
	  });
	});
  
	// Sélectionne le premier point comme point actif
	dotsContainer.firstChild.classList.add('dot_selected');
  }
  
  // Appele la fonction pour créer les points lors de l'initialisation du slider
  createDots();
  
  let currentIndex = 0; // Indice de la diapositive actuelle
  
  // Fonction pour aller à une diapositive spécifique
  function goToSlide(index) {
	// Vérifie les limites du tableau
	if (index < 0) {
	  index = slides.length - 1;
	} else if (index >= slides.length) {
	  index = 0;
	}
  
	currentIndex = index;
  
	// Met à jour le point actif
	updateActiveDot();
  
	// Met à jour l'image
	updateSlide();
  
	// Met à jour le texte correspondant à l'image
	updateSlideText();
  }
  
  // Fonction pour mettre à jour le point actif
  function updateActiveDot() {
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, index) => {
	  if (index === currentIndex) {
		dot.classList.add('dot_selected');
	  } else {
		dot.classList.remove('dot_selected');
	  }
	});
  }
  
  // Fonction pour mettre à jour l'image
  function updateSlide() {
	const bannerImage = document.querySelector('.banner-img');
	const imagePath = `./assets/images/slideshow/${slides[currentIndex].image}`;
	bannerImage.setAttribute('src', imagePath);
  }
  
  // Fonction pour mettre à jour le texte correspondant à l'image
  function updateSlideText() {
	const tagLine = document.querySelector('#banner p');
	tagLine.innerHTML = slides[currentIndex].tagLine;
  }
  
  // Écouteur d'événement pour la flèche droite
  document.querySelector('#banner .arrow_right').addEventListener('click', () => {
	goToSlide(currentIndex + 1);
  });
  
  // Écouteur d'événement pour la flèche gauche
  document.querySelector('#banner .arrow_left').addEventListener('click', () => {
	goToSlide(currentIndex - 1);
  });
  
  // Ajout d'un écouteur d'événement pour gérer le défilement automatique
  document.addEventListener('DOMContentLoaded', () => {
	setInterval(() => {
	  goToSlide(currentIndex + 1);
	}, 5000); // Changement d'image toutes les 5 secondes 
  });
  