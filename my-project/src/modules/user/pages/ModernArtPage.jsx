import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import HeroSectionWithForm from '../../../components/common/HeroSectionWithForm'
import ImageGallery from '../../../components/common/ImageGallery'
import heroImg from '../../../assets/ourcreation/Murti.jpeg'

const ModernArtPage = ({
    onShowSidebar,
    onShowProjects,
    onShowCreations,
    onShowProducts,
    onShowServices,
    onShowHowItWorks,
    onShowLocation,
    onShowBooking
}) => {
    // Empty array for now as requested
    const modernArtImages = []

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
                heroImage={heroImg}
                title="MODERN ART"
                subtitle="Contemporary Expressions in Stone"
                description="Explore our collection of modern abstract art and contemporary stone sculptures."
            />

            <ImageGallery
                title="Our Modern Art Collection"
                description="A curated selection of modern artistic masterpieces."
                images={modernArtImages}
                stoneType="modern-art"
                origin="International"
            />

            <Footer />
            <FloatingButtons />
        </div>
    )
}

export default ModernArtPage
