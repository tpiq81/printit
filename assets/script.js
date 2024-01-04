// Définition des diapositives avec images et textes associés
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
  
  // Fonction pour sélectionner un élément du DOM
  const select = (selector) => document.querySelector(selector);
  
  // Fonction pour sélectionner tous les éléments correspondant à un sélecteur du DOM
  const selectAll = (selector) => document.querySelectorAll(selector);
  
  // Fonction pour ajouter un gestionnaire d'événements de clic à un élément
  const addClickListener = (element, callback) => element.addEventListener('click', callback);
  
  // Fonction pour créer un point indicateur (dot) et ajouter un gestionnaire d'événements pour le clic
  const createDot = (index) => {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dot.addEventListener('click', () => goToSlide(index));
	return dot;
  };
  
  // Fonction pour créer les points indicateurs pour chaque diapositive
  const createDots = () => {
	const dotsContainer = select('.dots');
	dotsContainer.innerHTML = '';
	slides.forEach((_, index) => dotsContainer.appendChild(createDot(index)));
	dotsContainer.firstChild.classList.add('dot_selected');
  };
  
  // Fonction pour mettre à jour l'image de la diapositive actuelle
  const updateSlide = () => {
	const bannerImage = select('.banner-img');
	const imagePath = `./assets/images/slideshow/${slides[currentIndex].image}`;
	bannerImage.setAttribute('src', imagePath);
  };
  
  // Fonction pour mettre à jour le texte de la diapositive actuelle
  const updateSlideText = () => {
	const tagLine = select('#banner p');
	tagLine.innerHTML = slides[currentIndex].tagLine;
  };
  
  // Fonction pour naviguer vers une diapositive spécifique en ajustant l'index
  const goToSlide = (index) => {
	currentIndex = (index + slides.length) % slides.length;
	updateActiveDot();
	updateSlide();
	updateSlideText();
  };
  
  // Fonction pour mettre à jour le point indicateur actif
  const updateActiveDot = () => {
	const dots = selectAll('.dot');
	dots.forEach((dot, index) => dot.classList.toggle('dot_selected', index === currentIndex));
  };
  
  // Ajout d'un gestionnaire d'événements de clic pour la flèche gauche avec console log
  addClickListener(select('#banner .arrow_left'), () => {
	console.log("Clic à gauche !");
	updateActiveDot();
	goToSlide(currentIndex - 1);
  });
  
  // Ajout d'un gestionnaire d'événements de clic pour la flèche droite avec console log
  addClickListener(select('#banner .arrow_right'), () => {
	console.log("Clic à droite !");
	updateActiveDot();
	goToSlide(currentIndex + 1);
  });
  
  // Création des points indicateurs et initialisation à la première diapositive
  createDots();
  let currentIndex = 0;
  goToSlide(currentIndex);
  