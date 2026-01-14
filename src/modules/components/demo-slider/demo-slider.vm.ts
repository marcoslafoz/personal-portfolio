export enum SlideDirectionEnum {
  RIGHT = 'right',
  LEFT = 'left',
}

export const slideTime: number = 5000

export interface DemoSection {
  image: string
  title: string
  description: { text: string }[]
  projectUrl?: string
  techIcons?: {
    title: string
    imageSrc: string
  }[]
}

export const demoData: DemoSection[] = [
  {
    image: '/assets/projects/dashboard.webp',
    title: 'StudentSpace',
    projectUrl: 'https://studentspace.lafoz.dev/',
    description: [
      {
        text: 'StudentSpace es la mejor herramienta para estudiantes. Organiza tareas, exámenes y notas en una agenda digital intuitiva y eficiente.',
      },
      {
        text: 'Usando React + TailwindCSS con un backend en Springboot. Todo ello Dockerizado en mi servidor de proxmox.',
      },
    ],
    techIcons: [
      {
        title: 'React',
        imageSrc: '/assets/icons/react.svg',
      },
      {
        title: 'TailwindCSS',
        imageSrc: '/assets/icons/tailwind.svg',
      },
      {
        title: 'GraphQL',
        imageSrc: '/assets/icons/graphql.svg',
      },
      {
        title: 'Spring Boot',
        imageSrc: '/assets/icons/spring-boot.svg',
      },
      {
        title: 'PosgreSQL',
        imageSrc: '/assets/icons/postgresql.svg',
      },
      {
        title: 'Docker',
        imageSrc: '/assets/icons/docker.svg',
      },
    ],
  },
  {
    image: '/assets/projects/meme-generator.webp',
    title: 'Meme Generator',
    projectUrl: 'https://meme-generator.lafoz.dev/',
    description: [
      { text: 'Simple editor de memes. Desarrollado por motivo educacional.' },
      { text: 'Usando React + Bootstrap con HeroUI. Desplegado en GitHub Pages.' },
    ],
    techIcons: [
      {
        title: 'React',
        imageSrc: '/assets/icons/react.svg',
      },
      {
        title: 'HeroUI',
        imageSrc: '/assets/icons/heroui.png',
      },
    ],
  },
  {
    image: '/assets/projects/dermovision.webp',
    title: 'Dermovision',
    projectUrl: 'https://dermovision.lafoz.dev/',
    description: [
      { text: 'Landing page para una clínica estética con modo oscuro.' },
      { text: 'Desarrollada con Astro y Tailwind. Enfocada en rendimiento, SEO y diseño moderno. Todo ello Dockerizado en mi servidor de proxmox.' },
    ],
    techIcons: [
      {
        title: 'Astro',
        imageSrc: '/assets/icons/astro.svg',
      },
      {
        title: 'TailwindCSS',
        imageSrc: '/assets/icons/tailwind.svg',
      },
      {
        title: 'Docker',
        imageSrc: '/assets/icons/docker.svg',
      },
    ],
  },

]
