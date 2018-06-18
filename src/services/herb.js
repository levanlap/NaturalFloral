/* eslint-disable global-require */

import { Asset } from 'expo'
const herb = [
  {
    code: ['yarrow', 'achillea millefolium'],
    img: require("../../assets/herb/yarrow.jpg"),
    name: "Yarrows",
    scientific: "Achillea",
    rank: "Genus",
    intro: "Achillea is a group of flowering plants in the family Asteraceae described as a genus by Linnaeus in 1753. The genus was named after the Greek mythological character Achilles."
  },
  {
    code: ['Aloe vera', 'achillea millefolium'],
    img: require("../../assets/herb/aloe-vera.jpg"),
    name: "Aloe vera",
    scientific: "Aloe vera",
    rank: "Species",
    intro: "Aloe vera is a succulent plant species of the genus Aloe. An evergreen perennial, it originates from the Arabian Peninsula but grows wild in tropical climates around the world and is cultivated for agricultural and medicinal uses."
  },
  {
    code: ['Sea buckthorns', 'Hippophae', 'argousier'],
    img: require("../../assets/herb/sea-buckthorn.jpg"),
    name: "Sea buckthorns",
    scientific: "Hippophae",
    rank: "Genus",
    intro: "Hippophae is a genus of sea buckthorns, deciduous shrubs in the family Elaeagnaceae. The name sea buckthorn may be hyphenated to avoid confusion with the buckthorns. It is also referred to as sandthorn, sallowthorn, or seaberry."
  },
  {
    code: ['artichoke'],
    img: require("../../assets/herb/artichoke.jpg"),
    name: "Artichoke",
    scientific: "Cynara scolymus",
    rank: "Variety",
    intro: "The globe artichoke is a variety of a species of thistle cultivated as a food. The edible portion of the plant consists of the flower buds before the flowers come into bloom. "
  },
  {
    code: ['mugwort', 'Artemisia vulgaris'],
    img: require("../../assets/herb/mugwort.jpg"),
    name: "Mugwort",
    scientific: "Artemisia vulgaris",
    rank: "Species",
    intro: "Artemisia vulgaris is one of several species in the genus Artemisia commonly known as mugwort, although Artemisia vulgaris is the species most often called mugwort"
  },
  {
    code: ['tilia cordata'],
    img: require("../../assets/herb/tilia-cordata.jpg"),
    name: "Tilia cordata",
    scientific: "Tilia cordata",
    rank: "Species",
    intro: "Tilia cordata is a species of Tilia native to much of Europe. It is found from Britain through central Fennoscandia, to central Russia, and south to central Portugal, Spain, Italy, Greece, Bulgaria, Romania, Turkey, the Caucasus, and western Asia."
  }

]

class ImageStorage {
  async cacheEntireImages() {
    let images = []
    images = images.concat(herb)
    await Promise.all(images.map((image) => {
      return Asset.fromModule(image).downloadAsync().catch((ignored) => {
        console.error(ignored)
      })
    }))
  }


  getCsgoImages(code) {
    if (code.trim() == "") {
      return
    }
    else {
      return productsData.find((item) => item.code == code).img
    }
  }
}

export default new ImageStorage()
