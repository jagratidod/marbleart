import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import HeroSectionWithForm from '../../../components/common/HeroSectionWithForm'
import ImageGallery from '../../../components/common/ImageGallery'

// Import hero image
import travertineHeroImage from '../../../assets/our products/travertine.jpg'

// Import travertine images
import travertineMain from '../../../assets/our products/travertine.jpg'

const TravertinePage = ({
    onShowSidebar,
    onShowProjects,
    onShowCreations,
    onShowProducts,
    onShowServices,
    onShowHowItWorks,
    onShowLocation,
    onShowBooking
}) => {
    const travertineImages = [
        { id: 1, name: 'Travertine Stone', image: travertineMain },
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
                heroImage={travertineHeroImage}
                title="TRAVERTINE"
                subtitle="Classic Elegance from Rome to Your Home"
                description="Characterized by its pitted holes and troughs, Travertine brings an ancient, distinctive look that exudes luxury and history in every slab."
            />

            <ImageGallery
                title="Travertine Collection"
                description="Explore our Travertine selection, offering earthy tones and unique textures that have adorned great monuments for centuries."
                images={travertineImages}
                stoneType="travertine-stones"
                origin="International"
            />

            <Footer />
            <FloatingButtons />
        </div>
    )
}

export default TravertinePage
