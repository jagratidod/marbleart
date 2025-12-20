import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import HeroSectionWithForm from '../../../components/common/HeroSectionWithForm'
import ImageGallery from '../../../components/common/ImageGallery'

// Import all Natural Indian Stone images
import naturalStoneCarving from '../../../assets/our products/Natural Indian Stones/Natural Stone Carving.jpg'
import naturalStoneMosaic from '../../../assets/our products/Natural Indian Stones/Natural Stone Mosaic.jpg'
import naturalStoneVeneer from '../../../assets/our products/Natural Indian Stones/Natural Stone Veneer.jpg'
import naturalMonolithStone from '../../../assets/our products/Natural Indian Stones/Natural Monolith Stone.jpg'
import stoneRoofTile from '../../../assets/our products/Natural Indian Stones/Stone Roof Tile.jpg'
import stonePierCap from '../../../assets/our products/Natural Indian Stones/Stone Pier Cap.jpg'
import naturalStoneCircle from '../../../assets/our products/Natural Indian Stones/Natural Stone Circle.jpg'
import naturalCrazyStone from '../../../assets/our products/Natural Indian Stones/Natural Crazy Stone.jpg'
import naturalStonePalisade from '../../../assets/our products/Natural Indian Stones/Natural Stone Palisade.jpg'
import naturalSteppingStone from '../../../assets/our products/Natural Indian Stones/Natural Stepping Stone.jpg'
import naturalStoneLintel from '../../../assets/our products/Natural Indian Stones/Natural Stone Lintel.jpg'
import naturalStoneKerb from '../../../assets/our products/Natural Indian Stones/Natural Stone Kerb.jpg'
import naturalStoneStep from '../../../assets/our products/Natural Indian Stones/Natural Stone Step.jpg'
import stoneWallCladding from '../../../assets/our products/Natural Indian Stones/Stone Wall Cladding.jpg'
import stoneWallPanel from '../../../assets/our products/Natural Indian Stones/Stone Wall Panel.jpg'
import kandlaGreySandstone from '../../../assets/our products/Natural Indian Stones/kandla-grey-sandstone-wall-panels.jpg'

const NaturalIndianStonesPage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowProducts,
  onShowServices,
  onShowHowItWorks,
  onShowLocation,
  onShowBooking
}) => {
  const stoneImages = [
    { id: 1, name: 'Natural Stone Carving', image: naturalStoneCarving },
    { id: 2, name: 'Natural Stone Mosaic', image: naturalStoneMosaic },
    { id: 3, name: 'Natural Stone Veneer', image: naturalStoneVeneer },
    { id: 4, name: 'Natural Monolith Stone', image: naturalMonolithStone },
    { id: 5, name: 'Stone Roof Tile', image: stoneRoofTile },
    { id: 6, name: 'Stone Pier Cap', image: stonePierCap },
    { id: 7, name: 'Natural Stone Circle', image: naturalStoneCircle },
    { id: 8, name: 'Natural Crazy Stone', image: naturalCrazyStone },
    { id: 9, name: 'Natural Stone Palisade', image: naturalStonePalisade },
    { id: 10, name: 'Natural Stepping Stone', image: naturalSteppingStone },
    { id: 11, name: 'Natural Stone Lintel', image: naturalStoneLintel },
    { id: 12, name: 'Natural Stone Kerb', image: naturalStoneKerb },
    { id: 13, name: 'Natural Stone Step', image: naturalStoneStep },
    { id: 14, name: 'Stone Wall Cladding', image: stoneWallCladding },
    { id: 15, name: 'Stone Wall Panel', image: stoneWallPanel },
    { id: 16, name: 'Kandla Grey Sandstone Wall Panels', image: kandlaGreySandstone }
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
        heroImage={naturalStoneCarving}
        title="NATURAL INDIAN STONES"
        subtitle="The Soul of Indian Craftsmanship"
        description="Experience the versatile applications of authentic Indian stones, from intricate carvings and mosaics to structural monoliths and architectural wall panels."
      />

      <ImageGallery
        title="Our Natural Stone Portfolio"
        description="Explore the rich variety of natural stone products crafted from the finest quarries across India, showcasing centuries of sculptural heritage."
        images={stoneImages}
        stoneType="natural-indian-stones"
        origin="Pan India"
      />

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default NaturalIndianStonesPage
