import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import HeroSectionWithForm from '../../../components/common/HeroSectionWithForm'
import ImageGallery from '../../../components/common/ImageGallery'
import heroImg from '../../../assets/ourcreation/homedecor.jpeg'

const ImportedPage = ({
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
    const importedImages = []

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
                title="IMPORTED"
                subtitle="Exquisite Stones from Around the World"
                description="Discover our premium selection of imported stones, sourced from the finest quarries globally."
            />

            <ImageGallery
                title="Imported Collection"
                description="Exclusive range of imported marble, granite, and other precious stones."
                images={importedImages}
                stoneType="imported"
                origin="Global"
            />

            <Footer />
            <FloatingButtons />
        </div>
    )
}

export default ImportedPage
