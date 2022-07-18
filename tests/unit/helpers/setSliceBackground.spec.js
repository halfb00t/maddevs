import setSliceBackground from '@/helpers/setSliceBackground'

const colorsArray = [
  { name: 'white', hex: '#ffffff' },
  { name: 'grey', hex: '#f5f7f9' },
  { name: 'silver', hex: '#f4f4f4' },
  { name: 'black', hex: '#111213' },
  { name: 'red', hex: '#EC1C24' },
  { name: 'blue', hex: '#5159F6' },
  { name: 'yellow', hex: '#F7C744' },
  { name: 'purple', hex: '#9963F6' },
  { name: 'green', hex: '#00C05B' },
]

describe('setSliceBackground helper', () => {
  colorsArray.forEach(color => {
    it(`correctly return color ${color.name}`, () => {
      expect(setSliceBackground(color.name)).toBe(color.hex)
    })
  })

  it('Should return null if the color is not on the list', () => {
    expect(setSliceBackground('brown')).toBeNull()
  })
})
