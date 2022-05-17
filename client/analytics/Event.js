/* eslint-disable no-console, class-methods-use-this, no-underscore-dangle */
import uniqid from '~/helpers/generatorUid'

const LOCAL_STORAGE_KEYS = {
  ID: 'GA_USER_ID',
  TYPE: 'GA_USER_TYPE',
}

export const addUserType = type => {
  // TYPE: 'hr_candidate' | 'lead' | 'download_ebook' | undefined
  localStorage.setItem(LOCAL_STORAGE_KEYS.TYPE, type)
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
      const existId = localStorage.getItem(LOCAL_STORAGE_KEYS.ID)
      const type = localStorage.getItem(LOCAL_STORAGE_KEYS.TYPE)

      const userId = existId || uniqid()

      localStorage.setItem(LOCAL_STORAGE_KEYS.ID, userId)

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

  setField(name, value) {
    if (!name || !(value !== undefined && value !== null)) {
      this._handleError('AnalyticsEvent.setField() method is failed. Please add name or values params')
    }
    this.properties[name] = value
    return this
  }

  _setPath() {
    this.properties.path = window.location.pathname
  }

  _collectGoogleAnalyticsKeys() {
    const keys = window.dataLayer
      ?.filter(dataLayerValue => dataLayerValue[0] === 'config' && dataLayerValue.length >= 3)
      .map(dataLayerValue => dataLayerValue[1]) || []

    return Array.from(new Set(keys))
  }

  _log(analyticsKeys) {
    const msg = [
      '<------- ANALYTICS EVENT SENDING -------->',
      `EVENT: ${this.action}`,
      `PROPS: ${JSON.stringify(this.properties)}`,
      `ANALYTICS: ${JSON.stringify(analyticsKeys)}`,
    ]

    console.log(msg.join('\n'))
  }

  send() {
    if (process.env.domain === 'https://maddevs.io' || process.env.domain === 'https://maddevs.co') {
      this._setPath()
      this._applyUser()

      const analyticsKeys = this._collectGoogleAnalyticsKeys()

      if (process.env.NODE_ENV === 'development') {
        this._log(analyticsKeys)
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
}
