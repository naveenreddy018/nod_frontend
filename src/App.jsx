// import FeaturedServices from './pages/Featuredservices'
// import FeaturedProjects from './pages/FeatureProjects'
// import Footer from './pages/Footer'
// import HeroSection from './pages/HeroSection'
// import Marquee from './pages/Marquee'
// import Navbar from './pages/Navbar'
// import OurProcess from './pages/Ourprocess'
// import NewHeritage from './pages/subsection'
// import WhyChooseUs from './pages/Whychooseuse'

// function App() {
//   return (
//     <>
//       <Navbar />
//       <HeroSection />
//       <Marquee />
//       <FeaturedServices />
//       <FeaturedProjects />
//       <NewHeritage />
//       <WhyChooseUs />
//       <OurProcess />
//       <Footer />
//     </>
//   )
// }

// export default App


import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FeaturedServices from './pages/Featuredservices'
import FeaturedProjects from './pages/FeatureProjects'
import Footer from './pages/Footer'
import HeroSection from './pages/HeroSection'
import Marquee from './pages/Marquee'
import Navbar from './pages/Navbar'
import OurProcess from './pages/Ourprocess'
import NewHeritage from './pages/subsection'
import WhyChooseUs from './pages/Whychooseuse'
import LoginPage from './Authentication/Login'

function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Marquee />
      <FeaturedServices />
      <FeaturedProjects />
      <NewHeritage />
      <WhyChooseUs />
      <OurProcess />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App


