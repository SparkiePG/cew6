"use client"

const awards = [
  "Excellence in Real Estate",
  "Top 100 Realtors",
  "Client Choice Award",
  "Best Commercial Agent 2024",
  "Service Award",
  "Industry Leadership",
  "Innovation Award 2023",
  "Market Excellence",
  "Professional Excellence",
  "Community Impact",
  "Rising Star Award",
  "Regional Top Agent",
]

const certificates = [
  "Commercial Appraisal",
  "Licensed Commercial Agent",
  "Property Management Cert.",
  "Real Estate Investment",
  "Market Analysis",
  "Valuation Expert",
  "Legal Compliance",
  "Negotiation Specialist",
  "Business Development",
  "Financial Analysis",
  "Property Law",
  "Risk Management",
]

const MIN_ITEMS = 6

function InfiniteScrollRow({
  items,
  direction = "left",
  speed = "normal",
}: {
  items: string[]
  direction?: "left" | "right"
  speed?: "slow" | "normal" | "fast"
}) {
  const getDisplayItems = () => {
    if (items.length === 0) return []
    if (items.length === 1) {
      return Array(MIN_ITEMS).fill(items[0])
    }
    let displayItems = [...items]
    while (displayItems.length < MIN_ITEMS) {
      displayItems = [...displayItems, ...items]
    }
    return displayItems
  }

  const displayItems = getDisplayItems()
  const animationClass = direction === "left" ? "infinite-scroll-left" : "infinite-scroll-right"
  const speedClass = speed === "slow" ? "scroll-slow" : speed === "fast" ? "scroll-fast" : ""

  const renderItem = (item: string, index: number, keyPrefix: string) => (
    <div
      key={`${keyPrefix}-${index}`}
      className="infinite-scroll-item flex-shrink-0 border border-white/30 rounded-sm flex items-center justify-center hover:bg-white/10 transition-all w-20 h-12 sm:w-24 sm:h-14 md:w-28 md:h-16 lg:w-32 lg:h-18 xl:w-36 xl:h-20 p-1 sm:p-1.5 mx-1 sm:mx-1.5 md:mx-2 lg:mx-2.5"
    >
      <span className="text-center leading-tight font-semibold text-white/90 text-[7px] sm:text-[8px] md:text-[9px] lg:text-[10px] xl:text-xs">
        {item}
      </span>
    </div>
  )

  return (
    <div className="infinite-scroll-container">
      <div className={`infinite-scroll-track ${animationClass} ${speedClass}`}>
        {displayItems.map((item, index) => renderItem(item, index, "a"))}
        {displayItems.map((item, index) => renderItem(item, index, "b"))}
      </div>
    </div>
  )
}

export default function AwardsCertificates() {
  return (
    <section
      id="awards"
      className="overflow-hidden w-full py-8 sm:py-10 md:py-12 lg:py-14 xl:py-16"
      style={{ backgroundColor: "#818380" }}
    >
      <div className="w-full max-w-5xl xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          Awards and Certificates
        </h2>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-6 lg:gap-8 xl:gap-10">
          {/* Awards Column */}
          <div className="flex flex-col items-center w-full md:w-[48%] md:max-w-lg xl:max-w-xl">
            <h3 className="font-serif text-white text-center w-full text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mb-3 sm:mb-4 md:mb-6 lg:mb-8">
              Award
            </h3>
            <div className="w-full flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5">
              <InfiniteScrollRow items={awards.slice(0, 4)} direction="right" />
              <InfiniteScrollRow items={awards.slice(4, 8)} direction="left" speed="slow" />
              <InfiniteScrollRow items={awards.slice(8, 12)} direction="right" speed="fast" />
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block self-stretch flex-shrink-0 w-0.5 bg-white/30 mx-1 lg:mx-2 xl:mx-3" />
          <div className="md:hidden w-3/4 mx-auto h-0.5 bg-white/30 my-2" />

          {/* Certificates Column */}
          <div className="flex flex-col items-center w-full md:w-[48%] md:max-w-lg xl:max-w-xl">
            <h3 className="font-serif text-white text-center w-full text-base sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mb-3 sm:mb-4 md:mb-6 lg:mb-8">
              Certificates
            </h3>
            <div className="w-full flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-5">
              <InfiniteScrollRow items={certificates.slice(0, 4)} direction="left" />
              <InfiniteScrollRow items={certificates.slice(4, 8)} direction="right" speed="slow" />
              <InfiniteScrollRow items={certificates.slice(8, 12)} direction="left" speed="fast" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
