export default function setSliceBackground(backgroundColor) {
  switch (backgroundColor) {
    case 'white': {
      return '#ffffff'
    }
    case 'grey': {
      return '#f5f7f9'
    }
    case 'silver': {
      return '#f5f7f9'
    }
    case 'black': {
      return '#111213'
    }
    default:
      return null
  }
}
