import extractMenuLink from '@/helpers/extractMenuLink'

const testData = {
  link_type: 'web',
  url: 'http://localhost:3000/test/',
  target: null,
  type: 'post',
  uid: 'test',
}

const expectedData = {
  isExternalLink: false,
  target: null,
  url: '/test/',
}

describe('extractMenuLink helper', () => {
  it('should correctly work with link_type web and currectDomain', () => {
    expect(extractMenuLink(testData)).toEqual(expectedData)
  })

  it('should correctly work with link_type web without currentDomain', () => {
    delete testData.url

    expectedData.target = '_blank'
    expectedData.url = '/'
    expectedData.isExternalLink = true
    expect(extractMenuLink(testData)).toEqual(expectedData)
  })

  it('should correctly work with link_type=document and documentType=post', () => {
    delete testData.target
    testData.link_type = 'document'

    expectedData.target = null
    expectedData.url = '/blog/test/'
    expectedData.isExternalLink = false
    expect(extractMenuLink(testData)).toEqual(expectedData)
  })

  it('should correctly work with link_type=media', () => {
    testData.link_type = 'media'
    testData.url = '/test/'

    expectedData.target = '_blank'
    expectedData.url = '/test/'
    expectedData.isExternalLink = true
    expect(extractMenuLink(testData)).toEqual(expectedData)
  })

  it('should correctly return default data', () => {
    delete testData.link_type
    delete testData.url
    delete testData.target

    expectedData.target = null
    expectedData.url = '/'
    expectedData.isExternalLink = false
    expect(extractMenuLink(testData)).toEqual(expectedData)
  })
})
