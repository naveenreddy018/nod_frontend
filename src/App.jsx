// // import { lazy, Suspense } from "react"
// // import { Routes, Route, Navigate } from "react-router-dom"

// // import PrivateRoute from "./router/PrivateRoute"
// // import PublicRoute from "./router/PublicRoute"
// // import { isAuthenticated } from "./utils/Auth"

// // import FeaturedServices from "./pages/Featuredservices"
// // import FeaturedProjects from "./pages/FeatureProjects"
// // import Footer from "./pages/Footer"
// // import HeroSection from "./pages/HeroSection"
// // import Marquee from "./pages/Marquee"
// // import Navbar from "./pages/Navbar"
// // import OurProcess from "./pages/Ourprocess"
// // import NewHeritage from "./pages/subsection"
// // import WhyChooseUs from "./pages/Whychooseuse"
// // import LoginPage from "./Authentication/Login"

// // import DashboardLayout from "./components/dashboard/Dashboardlayout"
// // import RoleSwitch from "./router/RoleSwitch"
// // import Loader from "./global/Loader"

// // // ── Client ──
// // const ClientOverview = lazy(() => import("./components/dashboardPages/client/OverviewPage/OverviewPage"))
// // const ClientProjects = lazy(() => import("./components/dashboardPages/client/ProjectsPage"))
// // const ClientFindPros = lazy(() => import("./components/dashboardPages/client/FindProsPage"))
// // const ClientPayments = lazy(() => import("./components/dashboardPages/client/PaymentsPage"))
// // const ClientSettings = lazy(() => import("./components/dashboardPages/client/SettingsPage"))

// // // ── Designer ──
// // const DesignerOverview = lazy(() => import("./components/dashboardPages/designer/OverviewPage/OverviewPage"))
// // // const DesignerPortfolio = lazy(() => import("./components/dashboardPages/designer/PortfolioPage"))
// // const DesignerProposals = lazy(() => import("./components/dashboardPages/designer/ProposalsPage"))
// // const DesignerProjects = lazy(() => import("./components/dashboardPages/designer/ProjectsPage"))
// // const DesignerEarnings = lazy(() => import("./components/dashboardPages/designer/EarningsPage"))
// // const DesignerSettings = lazy(() => import("./components/dashboardPages/designer/SettingsPage"))

// // // ── Architect ──
// // const ArchitectOverview = lazy(() => import("./components/dashboardPages/architech/Overview/OverviewPage"))
// // const ArchitectPortfolio = lazy(() => import("./components/dashboardPages/architech/PortfolioPage"))
// // const ArchitectProposals = lazy(() => import("./components/dashboardPages/architech/ProposalsPage"))
// // const ArchitectProjects = lazy(() => import("./components/dashboardPages/architech/ProjectsPage"))
// // const ArchitectDocuments = lazy(() => import("./components/dashboardPages/architech/DocumentsPage"))
// // const ArchitectEarnings = lazy(() => import("./components/dashboardPages/architech/EarningsPage"))
// // const ArchitectSettings = lazy(() => import("./components/dashboardPages/architech/SettingsPage"))

// // // ── Contractor ──
// // const ContractorOverview = lazy(() => import("./components/dashboardPages/architech/Overview/OverviewPage"))
// // const ContractorProjects = lazy(() => import("./components/dashboardPages/architech/ProjectsPage"))
// // const ContractorProposals = lazy(() => import("./components/dashboardPages/architech/ProposalsPage"))
// // const ContractorEarnings = lazy(() => import("./components/dashboardPages/architech/EarningsPage"))
// // const ContractorSettings = lazy(() => import("./components/dashboardPages/architech/SettingsPage"))

// // // ── Shared ──
// // // const MessagesPage = lazy(() => import("./pages/dashboard/shared/MessagesPage"))
// // // const NotFound = lazy(() => import("./pages/NotFound"))

