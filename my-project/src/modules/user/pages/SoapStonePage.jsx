import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import HeroSectionWithForm from '../../../components/common/HeroSectionWithForm'
import ImageGallery from '../../../components/common/ImageGallery'

// Import hero image
import soapStoneHeroImage from '../../../assets/our products/soap stone .jpg'

// Import soap stone images
import soapStoneMain from '../../../assets/our products/soap stone .jpg'

const SoapStonePage = ({
    onShowSidebar,
    onShowProjects,
    onShowCreations,
    onShowProducts,
    onShowServices,
    onShowHowItWorks,
    onShowLocation,
    onShowBooking
}) => {
    const soapStoneImages = [
        { id: 1, name: 'Soap Stone', image: soapStoneMain },
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
                heroImage={soapStoneHeroImage}
                title="SOAP STONE"
                subtitle="Smooth Texture, Timeless Appeal"
                description="Renowned for its soft feel and heat resistance, Soap Stone allows for intricate carving and is a favorite for sculptures, countertops, and woodstoves."
            />

            <ImageGallery
                title="Soap Stone Collection"
                description="Discover the tactile beauty of Soap Stone, available in a range of steely grays and soft hues, perfect for artistic and architectural applications."
                images={soapStoneImages}
                stoneType="soap-stones"
                origin="Domestic"
            />

            <Footer />
            <FloatingButtons />
        </div>
    )
}

export default SoapStonePage
