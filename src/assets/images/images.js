import beauty from './beauty.jpg'
import fragrances from './fragrances.jpg'
import furniture from './furniture.jpg'
import groceries from './groceries.jpg'
import homedecoration from './home-decoration.jpg'
import kitcheaccessories from './kitchen-accessories.jpg'
import laptops from './laptops.jpg'
import mensshirts from './mens-shirts.jpg'
import mensshoes from './mens-shoes.jpg'
import menswatches from './mens-watches.jpg'
import mobileaccessories from './mobile-accessories.jpg'
import motorcycle from './motorcycle.jpg'
import skincare from './skin-care.jpg'
import smartphones from './smartphones.jpg'
import sportaccessories from './sport-accessories.jpg'
import sunglasses from './sunglasses.jpg'
import tablets from './tablets.jpg'
import tops from './tops.jpg'
import vehicle from './vehicle.jpg'
import womenswatches from './women-watches.jpg'
import womensbags from './womens-bags.jpg'
import womensdresses from './womens-dresses.jpg'
import womensjewellery from './womens-jewellery.jpg'
import womensshoes from './womens-shoes.jpg'

const categoriesMap = new Map()
categoriesMap.set('beauty', beauty)
categoriesMap.set('fragrances', fragrances)
categoriesMap.set('furniture', furniture)
categoriesMap.set('home-decoration', homedecoration)
categoriesMap.set('kitchen-accessories', kitcheaccessories)
categoriesMap.set('groceries', groceries)
categoriesMap.set('laptops', laptops)
categoriesMap.set('mens-shirts', mensshirts)
categoriesMap.set('mens-shoes', mensshoes)
categoriesMap.set('mens-watches', menswatches)
categoriesMap.set('mobile-accessories', mobileaccessories)
categoriesMap.set('motorcycle', motorcycle)
categoriesMap.set('skin-care', skincare)
categoriesMap.set('smartphones', smartphones)
categoriesMap.set('sports-accessories', sportaccessories)
categoriesMap.set('sunglasses', sunglasses)
categoriesMap.set('tablets', tablets)
categoriesMap.set('tops', tops)
categoriesMap.set('vehicle', vehicle)
categoriesMap.set('womens-watches', womenswatches)
categoriesMap.set('womens-bags', womensbags)
categoriesMap.set('womens-dresses', womensdresses)
categoriesMap.set('womens-jewellery', womensjewellery)
categoriesMap.set('womens-shoes', womensshoes)

const categoriesList = [
  beauty,
  fragrances,
  furniture,
  groceries,
  homedecoration,
  kitcheaccessories,
  laptops,
  mensshirts,
  mensshoes,
  menswatches,
  mobileaccessories,
  motorcycle,
  skincare,
  smartphones,
  sportaccessories,
  sunglasses,
  tablets,
  tops,
  vehicle,
  womenswatches,
  womensbags,
  womensdresses,
  womensjewellery,
  womensshoes
]

export { categoriesMap, categoriesList }
