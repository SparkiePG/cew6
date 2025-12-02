"use client"

export default function HeroSection() {
  return (
    <section id="hero" className="relative flex items-center justify-center overflow-hidden min-h-[100dvh]">
      {/* 
        =============================================
        BACKGROUND IMAGE - Change image here
        =============================================
      */}
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
        alt="Modern commercial building with glass facade"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      <div className="relative z-10 w-full max-w-4xl xl:max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-serif text-white leading-tight tracking-tight text-balance text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl mb-4 sm:mb-6 lg:mb-8">
          Find your next business
          <br />
          <span className="text-primary">location with us.</span>
        </h1>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 sm:bottom-8 lg:bottom-10 animate-bounce">
        <a
          href="#companies"
          className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
          aria-label="Scroll to companies section"
        >
          <span className="uppercase tracking-widest text-[10px] sm:text-xs">Scroll</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4 sm:w-5 sm:h-5"
          >
            <path d="M12 5v14" />
            <path d="m19 12-7 7-7-7" />
          </svg>
        </a>
      </div>
    </section>
  )
}
