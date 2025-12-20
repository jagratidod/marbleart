import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import HeroSectionWithForm from '../../../components/common/HeroSectionWithForm'
import ImageGallery from '../../../components/common/ImageGallery'

// Import hero image
import cobbleStonesHeroImage from '../../../assets/our products/cobble stones.jpg'

// Import all cobble stones images
import autumnBrownSandstone from '../../../assets/our products/stone cobbles/Autumn Brown Sandstone.jpg'
import beigeSandstoneCobbles from '../../../assets/our products/stone cobbles/Beige Sandstone Cobbles.jpg'
import blackGraniteCobbles from '../../../assets/our products/stone cobbles/Black Granite Cobbles.jpg'
import blackLimestoneCobbles from '../../../assets/our products/stone cobbles/Black Limestone Cobbles.jpg'
import blackSandstoneCobbles from '../../../assets/our products/stone cobbles/Black Sandstone Cobbles.jpg'
import blueLimestoneCobbles from '../../../assets/our products/stone cobbles/Blue Limestone Cobbles.jpg'
import camelDustSandstone from '../../../assets/our products/stone cobbles/Camel Dust Sandstone.jpg'
import chocolateSandstoneCobbles from '../../../assets/our products/stone cobbles/Chocolate Sandstone Cobbles.jpg'
import greyGraniteCobbles from '../../../assets/our products/stone cobbles/Grey Granite Cobbles.jpg'
import greySandstoneCobbles from '../../../assets/our products/stone cobbles/Grey Sandstone Cobbles.jpg'
import jodhpurBrownSandstone from '../../../assets/our products/stone cobbles/Jodhpur Brown Sandstone.jpg'
import jodhpurPinkSandstone from '../../../assets/our products/stone cobbles/Jodhpur Pink Sandstone.jpg'
import mandanaRedSandstone from '../../../assets/our products/stone cobbles/Mandana Red Sandstone.jpg'
import mintSandstoneCobbles from '../../../assets/our products/stone cobbles/Mint Sandstone Cobbles.jpg'
import modakSandstoneCobbles from '../../../assets/our products/stone cobbles/Modak Sandstone Cobbles.jpg'
import rainbowSandstoneCobbles from '../../../assets/our products/stone cobbles/Rainbow Sandstone Cobbles.jpg'
import rajGreenSandstoneCobbles from '../../../assets/our products/stone cobbles/Raj Green Sandstone Cobbles.jpg'
import raveenaSandstoneCobbles from '../../../assets/our products/stone cobbles/raveena-sandstone-cobbles-.jpg'
import redGraniteCobbles from '../../../assets/our products/stone cobbles/Red Granite Cobbles.jpg'
import redSandstoneCobbles from '../../../assets/our products/stone cobbles/Red Sandstone Cobbles.jpg'
import teakwoodSandstoneCobbles from '../../../assets/our products/stone cobbles/Teakwood Sandstone Cobbles.jpg'
import whiteGraniteCobbles from '../../../assets/our products/stone cobbles/White Granite Cobbles.jpg'
import yellowLimestoneCobbles from '../../../assets/our products/stone cobbles/Yellow Limestone Cobbles.jpg'
import yellowMintSandstone from '../../../assets/our products/stone cobbles/Yellow Mint Sandstone.jpeg'
import yellowSandstoneCobbles from '../../../assets/our products/stone cobbles/Yellow Sandstone Cobbles.jpg'

const CobbleStonesPage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowProducts,
  onShowServices,
  onShowHowItWorks,
  onShowLocation,
  onShowBooking
}) => {
  const cobbleImages = [
    { id: 1, name: 'Autumn Brown Sandstone', image: autumnBrownSandstone },
    { id: 2, name: 'Beige Sandstone Cobbles', image: beigeSandstoneCobbles },
    { id: 3, name: 'Black Granite Cobbles', image: blackGraniteCobbles },
    { id: 4, name: 'Black Limestone Cobbles', image: blackLimestoneCobbles },
    { id: 5, name: 'Black Sandstone Cobbles', image: blackSandstoneCobbles },
    { id: 6, name: 'Blue Limestone Cobbles', image: blueLimestoneCobbles },
    { id: 7, name: 'Camel Dust Sandstone', image: camelDustSandstone },
    { id: 8, name: 'Chocolate Sandstone Cobbles', image: chocolateSandstoneCobbles },
    { id: 9, name: 'Grey Granite Cobbles', image: greyGraniteCobbles },
    { id: 10, name: 'Grey Sandstone Cobbles', image: greySandstoneCobbles },
    { id: 11, name: 'Jodhpur Brown Sandstone', image: jodhpurBrownSandstone },
    { id: 12, name: 'Jodhpur Pink Sandstone', image: jodhpurPinkSandstone },
    { id: 13, name: 'Mandana Red Sandstone', image: mandanaRedSandstone },
    { id: 14, name: 'Mint Sandstone Cobbles', image: mintSandstoneCobbles },
    { id: 15, name: 'Modak Sandstone Cobbles', image: modakSandstoneCobbles },
    { id: 16, name: 'Rainbow Sandstone Cobbles', image: rainbowSandstoneCobbles },
    { id: 17, name: 'Raj Green Sandstone Cobbles', image: rajGreenSandstoneCobbles },
    { id: 18, name: 'Raveena Sandstone Cobbles', image: raveenaSandstoneCobbles },
    { id: 19, name: 'Red Granite Cobbles', image: redGraniteCobbles },
    { id: 20, name: 'Red Sandstone Cobbles', image: redSandstoneCobbles },
    { id: 21, name: 'Teakwood Sandstone Cobbles', image: teakwoodSandstoneCobbles },
    { id: 22, name: 'White Granite Cobbles', image: whiteGraniteCobbles },
    { id: 23, name: 'Yellow Limestone Cobbles', image: yellowLimestoneCobbles },
    { id: 24, name: 'Yellow Mint Sandstone', image: yellowMintSandstone },
    { id: 25, name: 'Yellow Sandstone Cobbles', image: yellowSandstoneCobbles }
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
        heroImage={cobbleStonesHeroImage}
        title="COBBLE STONES"
        subtitle="Heritage Craftsmanship for Modern Pathways"
        description="Our premium cobbles are hand-finished to provide a rustic yet elegant touch to driveways, pedestrian paths, and historic-style landscaping."
      />

      <ImageGallery
        title="Our Cobble Collection"
        description="Explore a variety of granites and sandstones, each hand-picked for their structural integrity and unique color profiles."
        images={cobbleImages}
        stoneType="cobble-stones"
        origin="North India"
      />

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default CobbleStonesPage

