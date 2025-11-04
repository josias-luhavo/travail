document.getElementById('year').textContent = new Date().getFullYear();

// Projets dynamiques
const projects = [
  {
    title: "Gestion de bibliothèque",
    description: "Application Windows Forms pour gérer les emprunts et retours de livres.",
    tech: "C#, MySQL, .NET"
  },
  {
    title: "Système de location de voitures",
    description: "Plateforme complète pour la gestion des locations, clients et factures.",
    tech: "C#, MySQL, Windows Forms"
  },
  {
    title: "Supervision réseau universitaire",
    description: "Mise en place d'une infrastructure réseau stable et sécurisée.",
    tech: "Cisco, Mikrotik, Linux"
  },
  {
    title: "Site vitrine PME",
    description: "Site responsive et moderne avec intégration de formulaire de contact.",
    tech: "HTML, CSS, JavaScript"
  }
];

const grid = document.getElementById('projects-grid');

projects.forEach(proj => {
  const card = document.createElement('div');
  card.classList.add('project-card');
  card.innerHTML = `
    <h3>${proj.title}</h3>
    <p>${proj.description}</p>
    <p><strong>Technologies:</strong> ${proj.tech}</p>
  `;
  grid.appendChild(card);
});

// Formulaire de contact
document.getElementById('contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert("Merci Josias ! Votre message a bien été préparé (simulation).");
  e.target.reset();
});
