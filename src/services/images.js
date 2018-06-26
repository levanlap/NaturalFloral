/* eslint-disable global-require */

import { Asset } from 'expo'
const commonImages = [
  require('../resources/images/no-image.png'),
  require('../resources/images/icon-favorite.png'),
  
]

const produitsImages = [
  { qrCode: 3760265300013, img: require('../resources/images/produits/3760265300013.png') },
  { qrCode: 3760265300020, img: require('../resources/images/produits/3760265300020.png') },
  { qrCode: 3760265300037, img: require('../resources/images/produits/3760265300037.png') },
  { qrCode: 3760265300044, img: require('../resources/images/produits/3760265300044.png') },
  { qrCode: 3760265300051, img: require('../resources/images/produits/3760265300051.png') },
  { qrCode: 3760265300068, img: require('../resources/images/produits/3760265300068.png') },
  { qrCode: 3760265300075, img: require('../resources/images/produits/3760265300075.png') },
  { qrCode: 3760265300082, img: require('../resources/images/produits/3760265300082.png') },
  { qrCode: 3760265300099, img: require('../resources/images/produits/3760265300099.png') },
  { qrCode: 3760265300105, img: require('../resources/images/produits/3760265300105.png') },
  { qrCode: 3760265300112, img: require('../resources/images/produits/3760265300112.png') },
  { qrCode: 3760265300129, img: require('../resources/images/produits/3760265300129.png') },
  { qrCode: 3760265300136, img: require('../resources/images/produits/3760265300136.png') },
  { qrCode: 3760265300143, img: require('../resources/images/produits/3760265300143.png') },
  { qrCode: 3760265300150, img: require('../resources/images/produits/3760265300150.png') },
  { qrCode: 3760265300167, img: require('../resources/images/produits/3760265300167.png') },
  { qrCode: 3760265300174, img: require('../resources/images/produits/3760265300174.png') },
  { qrCode: 3760265300181, img: require('../resources/images/produits/3760265300181.png') },
  { qrCode: 3760265300198, img: require('../resources/images/produits/3760265300198.png') },
  { qrCode: 3760265300204, img: require('../resources/images/produits/3760265300204.png') },
  { qrCode: 3760265300211, img: require('../resources/images/produits/3760265300211.png') },
  { qrCode: 3760265300228, img: require('../resources/images/produits/3760265300228.png') },
  { qrCode: 3760265300235, img: require('../resources/images/produits/3760265300235.png') },
  { qrCode: 3760265300242, img: require('../resources/images/produits/3760265300242.png') },
  { qrCode: 3760265300259, img: require('../resources/images/produits/3760265300259.png') },
  { qrCode: 3760265300266, img: require('../resources/images/produits/3760265300266.png') },
  { qrCode: 3760265300273, img: require('../resources/images/produits/3760265300273.png') },
  { qrCode: 3760265300280, img: require('../resources/images/produits/3760265300280.png') },
  { qrCode: 3760265300297, img: require('../resources/images/produits/3760265300297.png') },
  { qrCode: 3760265300303, img: require('../resources/images/produits/3760265300303.png') },
  { qrCode: 3760265300310, img: require('../resources/images/produits/3760265300310.png') },
  { qrCode: 3760265300327, img: require('../resources/images/produits/3760265300327.png') },
  { qrCode: 3760265300334, img: require('../resources/images/produits/3760265300334.png') },
  { qrCode: 3760265300341, img: require('../resources/images/produits/3760265300341.png') },
  { qrCode: 3760265300358, img: require('../resources/images/produits/3760265300358.png') },
  { qrCode: 3760265300365, img: require('../resources/images/produits/3760265300365.png') },
  { qrCode: 3760265300372, img: require('../resources/images/produits/3760265300372.png') },
  { qrCode: 3760265300389, img: require('../resources/images/produits/3760265300389.png') },
  { qrCode: 3760265301607, img: require('../resources/images/produits/3760265301607.png') },
  { qrCode: 3760265301614, img: require('../resources/images/produits/3760265301614.png') },
  { qrCode: 3760265301645, img: require('../resources/images/produits/3760265301645.png') },
  { qrCode: 3760265301652, img: require('../resources/images/produits/3760265301652.png') },
  { qrCode: 3760265301669, img: require('../resources/images/produits/3760265301669.png') },
  { qrCode: 3760265301683, img: require('../resources/images/produits/3760265301683.png') },
  { qrCode: 3760265301706, img: require('../resources/images/produits/3760265301706.png') },
  { qrCode: 3760265302000, img: require('../resources/images/produits/3760265302000.png') },
  { qrCode: 3760265302017, img: require('../resources/images/produits/3760265302017.png') },
  { qrCode: 3760265302024, img: require('../resources/images/produits/3760265302024.png') },
  { qrCode: 3760265302031, img: require('../resources/images/produits/3760265302031.png') },
  { qrCode: 3760265302048, img: require('../resources/images/produits/3760265302048.png') },
  { qrCode: 3760265302055, img: require('../resources/images/produits/3760265302055.png') },
  { qrCode: 3760265302062, img: require('../resources/images/produits/3760265302062.png') },
  { qrCode: 3760265302079, img: require('../resources/images/produits/3760265302079.png') },
  { qrCode: 3760265302086, img: require('../resources/images/produits/3760265302086.png') },
  { qrCode: 3760265302093, img: require('../resources/images/produits/3760265302093.png') },
  { qrCode: 3760265302109, img: require('../resources/images/produits/3760265302109.png') },
  { qrCode: 3760265302208, img: require('../resources/images/produits/3760265302208.png') },
  { qrCode: 3760265302703, img: require('../resources/images/produits/3760265302703.png') },
  { qrCode: 3760265302710, img: require('../resources/images/produits/3760265302710.png') },
  { qrCode: 3760265302727, img: require('../resources/images/produits/3760265302727.png') }
]

class ImageStorage {
  async cacheEntireImages() {
    let images = []
    images = images.concat(commonImages)
    images = images.concat(produitsImages)

    await Promise.all(images.map((image) => {
      return Asset.fromModule(image).downloadAsync().catch((ignored) => {
        console.error(ignored) // eslint-disable-line
      })
    }))
  }



  getCommonImages(id) {
    return commonImages[id]
  }

  getProduitsImages(qrCode) {
    if (qrCode.trim() == "") {
      return
    }
    else {
      //const styleSide = side === 'right' ? { justifyContent: 'flex-end' } : ''

      return produitsImages.find((item) => item.qrCode == qrCode).img
    }
  }
}

export default new ImageStorage()