// // // ── Role → component maps (per route key) ──
// // const PAGE_MAP = {
// //   overview: { 1: ClientOverview, 2: DesignerOverview, 3: ArchitectOverview, 4: ContractorOverview },
// //   projects: { 1: ClientProjects, 2: DesignerProjects, 3: ArchitectProjects, 4: ContractorProjects },
// //   // messages: { 1: MessagesPage, 2: MessagesPage, 3: MessagesPage, 4: MessagesPage },
// //   settings: { 1: ClientSettings, 2: DesignerSettings, 3: ArchitectSettings, 4: ContractorSettings },
// //   find: { 1: ClientFindPros },
// //   payments: { 1: ClientPayments },
// //   portfolio: { 3: ArchitectPortfolio },
// //   proposals: { 2: DesignerProposals, 3: ArchitectProposals, 4: ContractorProposals },
// //   earnings: { 2: DesignerEarnings, 3: ArchitectEarnings, 4: ContractorEarnings },
// //   documents: { 3: ArchitectDocuments },
// // }

// // function Home() {
// //   return (
// //     <>
// //       <Navbar />
// //       <HeroSection />
// //       <Marquee />
// //       <FeaturedServices />
// //       <FeaturedProjects />
// //       <NewHeritage />
// //       <WhyChooseUs />
// //       <OurProcess />
// //       <Footer />
// //     </>
// //   )
// // }

// // function App() {
// //   return (
// //     <Suspense fallback={<div className="p-10 text-center text-sm">
// //       <Loader />
// //     </div>}>
// //       <Routes>
// //         <Route
// //           path="/"
// //           element={isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Home />}
// //         />

// //         <Route element={<PublicRoute restricted />}>
// //           <Route path="/login" element={<LoginPage />} />
// //         </Route>

// //         <Route element={<PrivateRoute />}>
// //           <Route path="/dashboard" element={<DashboardLayout />}>
// //             <Route index element={<RoleSwitch map={PAGE_MAP.overview} />} />
// //             <Route path="projects" element={<RoleSwitch map={PAGE_MAP.projects} />} />
// //             <Route path="messages" element={<RoleSwitch map={PAGE_MAP.messages} />} />
// //             <Route path="settings" element={<RoleSwitch map={PAGE_MAP.settings} />} />
// //             <Route path="payments" element={<RoleSwitch map={PAGE_MAP.payments} />} />
// //             <Route path="find" element={<RoleSwitch map={PAGE_MAP.find} />} />
// //             <Route path="portfolio" element={<RoleSwitch map={PAGE_MAP.portfolio} />} />
// //             <Route path="proposals" element={<RoleSwitch map={PAGE_MAP.proposals} />} />
// //             <Route path="earnings" element={<RoleSwitch map={PAGE_MAP.earnings} />} />
// //             <Route path="documents" element={<RoleSwitch map={PAGE_MAP.documents} />} />
// //           </Route>
// //         </Route>

// //         {/* <Route path="*" element={<NotFound />} /> */}
// //       </Routes>
// //     </Suspense>
// //   )
// // }

// // export default App


// import { lazy, Suspense } from "react"
// import { Routes, Route, Navigate } from "react-router-dom"

// import PrivateRoute from "./router/PrivateRoute"
// import PublicRoute from "./router/PublicRoute"
// import { isAuthenticated } from "./utils/Auth"

// import FeaturedServices from "./pages/Featuredservices"
// import FeaturedProjects from "./pages/FeatureProjects"
// import Footer from "./pages/Footer"
// import HeroSection from "./pages/HeroSection"
// import Marquee from "./pages/Marquee"
// import Navbar from "./pages/Navbar"
// import OurProcess from "./pages/Ourprocess"
// import NewHeritage from "./pages/subsection"
// import WhyChooseUs from "./pages/Whychooseuse"
// import LoginPage from "./Authentication/Login"

// import DashboardLayout from "./components/dashboard/Dashboardlayout"
// import RoleSwitch from "./router/RoleSwitch"
// import Loader from "./global/Loader"
// import CategoryShowcase from "./pages/CategoryShowcase"

