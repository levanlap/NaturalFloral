import { AdMobBanner, AdMobInterstitial } from 'expo'
import AdmobAdsAdapter from './admob'

export default class AppotaAdsAdapter extends AdmobAdsAdapter {
  constructor() {
    super()
    this._config = {
      android: {
        banner: '/21617015150/44423344/21679144905',
        interstitial: '/21617015150/44423344/21680253281'
      },
      ios: {
        banner: '/21617015150/44423344/21679185544',
        interstitial: '/21617015150/44423344/21680253236'
      },
      test: {
        banner: 'ca-app-pub-3940256099942544/6300978111',
        interstitial: 'ca-app-pub-3940256099942544/1033173712'
      }
    }
  }
}
