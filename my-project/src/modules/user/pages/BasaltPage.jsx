import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import HeroSectionWithForm from '../../../components/common/HeroSectionWithForm'
import ImageGallery from '../../../components/common/ImageGallery'

// Import hero image
import basaltHeroImage from '../../../assets/our products/basalt.jpg'

// Import basalt images
// Since specific folder is empty, reusing hero/main image for gallery if no others found.
// Ideally, we would have multiple images here.
import basaltMain from '../../../assets/our products/basalt.jpg'
import blackBasaltPebbles from '../../../assets/our products/stone pebbles/black-basalt-pebbles.jpg'


const BasaltPage = ({
    onShowSidebar,
    onShowProjects,
    onShowCreations,
    onShowProducts,
    onShowServices,
    onShowHowItWorks,
    onShowLocation,
    onShowBooking
}) => {
    const basaltImages = [
        { id: 1, name: 'Basalt Stone', image: basaltMain },
        { id: 2, name: 'Black Basalt Pebbles', image: blackBasaltPebbles },
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
                heroImage={basaltHeroImage}
                title="BASALT STONES"
                subtitle="Volcanic Elegance for Modern Design"
                description="Known for its durability and rich dark tones, Basalt is a volcanic rock that adds a sophisticated, contemporary touch to any paving or cladding project."
            />

            <ImageGallery
                title="Basalt Collection"
                description="Our Basalt collection showcases the strength and beauty of volcanic stone, perfect for high-traffic areas and modern architectural statements."
                images={basaltImages}
                stoneType="basalt-stones"
                origin="Domestic & International"
            />

            <Footer />
            <FloatingButtons />
        </div>
    )
}

export default BasaltPage
