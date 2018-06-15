import React from 'react'
import { AdMobBanner, AdMobInterstitial } from 'expo'
import Base from './base'

export default class AdmobAdsAdapter extends Base {
  constructor() {
    super()
    this._config = {
      android: {
        banner: 'ca-app-pub-8451038217086509/9773282002',
        interstitial: 'ca-app-pub-8451038217086509/6309485611'
      },
      ios: {
        banner: 'ca-app-pub-8451038217086509/6160629619',
        interstitial: 'ca-app-pub-8451038217086509/3693084657'
      },
      test: {
        banner: 'ca-app-pub-3940256099942544/6300978111',
        interstitial: 'ca-app-pub-3940256099942544/1033173712'
      }
    }
  }

  // Override

  _setTestDevice() {
    AdMobInterstitial.setTestDeviceID('EMULATOR')
  }

  _showInterstitial(interstitialId) {
    AdMobInterstitial.setAdUnitID(interstitialId)
    AdMobInterstitial.requestAd(() => AdMobInterstitial.showAd())
  }

  _getBanner(bannerId) {
    return () =>
      (<AdMobBanner
        bannerSize='smartBannerPortrait'
        adUnitID={bannerId}
      />)
  }
}
