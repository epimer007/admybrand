import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { BenefitsSection } from "@/components/benefits-section"
import { DashboardPreview } from "@/components/dashboard-preview"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 overflow-x-hidden scroll-smooth">
      <Header />
      <main className="space-y-0 pt-16">
        <HeroSection />
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/20 dark:via-blue-900/10 to-transparent h-32 -top-16"></div>
          <FeaturesSection />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-50/20 dark:via-purple-900/10 to-transparent h-32 -top-16"></div>
          <BenefitsSection />
        </div>
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-50/20 dark:via-pink-900/10 to-transparent h-32 -top-16"></div>
          <DashboardPreview />
        </div>
      </main>
      <Footer />
    </div>
  )
}
