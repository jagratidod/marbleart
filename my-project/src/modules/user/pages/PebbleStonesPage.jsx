import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import HeroSectionWithForm from '../../../components/common/HeroSectionWithForm'
import ImageGallery from '../../../components/common/ImageGallery'

// Import hero image
import pebbleStonesHeroImage from '../../../assets/our products/pebble stones.jpg'

// Import all pebble stones images
import antiqueNaturalPebbles from '../../../assets/our products/stone pebbles/antique-natural-pebbles.jpg'
import aquaOnyxPolishedPebbles from '../../../assets/our products/stone pebbles/Aqua Onyx Polished Pebbles.jpg'
import beigeSandstonePebbles from '../../../assets/our products/stone pebbles/Beige Sandstone Pebbles.jpg'
import beigeRiverPebbles from '../../../assets/our products/stone pebbles/beige-river-pebbles.jpg'
import blackGranitePebbles from '../../../assets/our products/stone pebbles/Black Granite Pebbles.jpg'
import blackOnyxPolishedPebbles from '../../../assets/our products/stone pebbles/Black Onyx Polished Pebbles.jpg'
import blackPolishedPebbles from '../../../assets/our products/stone pebbles/Black Polished Pebbles.jpg'
import blackBasaltPebbles from '../../../assets/our products/stone pebbles/black-basalt-pebbles.jpg'
import blackRiverPebbles from '../../../assets/our products/stone pebbles/black-river-pebblesr.jpg'
import blueOnyxPolishedPebbles from '../../../assets/our products/stone pebbles/Blue Onyx Polished Pebbles.jpg'
import brownPolishedPebbles from '../../../assets/our products/stone pebbles/Brown Polished Pebbles.jpg'
import brownRiverPebbles from '../../../assets/our products/stone pebbles/brown-river-pebbles.jpg'
import chocolateRiverPebbles from '../../../assets/our products/stone pebbles/chocolate-river-pebbles.jpg'
import classicGreyPebbles from '../../../assets/our products/stone pebbles/Classic Grey Pebbles.jpg'
import coloredMarblePebbles from '../../../assets/our products/stone pebbles/Colored Marble Pebbles.jpg'
import forestBrownPebbles from '../../../assets/our products/stone pebbles/Forest Brown Pebbles.jpg'
import forestGreenPebbles from '../../../assets/our products/stone pebbles/Forest Green Pebbles.jpg'
import greenMarblePebbles from '../../../assets/our products/stone pebbles/Green Marble Pebbles.jpg'
import greenOnyxPolishedPebbles from '../../../assets/our products/stone pebbles/Green Onyx Polished Pebbles.jpg'
import greenRiverPebble from '../../../assets/our products/stone pebbles/green-river-pebblejpg.jpg'
import greySandstonePebbles from '../../../assets/our products/stone pebbles/Grey Sandstone Pebbles.jpg'
import greyRiverPebbles from '../../../assets/our products/stone pebbles/grey-river-pebbles.jpg'
import lavaNaturalStone from '../../../assets/our products/stone pebbles/lava-natueal-stone.jpg'
import lemonOnyxPolishedPebbles from '../../../assets/our products/stone pebbles/Lemon Onyx Polished Pebbles.jpg'
import mintSandstonePebbles from '../../../assets/our products/stone pebbles/Mint Sandstone Pebbles.jpg'
import mixOnyxPolishedPebbles from '../../../assets/our products/stone pebbles/Mix Onyx Polished Pebbles.jpg'
import mixBoulderRiverPebbles from '../../../assets/our products/stone pebbles/mix-boulder-river-pebbles.jpg'
import mixedRiverPebbles from '../../../assets/our products/stone pebbles/mixed river-pebbles.jpg'
import orangeOnyxPolishedPebbles from '../../../assets/our products/stone pebbles/Orange Onyx Polished Pebbles.jpg'
import pinkGranitePebbles from '../../../assets/our products/stone pebbles/Pink Granite Pebbles.jpg'
import pinkOnyxPolishedPebbles from '../../../assets/our products/stone pebbles/Pink Onyx Polished Pebbles.jpg'
import purpleOnyxPolishedPebbles from '../../../assets/our products/stone pebbles/Purple Onyx Polished Pebbles.jpg'
import rainbowSandstonePebbles from '../../../assets/our products/stone pebbles/Rainbow Sandstone Pebbles.jpg'
import redOnyxPolishedPebbles from '../../../assets/our products/stone pebbles/Red Onyx Polished Pebbles.jpg'
import redPolishedPebbles from '../../../assets/our products/stone pebbles/Red Polished Pebbles.jpg'
import redSandstonePebbles from '../../../assets/our products/stone pebbles/Red Sandstone Pebbles.jpg'
import riverPolishedPebbles from '../../../assets/our products/stone pebbles/River Polished Pebbles.jpg'
import silverGreyPebbles from '../../../assets/our products/stone pebbles/Silver Grey Pebbles.jpg'
import teakSandstonePebbles from '../../../assets/our products/stone pebbles/Teak Sandstone Pebbles.jpg'
import whiteGranitePebbles from '../../../assets/our products/stone pebbles/White Granite Pebbles.jpg'
import whiteMarblePebbles from '../../../assets/our products/stone pebbles/White Marble Pebbles.jpg'
import whiteOnyxPolishedPebbles from '../../../assets/our products/stone pebbles/White Onyx Polished Pebbles.jpg'
import whitePolishedPebbles from '../../../assets/our products/stone pebbles/White Polished Pebbles.jpg'
import whiteQuartzPebbles from '../../../assets/our products/stone pebbles/White Quartz Pebbles.jpg'
import whiteRiverPebble from '../../../assets/our products/stone pebbles/white river pebble.jpg'
import yellowOnyxPolishedPebbles from '../../../assets/our products/stone pebbles/Yellow Onyx Polished Pebbles.jpg'
import yellowSandstonePebbles from '../../../assets/our products/stone pebbles/Yellow Sandstone Pebbles.jpg'
import yellowRiverPebbles from '../../../assets/our products/stone pebbles/yellow-river-pebbles.jpg'
import zebraBlackPebbles from '../../../assets/our products/stone pebbles/Zebra Black Pebbles.jpg'

