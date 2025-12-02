import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import CompaniesCarousel from "@/components/companies-carousel"
import AwardsCertificates from "@/components/awards-certificates"
import Footer from "@/components/footer"
import ContactPanel from "@/components/contact-panel"
import ScrollNavigation from "@/components/scroll-navigation"

export default function Home() {
  return (
    <main className="min-h-screen w-full">
      <Header />
      <HeroSection />
      <CompaniesCarousel />
      <AwardsCertificates />
      <Footer />

      {/* Fixed UI Elements */}
      <ContactPanel />
      <ScrollNavigation />
    </main>
  )
}
