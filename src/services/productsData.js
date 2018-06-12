/* eslint-disable global-require */
 
import { Asset } from 'expo'

const commonImages = [
  require('../resources/images/person-placeholder.png'),
  require('../resources/images/win2.png')
]
 
const productsData = [
  { code: 4324324324, name: 'Achillée millefeuille Bio'},
  { code: 4324324324, name: 'Aloe vera - Sève'},
  { code: 4324324324, name: 'Aloe vera'},
  { code: 4324324324, name: 'Jus d’argousier'},
  { code: 4324324324, name: 'Artichaut'},
  { code: 4324324324, name: 'Armoise'},
  { code: 4324324324, name: 'Aubier de tilleul'},
  { code: 4324324324, name: 'Sève de Bouleau'},
  { code: 4324324324, name: 'Bruyère'},
  { code: 4324324324, name: 'Cassis'},
  { code: 4324324324, name: 'Chardon Marie'},
  { code: 4324324324, name: 'Cranberry - Cannberge'},
]

const products = [
  { name: "Cassis feuilles", price: "11,41", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/cassis-bio.png") },
  { name: "Jus d'Argousier", price: "12,47", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Aloé Vera Sève", price: "14,67", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/aloe-vera-seve-bio.jpg") },
  { name: "Achillée millefeuille", price: "14,67", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/achillee-millefeuille-bio.jpg") },
  { name: "Artichaut", price: "10,37", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/artichaut-bio.jpg") },
  { name: "Armoise", price: "12,47", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/armoise-bio.jpg") },
  { name: "Aubier de Tilleul", price: "12,47", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/aubier-de-tilleul-bio.jpg") },
  { name: "Sève de Bouleau", price: "16,76", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/seve-de-bouleau-bio.jpg") },
  { name: "Bruyère", price: "13,52", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/bruyere-bio.jpg") },
  { name: "Chardon Marie Semence", price: "11,41", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/chardon-marie-bio.jpg") },
  { name: "Cranberry Canneberge fruit", price: "12,47", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/cranberry-canneberge-bio.jpg") },
  { name: "Desmodium", price: "12,47", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/desmodium-bio.jpg") },
  { name: "Valériane racine", price: "14,65", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Fumeterre", price: "12,47", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Radis Noir racines", price: "11,41", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Ginkgo Biloba feuilles", price: "12,47", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Pissenlit racine", price: "13,52", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Harpagophytum", price: "12,47", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Olivier feuilles", price: "12,47", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Millepertuis Plante entière", price: "14,17", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Marron d'Inde fruit", price: "11,41", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Pavot de Californie Plante entière flecodee", price: "14,65", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Mélisse feuilles", price: "13,52", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Reine des Prés", price: "12,47", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Vigne Rouge feuilles", price: "11,41", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Serpolet Plante entière", price: "13,52", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Mauve Plante entière flecodee", price: "13,52", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Echinacée Plante entière flecodee", price: "15,23", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Sarriette feuilles", price: "14,65", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Prèle des Champs", price: "12,47", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Ortie piquante Plante entière", price: "12,47", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Lotier corniculé Plante entière", price: "14,65", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Tanaisie Plante entière", price: "12,47", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Aloe Vera Mucilage", price: "14,67", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Myrtille feuilles", price: "13,52", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Menthe poivrée Plante entière", price: "12,47", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Menthe Nanah feuilles", price: "12,47", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") },
  { name: "Romarin feuilles", price: "11,41", pack: "20 ampoules de 15 ml", box: "300 ml", code: require("../../../../assets/products/argousier-bio.jpg") }
]
const itemImages = [
  require('../resources/images/items/1.png'),
  require('../resources/images/items/2.png'),
  require('../resources/images/items/3.png'),
  require('../resources/images/items/4.png'),
  require('../resources/images/items/5.png'),
  require('../resources/images/items/6.png'),
  require('../resources/images/items/7.png'),
  require('../resources/images/items/8.png'),
  require('../resources/images/items/9.png'),
  require('../resources/images/items/10.png'),
  require('../resources/images/items/11.png'),
  require('../resources/images/items/12.png'),
  require('../resources/images/items/13.png'),
  require('../resources/images/items/14.png'),
  require('../resources/images/items/15.png'),
  require('../resources/images/items/16.png'),
  require('../resources/images/items/17.png'),
  require('../resources/images/items/18.png'),
  require('../resources/images/items/19.png'),
  require('../resources/images/items/20.png'),
  require('../resources/images/items/21.png'),
  require('../resources/images/items/22.png'),
  require('../resources/images/items/23.png'),
  require('../resources/images/items/24.png'),
  require('../resources/images/items/25.png'),
  require('../resources/images/items/26.png'),
  require('../resources/images/items/27.png'),
  require('../resources/images/items/28.png'),
  require('../resources/images/items/29.png'),
  require('../resources/images/items/30.png'),
  require('../resources/images/items/31.png'),
  require('../resources/images/items/32.png'),
  require('../resources/images/items/33.png'),
  require('../resources/images/items/34.png'),
  require('../resources/images/items/35.png'),
  require('../resources/images/items/36.png'),
  require('../resources/images/items/37.png'),
  require('../resources/images/items/38.png'),
  require('../resources/images/items/39.png'),
  require('../resources/images/items/40.png'),
  require('../resources/images/items/41.png'),
  require('../resources/images/items/42.png'),
  require('../resources/images/items/43.png'),
  require('../resources/images/items/44.png'),
  require('../resources/images/items/45.png'),
  require('../resources/images/items/46.png'),
  require('../resources/images/items/47.png'),
  require('../resources/images/items/48.png'),
  require('../resources/images/items/49.png'),
  require('../resources/images/items/50.png'),
  require('../resources/images/items/51.png'),
  require('../resources/images/items/52.png'),
  require('../resources/images/items/53.png'),
  require('../resources/images/items/54.png'),
  require('../resources/images/items/55.png'),
  require('../resources/images/items/56.png'),
  require('../resources/images/items/57.png'),
  require('../resources/images/items/58.png'),
  require('../resources/images/items/59.png'),
  require('../resources/images/items/60.png'),
  require('../resources/images/items/61.png'),
  require('../resources/images/items/62.png'),
  require('../resources/images/items/63.png'),
  require('../resources/images/items/64.png'),
  require('../resources/images/items/65.png'),
  require('../resources/images/items/66.png'),
  require('../resources/images/items/67.png'),
  require('../resources/images/items/68.png'),
  require('../resources/images/items/69.png'),
  require('../resources/images/items/70.png'),
  require('../resources/images/items/71.png'),
  require('../resources/images/items/72.png'),
  require('../resources/images/items/73.png'),
  require('../resources/images/items/74.png'),
  require('../resources/images/items/75.png'),
  require('../resources/images/items/76.png'),
  require('../resources/images/items/77.png'),
  require('../resources/images/items/78.png'),
  require('../resources/images/items/79.png'),
  require('../resources/images/items/80.png'),
  require('../resources/images/items/81.png'),
  require('../resources/images/items/82.png'),
  require('../resources/images/items/83.png'),
  require('../resources/images/items/84.png'),
  require('../resources/images/items/85.png'),
  require('../resources/images/items/86.png'),
  require('../resources/images/items/87.png'),
  require('../resources/images/items/88.png'),
  require('../resources/images/items/89.png'),
  require('../resources/images/items/90.png'),
  require('../resources/images/items/91.png'),
  require('../resources/images/items/92.png'),
  require('../resources/images/items/93.png'),
  require('../resources/images/items/94.png'),
  require('../resources/images/items/95.png'),
  require('../resources/images/items/96.png'),
  require('../resources/images/items/97.png'),
  require('../resources/images/items/98.png'),
  require('../resources/images/items/99.png'),
  require('../resources/images/items/100.png'),
  require('../resources/images/items/101.png'),
  require('../resources/images/items/102.png'),
  require('../resources/images/items/103.png'),
  require('../resources/images/items/104.png'),
  require('../resources/images/items/105.png'),
  require('../resources/images/items/106.png'),
  require('../resources/images/items/107.png'),
  require('../resources/images/items/108.png'),
  require('../resources/images/items/109.png'),
  require('../resources/images/items/110.png'),
  require('../resources/images/items/111.png'),
  require('../resources/images/items/112.png'),
  require('../resources/images/items/113.png'),
  require('../resources/images/items/114.png'),
  require('../resources/images/items/115.png'),
  require('../resources/images/items/116.png'),
  require('../resources/images/items/117.png'),
  require('../resources/images/items/118.png'),
  require('../resources/images/items/119.png'),
  require('../resources/images/items/120.png'),
  require('../resources/images/items/121.png'),
  require('../resources/images/items/122.png'),
  require('../resources/images/items/123.png'),
  require('../resources/images/items/124.png'),
  require('../resources/images/items/125.png'),
  require('../resources/images/items/126.png'),
  require('../resources/images/items/127.png'),
  require('../resources/images/items/128.png'),
  require('../resources/images/items/129.png'),
  require('../resources/images/items/130.png'),
  require('../resources/images/items/131.png'),
  require('../resources/images/items/132.png'),
  require('../resources/images/items/133.png'),
  require('../resources/images/items/134.png'),
  require('../resources/images/items/135.png'),
  require('../resources/images/items/136.png'),
  require('../resources/images/items/137.png'),
  require('../resources/images/items/138.png'),
  require('../resources/images/items/139.png'),
  require('../resources/images/items/140.png'),
  require('../resources/images/items/141.png'),
  require('../resources/images/items/142.png'),
  require('../resources/images/items/143.png'),
  require('../resources/images/items/144.png'),
  require('../resources/images/items/145.png'),
  require('../resources/images/items/146.png'),
  require('../resources/images/items/147.png'),
  require('../resources/images/items/148.png'),
  require('../resources/images/items/149.png'),
  require('../resources/images/items/150.png'),
  require('../resources/images/items/151.png'),
  require('../resources/images/items/152.png'),
  require('../resources/images/items/153.png'),
  require('../resources/images/items/154.png'),
  require('../resources/images/items/155.png'),
  require('../resources/images/items/156.png'),
  require('../resources/images/items/157.png'),
  require('../resources/images/items/158.png'),
  require('../resources/images/items/159.png'),
  require('../resources/images/items/160.png'),
  require('../resources/images/items/161.png'),
  require('../resources/images/items/162.png'),
  require('../resources/images/items/163.png'),
  require('../resources/images/items/164.png'),
  require('../resources/images/items/165.png'),
  require('../resources/images/items/166.png'),
  require('../resources/images/items/167.png'),
  require('../resources/images/items/168.png'),
  require('../resources/images/items/169.png'),
  require('../resources/images/items/170.png'),
  require('../resources/images/items/171.png'),
  require('../resources/images/items/172.png'),
  require('../resources/images/items/173.png'),
  require('../resources/images/items/174.png'),
  require('../resources/images/items/175.png'),
  require('../resources/images/items/176.png'),
  require('../resources/images/items/177.png'),
  require('../resources/images/items/178.png'),
  require('../resources/images/items/179.png'),
  require('../resources/images/items/180.png'),
  require('../resources/images/items/181.png'),
  require('../resources/images/items/182.png'),
  require('../resources/images/items/183.png'),
  require('../resources/images/items/184.png'),
  require('../resources/images/items/185.png'),
  require('../resources/images/items/186.png'),
  require('../resources/images/items/187.png'),
  require('../resources/images/items/188.png'),
  require('../resources/images/items/189.png'),
  require('../resources/images/items/190.png'),
  require('../resources/images/items/191.png'),
  require('../resources/images/items/192.png'),
  require('../resources/images/items/193.png'),
  require('../resources/images/items/194.png'),
  require('../resources/images/items/195.png'),
  require('../resources/images/items/196.png'),
  require('../resources/images/items/197.png'),
  require('../resources/images/items/198.png'),
  require('../resources/images/items/199.png'),
  require('../resources/images/items/200.png'),
  require('../resources/images/items/201.png'),
  require('../resources/images/items/202.png'),
  require('../resources/images/items/203.png'),
  require('../resources/images/items/204.png'),
  require('../resources/images/items/205.png'),
  require('../resources/images/items/206.png'),
  require('../resources/images/items/207.png'),
  require('../resources/images/items/208.png'),
  require('../resources/images/items/209.png'),
  require('../resources/images/items/210.png'),
  require('../resources/images/items/211.png'),
  require('../resources/images/items/212.png'),
  require('../resources/images/items/213.png'),
  require('../resources/images/items/214.png'),
  require('../resources/images/items/215.png'),
  require('../resources/images/items/216.png'),
  require('../resources/images/items/217.png'),
  require('../resources/images/items/218.png'),
  require('../resources/images/items/219.png'),
  require('../resources/images/items/220.png'),
  require('../resources/images/items/221.png'),
  require('../resources/images/items/222.png'),
  require('../resources/images/items/223.png'),
  require('../resources/images/items/224.png'),
  require('../resources/images/items/225.png'),
  require('../resources/images/items/226.png'),
  require('../resources/images/items/227.png'),
  require('../resources/images/items/228.png'),
  require('../resources/images/items/229.png'),
  require('../resources/images/items/230.png'),
  require('../resources/images/items/231.png'),
  require('../resources/images/items/232.png'),
  require('../resources/images/items/233.png'),
  require('../resources/images/items/234.png'),
  require('../resources/images/items/235.png'),
  require('../resources/images/items/236.png'),
  require('../resources/images/items/237.png'),
  require('../resources/images/items/238.png'),
  require('../resources/images/items/239.png'),
  require('../resources/images/items/240.png'),
  require('../resources/images/items/241.png'),
  require('../resources/images/items/242.png'),
  require('../resources/images/items/243.png'),
  require('../resources/images/items/244.png'),
  require('../resources/images/items/245.png'),
  require('../resources/images/items/246.png'),
  require('../resources/images/items/247.png'),
  require('../resources/images/items/248.png'),
  require('../resources/images/items/249.png'),
  require('../resources/images/items/250.png'),
  require('../resources/images/items/251.png'),
  require('../resources/images/items/252.png'),
  require('../resources/images/items/253.png'),
  require('../resources/images/items/254.png'),
  require('../resources/images/items/255.png'),
  require('../resources/images/items/256.png'),
  require('../resources/images/items/257.png'),
  require('../resources/images/items/258.png'),
  require('../resources/images/items/259.png'),
  require('../resources/images/items/260.png'),
  require('../resources/images/items/261.png'),
  require('../resources/images/items/262.png'),
  require('../resources/images/items/263.png'),
  require('../resources/images/items/264.png'),
  require('../resources/images/items/265.png'),
  require('../resources/images/items/266.png'),
  require('../resources/images/items/267.png'),
  require('../resources/images/items/268.png'),
  require('../resources/images/items/269.png'),
  require('../resources/images/items/270.png'),
  require('../resources/images/items/271.png'),
  require('../resources/images/items/272.png'),
  require('../resources/images/items/273.png'),
  require('../resources/images/items/274.png'),
  require('../resources/images/items/275.png'),
  require('../resources/images/items/276.png')
]

const heroImages = [
  require('../resources/images/heroes/1.png'),
  require('../resources/images/heroes/2.png'),
  require('../resources/images/heroes/3.png'),
  require('../resources/images/heroes/4.png'),
  require('../resources/images/heroes/5.png'),
  require('../resources/images/heroes/6.png'),
  require('../resources/images/heroes/7.png'),
  require('../resources/images/heroes/8.png'),
  require('../resources/images/heroes/9.png'),
  require('../resources/images/heroes/10.png'),
  require('../resources/images/heroes/11.png'),
  require('../resources/images/heroes/12.png'),
  require('../resources/images/heroes/13.png'),
  require('../resources/images/heroes/14.png'),
  require('../resources/images/heroes/15.png'),
  require('../resources/images/heroes/16.png'),
  require('../resources/images/heroes/17.png'),
  require('../resources/images/heroes/18.png'),
  require('../resources/images/heroes/19.png'),
  require('../resources/images/heroes/20.png'),
  require('../resources/images/heroes/21.png'),
  require('../resources/images/heroes/22.png'),
  require('../resources/images/heroes/23.png'),
  require('../resources/images/heroes/24.png'),
  require('../resources/images/heroes/25.png'),
  require('../resources/images/heroes/26.png'),
  require('../resources/images/heroes/27.png'),
  require('../resources/images/heroes/28.png'),
  require('../resources/images/heroes/29.png'),
  require('../resources/images/heroes/30.png'),
  require('../resources/images/heroes/31.png'),
  require('../resources/images/heroes/32.png'),
  require('../resources/images/heroes/33.png'),
  require('../resources/images/heroes/34.png'),
  require('../resources/images/heroes/35.png'),
  require('../resources/images/heroes/36.png'),
  require('../resources/images/heroes/37.png'),
  require('../resources/images/heroes/38.png'),
  require('../resources/images/heroes/39.png'),
  require('../resources/images/heroes/40.png'),
  require('../resources/images/heroes/41.png'),
  require('../resources/images/heroes/42.png'),
  require('../resources/images/heroes/43.png'),
  require('../resources/images/heroes/44.png'),
  require('../resources/images/heroes/45.png'),
  require('../resources/images/heroes/46.png'),
  require('../resources/images/heroes/47.png'),
  require('../resources/images/heroes/48.png'),
  require('../resources/images/heroes/49.png'),
  require('../resources/images/heroes/50.png'),
  require('../resources/images/heroes/51.png'),
  require('../resources/images/heroes/52.png'),
  require('../resources/images/heroes/53.png'),
  require('../resources/images/heroes/54.png'),
  require('../resources/images/heroes/55.png'),
  require('../resources/images/heroes/56.png'),
  require('../resources/images/heroes/57.png'),
  require('../resources/images/heroes/58.png'),
  require('../resources/images/heroes/59.png'),
  require('../resources/images/heroes/60.png'),
  require('../resources/images/heroes/61.png'),
  require('../resources/images/heroes/62.png'),
  require('../resources/images/heroes/63.png'),
  require('../resources/images/heroes/64.png'),
  require('../resources/images/heroes/65.png'),
  require('../resources/images/heroes/66.png'),
  require('../resources/images/heroes/67.png'),
  require('../resources/images/heroes/68.png'),
  require('../resources/images/heroes/69.png'),
  require('../resources/images/heroes/70.png'),
  require('../resources/images/heroes/71.png'),
  require('../resources/images/heroes/72.png'),
  require('../resources/images/heroes/73.png'),
  require('../resources/images/heroes/74.png'),
  require('../resources/images/heroes/75.png'),
  require('../resources/images/heroes/76.png'),
  require('../resources/images/heroes/77.png'),
  require('../resources/images/heroes/78.png'),
  require('../resources/images/heroes/79.png'),
  require('../resources/images/heroes/80.png'),
  require('../resources/images/heroes/81.png'),
  require('../resources/images/heroes/82.png'),
  require('../resources/images/heroes/83.png'),
  require('../resources/images/heroes/84.png'),
  require('../resources/images/heroes/85.png'),
  require('../resources/images/heroes/86.png'),
  require('../resources/images/heroes/87.png'),
  require('../resources/images/heroes/88.png'),
  require('../resources/images/heroes/89.png'),
  require('../resources/images/heroes/90.png'),
  require('../resources/images/heroes/91.png'),
  require('../resources/images/heroes/92.png'),
  require('../resources/images/heroes/93.png'),
  require('../resources/images/heroes/94.png'),
  require('../resources/images/heroes/95.png'),
  require('../resources/images/heroes/96.png'),
  require('../resources/images/heroes/97.png'),
  require('../resources/images/heroes/98.png'),
  require('../resources/images/heroes/99.png'),
  require('../resources/images/heroes/100.png'),
  require('../resources/images/heroes/101.png'),
  require('../resources/images/heroes/102.png'),
  require('../resources/images/heroes/103.png'),
  require('../resources/images/heroes/104.png'),
  require('../resources/images/heroes/105.png'),
  require('../resources/images/heroes/106.png'),
  require('../resources/images/heroes/107.png'),
  require('../resources/images/heroes/108.png'),
  require('../resources/images/heroes/109.png'),
  require('../resources/images/heroes/110.png'),
  require('../resources/images/heroes/111.png'),
  require('../resources/images/heroes/112.png'),
  require('../resources/images/heroes/113.png'),
  require('../resources/images/heroes/114.png'),
  require('../resources/images/heroes/115.png'),
  require('../resources/images/heroes/116.png'),
  require('../resources/images/heroes/117.png'),
  require('../resources/images/heroes/118.png'),
  require('../resources/images/heroes/119.png'),
  require('../resources/images/heroes/120.png')
]

const csgoImages = [
  { name: 'ak47', uri: require('../resources/images/csgo/weapons/ak47.png') },
  { name: 'awp', uri: require('../resources/images/csgo/weapons/awp.png') },
  { name: 'cz75a', uri: require('../resources/images/csgo/weapons/cz75a.png') },
  { name: 'deagle', uri: require('../resources/images/csgo/weapons/deagle.png') },
  { name: 'famas', uri: require('../resources/images/csgo/weapons/famas.png') },
  { name: 'm4a1_silencer', uri: require('../resources/images/csgo/weapons/m4a1_silencer.png') },
  { name: 'm4a1', uri: require('../resources/images/csgo/weapons/m4a1.png') },
  { name: 'mac10', uri: require('../resources/images/csgo/weapons/mac10.png') },
  { name: 'p250', uri: require('../resources/images/csgo/weapons/p250.png') },
  { name: 'ump45', uri: require('../resources/images/csgo/weapons/ump45.png') },
  { name: 'usp_silencer', uri: require('../resources/images/csgo/weapons/usp_silencer.png') },
  { name: 'glock', uri: require('../resources/images/csgo/weapons/glock.png') },
  { name: 'T_Win', uri: require('../resources/images/csgo/scoreicon/t_win.png') },
  { name: 'CT_Win', uri: require('../resources/images/csgo/scoreicon/ct_win.png') },
  { name: 'ST', uri: require('../resources/images/csgo/scoreicon/stopwatch.png') },
  { name: 'EMPTY', uri: require('../resources/images/csgo/scoreicon/emptyHistory.png') },
  { name: 'BOMD_DEFUSED', uri: require('../resources/images/csgo/scoreicon/bomb_defused.png') },
  { name: 'BOMD_EXPLODED', uri: require('../resources/images/csgo/scoreicon/bomb_exploded.png') },
  { name: 'BUY', uri: require('../resources/images/csgo/scoreicon/buy.png') },
  { name: 'HEALTH', uri: require('../resources/images/csgo/scoreicon/health.png') },
  { name: 'KEVLAR', uri: require('../resources/images/csgo/scoreicon/kevlar.png') },
  { name: 'KEVLAR_HELMET', uri: require('../resources/images/csgo/scoreicon/kevlar_helmet.png') },
  { name: 'DEFUSED', uri: require('../resources/images/csgo/scoreicon/defusekit.png') },
  { name: 'usp_silencer_blue', uri: require('../resources/images/csgo/scoreicon/usp_silencer_blue.png') },
  { name: 'usp_silencer_grey', uri: require('../resources/images/csgo/scoreicon/usp_silencer_grey.png') },
  { name: 'glock_yellow', uri: require('../resources/images/csgo/scoreicon/glock_yellow.png') },
  { name: 'glock_grey', uri: require('../resources/images/csgo/scoreicon/glock_grey.png') },
  { name: 'train', uri: require('../resources/images/csgo/maps/train.png') },
  { name: 'train-mini', uri: require('../resources/images/csgo/maps/train-mini.png') },
  { name: 'overpass', uri: require('../resources/images/csgo/maps/overpass.png') },
  { name: 'overpass-mini', uri: require('../resources/images/csgo/maps/overpass-mini.png') },
  { name: 'nuke', uri: require('../resources/images/csgo/maps/nuke.png') },
  { name: 'nuke-mini', uri: require('../resources/images/csgo/maps/nuke-mini.png') },
  { name: 'mirage', uri: require('../resources/images/csgo/maps/mirage.png') },
  { name: 'mirage-mini', uri: require('../resources/images/csgo/maps/mirage-mini.png') },
  { name: 'inferno', uri: require('../resources/images/csgo/maps/inferno.png') },
  { name: 'inferno-mini', uri: require('../resources/images/csgo/maps/inferno-mini.png') },
  { name: 'dust2', uri: require('../resources/images/csgo/maps/dust2.png') },
  { name: 'dust2-mini', uri: require('../resources/images/csgo/maps/dust2-mini.png') },
  { name: 'cobblestone', uri: require('../resources/images/csgo/maps/cobblestone.png') },
  { name: 'cobblestone-mini', uri: require('../resources/images/csgo/maps/cobblestone-mini.png') },
  { name: 'cache', uri: require('../resources/images/csgo/maps/cache.png') },
  { name: 'cache-mini', uri: require('../resources/images/csgo/maps/cache-mini.png') }
]
const TEAM_IMG_URL = 'http://esportsace.com/static/images/dota2/teams/'

class ImageStorage {
  async cacheEntireImages() {
    let images = []
    images = images.concat(commonImages)
    images = images.concat(itemImages)
    images = images.concat(heroImages)
    images = images.concat(csgoImages)

    await Promise.all(images.map((image) => {
      return Asset.fromModule(image).downloadAsync().catch((ignored) => {
        console.error(ignored) // eslint-disable-line
      })
    }))
  }

  getHeroImage(id) {
    return heroImages[id - 1]
  }

  getItemImage(id) {
    return itemImages[id - 1]
  }

  getTeamImage(id) {
    return `${TEAM_IMG_URL}/${id}.png`
  }

  getCsgoImages(name) {
    if (name.trim() == "") {
      return
    }
    else {
      return csgoImages.find((item) => item.name == name).uri
    }
  }
}

export default new ProductsStorage()
