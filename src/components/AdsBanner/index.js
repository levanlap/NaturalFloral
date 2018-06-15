import React, { Component } from 'react'
import { View } from 'react-native'
import AdmobAdsAdapter from './adapters/admob'
import AppotaAdsAdapter from './adapters/appota'
import FacebookAdsAdapter from './adapters/facebook'

const admob = new AdmobAdsAdapter()
const appota = new AppotaAdsAdapter()
const facebook = new FacebookAdsAdapter()
const adapters = [admob, appota, facebook]
let pickedIndex = Math.floor(Math.random() * adapters.length)

const getAdsAdapter = () => {
  const adapter = adapters[pickedIndex]
  pickedIndex++
  if (pickedIndex >= adapters.length) {
    pickedIndex = 0
  }

  return adapter
}

export default class AdsBanner extends Component {
  static showInterstitial() {
    getAdsAdapter().showInterstitial()
  }

  componentWillMount() {
    this._banner = getAdsAdapter().banner
  }

  render() {
    return (
      <View>
        {this._banner}
      </View>
    )
  }
}
