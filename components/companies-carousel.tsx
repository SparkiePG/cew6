"use client"

import Image from "next/image"

const companies = [
  { name: "TechCorp", logo: "/company-logos/techcorp-logo.jpg" },
  { name: "BuildRight", logo: "/company-logos/buildright-logo.jpg" },
  { name: "Metro Solutions", logo: "/company-logos/metro-solutions-logo.jpg" },
  { name: "Urban Spaces", logo: "/company-logos/urban-spaces-logo.jpg" },
  { name: "Prime Ventures", logo: "/company-logos/prime-ventures-logo.jpg" },
  { name: "Global Assets", logo: "/company-logos/global-assets-logo.jpg" },
]

const MIN_ITEMS_FOR_LOOP = 8

export default function CompaniesCarousel() {
  const getDisplayItems = () => {
    if (companies.length === 0) return []
    if (companies.length === 1) {
      return Array(MIN_ITEMS_FOR_LOOP).fill(companies[0])
    }
    let items = [...companies]
    while (items.length < MIN_ITEMS_FOR_LOOP) {
      items = [...items, ...companies]
    }
    return items
  }

  const displayItems = getDisplayItems()

  return (
    <section
      id="companies"
      className="overflow-hidden w-full py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16 scroll-mt-14 sm:scroll-mt-16 lg:scroll-mt-20"
      style={{ backgroundColor: "#f0efe7" }}
    >
      <div className="w-full max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          <h2 className="font-serif text-foreground italic tracking-wide text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl">
            Company worked with
          </h2>
        </div>
      </div>

      <div className="w-full infinite-scroll-container">
        <div className="infinite-scroll-track infinite-scroll-right scroll-slower flex items-center">
          {displayItems.map((company, index) => (
            <div
              key={`a-${index}`}
              className="infinite-scroll-item flex items-center justify-center flex-shrink-0 w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16 lg:w-36 lg:h-18 xl:w-40 xl:h-20 mx-3 sm:mx-4 md:mx-5 lg:mx-6"
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                width={160}
                height={80}
                className="w-full h-full object-contain grayscale opacity-40 hover:opacity-60 transition-opacity duration-300"
                style={{ background: "transparent" }}
              />
            </div>
          ))}
          {displayItems.map((company, index) => (
            <div
              key={`b-${index}`}
              className="infinite-scroll-item flex items-center justify-center flex-shrink-0 w-24 h-12 sm:w-28 sm:h-14 md:w-32 md:h-16 lg:w-36 lg:h-18 xl:w-40 xl:h-20 mx-3 sm:mx-4 md:mx-5 lg:mx-6"
            >
              <Image
                src={company.logo || "/placeholder.svg"}
                alt={`${company.name} logo`}
                width={160}
                height={80}
                className="w-full h-full object-contain grayscale opacity-40 hover:opacity-60 transition-opacity duration-300"
                style={{ background: "transparent" }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
