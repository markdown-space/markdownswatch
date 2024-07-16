import { Theme } from "types";

export const themes: Theme[] = [
  {
    id: "bulma",
    name: "Bulma",
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
    id: "Lux",
    name: "Lux",
    description: "A touch of class",
    cssFile: "./css/lux.css",
    route: "/lux",
  },
];
