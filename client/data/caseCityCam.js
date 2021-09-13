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
