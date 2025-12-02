const CheckCircle2Icon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="m9 12 2 2 4-4" />
  </svg>
)

const benefits = [
  "Deep local market expertise across major metropolitan areas",
  "Transparent pricing with no hidden fees or surprises",
  "Dedicated agent assigned to your search from day one",
  "Access to off-market properties and exclusive listings",
  "Post-lease support for tenant improvements and build-outs",
  "Flexible terms and creative solutions for unique needs",
]

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 xl:py-28 2xl:py-32 bg-card">
      <div className="max-w-screen-lg xl:max-w-screen-xl 2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-14 xl:gap-16 2xl:gap-20 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Professional team discussing commercial real estate opportunities"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 md:w-28 lg:w-32 xl:w-36 2xl:w-40 h-24 md:h-28 lg:h-32 xl:h-36 2xl:h-40 bg-primary/10 rounded-sm -z-10" />
            <div className="absolute -top-4 -left-4 w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 h-16 md:h-20 lg:h-24 xl:h-28 2xl:h-32 border-2 border-primary/20 rounded-sm -z-10" />
          </div>

          {/* Content Side */}
          <div>
            <span className="text-primary text-xs md:text-sm xl:text-sm 2xl:text-base font-medium tracking-[0.3em] uppercase">
              About Us
            </span>
            <h2 className="mt-3 md:mt-4 xl:mt-5 2xl:mt-6 font-serif text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-5xl text-foreground tracking-tight text-balance">
              Why Choose Prime Locations?
            </h2>

            <p className="mt-4 md:mt-6 xl:mt-7 2xl:mt-8 text-muted-foreground leading-relaxed text-sm md:text-base xl:text-base 2xl:text-lg">
              With over 12 years of experience in commercial real estate, we've built our reputation on integrity,
              market knowledge, and client-first service. We don't just find spaces—we find the right spaces that help
              businesses thrive.
            </p>

            <p className="mt-3 md:mt-4 xl:mt-5 2xl:mt-6 text-muted-foreground leading-relaxed text-sm md:text-base xl:text-base 2xl:text-lg">
              Our team of certified commercial real estate professionals combines local expertise with innovative market
              analysis tools to deliver results that exceed expectations.
            </p>

            {/* Benefits List */}
            <ul className="mt-6 md:mt-8 xl:mt-10 2xl:mt-12 space-y-2 md:space-y-3 xl:space-y-4 2xl:space-y-5">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 md:gap-3 xl:gap-4">
                  <CheckCircle2Icon className="w-4 h-4 md:w-5 md:h-5 xl:w-5 xl:h-5 2xl:w-6 2xl:h-6 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-muted-foreground text-xs md:text-sm xl:text-sm 2xl:text-base">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="mt-8 md:mt-10 xl:mt-12 2xl:mt-14">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 md:px-6 xl:px-7 2xl:px-8 py-2.5 md:py-3 xl:py-3.5 2xl:py-4 bg-primary text-primary-foreground font-medium text-xs md:text-sm xl:text-sm 2xl:text-base tracking-wide uppercase rounded-sm transition-all hover:opacity-90 hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Start Your Search
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
