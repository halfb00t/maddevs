import { render, screen } from '@testing-library/vue'
import AuthorSlice from '@/components/slices/AuthorSlice'

const props = {
  slice: {
    items: [
      {
        embed: {
          title: 'First Title',
          url: 'https://test',
          type: 'video',
          html:
            '<div><img src="" height="300" width="300"/></div><h1>hello</h1><a href="http://maddevs.io">Hi</a> </div>',
        },
        embed_title: 'Embed title',
        image: {
          url: 'some-url',
        },
      }, {
        embed: {
          title: 'Second Title',
          url: 'https://test',
          type: 'video',
          html:
            '<div><img src="" height="300" width="300"/></div><h1>hello</h1><a href="http://maddevs.io">Hi</a> </div>',
        },
        embed_title: 'Embed title',
      },
    ],
    primary: {
      code: [
        {
          spans: [],
          text:
            'getAllHeadings() {\n  this.document.body.forEach(listItem => {\n    if(listItem.primary.text !== undefined) {\n      if(listItem.primary.text[0].type === \'heading1\') {\n        this.headingsList.push({\n          textContent: listItem.primary.text[0].text,\n          headingName: listItem.primary.text[0].text.toLowerCase().replace(/s/g , \'-\')\n        });\n      }\n    }\n  });',
          type: 'paragraph',
        },
      ],
      language: 'javascript',
    },
    slice_label: null,
    slice_type: 'codeblock',
  },
}

const store = {
  getters: {
    blogAuthor: () => ({
      name: 'Maddevs',
      postition: 'position',
      image: {
        alt: 'alt',
        url: 'someurl',
        dimensions: {},
        author_slice: {
          url: '',
          alt: '',
          dimensions: {},
        },
      },
      socialNetworks: [{
        title: 'facebook',
        key: 'facebook',
        link: {
          url: 'someurl',
          target: '_blank',
        },
      }, {
        title: 'instagram',
        key: 'instagram',
        link: {
          url: 'instagram',
          target: '_blank',
        },
      }],
    }),
    blogCoAuthor: () => ({
      name: 'Maddevs',
      postition: 'position',
      image: {
        alt: 'alt',
        url: 'someurl',
        dimensions: {},
        author_slice: {
          url: '',
          alt: '',
          dimensions: {},
        },
      },
      socialNetworks: [{
        title: 'facebook',
        key: 'facebook',
        link: {
          url: 'someurl',
          target: '_blank',
        },
      }, {
        title: 'instagram',
        key: 'instagram',
        link: {
          url: 'instagram',
          target: '_blank',
        },
      }],
    }),
  },
}

const stubs = ['NuxtLink']

describe('AuthorSlice component', () => {
  it('should render correctly', () => {
    const { container } = render(AuthorSlice, {
      stubs,
      store,
      props,
      directives: {
        'lazy-load': () => {},
      },
    })

    expect(container).toMatchSnapshot()
  })

  it('should render social links correctly', () => {
    render(AuthorSlice, {
      stubs,
      store,
      props,
      directives: {
        'lazy-load': () => {},
      },
    })

    expect(screen.getAllByTestId('test-social')).toHaveLength(store.getters.blogAuthor().socialNetworks.length)
    expect(screen.getAllByTestId('test-contributors')).toHaveLength(1)
  })

  it('should render correctly without data', () => {
    store.getters.blogCoAuthor = () => ({})
    const { container } = render(AuthorSlice, {
      stubs,
      store,
      props,
      directives: {
        'lazy-load': () => {},
      },
    })

    expect(container).toMatchSnapshot()
  })
})
