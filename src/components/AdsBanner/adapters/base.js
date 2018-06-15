import React from 'react'
import { Constants } from 'expo'
import { Platform, View } from 'react-native'

const { manifest, isDevice } = Constants
const releaseChannel = manifest.releaseChannel || 'default'
const platform = Platform.OS === 'android' ? 'android' : 'ios'

export default class BaseAdsAdapter {
  constructor() {
    this._config = {
      android: { banner: '', interstitial: '' },
      ios: { banner: '', interstitial: '' },
      test: { banner: '', interstitial: '' }
    }
  }

  get banner() {
    const config = this._getConfig()
    const Banner = this._getBanner(config.banner)

    if (Banner) {
      return (
        <View style={{ height: 50 }}>
          <Banner />
        </View>
      )
    }
    return <View />
  }

  showInterstitial() {
    return // Temporarily not show interstitial
    if (!isDevice) {
      // Don't show Interstitial in development mode to avoid distraction.
    }

    const config = this._getConfig()
    this._showInterstitial(config.interstitial)
  }

  _getConfig() {
    if (!isDevice || releaseChannel === 'staging' || releaseChannel.includes('feature-')) {
      this._setTestDevice()
      return this._config.test
    }

    return this._config[platform]
  }

  _setTestDevice() {

  }

  _getBanner(bannerId) {
    return (
      <View />
    )
  }

  _showInterstitial(interstitialId) {

  }
}
