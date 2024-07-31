import { Theme } from "types";

export const themes: Theme[] = [
  {
    id: "bulma",
    name: "Default",
    description: "It's the default",
    cssFile: "./css/bulma.css",
    route: "/",
  },
  {
    id: "cerulean",
    name: "Cerulean",
    description: "A calm blue sky",
    cssFile: "./css/cerulean.css",
    route: "/cerulean",
  },
  {
    id: "cosmo",
    name: "Cosmo",
    description: "An ode to Metro",
    cssFile: "./css/cosmo.css",
    route: "/cosmo",
  },
  {
    id: "cyborg",
    name: "Cyborg",
    description: "Jet black and electric blue",
    cssFile: "./css/cyborg.css",
    route: "/cyborg",
    isDarkMode: true,
  },
  {
    id: "darkly",
    name: "Darkly",
    description: "Flatly in night-mode",
    cssFile: "./css/darkly.css",
    route: "/darkly",
    isDarkMode: true,
  },
  {
    id: "flatly",
    name: "Flatly",
    description: "Flat and thick",
    cssFile: "./css/flatly.css",
    route: "/flatly",
  },
  {
    id: "journal",
    name: "Journal",
    description: "Crisp like a new sheet of paper",
    cssFile: "./css/journal.css",
    route: "/journal",
  },
  {
    id: "litera",
    name: "Litera",
    description: "The medium is the message",
    cssFile: "./css/litera.css",
    route: "/litera",
  },
  {
    id: "lumen",
    name: "Lumen",
    description: "Light and shadow",
    cssFile: "./css/lumen.css",
    route: "/lumen",
  },
  {
    id: "lux",
    name: "Lux",
    description: "A touch of class",
    cssFile: "./css/lux.css",
    route: "/lux",
  },
  {
    id: "materia",
    name: "Materia",
    description: "Material is the metaphor",
    cssFile: "./css/materia.css",
    route: "/materia",
  },
  {
    id: "minty",
    name: "Minty",
    description: "A fresh feel",
    cssFile: "./css/minty.css",
    route: "/minty",
  },
  {
    id: "nuclear",
    name: "Nuclear",
    description: "A dark theme with irradiated highlights",
    cssFile: "./css/nuclear.css",
    route: "/nuclear",
    isDarkMode: true,
  },
  {
    id: "pulse",
    name: "Pulse",
    description: "A trace of purple",
    cssFile: "./css/pulse.css",
    route: "/pulse",
  },
  {
    id: "sandstone",
    name: "Sandstone",
    description: "A touch of warmth",
    cssFile: "./css/sandstone.css",
    route: "/sandstone",
  },
  {
    id: "simplex",
    name: "Simplex",
    description: "Mini and minimalist",
    cssFile: "./css/simplex.css",

    route: "/simplex",
  },
  {
    id: "slate",
    name: "Slate",
    description: "Shades of gunmetal gray",
    cssFile: "./css/slate.css",
    route: "/slate",
    isDarkMode: true,
  },
  {
    id: "solar",
    name: "Solar",
    description: "A spin on Solarized",
    cssFile: "./css/solar.css",
    route: "/solar",
    isDarkMode: true,
  },
  {
    id: "spacelab",
    name: "Spacelab",
    description: "Silvery and sleek",
    cssFile: "./css/spacelab.css",
    route: "/spacelab",
  },
  {
    id: "superhero",
    name: "Superhero",
    description: "The brave and the blue",
    cssFile: "./css/superhero.css",
    route: "/superhero",
    isDarkMode: true,
  },
  {
    id: "unicorn",
    name: "Unicorn",
    description: "Whimsy that makes you barf",
    cssFile: "./css/unicorn.css",
    route: "/unicorn",
  },
];
