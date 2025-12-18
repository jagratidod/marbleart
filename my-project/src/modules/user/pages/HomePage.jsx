
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
import TrustedBySection from '../../../components/common/TrustedBySection'
import HomePageFormPopup from '../../../components/common/HomePageFormPopup'

const HomePage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowServices,
  onShowHowItWorks
}) => {
  const [showPricing, setShowPricing] = useState(false)
  const [showFormPopup, setShowFormPopup] = useState(true)

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

      <TrustedBySection />
      <Footer />
      <FloatingButtons />
    </>
  )
}

export default HomePage

