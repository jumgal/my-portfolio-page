export type IProject = {
    id: number,
  label: string;
  imgPath: string;
  title: string;
  techStack: string[];
};

export const myProjects: IProject[] = [
  {
    id: 1,
    title: "DESIGN PORTFOLIO",
    label: "DESIGN PORTFOLIO",
    imgPath: "./images/thumbnail-project-1-small.webp",
    techStack: ["HTML", "CSS"],
  },
  {
    id: 2,
    title: "E-LEARNING LANDING PAGE",
    label: "E-LEARNING LANDING PAGE",
    imgPath: "./images/thumbnail-project-2-small.webp",
    techStack: ["HTML", "CSS"],
  },
  {
    id: 3,
    title: "TODO WEB APP",
    label: "TODO WEB APP",
    imgPath: "./images/thumbnail-project-3-small.webp",
    techStack: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    id: 4,
    title: "ENTERTAINMENT WEB APP",
    label: "ENTERTAINMENT WEB APP",
    imgPath: "./images/thumbnail-project-4-small.webp",
    techStack: ["HTML", "CSS", "TYPESCRIPT", "REACT"],
  },
  {
    id: 5,
    title: "MEMORY GAME",
    label: "MEMORY GAME",
    imgPath: "./images/thumbnail-project-5-small.webp",
    techStack: ["HTML", "CSS", "JAVASCRIPT"],
  },
  {
    id: 6,
    title: "ART GALLERY SHOWCASE",
    label: "ART GALLERY SHOWCASE",
    imgPath: "./images/thumbnail-project-6-small.webp",
    techStack: ["HTML", "CSS", "JAVASCRIPT"],
  },
];
