import HeroSection from "./components/HeroSection"
import SectionImageText from "./components/SectionImageText"
import DownloadSection from "./components/downloadSection"
import FactSection from "./components/factSection"
import ProductSection from "./components/productSection"
import Section1 from "./components/section1"
import Section2 from "./components/section2"

const Home = () => {
  return (
    <div>
        <Section1/>
        <Section2/>
        <SectionImageText/>
        {/* <ProductSection/> */}
        <FactSection/>
        <DownloadSection/>
        <HeroSection/>
    </div>
  )
}

export default Home