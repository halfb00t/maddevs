export default sendPulseTemplateId => {
  const titles = [
    'How to negotiate with an IT vendor?',
    'Are looking for software development services?',
    'Are an aspiring IT company searching for useful information?',
    'Are interested in pricing information for custom software development?',
  ]

  if (sendPulseTemplateId === 791537) {
    return 'Are you wondering what processes and principles Mad Devs follow when developing software?'
  }
  const randomIndex = Math.floor(Math.random() * titles.length)
  return titles[randomIndex]
}
