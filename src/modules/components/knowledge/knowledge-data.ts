interface Knowledge {
  title: string
  description: string
  techs: {
    name: string
    iconUrl: string
  }[]
}

export const myKnowledgeData: Knowledge[] = [
  {
    title: 'Frontend',
    description:
      'Desarrollo web con interfaces modernas y responsivas, enfocadas en UX y diseño intuitivo. Implementación de componentes reutilizables con tecnologías frontend y pruebas e2e.',
    techs: [
      {
        name: 'React',
        iconUrl: 'react.svg',
      },
      {
        name: 'Tailwind CSS',
        iconUrl: 'tailwind.svg',
      },
      {
        name: 'Bootstrap',
        iconUrl: 'bootstrap.svg',
      },
      {
        name: 'Storybook',
        iconUrl: 'storybook.png',
      },
      {
        name: 'Cypress',
        iconUrl: 'cypress.svg',
      },
    ],
  },
  {
    title: 'Backend',
    description:
      'Diseño y desarrollo de arquitecturas escalables, creando APIs eficientes y seguras. Gestión de bases de datos relacionales y no relacionales.',
    techs: [
      {
        name: 'Java',
        iconUrl: 'java.svg',
      },
      {
        name: 'Springboot',
        iconUrl: 'spring-boot.svg',
      },
      {
        name: 'PostgreSQL',
        iconUrl: 'postgresql.svg',
      },
      {
        name: 'MySQL',
        iconUrl: 'mysql.svg',
      },
      {
        name: 'MongoDB',
        iconUrl: 'mongodb.svg',
      },
    ],
  },
  {
    title: 'Sistemas',
    description:
      'Administración y mantenimiento de infraestructuras TI, asegurando la seguridad, disponibilidad y rendimiento. Implementación de virtualización, monitoreo y automatización de procesos.',
    techs: [
      {
        name: 'Windows Server',
        iconUrl: 'windows-server.svg',
      },
      {
        name: 'Linux',
        iconUrl: 'linux.svg',
      },
      {
        name: 'Samba',
        iconUrl: 'samba.svg',
      },
      {
        name: 'Docker',
        iconUrl: 'docker.svg',
      },
      {
        name: 'Zabbix',
        iconUrl: 'zabbix.svg',
      },
      {
        name: 'Packet Tracer',
        iconUrl: 'packet-tracer.webp',
      },
    ],
  },
  {
    title: 'Diseño',
    description:
      'Creación de diseños visuales atractivos y funcionales, combinando creatividad y usabilidad. Prototipado rápido y una experiencia de usuario óptima.',
    techs: [
      {
        name: 'Photoshop',
        iconUrl: 'photoshop.svg',
      },
      {
        name: 'Figma',
        iconUrl: 'figma.svg',
      },
    ],
  },
]
