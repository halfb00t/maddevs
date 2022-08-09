const SeoAnalyzer = require('seo-analyzer')

new SeoAnalyzer()
  .ignoreFiles(['dist/404.html', 'dist/success-and-faq/index.html'])
  .inputFolders(['dist'])
  .addRule('titleLengthRule', { min: 10, max: 100 })
  .addRule('metaBaseRule', { list: ['description', 'viewport'] })
  .addRule('metaSocialRule', {
    properties: [
      'og:url',
      'og:type',
      'og:site_name',
      'og:title',
      'og:description',
      'og:image',
      'og:image:width',
      'og:image:height',
      'twitter:card',
      'twitter:text:title',
      'twitter:description',
      'twitter:image:src',
      'twitter:url',
    ],
  })
  .addRule('imgTagWithAltAttributeRule')
  .addRule('canonicalLinkRule')
  .outputConsole()
