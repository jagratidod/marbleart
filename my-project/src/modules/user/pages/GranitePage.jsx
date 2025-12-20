import Header from '../../../components/layout/Header'
import Footer from '../../../components/layout/Footer'
import FloatingButtons from '../../../components/common/FloatingButtons'
import HeroSectionWithForm from '../../../components/common/HeroSectionWithForm'
import ImageGallery from '../../../components/common/ImageGallery'

// Import hero image
import graniteHeroImage from '../../../assets/our products/granite.jpg'

// Import all granite images (all 71 preserved)
import alaskaGold from '../../../assets/our products/granite/ALASKA GOLD.jpeg'
import alaskaRed from '../../../assets/our products/granite/ALASKA RED.jpeg'
import alaskaWhite from '../../../assets/our products/granite/ALASKA WHITE.png'
import anglo from '../../../assets/our products/granite/Anglo.jpeg'
import anticoCream from '../../../assets/our products/granite/ANTICO CREAM.jpg'
import arawaliLeatherBrown from '../../../assets/our products/granite/Arawali Leather Brown.jpeg'
import articPearl from '../../../assets/our products/granite/ARTIC PEARL.jpeg'
import avalonWhite from '../../../assets/our products/granite/AVALON WHITE.jpg'
import azulCeleste from '../../../assets/our products/granite/AZUL CELESTE.jpg'
import balaFlower from '../../../assets/our products/granite/BALA FLOWER.jpeg'
import balticBrown from '../../../assets/our products/granite/baltic brown.jpeg'
import bangalBrown from '../../../assets/our products/granite/BANGAL BROWN.jpeg'
import bangalGreen from '../../../assets/our products/granite/BANGAL GREEN.jpg'
import biancaRosa from '../../../assets/our products/granite/BIANCA ROSA.jpeg'
import biscottiWhite from '../../../assets/our products/granite/BISCOTTI WHITE.jpeg'
import blackMarkino from '../../../assets/our products/granite/black-markino.jpeg'
import blueDunes from '../../../assets/our products/granite/BLUE DUNES.jpg'
import blueFlower from '../../../assets/our products/granite/BLUE FLOWER.jpeg'
import brazilBrown from '../../../assets/our products/granite/brazil brown.jpeg'
import brunoRed from '../../../assets/our products/granite/Bruno Red.jpeg'
import cWhite from '../../../assets/our products/granite/C WHITE.jpeg'
import cheemaBlue from '../../../assets/our products/granite/Cheema Blue.jpeg'
import cherryBrown from '../../../assets/our products/granite/Cherry Brown.jpeg'
import chesnutBrown from '../../../assets/our products/granite/Chesnut Brown.jpeg'
import chimaPink from '../../../assets/our products/granite/Chima Pink.png'
import chinaWhite from '../../../assets/our products/granite/China White.jpeg'
import commando from '../../../assets/our products/granite/Commando.jpeg'
import copperSilk from '../../../assets/our products/granite/Copper Silk.jpeg'
import coralBlack from '../../../assets/our products/granite/CORAL BLACK.jpeg'
import crystalBrown from '../../../assets/our products/granite/CRYSTAL BROWN.jpeg'
import crystalBue from '../../../assets/our products/granite/Crystal Bue.jpeg'
import crystalYellow from '../../../assets/our products/granite/CRYSTAL YELLOW.jpeg'
import crystalYellowJpg from '../../../assets/our products/granite/Crystal Yellow.jpg'
import delicatusWhite from '../../../assets/our products/granite/DELICATUS WHITE.jpg'
import dessertBrown from '../../../assets/our products/granite/DESSERT BROWN.jpeg'
import dessertGold from '../../../assets/our products/granite/DESSERT GOLD.jpeg'
import dessertGreen from '../../../assets/our products/granite/DESSERT GREEN.jpeg'
import dessertPink from '../../../assets/our products/granite/Dessert Pink.jpeg'
import espenWhite from '../../../assets/our products/granite/ESPEN WHITE.png'
import fishBlack from '../../../assets/our products/granite/fish-black.jpeg'
import forrestGreen from '../../../assets/our products/granite/FORREST GREEN.jpeg'
import ganpatiMarquino from '../../../assets/our products/granite/GANPATI MARQUINO.jpeg'
import greenPeal from '../../../assets/our products/granite/GREEN PEAL.jpeg'
import jirawalWhite from '../../../assets/our products/granite/Jirawal White.jpeg'
import korana from '../../../assets/our products/granite/KORANA.jpeg'
import kotkasta from '../../../assets/our products/granite/KOTKASTA.jpg'
import meralBlack from '../../../assets/our products/granite/Meral-Black.jpeg'
import metallica from '../../../assets/our products/granite/Metallica.jpeg'
import monteCristo from '../../../assets/our products/granite/MONTE CRISTO.jpeg'
import nasoli from '../../../assets/our products/granite/Nasoli.jpeg'
import newParadiseBlack from '../../../assets/our products/granite/New Paradise Black.jpeg'
import nosraGold from '../../../assets/our products/granite/NOSRA GOLD.jpeg'
import nosraGreen from '../../../assets/our products/granite/NOSRA GREEN.jpeg'
import oysterWhite from '../../../assets/our products/granite/OYSTER WHITE.jpeg'
import pWhite from '../../../assets/our products/granite/P-White.jpeg'
import pentharYellow from '../../../assets/our products/granite/PENTHAR YELLOW.jpeg'
import petrousCream from '../../../assets/our products/granite/PETROUS CREAM.jpg'
import rBlack from '../../../assets/our products/granite/R Black.jpeg'
import raniwara from '../../../assets/our products/granite/RANIWARA.jpeg'
import rosyPink from '../../../assets/our products/granite/Rosy Pink.png'
import royalCream from '../../../assets/our products/granite/ROYAL CREAM.jpeg'
import silkyRed from '../../../assets/our products/granite/Silky Red.jpeg'
import silverStar from '../../../assets/our products/granite/Silver Star.jpeg'
import siraGrey from '../../../assets/our products/granite/SIRA GREY.jpeg'
import swhiteBig from '../../../assets/our products/granite/swhite-big-480x640.jpeg'
import tBrown from '../../../assets/our products/granite/T Brown.jpeg'
import tiger from '../../../assets/our products/granite/Tiger.jpeg'
import tropicalBrown from '../../../assets/our products/granite/TROPICAL BROWN.jpeg'
import veniceCream from '../../../assets/our products/granite/VENICE CREAM.jpg'
import whisperWhite from '../../../assets/our products/granite/WHISPER WHITE.jpeg'
import wineRed from '../../../assets/our products/granite/Wine Red.jpeg'