// // ── Client ──
// const ClientOverview = lazy(() => import("./components/dashboardPages/client/OverviewPage/OverviewPage"))
// const ClientProjects = lazy(() => import("./components/dashboardPages/client/ProjectsPage"))
// const ClientFindPros = lazy(() => import("./components/dashboardPages/client/FindProsPage"))
// const ClientPayments = lazy(() => import("./components/dashboardPages/client/PaymentsPage"))
// const ClientSettings = lazy(() => import("./components/dashboardPages/client/SettingsPage"))

// // ── Designer ──
// const DesignerOverview = lazy(() => import("./components/dashboardPages/designer/OverviewPage/OverviewPage"))
// // const DesignerPortfolio = lazy(() => import("./components/dashboardPages/designer/PortfolioPage"))
// const DesignerProposals = lazy(() => import("./components/dashboardPages/designer/ProposalsPage"))
// const DesignerProjects = lazy(() => import("./components/dashboardPages/designer/ProjectsPage"))
// const DesignerEarnings = lazy(() => import("./components/dashboardPages/designer/EarningsPage"))
// const DesignerSettings = lazy(() => import("./components/dashboardPages/designer/SettingsPage"))

// // ── Architect ──
// const ArchitectOverview = lazy(() => import("./components/dashboardPages/architech/Overview/OverviewPage"))
// const ArchitectPortfolio = lazy(() => import("./components/dashboardPages/architech/PortfolioPage"))
// const ArchitectProposals = lazy(() => import("./components/dashboardPages/architech/ProposalsPage"))
// const ArchitectProjects = lazy(() => import("./components/dashboardPages/architech/ProjectsPage"))
// const ArchitectDocuments = lazy(() => import("./components/dashboardPages/architech/DocumentsPage"))
// const ArchitectEarnings = lazy(() => import("./components/dashboardPages/architech/EarningsPage"))
// const ArchitectSettings = lazy(() => import("./components/dashboardPages/architech/SettingsPage"))

// // ── Contractor ──
// const ContractorOverview = lazy(() => import("./components/dashboardPages/architech/Overview/OverviewPage"))
// const ContractorProjects = lazy(() => import("./components/dashboardPages/architech/ProjectsPage"))
// const ContractorProposals = lazy(() => import("./components/dashboardPages/architech/ProposalsPage"))
// const ContractorEarnings = lazy(() => import("./components/dashboardPages/architech/EarningsPage"))
// const ContractorSettings = lazy(() => import("./components/dashboardPages/architech/SettingsPage"))

// // ── Shared ──
// // const MessagesPage = lazy(() => import("./pages/dashboard/shared/MessagesPage"))
// // const NotFound = lazy(() => import("./pages/NotFound"))

// // ── Role → component maps (per route key) ──
// const PAGE_MAP = {
//   overview: { 1: ClientOverview, 2: DesignerOverview, 3: ArchitectOverview, 4: ContractorOverview },
//   projects: { 1: ClientProjects, 2: DesignerProjects, 3: ArchitectProjects, 4: ContractorProjects },
//   // messages: { 1: MessagesPage, 2: MessagesPage, 3: MessagesPage, 4: MessagesPage },
//   settings: { 1: ClientSettings, 2: DesignerSettings, 3: ArchitectSettings, 4: ContractorSettings },
//   find: { 1: ClientFindPros },
//   payments: { 1: ClientPayments },
//   portfolio: { 3: ArchitectPortfolio },
//   proposals: { 2: DesignerProposals, 3: ArchitectProposals, 4: ContractorProposals },
//   earnings: { 2: DesignerEarnings, 3: ArchitectEarnings, 4: ContractorEarnings },
//   documents: { 3: ArchitectDocuments },
// }


// function Home() {
//   return (
//     <>
//       <div className="relative w-full h-screen">
//         <Navbar />
//         <HeroSection />
//       </div>

//       <div className="relative z-10 rounded-t-[2rem] shadow-[0_-40px_80px_rgba(0,0,0,0.45)]">

//         <CategoryShowcase />

//         <Marquee />
//         <FeaturedServices />
//         <FeaturedProjects />
//         <NewHeritage />
//         <WhyChooseUs />
//         <OurProcess />
//         <Footer />
//       </div>
//     </>
//   )
// }

