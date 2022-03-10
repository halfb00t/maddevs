export const inventoryAndShipping = [
  {
    title: 'FOUNDED',
    number: '2013',
    description: 'by experienced ecommerce retailer',
  },
  {
    title: 'OVER',
    number: '1.5bn',
    description: 'inventory updates processed in Veeqo every year',
  },
  {
    title: 'OVER',
    number: '31m',
    description: 'items picked, packed and shipped through annually',
  },
]

export const techSolutions = [
  {
    icon: 'cloud',
    description: 'Collecting host metrics (CloudWatch and okmeter showed consequences, not causes).',
    alt: 'CloudWatch Logo.',
  },
  {
    icon: 'danger',
    description: 'Analyzing the true RAM use and identifying 1,200-1,500 worker connections taking up about 40 GB of RAM.',
    alt: 'RAM Icon.',
  },
  {
    icon: 'gear',
    description: 'Adding PgBouncers to reduce the load on the database.',
    alt: 'PgBouncers Icon.',
  },
  {
    icon: 'speed',
    description: 'Stabilizing connection pooling by applying ELB and thus distributing traffic more evenly to decrease the number of SPOFs.',
    alt: 'Speed Icon.',
  },
]

export const elasticsearchResults = [
  {
    icon: 'speed-card',
    title: '~250-300 ms',
    description: 'Search time went down to under 5 seconds (now: ~250-300 ms)',
    alt: 'Search Time Went Down to Under 5 Seconds – Now: 250–300 Ms.',
    animationSettings: {
      disabled: true,
    },
  },
  {
    icon: 'message-card',
    title: 'Feedback',
    description: 'We received massive positive feedback as Veeqo users were contacting customer',
    alt: 'We Received Massive Positive Feedback As Veeqo Users Were Contacting the Customer.',
    animationSettings: {
      reverse: true,
      maxMove: 20,
      customMove: true,
      speed: 0.3,
      startPoint: 3,
      setIndentTop: true,
    },
  },
  {
    icon: 'gears-card',
    title: 'Elasticsearch',
    description: 'Elasticsearch became more efficient and reliable without costing the customer more',
    alt: 'Elasticsearch Became More Efficient and Reliable Without Costing the Customer More.',
    animationSettings: {
      reverse: true,
      maxMove: 40,
      customMove: true,
      speed: 0.3,
      startPoint: 3,
      setIndentTop: true,
    },
  },
]

export const infrastructureAsCodeResult = [
  {
    icon: 'circle',
    cardName: 'PostgreSQL',
    title: '40GB of RAM',
    description: '40 GB of RAM freed up. ReadIOPS halved. Number of TPS increased by 50%',
    alt: '40 GB of RAM Freed Up. ReadIOPS Halved. The Number of TPS Increased by 50%.',
    animationSettings: {
      disabled: true,
    },
  },
  {
    icon: 'chart',
    cardName: 'Infrastructure costs',
    title: 'Reduced by 35%',
    description: 'without losses in performance and security',
    alt: 'Infrastructure Costs Redused by 35% Without Losses in Performance and Security.',
    animationSettings: {
      reverse: true,
      maxMove: 20,
      customMove: true,
      speed: 0.3,
      startPoint: 3,
      setIndentTop: true,
    },
  },
  {
    icon: 'speed-card',
    cardName: 'Elasticsearch',
    title: '~250-300ms',
    description: 'More secure data access Search time decreased initially to under 5 seconds and by now to ~250-300ms',
    alt: 'Elasticsearch – More Secure Data Access Search Time Decreased Initially to Under 5 Seconds and by Now to ~250–300ms.',
    animationSettings: {
      reverse: true,
      maxMove: 40,
      customMove: true,
      speed: 0.3,
      startPoint: 3,
      setIndentTop: true,
    },
  },
]

