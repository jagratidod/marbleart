import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import HeroSectionWithForm from '../../../components/common/HeroSectionWithForm'
import ImageGallery from '../../../components/common/ImageGallery'

// Import hero image
import quartziteHeroImage from '../../../assets/our products/quartzite.jpg'

// Import all quartzite images
import brownQuartzite from '../../../assets/our products/quartizte/brown-quartzite.jpg'
import crazyQuartziteStone from '../../../assets/our products/quartizte/crazy-quartzite stone.jpg'
import greyQuartzite from '../../../assets/our products/quartizte/grey-quartzite.jpg'
import ivoryQuartzite from '../../../assets/our products/quartizte/ivory-quartzite.jpg'
import redQuartzite from '../../../assets/our products/quartizte/red-quartzite.jpg'
import starBlackQuartzite from '../../../assets/our products/quartizte/star-black-quartzite.jpg'
import veneerQuartziteSheet from '../../../assets/our products/quartizte/veneer quartzite sheet.jpg'
import whiteQuartzite from '../../../assets/our products/quartizte/white-quartzite.jpg'
import woodlandQuartzite from '../../../assets/our products/quartizte/woodland-quartzite.jpg'

const QuartzitePage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowProducts,
  onShowServices,
  onShowHowItWorks,
  onShowLocation,
  onShowBooking
}) => {
  const quartziteImages = [
    { id: 1, name: 'Brown Quartzite', image: brownQuartzite },
    { id: 2, name: 'Crazy Quartzite Stone', image: crazyQuartziteStone },
    { id: 3, name: 'Grey Quartzite', image: greyQuartzite },
    { id: 4, name: 'Ivory Quartzite', image: ivoryQuartzite },
    { id: 5, name: 'Red Quartzite', image: redQuartzite },
    { id: 6, name: 'Star Black Quartzite', image: starBlackQuartzite },
    { id: 7, name: 'Veneer Quartzite Sheet', image: veneerQuartziteSheet },
    { id: 8, name: 'White Quartzite', image: whiteQuartzite },
    { id: 9, name: 'Woodland Quartzite', image: woodlandQuartzite }
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
        heroImage={quartziteHeroImage}
        title="QUARTZITE"
        subtitle="Durable Beauty for Lasting Impressions"
        description="Discover our exceptional collection of quartzite stones, combining natural elegance with remarkable durability for stunning architectural applications."
      />

      <ImageGallery
        title="Our Quartzite Gallery"
        description="Quartzite offers a unique blend of marble's aesthetic and granite's strength, making it ideal for both interior surfaces and exterior facades."
        images={quartziteImages}
        stoneType="quartzite"
        origin="North India"
      />

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default QuartzitePage