const PebbleStonesPage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowProducts,
  onShowServices,
  onShowHowItWorks,
  onShowLocation,
  onShowBooking
}) => {
  const pebbleImages = [
    { id: 1, name: 'Antique Natural Pebbles', image: antiqueNaturalPebbles },
    { id: 2, name: 'Aqua Onyx Polished Pebbles', image: aquaOnyxPolishedPebbles },
    { id: 3, name: 'Beige Sandstone Pebbles', image: beigeSandstonePebbles },
    { id: 4, name: 'Beige River Pebbles', image: beigeRiverPebbles },
    { id: 5, name: 'Black Granite Pebbles', image: blackGranitePebbles },
    { id: 6, name: 'Black Onyx Polished Pebbles', image: blackOnyxPolishedPebbles },
    { id: 7, name: 'Black Polished Pebbles', image: blackPolishedPebbles },
    { id: 8, name: 'Black Basalt Pebbles', image: blackBasaltPebbles },
    { id: 9, name: 'Black River Pebbles', image: blackRiverPebbles },
    { id: 10, name: 'Blue Onyx Polished Pebbles', image: blueOnyxPolishedPebbles },
    { id: 11, name: 'Brown Polished Pebbles', image: brownPolishedPebbles },
    { id: 12, name: 'Brown River Pebbles', image: brownRiverPebbles },
    { id: 13, name: 'Chocolate River Pebbles', image: chocolateRiverPebbles },
    { id: 14, name: 'Classic Grey Pebbles', image: classicGreyPebbles },
    { id: 15, name: 'Colored Marble Pebbles', image: coloredMarblePebbles },
    { id: 16, name: 'Forest Brown Pebbles', image: forestBrownPebbles },
    { id: 17, name: 'Forest Green Pebbles', image: forestGreenPebbles },
    { id: 18, name: 'Green Marble Pebbles', image: greenMarblePebbles },
    { id: 19, name: 'Green Onyx Polished Pebbles', image: greenOnyxPolishedPebbles },
    { id: 20, name: 'Green River Pebble', image: greenRiverPebble },
    { id: 21, name: 'Grey Sandstone Pebbles', image: greySandstonePebbles },
    { id: 22, name: 'Grey River Pebbles', image: greyRiverPebbles },
    { id: 23, name: 'Lava Natural Stone', image: lavaNaturalStone },
    { id: 24, name: 'Lemon Onyx Polished Pebbles', image: lemonOnyxPolishedPebbles },
    { id: 25, name: 'Mint Sandstone Pebbles', image: mintSandstonePebbles },
    { id: 26, name: 'Mix Onyx Polished Pebbles', image: mixOnyxPolishedPebbles },
    { id: 27, name: 'Mix Boulder River Pebbles', image: mixBoulderRiverPebbles },
    { id: 28, name: 'Mixed River Pebbles', image: mixedRiverPebbles },
    { id: 29, name: 'Orange Onyx Polished Pebbles', image: orangeOnyxPolishedPebbles },
    { id: 30, name: 'Pink Granite Pebbles', image: pinkGranitePebbles },
    { id: 31, name: 'Pink Onyx Polished Pebbles', image: pinkOnyxPolishedPebbles },
    { id: 32, name: 'Purple Onyx Polished Pebbles', image: purpleOnyxPolishedPebbles },
    { id: 33, name: 'Rainbow Sandstone Pebbles', image: rainbowSandstonePebbles },
    { id: 34, name: 'Red Onyx Polished Pebbles', image: redOnyxPolishedPebbles },
    { id: 35, name: 'Red Polished Pebbles', image: redPolishedPebbles },
    { id: 36, name: 'Red Sandstone Pebbles', image: redSandstonePebbles },
    { id: 37, name: 'River Polished Pebbles', image: riverPolishedPebbles },
    { id: 38, name: 'Silver Grey Pebbles', image: silverGreyPebbles },
    { id: 39, name: 'Teak Sandstone Pebbles', image: teakSandstonePebbles },
    { id: 40, name: 'White Granite Pebbles', image: whiteGranitePebbles },
    { id: 41, name: 'White Marble Pebbles', image: whiteMarblePebbles },
    { id: 42, name: 'White Onyx Polished Pebbles', image: whiteOnyxPolishedPebbles },
    { id: 43, name: 'White Polished Pebbles', image: whitePolishedPebbles },
    { id: 44, name: 'White Quartz Pebbles', image: whiteQuartzPebbles },
    { id: 45, name: 'White River Pebble', image: whiteRiverPebble },
    { id: 46, name: 'Yellow Onyx Polished Pebbles', image: yellowOnyxPolishedPebbles },
    { id: 47, name: 'Yellow Sandstone Pebbles', image: yellowSandstonePebbles },
    { id: 48, name: 'Yellow River Pebbles', image: yellowRiverPebbles },
    { id: 49, name: 'Zebra Black Pebbles', image: zebraBlackPebbles }
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
        heroImage={pebbleStonesHeroImage}
        title="PEBBLE STONES"
        subtitle="Natural Accents for Refined Spaces"
        description="Discover the textural beauty of our pebble collection, ranging from polished river stones to natural sandstone pebbles, perfect for landscaping and accent features."
      />

      <ImageGallery
        title="Our Pebble Collection"
        description="Curated from diverse geological sources, our pebbles offer a spectrum of colors and finishes to enhance your interior and exterior design projects."
        images={pebbleImages}
        stoneType="pebble-stones"
        origin="International & Domestic"
      />

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default PebbleStonesPage

