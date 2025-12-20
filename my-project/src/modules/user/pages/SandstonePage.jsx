import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import HeroSectionWithForm from '../../../components/common/HeroSectionWithForm'
import ImageGallery from '../../../components/common/ImageGallery'

// Import all sandstone images
import agraRedSandstone from '../../../assets/our products/sandstone/agra red sandstone.jpg'
import automnBrownSandstone from '../../../assets/our products/sandstone/automn brown sandstone.jpg'
import bansipinkSandstone from '../../../assets/our products/sandstone/bansipink sandstone.jpg'
import camelDustSandstone from '../../../assets/our products/sandstone/camel dust sandstone.jpg'
import chocolateSandstone from '../../../assets/our products/sandstone/chocolate sandstone.jpg'
import dholpurBeigeSandstone from '../../../assets/our products/sandstone/dholpur beige sandstone.jpg'
import fossilMintSandstone from '../../../assets/our products/sandstone/fossil mint sandstone.jpg'
import jaisalmerYellowSandstone from '../../../assets/our products/sandstone/jaisalmer yellow sandstone.jpg'
import jodhpurPinkSandstone from '../../../assets/our products/sandstone/jodhpur pink sandstone.jpg'
import kandlaGreySandstone from '../../../assets/our products/sandstone/kandla grey sandstone.jpg'
import lalitpurGreySandstone from '../../../assets/our products/sandstone/lalitpur grey standstone.jpg'
import lalitpurYellowSandstone from '../../../assets/our products/sandstone/lalitpur yellow sandstone.jpg'
import mandanaRedSandstone from '../../../assets/our products/sandstone/mandana red sandstone.jpg'
import modakSandstone from '../../../assets/our products/sandstone/modak standstone.jpg'
import pantersandstone from '../../../assets/our products/sandstone/pantersandstone.jpg'
import pinkMintSandstone from '../../../assets/our products/sandstone/pink mint sandstone.jpg'
import rainbowSandstone from '../../../assets/our products/sandstone/rainbow sandstone.jpg'
import rajGreenSandstone from '../../../assets/our products/sandstone/raj green natural sandstone.jpg'
import raveenaSandstone from '../../../assets/our products/sandstone/raveena sandstone.jpg'
import sagarBlackSandstone from '../../../assets/our products/sandstone/sagar black sandstone.jpg'
import teakwoodSandstone from '../../../assets/our products/sandstone/teakwood sandstone.jpg'
import whiteMintSandstone from '../../../assets/our products/sandstone/white mint sandstone.jpg'
import yellowMintSandstone from '../../../assets/our products/sandstone/yellow mint sandstone.jpg'
import sandstoneHeroImg from '../../../assets/our products/sandstone.jpg'

const SandstonePage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowProducts,
  onShowServices,
  onShowHowItWorks,
  onShowLocation,
  onShowBooking
}) => {
  const sandstoneImages = [
    { id: 1, name: 'Agra Red Sandstone', image: agraRedSandstone, color: 'Red', origin: 'Rajasthan' },
    { id: 2, name: 'Autumn Brown Sandstone', image: automnBrownSandstone, color: 'Brown', origin: 'Rajasthan' },
    { id: 3, name: 'Bansi Pink Sandstone', image: bansipinkSandstone, color: 'Pink', origin: 'Rajasthan' },
    { id: 4, name: 'Camel Dust Sandstone', image: camelDustSandstone, color: 'Beige', origin: 'Rajasthan' },
    { id: 5, name: 'Chocolate Sandstone', image: chocolateSandstone, color: 'Chocolate', origin: 'Rajasthan' },
    { id: 6, name: 'Dholpur Beige Sandstone', image: dholpurBeigeSandstone, color: 'Beige', origin: 'Dholpur' },
    { id: 7, name: 'Fossil Mint Sandstone', image: fossilMintSandstone, color: 'Mint', origin: 'Rajasthan' },
    { id: 8, name: 'Jaisalmer Yellow Sandstone', image: jaisalmerYellowSandstone, color: 'Yellow', origin: 'Jaisalmer' },
    { id: 9, name: 'Jodhpur Pink Sandstone', image: jodhpurPinkSandstone, color: 'Pink', origin: 'Jodhpur' },
    { id: 10, name: 'Kandla Grey Sandstone', image: kandlaGreySandstone, color: 'Grey', origin: 'Kandla' },
    { id: 11, name: 'Lalitpur Grey Sandstone', image: lalitpurGreySandstone, color: 'Grey', origin: 'Lalitpur' },
    { id: 12, name: 'Lalitpur Yellow Sandstone', image: lalitpurYellowSandstone, color: 'Yellow', origin: 'Lalitpur' },
    { id: 13, name: 'Mandana Red Sandstone', image: mandanaRedSandstone, color: 'Red', origin: 'Rajasthan' },
    { id: 14, name: 'Modak Sandstone', image: modakSandstone, color: 'Multi', origin: 'Rajasthan' },
    { id: 15, name: 'Pantersandstone', image: pantersandstone, color: 'Multi', origin: 'Rajasthan' },
    { id: 16, name: 'Pink Mint Sandstone', image: pinkMintSandstone, color: 'Pink', origin: 'Rajasthan' },
    { id: 17, name: 'Rainbow Sandstone', image: rainbowSandstone, color: 'Multi', origin: 'Rajasthan' },
    { id: 18, name: 'Raj Green Natural Sandstone', image: rajGreenSandstone, color: 'Green', origin: 'Rajasthan' },
    { id: 19, name: 'Raveena Sandstone', image: raveenaSandstone, color: 'Multi', origin: 'Rajasthan' },
    { id: 20, name: 'Sagar Black Sandstone', image: sagarBlackSandstone, color: 'Black', origin: 'Rajasthan' },
    { id: 21, name: 'Teakwood Sandstone', image: teakwoodSandstone, color: 'Teak', origin: 'Rajasthan' },
    { id: 22, name: 'White Mint Sandstone', image: whiteMintSandstone, color: 'White', origin: 'Rajasthan' },
    { id: 23, name: 'Yellow Mint Sandstone', image: yellowMintSandstone, color: 'Yellow', origin: 'Rajasthan' }
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
        heroImage={sandstoneHeroImg}
        title="SANDSTONE"
        subtitle="Timeless Elegance Carved in Earth"
        description="Experience the raw beauty and unparalleled durability of our premium Sandstone collection. Perfect for architectural masterpieces that stand the test of time."
      />

      <ImageGallery
        title="Our Sandstone Gallery"
        description="From the fiery reds of Agra to the serene yellows of Jaisalmer, our collection brings together the finest sedimentary treasures of the Indian subcontinent."
        images={sandstoneImages}
        stoneType="sandstone"
        origin="Rajasthan"
      />

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default SandstonePage