// function App() {
//   return (
//     <Suspense fallback={<div className="p-10 text-center text-sm">
//       <Loader />
//     </div>}>
//       <Routes>
//         <Route
//           path="/"
//           element={isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Home />}
//         />

//         <Route element={<PublicRoute restricted />}>
//           <Route path="/login" element={<LoginPage />} />
//         </Route>

//         <Route element={<PrivateRoute />}>
//           <Route path="/dashboard" element={<DashboardLayout />}>
//             <Route index element={<RoleSwitch map={PAGE_MAP.overview} />} />
//             <Route path="projects" element={<RoleSwitch map={PAGE_MAP.projects} />} />
//             <Route path="messages" element={<RoleSwitch map={PAGE_MAP.messages} />} />
//             <Route path="settings" element={<RoleSwitch map={PAGE_MAP.settings} />} />
//             <Route path="payments" element={<RoleSwitch map={PAGE_MAP.payments} />} />
//             <Route path="find" element={<RoleSwitch map={PAGE_MAP.find} />} />
//             <Route path="portfolio" element={<RoleSwitch map={PAGE_MAP.portfolio} />} />
//             <Route path="proposals" element={<RoleSwitch map={PAGE_MAP.proposals} />} />
//             <Route path="earnings" element={<RoleSwitch map={PAGE_MAP.earnings} />} />
//             <Route path="documents" element={<RoleSwitch map={PAGE_MAP.documents} />} />
//           </Route>
//         </Route>

//         {/* <Route path="*" element={<NotFound />} /> */}
//       </Routes>
//     </Suspense>
//   )
// }

// export default App


import { lazy, Suspense, useRef } from "react"
import { Routes, Route, Navigate } from "react-router-dom"

import PrivateRoute from "./router/PrivateRoute"
import PublicRoute from "./router/PublicRoute"
import { isAuthenticated } from "./utils/auth"

import FeaturedServices from "./pages/Featuredservices"
import FeaturedProjects from "./pages/FeatureProjects"
import Footer from "./pages/Footer"
import HeroSection from "./pages/HeroSection"
import Marquee from "./pages/Marquee"
import Navbar from "./pages/Navbar"
import OurProcess from "./pages/Ourprocess"
import NewHeritage from "./pages/subsection"
import WhyChooseUs from "./pages/Whychooseuse"
import LoginPage from "./Authentication/Login"

import DashboardLayout from "./components/dashboard/Dashboardlayout"
import RoleSwitch from "./router/RoleSwitch"
import Loader from "./global/Loader"
import CategoryShowcase from "./pages/CategoryShowcase"
import WorkShowcase from "./pages/scrollingImages"
import ContactSection from "./pages/contact"

// ── Client ──
const ClientOverview = lazy(() => import("./components/dashboardPages/client/OverviewPage/OverviewPage"))
const ClientProjects = lazy(() => import("./components/dashboardPages/client/ProjectsPage"))
const ClientFindPros = lazy(() => import("./components/dashboardPages/client/FindProsPage"))
const ClientPayments = lazy(() => import("./components/dashboardPages/client/PaymentsPage"))
const ClientSettings = lazy(() => import("./components/dashboardPages/client/SettingsPage"))

// ── Designer ──
const DesignerOverview = lazy(() => import("./components/dashboardPages/designer/OverviewPage/OverviewPage"))
// const DesignerPortfolio = lazy(() => import("./components/dashboardPages/designer/PortfolioPage"))
const DesignerProposals = lazy(() => import("./components/dashboardPages/designer/ProposalsPage"))
const DesignerProjects = lazy(() => import("./components/dashboardPages/designer/ProjectsPage"))
const DesignerEarnings = lazy(() => import("./components/dashboardPages/designer/EarningsPage"))
const DesignerSettings = lazy(() => import("./components/dashboardPages/designer/SettingsPage"))

