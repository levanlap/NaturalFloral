import React from 'react'
import { Constants, FacebookAds } from 'expo'
import { Platform, View, Image } from 'react-native'
import { Text } from 'native-base'
import Base from './base'

const { manifest, isDevice } = Constants
const releaseChannel = manifest.releaseChannel || 'default'
const platform = Platform.OS === 'android' ? 'android' : 'ios'
let adsManager

const NUMBER_OF_ADS_TO_REQUEST = 1

class AdComponent extends React.Component {
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <View style={{ margin: 4 }}>
          <Image style={{ height: 24, width: 24 }} source={{ uri: this.props.nativeAd.icon }} />
        </View>
        <View style={{ margin: 10 }}>
          <Text style={{ fontSize: 12 }}>{this.props.nativeAd.title}</Text>
          <Text style={{ fontSize: 12 }}>{this.props.nativeAd.description}</Text>
        </View>
      </View>
    )
  }
}

const FBNativeAds = FacebookAds.withNativeAd(AdComponent)

export default class FacebookAdsAdapter extends Base {
  constructor() {
    super()
    this._config = {
      android: { native: '517912795241080_526412527724440', banner: '517912795241080_526119664420393', interstitial: '517912795241080_525215981177428' },
      ios: { native: '517912795241080_526412577724435', banner: '517912795241080_525214301177596', interstitial: '517912795241080_525216921177334' }
    }

    const config = this._getConfig()
    if (!adsManager) {
      adsManager = new FacebookAds.NativeAdsManager(config.native, NUMBER_OF_ADS_TO_REQUEST)
    }
  }

  // Override
  _getConfig() {
    if (!isDevice || releaseChannel === 'staging') {
      this._setTestDevice()
    }

    return this._config[platform]
  }

  _setTestDevice() {
    FacebookAds.AdSettings.addTestDevice(FacebookAds.AdSettings.currentDeviceHash)
  }

  _showInterstitial(interstitialId) {
    FacebookAds.InterstitialAdManager.showAd(interstitialId)
  }

  _getBanner(bannerId) {
    return () =>
      (<View>
        <FBNativeAds adsManager={adsManager} />
      </View>)
  }
}
