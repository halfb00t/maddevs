import { render } from '@testing-library/vue'
import PressCenter from '@/prismicSlices/pageParts/PressCenter'

const apiData = {
  title: 'grow e-business bandwidth',
  description: 'benchmark granular relationships',
  date: 'sdf ',
  link: {
    url: '../../../../client/assets/img/Home/jpg/experts/Alice.jpg',
  },
  linkLabel: ' sdf',
  image: {
    url: '../../../../client/assets/img/Home/jpg/experts/Alice.jpg',
    alt: 'image',
  },
  linkedCompanyLogo: {
    url: '../../../../client/assets/img/Home/jpg/experts/Alice.jpg',
    alt: 'image',
  },
  items: [
    {
      date: 'sdf ',
      linkLabel: ' sdf',
      title: 'grow e-business bandwidth',
      description: 'benchmark granular relationships',
      link: {
        url: '../../../../client/assets/img/Home/jpg/experts/Alice.jpg',
      },
      image: {
        url: '../../../../client/assets/img/Home/jpg/experts/Alice.jpg',
        alt: 'image',
      },
      linkedCompanyLogo: {
        url: '../../../../client/assets/img/Home/jpg/experts/Alice.jpg',
        alt: 'image',
      },
    },
  ],
}

const getProps = params => ({
  slice: {
    primary: {
      ...params,
    },
    items: [...params?.items],
  },
})

describe('CaseListSlice component', () => { // todo change descr
  it('should render correctly', () => {
    const { container } = render(PressCenter, {
      props: getProps(apiData),
    })
    expect(container).toMatchSnapshot()
  })

  it('should render correctly without data', () => {
    const { container } = render(PressCenter, {
      props: {
        items: [],
      },
    })
    expect(container).toMatchSnapshot()
  })
})