export const technologies = [
  {
    name: 'ruby',
    alt: 'Ruby',
    imgAlt: 'Ruby Programming Language Logo.',
  },
  {
    name: 'node',
    alt: 'NodeJS',
    imgAlt: 'NodeJS Logo',
  },
  {
    name: 'elastic',
    alt: 'Elasticsearch',
    imgAlt: 'Elasticsearch Logo.',
  },
  {
    name: 'postgresql',
    alt: 'PostgreSQL',
    imgAlt: 'PostgreSQL Database Management System Logo.',
  },
  {
    name: 'rebbit-mq',
    alt: 'RebbitMQ',
    imgAlt: 'RebbitMQ Message Broker Software Logo.',
  },
  {
    name: 'redis',
    alt: 'Redis',
    imgAlt: 'Redis Data Structure Store Logo.',
  },
  {
    name: 'memcached',
    alt: 'Memcached',
    imgAlt: 'Memcached Memory Caching System Logo.',
  },
  {
    name: 'cloud-watch',
    alt: 'Cloudwatch',
    imgAlt: 'Cloudwatch Logo.',
  },
  {
    name: 'prometheus',
    alt: 'Prometheus',
    imgAlt: 'Prometheus Logo.',
  },
  {
    name: 'grafana',
    alt: 'Grafana',
    imgAlt: 'Grafana Software Application Logo.',
  },
  {
    name: 'sentry-black',
    alt: 'Sentry',
    imgAlt: 'Sentry Error Tracking System Logo.',
  },
  {
    name: 'heroku',
    alt: 'Heroku',
    imgAlt: 'Heroku Cloud Platform Logo.',
  },
  {
    name: 'aws',
    alt: 'AWS',
    imgAlt: 'AWS Cloud Computing Platforms Logo.',
  },
  {
    name: 'kubernetes',
    alt: 'Kubernetes',
    imgAlt: 'Kubernetes Container Orchestration System Logo.',
  },
  {
    name: 'terraform',
    alt: 'Terraform',
    imgAlt: 'Terraform Infrastructure as Code Software Tool Logo.',
  },
  {
    name: 'travis-ci',
    alt: 'Travis CI',
    imgAlt: 'Travis CI Logo.',
  },
  {
    name: 'jenkins',
    alt: 'Jenkins',
    imgAlt: 'Jenkins Logo.',
  },
  {
    name: 'docker',
    alt: 'Docker',
    imgAlt: 'Docker Logo.',
  },
  {
    name: 'helm',
    alt: 'Helm',
    imgAlt: 'Helm Logo.',
  },
]

export const team = [
  {
    name: 'Maxim Glotov',
    position: 'DevOps engineer',
    image: {
      file: 'maxim-glotov',
    },
  },
  {
    name: 'Andrew Sapozhnikov',
    position: 'CIO',
    image: {
      file: 'andrew-sapozhnikov',
    },
  },
]

export const fixingDatabaseCards = [
  {
    preTitle: 'Challenge',
    title: 'Regular outage',
    descriptions: 'Without any detectable load spikes, the database would often reach maximum processor performance and deny service as the queries piled up in the query queue. To get the system up and running again, workers had to be manually restarted every time.',
    colors: {
      card: 'silver',
      preTitle: 'quick-silver',
    },
  },
  {
    preTitle: 'Effect on users',
    title: 'Degraded user services',
    descriptions: 'Users had limited access to services: they couldn\'t view contents, place orders, or manage their settings.',
    colors: {
      card: 'blue-light',
      preTitle: 'quick-silver',
    },
  },
]

export const continuousIntegrationCards = [
  {
    title: 'Challenge',
    descriptions: 'Development processes lacked consistency. Particularly, the project had manually configured CI system and pipelines, different development, test, and production environments and runtimes, non-reproducible development environment, inconsistent test builds.',
    colors: {
      card: 'silver',
    },
  },
  {
    title: 'Solution',
    descriptions: 'Dockerization is the most viable solution today to set up continuous delivery. As our application was back then partially hosted on Heroku, we created a unified runtime for developers and CI by dockerizing the main app using a Heroku Stack image and Docker Compose. It made CI reliable and allowed simplifying deployment. Also, it sped up bootstrapping of the development environment.',
    colors: {
      card: 'blue-light',
    },
  },
]

export const elasticsearchCards = [
  {
    title: 'Challenge',
    descriptions: 'Elasticsearch didn’t cope with the load due to its outdated version and non-optimized configurations.',
    colors: {
      card: 'silver',
    },
  },
  {
    title: 'Effect on users',
    descriptions: 'The users were often unable to access search results. Elasticsearch would expose them to delays of up to 30 seconds.',
    colors: {
      card: 'blue-light',
    },
  },
]
