const goals = {
// types of goals:
// "=" - good if metric is equal to the given value
// "<" - good if metric less than the given value
// ">" - good if metric larger than the given value

  deploys: {
    value: 2,
    type: '>',
  },
  eslint: {
    value: 0,
    type: '=',
  },
  coverage: {
    branches: {
      value: 75,
      type: '>',
    },
    functions: {
      value: 78,
      type: '>',
    },
    lines: {
      value: 85,
      type: '>',
    },
    statements: {
      value: 85,
      type: '>',
    },
    total: {
      value: 90,
      type: '>',
    },
  },
  performanceDesktop: {
    value: 85,
    type: '>',
  },
  performanceMobile: {
    value: 40,
    type: '>',
  },
}

const messagesText = {
  run: '\n'
    + '____ _  _ _  _    ____ ____ ___  _ ____ ___ ____ ____ \n'
    + '|__/ |  | |\\ |    |__/ |__| |  \\ | |__|  |  |  | |__/ \n'
    + '|  \\ |__| | \\|    |  \\ |  | |__/ | |  |  |  |__| |  \\ \n'
    + '                                                      \n',
  successSend: '____ ____ ___  _ ____ ___ ____ ____    ____ ____ _  _ ___    ___ ____    ____ _    ____ ____ _  _ \n'
    + '|__/ |__| |  \\ | |__|  |  |  | |__/    [__  |___ |\\ |  |      |  |  |    [__  |    |__| |    |_/  \n'
    + '|  \\ |  | |__/ | |  |  |  |__| |  \\    ___] |___ | \\|  |      |  |__|    ___] |___ |  | |___ | \\_ \n'
    + '                                                                                                  ',
}

module.exports = {
  goals,
  messagesText,
}