// ── Architect ──
const ArchitectOverview = lazy(() => import("./components/dashboardPages/architech/Overview/OverviewPage"))
const ArchitectPortfolio = lazy(() => import("./components/dashboardPages/architech/PortfolioPage"))
const ArchitectProposals = lazy(() => import("./components/dashboardPages/architech/ProposalsPage"))
const ArchitectProjects = lazy(() => import("./components/dashboardPages/architech/ProjectsPage"))
const ArchitectDocuments = lazy(() => import("./components/dashboardPages/architech/DocumentsPage"))
const ArchitectEarnings = lazy(() => import("./components/dashboardPages/architech/EarningsPage"))
const ArchitectSettings = lazy(() => import("./components/dashboardPages/architech/SettingsPage"))

// ── Contractor ──
const ContractorOverview = lazy(() => import("./components/dashboardPages/architech/Overview/OverviewPage"))
const ContractorProjects = lazy(() => import("./components/dashboardPages/architech/ProjectsPage"))
const ContractorProposals = lazy(() => import("./components/dashboardPages/architech/ProposalsPage"))
const ContractorEarnings = lazy(() => import("./components/dashboardPages/architech/EarningsPage"))
const ContractorSettings = lazy(() => import("./components/dashboardPages/architech/SettingsPage"))

// ── Shared ──
// const MessagesPage = lazy(() => import("./pages/dashboard/shared/MessagesPage"))
// const NotFound = lazy(() => import("./pages/NotFound"))

// ── Role → component maps (per route key) ──
const PAGE_MAP = {
  overview: { 1: ClientOverview, 2: DesignerOverview, 3: ArchitectOverview, 4: ContractorOverview },
  projects: { 1: ClientProjects, 2: DesignerProjects, 3: ArchitectProjects, 4: ContractorProjects },
  // messages: { 1: MessagesPage, 2: MessagesPage, 3: MessagesPage, 4: MessagesPage },
  settings: { 1: ClientSettings, 2: DesignerSettings, 3: ArchitectSettings, 4: ContractorSettings },
  find: { 1: ClientFindPros },
  payments: { 1: ClientPayments },
  portfolio: { 3: ArchitectPortfolio },
  proposals: { 2: DesignerProposals, 3: ArchitectProposals, 4: ContractorProposals },
  earnings: { 2: DesignerEarnings, 3: ArchitectEarnings, 4: ContractorEarnings },
  documents: { 3: ArchitectDocuments },
}

function Home() {
  const panelRef = useRef(null)

  return (
    <>
      <div className="relative w-full h-screen">
        <Navbar />
        <HeroSection panelRef={panelRef} />
      </div>

      <div
        ref={panelRef}
        className="relative z-10 rounded-t-[2rem] "
      >
        <CategoryShowcase />

        <Marquee />
        {/* <FeaturedServices /> */}
        <WorkShowcase />
        <FeaturedProjects />
        <NewHeritage />
        <WhyChooseUs />
        <OurProcess />
        <ContactSection />
        <Footer />
      </div>
    </>
  )
}

function App() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-sm">
      <Loader />
    </div>}>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated() ? <Navigate to="/dashboard" replace /> : <Home />}
        />

        <Route element={<PublicRoute restricted />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<RoleSwitch map={PAGE_MAP.overview} />} />
            <Route path="projects" element={<RoleSwitch map={PAGE_MAP.projects} />} />
            <Route path="messages" element={<RoleSwitch map={PAGE_MAP.messages} />} />
            <Route path="settings" element={<RoleSwitch map={PAGE_MAP.settings} />} />
            <Route path="payments" element={<RoleSwitch map={PAGE_MAP.payments} />} />
            <Route path="find" element={<RoleSwitch map={PAGE_MAP.find} />} />
            <Route path="portfolio" element={<RoleSwitch map={PAGE_MAP.portfolio} />} />
            <Route path="proposals" element={<RoleSwitch map={PAGE_MAP.proposals} />} />
            <Route path="earnings" element={<RoleSwitch map={PAGE_MAP.earnings} />} />
            <Route path="documents" element={<RoleSwitch map={PAGE_MAP.documents} />} />
          </Route>
        </Route>

        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </Suspense>
  )
}

export default App

