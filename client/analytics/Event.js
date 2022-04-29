/* eslint-disable no-console, class-methods-use-this, no-underscore-dangle */
import uniqid from 'uniqid'
import { getContentGroupByPath } from './constants'

export const addUserType = type => {
  // TYPE: 'hr_candidate' | 'lead' | 'download_ebook'
  localStorage.setItem('GA_USER_TYPE', type)
}

export class AnalyticsEvent {
  constructor(action, strict = true) {
    if (!action) {
      throw new Error(`Event action is missing for ${this.action}, please add an action for object`)
    }
    this.strict = strict
    this.action = action
    this.properties = {}
    this._applyUser()
  }

  _applyUser() {
    if ('window' in global) {
      const existId = localStorage.getItem('GA_USER_ID')
      const type = localStorage.getItem('GA_USER_TYPE')

      const userId = existId || uniqid()

      localStorage.setItem('GA_USER_ID', userId)

      this.properties.user_id = userId
      this.properties.user_type = type
    }
  }

  _handleError(message) {
    if (this.strict) throw new Error(message)
    console.error(message)
  }

  setCategory(category) {
    if (!category) {
      this._handleError('Event category is required')
    }
    this.properties.event_category = category
    return this
  }

  setContentGroup(contentGroup) {
    if (!contentGroup) {
      const autoContentGroup = getContentGroupByPath(window.location.pathname)
      if (!autoContentGroup) return this
      this.properties.page_type = autoContentGroup
      return this
    }
    this.properties.page_type = contentGroup
    return this
  }

  setField(name, value) {
    if (!name || !(value !== undefined && value !== null)) {
      this._handleError('AnalyticsEvent.setField() method is failed. Please add name or values params')
    }
    this.properties[name] = value
    return this
  }

  setPath() {
    this.properties.path = window.location.pathname
  }

  _collectGoogleAnalyticsKeys() {
    const keys = window.dataLayer
      ?.filter(dataLayerValue => dataLayerValue[0] === 'config' && dataLayerValue.length >= 3)
      .map(dataLayerValue => dataLayerValue[1]) || []

    return Array.from(new Set(keys))
  }

  send() {
    this.setContentGroup()
    this.setPath()

    const analyticsKeys = this._collectGoogleAnalyticsKeys()

    if (process.env.NODE_ENV === 'development') {
      console.log(`<------- ANALYTICS EVENT SENDING -------->
          EVENT: ${this.action}
          PROPS: ${JSON.stringify(this.properties)}
          ANALYTICS: ${JSON.stringify(analyticsKeys)}
        `)
    }

    analyticsKeys.forEach(analyticsId => {
      const properties = { ...this.properties, send_to: analyticsId }
      try {
        window.gtag('event', this.action, properties)
      } catch (error) {
        this._handleError(error)
      }
    })
  }
}
