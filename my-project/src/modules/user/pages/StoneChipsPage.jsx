import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import HeroSectionWithForm from '../../../components/common/HeroSectionWithForm'
import ImageGallery from '../../../components/common/ImageGallery'

// Import hero image
import stoneChipsHeroImage from '../../../assets/our products/soap stone .jpg'

// Import all stone chips images
import blackStoneChips from '../../../assets/our products/stone chips/Black Stone Chips.jpg'
import chocolateStoneChips from '../../../assets/our products/stone chips/Chocolate Stone Chips.jpg'
import greenStoneChips from '../../../assets/our products/stone chips/Green Stone Chips.jpg'
import greyStoneChips from '../../../assets/our products/stone chips/Grey Stone Chips.jpg'
import lemonStoneChips from '../../../assets/our products/stone chips/Lemon Stone Chips.jpg'
import pinkStoneChips from '../../../assets/our products/stone chips/Pink Stone Chips.jpg'
import redStoneChips from '../../../assets/our products/stone chips/Red Stone Chips.jpg'
import whiteStoneChips from '../../../assets/our products/stone chips/White Stone Chips.jpg'
import yellowStoneChips from '../../../assets/our products/stone chips/Yellow Stone Chips.jpg'

const StoneChipsPage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowProducts,
  onShowServices,
  onShowHowItWorks,
  onShowLocation,
  onShowBooking
}) => {
  const chipImages = [
    { id: 1, name: 'Black Stone Chips', image: blackStoneChips },
    { id: 2, name: 'Chocolate Stone Chips', image: chocolateStoneChips },
    { id: 3, name: 'Green Stone Chips', image: greenStoneChips },
    { id: 4, name: 'Grey Stone Chips', image: greyStoneChips },
    { id: 5, name: 'Lemon Stone Chips', image: lemonStoneChips },
    { id: 6, name: 'Pink Stone Chips', image: pinkStoneChips },
    { id: 7, name: 'Red Stone Chips', image: redStoneChips },
    { id: 8, name: 'White Stone Chips', image: whiteStoneChips },
    { id: 9, name: 'Yellow Stone Chips', image: yellowStoneChips }
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
        heroImage={stoneChipsHeroImage}
        title="STONE CHIPS"
        subtitle="Versatile Textures for Landscape Design"
        description="Our premium selection of crushed stone chips offers a variety of colors and sizes for garden paths, decorative mulch, and architectural surface treatments."
      />

      <ImageGallery
        title="Stone Chips Collection"
        description="From deep blacks to vibrant yellows, our stone chips provide the perfect textural contrast for your landscaping projects."
        images={chipImages}
        stoneType="stone-chips"
        origin="Domestic"
      />

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default StoneChipsPage
