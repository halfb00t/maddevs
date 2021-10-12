export const whyCityCamCards = [
  {
    title: 'Individual citizens',
    description: 'They can check what’s happening on major crossroads (or those they’re planning to include in their routes) before even getting in the car for their drive home, to work, or elsewhere. It’s convenient, and it can save residents time and money.',
    color: 'yellow-dark',
    img: 'street',
  },
  {
    title: 'Local businesses',
    description: 'They can see how many and how often potential customers drive past their store/eatery/salon and how the supplies they need make it to them through the city. All this helps devise better business models in terms of both marketing and logistics.',
    color: 'blue-darkened',
    img: 'mall',
  },
]

export const idCardList = [
  'citycam-card-0',
  'citycam-card-1',
  'citycam-card-2',
]

export const challengesAndSolutions = [
  {
    text: 'Cameras send images to the cameras’ backend',
    background: '#FFECB3',
  },
  {
    text: 'The cameras’ backend sends images to Amazon S3',
    background: '#FFE7A1',
  },
  {
    text: 'The cameras’ backend supplies information about images sent to S3 and data about devices from the cameras (battery charge and SIM card balance)',
    background: '#FFE187',
  },
  {
    text: 'The progressive web application (PWA) backend goes to S3 to get presigned links for images that have just been uploaded',
    background: '#FFD762',
  },
  {
    text: 'The PWA backend sends links to images stored in S3 to users’ devices',
    background: '#FFCA2E',
  },
  {
    text: 'Users’ devices send requests to S3 to get images according to presigned links',
    background: '#FFBE00',
  },
]

export const idSolutionsList = [
  'solution-item-0',
  'solution-item-1',
  'solution-item-2',
  'solution-item-3',
  'solution-item-4',
  'solution-item-5',
]

export const components = [
  {
    title: 'Controller module based on an STM32L152RBTA microcontroller:',
    text: 'operates and commands other modules.',
  },
  {
    title: 'Modem module based on a sim5360e chip:',
    text: 'connects the device to the mobile network and the Internet and transmits images taken by the cameras to the cloud data storage.',
  },
  {
    title: 'Arducam Mini Module Camera Shield 2 MP Plus OV2640:',
    text: 'takes images at a specified frequency.',
  },
  {
    title: '',
    text: 'DC/DC upconverter (step-up) based on the IP5306 microcircuit: stabilises the input current for the correct operation of the device.',
  },
  {
    title: 'TP4056 micro USB charge controller:',
    text: 'checks if the power bank is discharged.',
  },
  {
    title: 'In-house engineered printed circuit boards for the modules:',
    text: 'consolidate all modules into one device.',
  },
]

export const devicePerfectingSlides = [
  {
    fileName: 'citycam-slide-one-first',
    pictureFolder: 'citycam',
    fileExtension: 'jpg',
    title: 'Device’s modules:',
    alt: 'Device perfection',
  },
  {
    fileName: 'citycam-slide-one-second',
    pictureFolder: 'citycam',
    fileExtension: 'jpg',
    title: 'Assembled device:',
    alt: 'Device perfection',
  },
  {
    fileName: 'citycam-slide-one-third',
    pictureFolder: 'citycam',
    fileExtension: 'jpg',
    title: 'Device inside the case:',
    alt: 'Device perfection',
  },
]

export const ongoingProcessSlides = [
  {
    fileName: 'citycam-slide-two-first',
    pictureFolder: 'citycam',
    fileExtension: 'jpg',
    title: 'Assembled power module:',
    alt: 'Ongoing progress',
  },
  {
    fileName: 'citycam-slide-two-second',
    pictureFolder: 'citycam',
    fileExtension: 'jpg',
    title: 'Assembled power module with RPi Zero:',
    alt: 'Ongoing progress',
  },
]

export const technologies = [
  {
    name: 'python',
    alt: 'Python',
    imgAlt: 'Python',
  },
  {
    name: 'django',
    alt: 'Django',
    imgAlt: 'Django',
  },
  {
    name: 'minio',
    alt: 'MinIO',
    imgAlt: 'MinIO',
  },
  {
    name: 'go',
    alt: 'Go',
    imgAlt: 'Go',
  },
  {
    name: 'postgresql',
    alt: 'PostgreSQL',
    imgAlt: 'PostgreSQL',
  },
  {
    name: 'react',
    alt: 'React',
    imgAlt: 'React',
  },
  {
    name: 'celery',
    alt: 'Celery',
    imgAlt: 'Celery',
  },
  {
    name: 'prometheus',
    alt: 'Prometheus',
    imgAlt: 'Prometheus',
  },
  {
    name: 'grafana',
    alt: 'Grafana',
    imgAlt: 'Grafana',
  },
  {
    name: 'c',
    alt: 'C',
    imgAlt: 'C',
  },
  {
    name: 'st-microelectronics',
    alt: 'STMicroelectronics',
    imgAlt: 'STMicroelectronics',
  },
  {
    name: 'texas-instruments',
    alt: 'Texas Instruments',
    imgAlt: 'Texas Instruments',
  },
  {
    name: 'arm',
    alt: 'ARM',
    imgAlt: 'ARM',
  },
  {
    name: 'easy-eda',
    alt: 'EasyEDA',
    imgAlt: 'EasyEDA',
  },
  {
    name: 'jlcpcb',
    alt: 'JLCPCB',
    imgAlt: 'JLCPCB',
  },
  {
    name: 'webench-power-designer',
    alt: 'WEBANCH Power Designer',
    imgAlt: 'WEBANCH Power Designer',
  },
  {
    name: 'corel-draw',
    alt: 'Corel Draw',
    imgAlt: 'Corel Draw',
  },
  {
    name: 'topor',
    alt: 'Topor',
    imgAlt: 'Topor',
  },
  {
    name: 'solidworks',
    alt: 'SOLIDWORKS',
    imgAlt: 'SOLIDWORKS',
  },
  {
    name: 'altium-designer',
    alt: 'Altium Designer',
    imgAlt: 'Altium Designer',
  },
]

export const team = [
  {
    name: 'Belek Abylov',
    position: 'Full-Stack Developer',
    image: {
      file: 'belek-abylov',
    },
  },
  {
    name: 'Vlad Andreev',
    position: 'CQO',
    image: {
      file: 'vlad-andreev',
    },
  },
  {
    name: 'Kirill Avdeev',
    position: 'Backend Developer',
    image: {
      file: 'avdeev',
    },
  },
  {
    name: 'Aleksandr Edakin',
    position: 'Backend Developer',
    image: {
      file: 'aleksandr-edakin',
    },
  },
  {
    name: 'Maksim Gachevski',
    position: 'Frontend Developer',
    image: {
      file: 'maksim-gachevski',
    },
  },
  {
    name: 'Gennady Karev',
    position: 'Full-Stack Developer',
    image: {
      file: 'gennady-karev',
    },
  },
  {
    name: 'Oleg Katkov',
    position: 'Backend Developer',
    image: {
      file: 'oleg-katkov',
    },
  },
  {
    name: 'Dmitri Kononenko',
    position: 'Project Manager',
    image: {
      file: 'dmitri-kononenko',
    },
  },
  {
    name: 'Anton Kozlov',
    position: 'System Developer',
    image: {
      file: 'anton-kozlov',
    },
  },
  {
    name: 'Andrew Sapozhnikov',
    position: 'CIO',
    image: {
      file: 'andrew-sapozhnikov',
    },
  },
  {
    name: 'Gaukhar Taspolatova',
    position: 'Project Manager',
    image: {
      file: 'gaukhar-taspolatova',
    },
  },
]
