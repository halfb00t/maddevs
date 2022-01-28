export const nambaBenefits = [
  {
    icon: 'economy',
    title: 'Sharing economy',
    description: 'Namba Taxi was one of the first companies in Central Asia to join the sharing economy. If calling a cab is simple enough, people will prefer it to owning a car. This creates a city with fewer cars and a more efficient distribution of resources, making urban development more sustainable.',
    alt: 'Sharing economy',
  },
  {
    icon: 'transparency',
    title: 'Transparency',
    description: 'Operators and passengers can track cab rides in real time. The mobile applications we developed for this project enable convenient communication and feedback. Riders can order a taxi with just a few taps, and both riders and drivers can see the progress of a ride.',
    alt: 'Transparency',
  },
  {
    icon: 'service',
    title: 'Quick service',
    description: 'A Namba Taxi cab arrives within 7 minutes. A smart itinerary planning system drastically reduced waiting time by eliminating much  of the manual work done by dispatchers. The system’s scalable, failproof architecture can handle up to 700 drivers on the line, 6,000 queries per second, and 10,000 orders a day.',
    alt: 'Quick service',
  },
  {
    icon: 'mobile',
    title: 'Mobile transformation',
    description: 'With Namba Taxi, drivers and passengers can do everything on their mobile devices. When development started in 2013, passengers had to make a phone call to order a cab, effectively turning taxi services into call centres. Namba Taxi changed this paradigm.',
    alt: 'Mobile transformation',
  },
  {
    icon: 'quality',
    title: 'Quality control',
    description: 'With an automated ordering system, Namba Taxi can focus on improving the passenger experience. The company monitors a multitude of performance indicators, including each car’s technical condition and even drivers’ health, to ensure more enjoyable cab rides.',
    alt: 'Quality control',
  },
]

export const nambaRequirements = [
  {
    icon: 'requirement-1',
    description: 'Minimal alterations to the workflow: Switching to a new software system should be smooth and painless for the company and the drivers.',
    alt: 'Workflow',
  },
  {
    icon: 'requirement-2',
    description: 'Scalability: To allow the system to grow in the future, we planned to implement an architecture that can be modified and expanded.\n',
    alt: 'Scalability',
  },
  {
    icon: 'requirement-3',
    description: 'Support for Android devices: We needed to promote the transition to more convenient, modern technologies.\n',
    alt: 'Support',
  },
  {
    icon: 'requirement-4',
    description: 'Real-time updates: We focused on reducing waiting times as this parameter is crucial to the passenger experience.',
    alt: 'Real-time updates',
  },
  {
    icon: 'requirement-5',
    description: 'High fault tolerance: Demand for taxi services can have dramatic ups and downs (e.g., when it starts to rain), so the system should have failover capability.',
    alt: 'Tolerance',
  },
  {
    icon: 'requirement-6',
    description: 'Agile development: If the customer’s requirements change during development, we can introduce new technologies as needed.',
    alt: 'Agile',
  },
  {
    icon: 'requirement-7',
    description: 'Compatibility with navigators: Not everyone had switched to mobile apps when the project started, so we had to ensure integration with drivers’ devices\n',
    alt: 'Compatibility',
  },
  {
    icon: 'requirement-8',
    description: 'Safe transition: Moving from old software to new software must not paralyse the business’s continuous operation or reduce the quality of service.\n',
    alt: 'Safe transition',
  },
]

export const aboutStatistics = [
  {
    numberText: '7',
    number: 7,
    numberColor: '#008fc5',
    description: 'from 2013 to mid-2020',
    icon: {
      name: 'analytics',
      width: '40px',
      height: '40px',
      folder: 'nambataxi',
      type: 'svg',
    },
  },
  {
    numberText: '19',
    number: 19,
    numberColor: '#008fc5',
    description: 'team members ',
    icon: {
      name: 'account',
      width: '40px',
      height: '40px',
      folder: 'nambataxi',
      type: 'svg',
    },
  },
  {
    numberText: '700',
    number: 700,
    textBeforeNumber: '~',
    withoutSpaceBeforeNumber: true,
    numberColor: '#008fc5',
    description: 'drivers',
    icon: {
      name: 'driver',
      width: '32px',
      height: '40px',
      folder: 'nambataxi',
      type: 'svg',
    },
  },
  {
    numberText: '10,000',
    number: 10000,
    textBeforeNumber: '~',
    withoutSpaceBeforeNumber: true,
    numberColor: '#008fc5',
    description: 'trips per day',
    icon: {
      name: 'comment',
      width: '40px',
      height: '40px',
      folder: 'nambataxi',
      type: 'svg',
    },
  },
]

export const applicationStatistics = [
  {
    numberText: '3,500',
    number: 3500,
    numberColor: '#4154b3',
    description: 'requests processed per second',
  },
  {
    numberText: '20',
    number: 20,
    name: 'ms',
    numberColor: '#4154b3',
    description: 'at most it takes to send responses to drivers',
  },
  {
    numberText: '2.5',
    number: 2.5,
    name: 'ms',
    numberColor: '#4154b3',
    description: 'at most it takes to send responses to dispatchers',
  },
]

