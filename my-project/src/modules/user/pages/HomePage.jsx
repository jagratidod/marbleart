
import { useState } from 'react'

import HeroSection from '../../../components/home/HeroSection'
import StepsSection from '../../../components/home/StepsSection'
import HomeImagesSection from '../../../components/home/HomeImagesSection'
import HomeVideosSection from '../../../components/home/HomeVideosSection'
import DreamTempleSection from '../../../components/home/DreamTempleSection'
import StepsVideoCarousel from '../../../components/home/StepsVideoCarousel'
import PricingDrawer from '../../../components/common/PricingDrawer'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import HomePageFormPopup from '../../../components/common/HomePageFormPopup'
import clientLogo1 from '../../../assets/house of marble/our client/icons/download.png'
import clientLogo2 from '../../../assets/house of marble/our client/icons/download (1).png'
import clientLogo3 from '../../../assets/house of marble/our client/icons/download (2).png'
import clientLogo4 from '../../../assets/house of marble/our client/icons/download (3).png'
import clientLogo5 from '../../../assets/house of marble/our client/icons/download (4).png'

const HomePage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowServices,
  onShowHowItWorks
}) => {
  const [showPricing, setShowPricing] = useState(false)
  const [showFormPopup, setShowFormPopup] = useState(true)

  // Client logos array
  const clientLogos = [
    { id: 1, image: clientLogo1, name: 'Client 1' },
    { id: 2, image: clientLogo2, name: 'Client 2' },
    { id: 3, image: clientLogo3, name: 'Client 3' },
    { id: 4, image: clientLogo4, name: 'Client 4' },
    { id: 5, image: clientLogo5, name: 'Client 5' }
  ]

  return (
    <>
      {/* Form Popup Modal - Shows 2 seconds after page load */}
      {showFormPopup && <HomePageFormPopup onClose={() => setShowFormPopup(false)} />}
      
      <HeroSection
        onShowSidebar={onShowSidebar}
        onShowProjects={onShowProjects}
        onShowCreations={onShowCreations}
        onShowServices={onShowServices}
        onShowHowItWorks={onShowHowItWorks}
      />
      <StepsSection />

      {/* Video Section with Heading */}
      <div className="w-full bg-white pt-12 pb-4 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#8B7355] italic px-4">
          Welcome to the World aslam marble suppliers
        </h2>
        <div className="w-24 h-1 mx-auto mt-4 rounded-full" style={{ backgroundColor: '#8B7355' }}></div>
      </div>
      <HomeVideosSection />

      {/* Dream Temple Section & Pricing Drawer */}
      <DreamTempleSection onOpenPricing={() => setShowPricing(true)} />
      <PricingDrawer isOpen={showPricing} onClose={() => setShowPricing(false)} />

      <HomeImagesSection />
      
      {/* 5 Steps Video Carousel - Above Footer */}
      <StepsVideoCarousel />

      {/* Client Logos Section - Trusted By - Above Footer */}
      <section className="w-full py-8 md:py-12 lg:py-16 bg-white overflow-hidden relative">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-48 h-48 bg-[#8B7355] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-[#8B7355] rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Section Title */}
          <div className="text-center mb-6 md:mb-8 px-4">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-[#8B7355] italic mb-3">
              Trusted By
            </h2>
            <div className="w-20 h-1 mx-auto" style={{ backgroundColor: '#8B7355' }}></div>
          </div>

          {/* Scrolling Logos Container - Full Width */}
          <div className="relative w-full overflow-hidden">
            <div className="flex gap-6 md:gap-8 lg:gap-10 animate-scroll-right-to-left">
              {/* Duplicate logos for seamless loop */}
              {[...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos].map((logo, index) => (
                <div
                  key={`${logo.id}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center group"
                >
                  <div className="relative p-2 transition-all duration-500 hover:scale-110">
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 object-contain transition-all duration-500 group-hover:brightness-110 filter grayscale hover:grayscale-0"
                    />
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-[#8B7355]/10 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <FloatingButtons />
    </>
  )
}

export default HomePage

