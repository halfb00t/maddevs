export const resolvedIssues = [
  {
    icon: 'files',
    descriptions: 'Extensive use of paper (minimum 2 reams of paper per SME)',
    alt: 'Files icon',
    folder: 'itc',
    iconWidth: 51.94,
    iconHeight: 51.94,
  },
  {
    icon: 'search-book',
    descriptions: 'Challenges with manually tracking coaching mission statuses, outputs, and outcomes',
    alt: 'Search book icon',
    folder: 'itc',
    iconWidth: 51.94,
    iconHeight: 51.94,
  },
  {
    icon: 'info',
    descriptions: 'Lack of readily available mission critical information',
    alt: 'Info icon.',
    folder: 'itc',
    iconWidth: 51.94,
    iconHeight: 51.94,
  },
  {
    icon: 'connection',
    descriptions: 'ITC had to manually calculate any mission statistics',
    alt: 'Connection icon',
    folder: 'itc',
    iconWidth: 51.94,
    iconHeight: 51.94,
  },
  {
    icon: 'folder',
    descriptions: 'Coaching reports presented challenges with storing, extracting, compiling, and using data derived from coaching',
    alt: 'Folder icon.',
    folder: 'itc',
    iconWidth: 51.94,
    iconHeight: 51.94,
  },
  {
    icon: 'lock-file',
    descriptions: 'Challenges of information accessibility to the Institutional Partners in each country, the ITC, EU, and other stakeholders',
    alt: 'Lock file icon.',
    folder: 'itc',
    iconWidth: 51.94,
    iconHeight: 51.94,
  },
]

export const technologies = [
  {
    name: 'angular',
    alt: 'Angular',
    imgAlt: 'Angular',
  },
  {
    name: 'rxjs',
    alt: 'RxJs',
    imgAlt: 'RxJs',
  },
  {
    name: 'material-design',
    alt: 'Material Design',
    imgAlt: 'Material Design',
  },
  {
    name: 'net-core',
    alt: '.NET Core',
    imgAlt: '.NET Core',
  },
  {
    name: 'asp-net',
    alt: 'ASP.NET',
    imgAlt: 'ASP.NET ',
  },
  {
    name: 'gitlab',
    alt: 'GitLab CI/CD',
    imgAlt: 'GitLab CI/CD',
  },
  {
    name: 'docker',
    alt: 'Docker',
    imgAlt: 'Docker',
  },
  {
    name: 'aws-second-logo',
    alt: 'AWS',
    imgAlt: 'AWS',
  },
  {
    name: 'eks',
    alt: 'EKS ',
    imgAlt: 'EKS',
  },
  {
    name: 'postgresql',
    alt: 'PostgreSQL',
    imgAlt: 'PostgreSQL',
  },
  {
    name: 'sentry-black',
    alt: 'Sentry',
    imgAlt: 'Sentry',
  },
  {
    name: 'grafana',
    alt: 'Grafana',
    imgAlt: 'Grafana',
  },
]

export const team = [
  {
    name: 'Kirill Zinchenko',
    position: 'Project Manager',
    image: {
      file: 'zinchenko',
    },
  },
  {
    name: 'Oleg Glazyrin',
    position: 'Full-Stack Developer',
    image: {
      file: 'oleg-glazyrin',
    },
  },
  {
    name: 'Andrew Gubskii',
    position: 'Full-Stack Developer',
    image: {
      file: 'andrew-gubskii',
    },
  },
  {
    name: 'Dmitrii Khalezin',
    position: 'DevOps Engineer',
    image: {
      file: 'dmitrii-khalezin',
    },
  },
]

export const thematicAreas = [
  {
    title: 'Export planning and pro forma invoicing',
    file: 'export',
    color: 'black',
  },
  {
    title: 'Mandatory certifications, registrations and buyer standards',
    file: 'certifications',
    color: 'blue-itc',
  },
  {
    title: 'International shipping by sea and air freight',
    file: 'air-transportation',
    color: 'blue-itc-darken',
  },
]

export const developingInnovation = [
  {
    text: 'Built a data backup system with daily backups',
    background: '#5A6BC3',
  },
  {
    text: 'Set up a CI/CD pipeline',
    background: '#4154B3',
  },
  {
    text: 'Introduced a staging environment in addition to the production environment',
    background: '#354491',
  },
  {
    text: 'Introduced an infrastructure monitoring system',
    background: '#293470',
  },
  {
    text: 'Covered with integration and unit tests',
    background: '#1C254E',
  },
  {
    text: 'Created a user manual with screenshots from the app and with descriptions of its functions in Russian, which all the coaches speak',
    background: '#10152C',
  },
]

export const idList = [
  'innovation-item-0',
  'innovation-item-1',
  'innovation-item-2',
  'innovation-item-3',
  'innovation-item-4',
  'innovation-item-5',
]

const cardBgColor = {
  card: 'silver',
}

export const domainDrivenBenefits = [
  {
    descriptions: 'The backend structure allows for future modifications and augmentations, making the app scalable and adaptable.',
    colors: {
      ...cardBgColor,
    },
  },
  {
    descriptions: 'Data processing can be flexibly optimised separately for the read side and the write side.',
    colors: {
      ...cardBgColor,
    },
  },
  {
    descriptions: 'Overcomplicated logic is avoided so that the app’s performance does not have bottlenecks or vulnerabilities.',
    colors: {
      ...cardBgColor,
    },
  },
  {
    descriptions: 'The system is more secure because access must be managed on one side only, so it is simpler to separate and distribute functions among user roles.',
    colors: {
      ...cardBgColor,
    },
  },
]