export const techStackNambaTaxi = [
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
    name: 'django-rest',
    alt: 'Django REST',
    imgAlt: 'Django REST',
  },
  {
    name: 'celery',
    alt: 'Celery',
    imgAlt: 'Celery',
  },
  {
    name: 'go',
    alt: 'Go',
    imgAlt: 'Go',
  },
  {
    name: 'jinja',
    alt: 'Jinja',
    imgAlt: 'Jinja',
  },
  {
    name: 'uwsgi',
    alt: 'uWSGI',
    imgAlt: 'uWSGI',
  },
  {
    name: 'nginx',
    alt: 'Nginx',
    imgAlt: 'Nginx',
  },
  {
    name: 'haproxy',
    alt: 'HAProxy',
    imgAlt: 'HAProxy',
  },
  {
    name: 'docker',
    alt: 'Docker',
    imgAlt: 'Docker',
  },
  {
    name: 'docker-compose',
    alt: 'Docker Compose',
    imgAlt: 'Docker Compose',
  },
  {
    name: 'gitlab',
    alt: 'GitLab CI/CD',
    imgAlt: 'GitLab CI/CD',
  },
  {
    alt: 'Jenkins',
    name: 'jenkins',
    imgAlt: 'Jenkins',
  },
  {
    alt: 'Sentry',
    name: 'sentry',
    imgAlt: 'Sentry',
  },
  {
    name: 'grafana',
    alt: 'Grafana',
    imgAlt: 'Grafana',
  },
  {
    name: 'graylog',
    alt: 'Graylog',
    imgAlt: 'Graylog',
  },
  {
    name: 'kibana',
    alt: 'Kibana',
    imgAlt: 'Kibana',
  },
  {
    name: 'mysql',
    alt: 'MySQL',
    imgAlt: 'MySQL',
  },
  {
    name: 'redis',
    alt: 'Redis',
    imgAlt: 'Redis',
  },
  {
    name: 'elastic',
    alt: 'Elasticsearch',
    imgAlt: 'Elasticsearch',
  },
  {
    name: 'minio',
    alt: 'MinIO',
    imgAlt: 'MinIO',
  },
  {
    name: 'open-street-map',
    alt: 'OpenStreetMap',
    imgAlt: 'OpenStreetMap',
  },
  {
    name: 'osrm',
    alt: 'OSRM',
    imgAlt: 'OSRM',
  },
  {
    name: 'grpc',
    alt: 'gRPC',
    imgAlt: 'gRPC',
  },
  {
    imgAlt: 'Node.js',
    alt: 'Node.js',
    name: 'node',
  },
  {
    name: 'twisted',
    alt: 'Twisted',
    imgAlt: 'Twisted',
  },
  {
    name: 'ruby',
    alt: 'Ruby',
    imgAlt: 'Ruby',
  },
  {
    name: 'webrtc',
    alt: 'WebRTC',
    imgAlt: 'WebRTC',
  },
  {
    name: 'html',
    alt: 'HTML',
    imgAlt: 'HTML',
  },
  {
    name: 'css',
    alt: 'CSS',
    imgAlt: 'CSS',
  },
  {
    name: 'jquery',
    alt: 'jQuery',
    imgAlt: 'jQuery',
  },
  {
    name: 'bootstrap',
    alt: 'Bootstrap',
    imgAlt: 'Bootstrap',
  },
  {
    name: 'js',
    alt: 'JavaScript',
    imgAlt: 'JavaScript',
  },
  {
    alt: 'React',
    name: 'react',
    imgAlt: 'React',
  },
]

export const teamNamba = [
  {
    name: 'Vlad Andreev',
    position: 'Project Manager',
    image: {
      file: 'vlad-andreev',
    },
  },
  {
    name: 'Alla Klimenko',
    position: 'Project Manager',
    image: {
      file: 'alla-klimenko',
    },
  },
  {
    name: 'Alice Jang',
    position: 'Project Manager',
    image: {
      file: 'alice-jang',
    },
  },
  {
    name: 'Arthur Elizavetenkov',
    position: 'Project Manager',
    image: {
      file: 'arthur-elizavetenkov',
    },
  },
  {
    name: 'Andrew Minkin',
    position: 'Backend Developer, Team Lead',
    image: {
      file: 'andrew-minkin',
    },
  },
  {
    name: 'Alexander Astashov',
    position: 'Backend Developer',
    image: {
      file: 'astashov',
    },
  },
  {
    name: 'Alexander Edakin',
    position: 'Backend Developer',
    image: {
      file: 'aleksandr-edakin',
    },
  },
  {
    name: 'Aziz Sadykov',
    position: 'DevOps Engineer',
    image: {
      file: 'aziz-sadykov',
    },
  },
  {
    name: 'Alexander Vishnyakov',
    position: 'Frontend Developer',
    image: {
      file: 'alexander-vishnyakov',
    },
  },
  {
    name: 'Aleksey Medvedev',
    position: 'Frontend Developer',
    image: {
      file: 'aleksey-medvedev',
    },
  },
  {
    name: 'Belek Eraliev ',
    position: 'DevOps Engineer',
    image: {
      file: 'belek-eraliev',
    },
  },
  {
    name: 'Belek Abylov',
    position: 'Backend Developer',
    image: {
      file: 'belek-abylov',
    },
  },
  {
    name: 'Gennady Karev',
    position: 'Backend Developer',
    image: {
      file: 'gennady-karev',
    },
  },
  {
    name: 'Dastan Mamyrov',
    position: 'Android Developer',
    image: {
      file: 'dastan-mamyrov',
    },
  },
  {
    name: 'Rustom Kulbatyrov',
    position: 'Android Developer',
    image: {
      file: 'kulbatyrov',
    },
  },
  {
    name: 'Pavel Pushkarev',
    position: 'iOS Developer',
    image: {
      file: 'pushkarev',
    },
  },
  {
    name: 'Aibek Nogoev',
    position: 'iOS Developer',
    image: {
      file: 'aibek-nogoev',
    },
  },
  {
    name: 'Aisalkyn Tashmatova',
    position: 'Android Developer',
    image: {
      file: 'aisalkyn-tashmatova',
    },
  },
]
