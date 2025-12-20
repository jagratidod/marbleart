import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import HeroSectionWithForm from '../../../components/common/HeroSectionWithForm'
import ImageGallery from '../../../components/common/ImageGallery'

// Import all marble images
import blackGoldMarble from '../../../assets/our products/marble/black-gold-marble.jpg'
import brunoWhiteMarble from '../../../assets/our products/marble/bruno-white-marble.jpg'
import cappuccinoBrownMarble from '../../../assets/our products/marble/cappuccino-brown-marble.jpg'
import carbonBlackMarble from '../../../assets/our products/marble/carbon-black-marble.jpg'
import cherryGoldMarble from '../../../assets/our products/marble/cherry-gold-marble.jpg'
import chocoBrownMarble from '../../../assets/our products/marble/choco-brown-marble.jpg'
import crocodileGreenMarble from '../../../assets/our products/marble/crocodile-green-marble.jpg'
import fantasyBlackMarble from '../../../assets/our products/marble/fantasy-black-marble.jpg'
import fantasyBrownMarble from '../../../assets/our products/marble/fantasy-brown-marble.jpg'
import fantasyGreyMarble from '../../../assets/our products/marble/fantasy-grey-marble.jpg'
import indianTorontoMarble from '../../../assets/our products/marble/indian-toronto-marblejpg.jpg'
import indianWhiteMarble from '../../../assets/our products/marble/indian-white-marble.jpg'
import katniBeigeMarble from '../../../assets/our products/marble/katni-beige-marble.jpg'
import levantoRedMarble from '../../../assets/our products/marble/levanto-red-marble.jpg'
import linerBlackMarble from '../../../assets/our products/marble/liner-black-marble.jpg'
import linerGreyMarble from '../../../assets/our products/marble/liner-grey-marble.jpg'
import majesticGoldMarble from '../../../assets/our products/marble/majestic-gold-marble.jpg'
import makranaWhiteMarble from '../../../assets/our products/marble/makrana-white-marble.jpg'
import marineBlackMarble from '../../../assets/our products/marble/marine-black-marble.jpg'
import moltenBlackMarble from '../../../assets/our products/marble/molten-black-marble.jpg'
import omanRedMarble from '../../../assets/our products/marble/oman-red-marble.jpg'
import onyxGreenMarble from '../../../assets/our products/marble/onyx-green-marble.jpg'
import onyxPinkMarble from '../../../assets/our products/marble/onyx-pink-marble-stone.jpg'
import opelWhiteMarble from '../../../assets/our products/marble/opel-white-marble.jpg'
import pantherBrownMarble from '../../../assets/our products/marble/panther-brown-marble.jpg'
import pantherIndianWhiteMarble from '../../../assets/our products/marble/panther-indian-white-marble.jpg'
import pantherYellowIndianMarble from '../../../assets/our products/marble/panther-yellow-indian-marble.jpg'
import perlatoBeigeMarble from '../../../assets/our products/marble/perlato-beige-marble.jpg'
import pistaWhiteMarble from '../../../assets/our products/marble/pista-white-marble.jpg'
import purpleWhiteMarble from '../../../assets/our products/marble/purple-white-marble.jpg'
import rainforestBrownMarble from '../../../assets/our products/marble/rainforest-brown-marble.jpg'
import rainforestGoldMarble from '../../../assets/our products/marble/rainforest-gold-marble.jpg'
import rainforestGreenMarble from '../../../assets/our products/marble/rainforest-green-marble.jpg'
import rajnagarWhiteMarble from '../../../assets/our products/marble/rajnagar-white-marble.jpg'
import roseWoodMarble from '../../../assets/our products/marble/rose-wood-marble.jpg'
import silverGreyMarble from '../../../assets/our products/marble/silver-grey-marble.jpg'
import smokeGreyMarble from '../../../assets/our products/marble/smoke-grey-marble.jpg'
import spiderGreenMarble from '../../../assets/our products/marble/spider-green-marble.jpg'
import teakBrownMarble from '../../../assets/our products/marble/teak-brown-marble.jpg'
import udaipurGreenMarble from '../../../assets/our products/marble/udaipur-green-marble.jpg'
import udaipurPinkMarble from '../../../assets/our products/marble/udaipur-pink-marble.jpg'
import wonderBeigeMarble from '../../../assets/our products/marble/wonder-beige-marble.jpg'
import wonderPinkMarble from '../../../assets/our products/marble/wonder-pink-marble.jpg'
import marbleHeroImg from '../../../assets/our products/marble .jpg'