const GranitePage = ({
  onShowSidebar,
  onShowProjects,
  onShowCreations,
  onShowProducts,
  onShowServices,
  onShowHowItWorks,
  onShowLocation,
  onShowBooking
}) => {
  const graniteImages = [
    { id: 1, name: 'Alaska Gold', image: alaskaGold, origin: 'South India' },
    { id: 2, name: 'Alaska Red', image: alaskaRed, origin: 'South India' },
    { id: 3, name: 'Alaska White', image: alaskaWhite, origin: 'South India' },
    { id: 4, name: 'Anglo', image: anglo, origin: 'Karnataka' },
    { id: 5, name: 'Antico Cream', image: anticoCream, origin: 'Tamil Nadu' },
    { id: 6, name: 'Arawali Leather Brown', image: arawaliLeatherBrown, origin: 'Rajasthan' },
    { id: 7, name: 'Artic Pearl', image: articPearl, origin: 'North India' },
    { id: 8, name: 'Avalon White', image: avalonWhite, origin: 'Brazil/India' },
    { id: 9, name: 'Azul Celeste', image: azulCeleste, origin: 'Imported' },
    { id: 10, name: 'Bala Flower', image: balaFlower, origin: 'Rajasthan' },
    { id: 11, name: 'Baltic Brown', image: balticBrown, origin: 'Finland/India' },
    { id: 12, name: 'Bangal Brown', image: bangalBrown, origin: 'West Bengal' },
    { id: 13, name: 'Bangal Green', image: bangalGreen, origin: 'West Bengal' },
    { id: 14, name: 'Bianca Rosa', image: biancaRosa, origin: 'South India' },
    { id: 15, name: 'Biscotti White', image: biscottiWhite, origin: 'Andhra Pradesh' },
    { id: 16, name: 'Black Markino', image: blackMarkino, origin: 'Rajasthan' },
    { id: 17, name: 'Blue Dunes', image: blueDunes, origin: 'Rajasthan' },
    { id: 18, name: 'Blue Flower', image: blueFlower, origin: 'South India' },
    { id: 19, name: 'Brazil Brown', image: brazilBrown, origin: 'Imported' },
    { id: 20, name: 'Bruno Red', image: brunoRed, origin: 'South India' },
    { id: 21, name: 'C White', image: cWhite, origin: 'Andhra Pradesh' },
    { id: 22, name: 'Cheema Blue', image: cheemaBlue, origin: 'Rajasthan' },
    { id: 23, name: 'Cherry Brown', image: cherryBrown, origin: 'South India' },
    { id: 24, name: 'Chesnut Brown', image: chesnutBrown, origin: 'South India' },
    { id: 25, name: 'Chima Pink', image: chimaPink, origin: 'Rajasthan' },
    { id: 26, name: 'China White', image: chinaWhite, origin: 'Rajasthan' },
    { id: 27, name: 'Commando', image: commando, origin: 'North India' },
    { id: 28, name: 'Copper Silk', image: copperSilk, origin: 'South India' },
    { id: 29, name: 'Coral Black', image: coralBlack, origin: 'South India' },
    { id: 30, name: 'Crystal Brown', image: crystalBrown, origin: 'South India' },
    { id: 31, name: 'Crystal Blue', image: crystalBue, origin: 'Andhra Pradesh' },
    { id: 32, name: 'Crystal Yellow', image: crystalYellow, origin: 'Gujarat' },
    { id: 33, name: 'Crystal Yellow Jpg', image: crystalYellowJpg, origin: 'Gujarat' },
    { id: 34, name: 'Delicatus White', image: delicatusWhite, origin: 'Brazil/India' },
    { id: 35, name: 'Dessert Brown', image: dessertBrown, origin: 'Rajasthan' },
    { id: 36, name: 'Dessert Gold', image: dessertGold, origin: 'Rajasthan' },
    { id: 37, name: 'Dessert Green', image: dessertGreen, origin: 'Rajasthan' },
    { id: 38, name: 'Dessert Pink', image: dessertPink, origin: 'Rajasthan' },
    { id: 39, name: 'Espen White', image: espenWhite, origin: 'North India' },
    { id: 40, name: 'Fish Black', image: fishBlack, origin: 'South India' },
    { id: 41, name: 'Forrest Green', image: forrestGreen, origin: 'Rajasthan' },
    { id: 42, name: 'Ganpati Marquino', image: ganpatiMarquino, origin: 'Rajasthan' },
    { id: 43, name: 'Green Peal', image: greenPeal, origin: 'South India' },
    { id: 44, name: 'Jirawal White', image: jirawalWhite, origin: 'Rajasthan' },
    { id: 45, name: 'Korana', image: korana, origin: 'North India' },
    { id: 46, name: 'Kotkasta', image: kotkasta, origin: 'Rajasthan' },
    { id: 47, name: 'Meral Black', image: meralBlack, origin: 'South India' },
    { id: 48, name: 'Metallica', image: metallica, origin: 'Andhra Pradesh' },
    { id: 49, name: 'Monte Cristo', image: monteCristo, origin: 'South India' },
    { id: 50, name: 'Nasoli', image: nasoli, origin: 'North India' },
    { id: 51, name: 'New Paradise Black', image: newParadiseBlack, origin: 'South India' },
    { id: 52, name: 'Nosra Gold', image: nosraGold, origin: 'Rajasthan' },
    { id: 53, name: 'Nosra Green', image: nosraGreen, origin: 'Rajasthan' },
    { id: 54, name: 'Oyster White', image: oysterWhite, origin: 'South India' },
    { id: 55, name: 'P White', image: pWhite, origin: 'Andhra Pradesh' },
    { id: 56, name: 'Penthar Yellow', image: pentharYellow, origin: 'Rajasthan' },
    { id: 57, name: 'Petrous Cream', image: petrousCream, origin: 'South India' },
    { id: 58, name: 'R Black', image: rBlack, origin: 'South India' },
    { id: 59, name: 'Raniwara', image: raniwara, origin: 'Rajasthan' },
    { id: 60, name: 'Rosy Pink', image: rosyPink, origin: 'Rajasthan' },
    { id: 61, name: 'Royal Cream', image: royalCream, origin: 'South India' },
    { id: 62, name: 'Silky Red', image: silkyRed, origin: 'South India' },
    { id: 63, name: 'Silver Star', image: silverStar, origin: 'Andhra Pradesh' },
    { id: 64, name: 'Sira Grey', image: siraGrey, origin: 'Karnataka' },
    { id: 65, name: 'S White Big', image: swhiteBig, origin: 'Andhra Pradesh' },
    { id: 66, name: 'T Brown', image: tBrown, origin: 'South India' },
    { id: 67, name: 'Tiger', image: tiger, origin: 'Rajasthan' },
    { id: 68, name: 'Tropical Brown', image: tropicalBrown, origin: 'South India' },
    { id: 69, name: 'Venice Cream', image: veniceCream, origin: 'South India' },
    { id: 70, name: 'Whisper White', image: whisperWhite, origin: 'South India' },
    { id: 71, name: 'Wine Red', image: wineRed, origin: 'South India' }
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
        heroImage={graniteHeroImage}
        title="GRANITE"
        subtitle="Unmatched Strength and Eternal Beauty"
        description="Discover our extensive collection of granite varieties, offering exceptional durability and stunning aesthetics for high-traffic areas and luxury spaces alike."
      />

      <ImageGallery
        title="Our Granite Collection"
        description="From the robust textures of South India to the exotic patterns of Brazil, our granite selection offers unparalleled versatility for modern architecture."
        images={graniteImages}
        stoneType="granite"
      />

      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default GranitePage

