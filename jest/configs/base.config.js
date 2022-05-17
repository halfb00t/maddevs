module.exports = {
  // tell Jest to handle `*.vue` files
  rootDir: '../../',
  moduleFileExtensions: ['js', 'json', 'vue'],
  watchman: true,
  moduleNameMapper: {
    '^~/(.*)$': '<rootDir>/client/$1',
    '^~~/(.*)$': '<rootDir>/client/$1',
    '^@/(.*)$': '<rootDir>/client/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css|less)$':
      '<rootDir>/jest/utils/assetsTransformer.js',
  },
  transform: {
    // process js with `babel-jest`
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    // process `*.vue` files with `vue-jest`
    '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    // process `*.svg` files with `imgTransform.js`
    '\\.(svg|png|webp|jpg|jpeg)$': '<rootDir>/jest/utils/imgTransformer.js',
  },
  snapshotSerializers: ['<rootDir>/node_modules/jest-serializer-vue'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/client/**/*.vue',
    '<rootDir>/client/**/*.js',
    '<rootDir>/server/**/*.js',
  ],
  coveragePathIgnorePatterns: ['<rootDir>/server/sentry', '<rootDir>/server/db', '<rootDir>/server/routes', '<rootDir>/server/index.js', '<rootDir>/client/mixins/createNewLeadMixin.js', '<rootDir>/server/radiator', '<rootDir>/server/utils/devRadiator'],
  coverageReporters: ['json'],
  setupFiles: ['jest-canvas-mock'],
  modulePathIgnorePatterns: [
    '<rootDir>/cypress/',
  ],
}
