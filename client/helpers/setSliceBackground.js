export default function setSliceBackground(backgroundColor) {
  switch (backgroundColor) {
    case 'white': {
      return '#ffffff'
    }
    case 'grey': {
      return '#f5f7f9'
    }
    case 'silver': {
      return '#f4f4f4'
    }
    case 'black': {
      return '#111213'
    }
    case 'red': {
      return '#EC1C24'
    }
    case 'blue': {
      return '#5159F6'
    }
    case 'yellow': {
      return '#F7C744'
    }
    case 'purple': {
      return '#9963F6'
    }
    case 'green': {
      return '#00C05B'
    }
    default:
      return null
  }
}