const MarblePage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowProducts,
  onShowServices,
  onShowHowItWorks,
  onShowLocation,
  onShowBooking
}) => {
  const marbleImages = [
    { id: 1, name: 'Black Gold Marble', image: blackGoldMarble, origin: 'Rajasthan' },
    { id: 2, name: 'Bruno White Marble', image: brunoWhiteMarble, origin: 'Rajasthan' },
    { id: 3, name: 'Cappuccino Brown Marble', image: cappuccinoBrownMarble, origin: 'Rajasthan' },
    { id: 4, name: 'Carbon Black Marble', image: carbonBlackMarble, origin: 'Rajasthan' },
    { id: 5, name: 'Cherry Gold Marble', image: cherryGoldMarble, origin: 'Rajasthan' },
    { id: 6, name: 'Choco Brown Marble', image: chocoBrownMarble, origin: 'Rajasthan' },
    { id: 7, name: 'Crocodile Green Marble', image: crocodileGreenMarble, origin: 'Rajasthan' },
    { id: 8, name: 'Fantasy Black Marble', image: fantasyBlackMarble, origin: 'Rajasthan' },
    { id: 9, name: 'Fantasy Brown Marble', image: fantasyBrownMarble, origin: 'Rajasthan' },
    { id: 10, name: 'Fantasy Grey Marble', image: fantasyGreyMarble, origin: 'Rajasthan' },
    { id: 11, name: 'Indian Toronto Marble', image: indianTorontoMarble, origin: 'Rajasthan' },
    { id: 12, name: 'Indian White Marble', image: indianWhiteMarble, origin: 'Rajasthan' },
    { id: 13, name: 'Katni Beige Marble', image: katniBeigeMarble, origin: 'Rajasthan' },
    { id: 14, name: 'Levanto Red Marble', image: levantoRedMarble, origin: 'Rajasthan' },
    { id: 15, name: 'Liner Black Marble', image: linerBlackMarble, origin: 'Rajasthan' },
    { id: 16, name: 'Liner Grey Marble', image: linerGreyMarble, origin: 'Rajasthan' },
    { id: 17, name: 'Majestic Gold Marble', image: majesticGoldMarble, origin: 'Rajasthan' },
    { id: 18, name: 'Makrana White Marble', image: makranaWhiteMarble, origin: 'Rajasthan' },
    { id: 19, name: 'Marine Black Marble', image: marineBlackMarble, origin: 'Rajasthan' },
    { id: 20, name: 'Molten Black Marble', image: moltenBlackMarble, origin: 'Rajasthan' },
    { id: 21, name: 'Oman Red Marble', image: omanRedMarble, origin: 'Rajasthan' },
    { id: 22, name: 'Onyx Green Marble', image: onyxGreenMarble, origin: 'Rajasthan' },
    { id: 23, name: 'Onyx Pink Marble', image: onyxPinkMarble, origin: 'Rajasthan' },
    { id: 24, name: 'Opel White Marble', image: opelWhiteMarble, origin: 'Rajasthan' },
    { id: 25, name: 'Panther Brown Marble', image: pantherBrownMarble, origin: 'Rajasthan' },
    { id: 26, name: 'Panther Indian White Marble', image: pantherIndianWhiteMarble, origin: 'Rajasthan' },
    { id: 27, name: 'Panther Yellow Indian Marble', image: pantherYellowIndianMarble, origin: 'Rajasthan' },
    { id: 28, name: 'Perlato Beige Marble', image: perlatoBeigeMarble, origin: 'Rajasthan' },
    { id: 29, name: 'Pista White Marble', image: pistaWhiteMarble, origin: 'Rajasthan' },
    { id: 30, name: 'Purple White Marble', image: purpleWhiteMarble, origin: 'Rajasthan' },
    { id: 31, name: 'Rainforest Brown Marble', image: rainforestBrownMarble, origin: 'Rajasthan' },
    { id: 32, name: 'Rainforest Gold Marble', image: rainforestGoldMarble, origin: 'Rajasthan' },
    { id: 33, name: 'Rainforest Green Marble', image: rainforestGreenMarble, origin: 'Rajasthan' },
    { id: 34, name: 'Rajnagar White Marble', image: rajnagarWhiteMarble, origin: 'Rajasthan' },
    { id: 35, name: 'Rose Wood Marble', image: roseWoodMarble, origin: 'Rajasthan' },
    { id: 36, name: 'Silver Grey Marble', image: silverGreyMarble, origin: 'Rajasthan' },
    { id: 37, name: 'Smoke Grey Marble', image: smokeGreyMarble, origin: 'Rajasthan' },
    { id: 38, name: 'Spider Green Marble', image: spiderGreenMarble, origin: 'Rajasthan' },
    { id: 39, name: 'Teak Brown Marble', image: teakBrownMarble, origin: 'Rajasthan' },
    { id: 40, name: 'Udaipur Green Marble', image: udaipurGreenMarble, origin: 'Rajasthan' },
    { id: 41, name: 'Udaipur Pink Marble', image: udaipurPinkMarble, origin: 'Rajasthan' },
    { id: 42, name: 'Wonder Beige Marble', image: wonderBeigeMarble, origin: 'Rajasthan' },
    { id: 43, name: 'Wonder Pink Marble', image: wonderPinkMarble, origin: 'Rajasthan' }
  ]

  return (
    <div className="w-full min-h-screen bg-white">
      <Header
        variant="default"
        onShowSidebar={onShowSidebar}
        onShowProjects={onShowProjects}
        onShowCreations={onShowCreations}
        onShowProducts={onShowProducts}
        onShowServices={onShowServices}
        onShowHowItWorks={onShowHowItWorks}
        onShowLocation={onShowLocation}
        onShowBooking={onShowBooking}
      />

      <HeroSectionWithForm
        heroImage={marbleHeroImg}
        title="MARBLE"
        subtitle="Luxury and Elegance in Every Slab"
        description="Explore our premium collection of marble varieties, showcasing timeless beauty and sophistication for your architectural and design needs."
      />

      <ImageGallery
        title="Our Marble Collection"
        description="From the iconic whites of Makrana to the exotic greens of Udaipur, our marble collection represents the pinnacle of luxury surfacing."
        images={marbleImages}
        stoneType="marble"
      />

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default MarblePage

