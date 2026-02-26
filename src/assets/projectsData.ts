export const projects = [
  {
    id: 1,
    name: "Site portfolio",
    context: "Projet perso présentation",
    desc: [
      "Site portfolio pour me présenter et présenter mes différents projets, qu'ils soient universitaires ou non.",
    ],
    stack: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vite", "pnpm"],
    image: "./ProjectsImages/portfolio.png",
    gh_link:"https://github.com/AntonyLeclerc/antony-portfolio",
  },
  {
    id: 2,
    name: ["Deepfakes", "Stage de fin d'études"],
    context: "Stage de fin d'études de M2",
    location: "IRCAM",
    website: "https://www.ircam.fr/",
    exemple: "http://youtu.be/P-hiO4Kpcd0",
    desc: [
      "Mise en place d'une pipeline permettant la génération d'un Deepfake audio et vidéo d'une personnalité Française, pour permettre par la suite l'entraînement d'autres réseaux de neurones destinés à détecter si une vidéo d'une personnalité est réelle ou non.",
      "Utilisation d'outils de l'état de l'art pour l'animation de l'image, la modification de voix, et la synchronisation labiale. Entraînement de modèles destinés à transformer une voix pilote en une voix cible, puis amélioration de l'image par un modèle de diffusion avec pytorch.",
      "Evaluation objective du réalisme des deepfakes avec d'autres outils de l'état de l'art comme insightface et des métriques utilisant la similarité cosinus. Résultat de l'ordre de 50% de réalisme puis 60% après diffusion.",
    ],
    stack: [
      "Python",
      "PyTorch",
      "FFMPEG",
      "Machine Learning",
      "Deep Learning",
      "Modèles de diffusion",
    ],
    image: "./ProjectsImages/deepfake.png",
    gh_link:"https://github.com/AntonyLeclerc/Stage",
  },
  {
    id: 3,
    name: [
      "LOTO",
      "Projet et Stage de M1"
    ],
    context: "Projet de recherche de M1 suivi d'un stage",
    location: "LIP 6",
    website: "https://www.lip6.fr/",
    desc: [
      "Rognage automatique et reconnaissance de numéros sur surface sphérique / non plane, et application au tirage du LOTO",
      "Création d'algorithmes pour rogner des images de boules de LOTO sur les numéros inscrits, et passage de l'image à un réseau de neurones convolutionnel pour faire de la prédiction de numéro.",
      "Utilisation des librairies opencv-python pour la lecture des images et la détrection des numéros, et tensorflow pour la création de réseaux de neurones convolutionnels.",
    ],
    stack: [
      "Python",
      "TensorFlow",
      "opencv-python",
      "Machine Learning",
      "Deep Learning",
    ],
    image: "./ProjectsImages/loto.png",
    gh_link:"https://github.com/AntonyLeclerc/ProjetLoto",
  },
];
