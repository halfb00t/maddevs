function checkFormForReCaptcha(formId) {
  if (formId === 'contact-me-cs') return true
  if (formId === 'contact-me-dm') return true
  if (formId === 'contact-me-cta-slice') return true
  return formId === 'contact-me-modal'
}

module.exports = { checkFormForReCaptcha }
