import Image from "next/image"

const FOOTER_CONFIG = {
  companyName: "DGrealtor",
  email: "DGrealtor@mail.in",
  address: {
    line1: "123 Business District",
    line2: "New York, NY 10001",
  },
}

// Inline SVG components to avoid lucide-react dependency
const MapPinIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const MailIcon = ({ size = 16, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
)

export default function Footer() {
  return (
    <footer id="footer" className="bg-foreground text-background">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
        {/* Mobile Layout (< 640px) */}
        <div className="flex flex-col gap-5 sm:hidden">
          <div className="flex items-center justify-center gap-3">
            <div className="relative overflow-hidden rounded w-9 h-9">
              <Image src="/logos/footer-logo.jpg" alt="DGrealtor Logo" fill className="object-contain" />
            </div>
            <span className="font-serif font-semibold text-base">{FOOTER_CONFIG.companyName}</span>
          </div>

          <div className="text-center">
            <p className="font-semibold flex items-center justify-center gap-2 mb-1 text-xs">
              <MailIcon size={12} className="text-primary" />
              Email
            </p>
            <a
              href={`mailto:${FOOTER_CONFIG.email}`}
              className="text-background/80 hover:text-primary transition-colors text-xs"
            >
              {FOOTER_CONFIG.email}
            </a>
          </div>

          <div className="text-center">
            <p className="font-semibold flex items-center justify-center gap-2 mb-1 text-xs">
              <MapPinIcon size={12} className="text-primary" />
              Address
            </p>
            <p className="text-background/80 leading-relaxed text-xs">
              {FOOTER_CONFIG.address.line1}
              <br />
              {FOOTER_CONFIG.address.line2}
            </p>
          </div>
        </div>

        {/* Tablet Layout */}
        <div className="hidden sm:flex lg:hidden flex-col gap-5 md:gap-6">
          <div className="flex items-center gap-3">
            <div className="relative overflow-hidden rounded w-10 h-10 md:w-12 md:h-12">
              <Image src="/logos/footer-logo.jpg" alt="DGrealtor Logo" fill className="object-contain" />
            </div>
            <span className="font-serif font-semibold text-lg md:text-xl">{FOOTER_CONFIG.companyName}</span>
          </div>

          <div className="flex items-end justify-between mt-1 md:mt-2">
            <div>
              <p className="font-semibold flex items-center gap-2 mb-1.5 md:mb-2 text-sm md:text-base">
                <MapPinIcon size={14} className="text-primary" />
                Address
              </p>
              <p className="text-background/80 leading-relaxed pl-5 md:pl-6 text-xs md:text-sm">
                {FOOTER_CONFIG.address.line1}
                <br />
                {FOOTER_CONFIG.address.line2}
              </p>
            </div>

            <div className="text-right">
              <p className="font-semibold flex items-center justify-end gap-2 mb-1.5 md:mb-2 text-sm md:text-base">
                <MailIcon size={14} className="text-primary" />
                Email
              </p>
              <a
                href={`mailto:${FOOTER_CONFIG.email}`}
                className="text-background/80 hover:text-primary transition-colors text-xs md:text-sm"
              >
                {FOOTER_CONFIG.email}
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex lg:flex-row lg:items-end lg:justify-between gap-6 xl:gap-8">
          <div className="flex flex-col gap-4 xl:gap-5">
            <div className="flex items-center gap-3 xl:gap-4">
              <div className="relative overflow-hidden rounded w-10 h-10 xl:w-12 xl:h-12">
                <Image src="/logos/footer-logo.jpg" alt="DGrealtor Logo" fill className="object-contain" />
              </div>
              <span className="font-serif font-semibold text-xl xl:text-2xl">{FOOTER_CONFIG.companyName}</span>
            </div>

            <div className="pt-1">
              <p className="font-semibold flex items-center gap-2 mb-2 xl:mb-3 text-sm xl:text-base">
                <MapPinIcon size={16} className="text-primary" />
                Address
              </p>
              <p className="text-background/80 leading-relaxed pl-6 text-sm xl:text-base">
                {FOOTER_CONFIG.address.line1}
                <br />
                {FOOTER_CONFIG.address.line2}
              </p>
            </div>
          </div>

          <div className="text-right pb-1">
            <div className="flex flex-col items-end gap-2 xl:gap-3">
              <p className="font-semibold flex items-center gap-2 text-sm xl:text-base">
                <MailIcon size={16} className="text-primary" />
                Email
              </p>
              <a
                href={`mailto:${FOOTER_CONFIG.email}`}
                className="text-background/80 hover:text-primary transition-colors text-sm xl:text-base"
              >
                {FOOTER_CONFIG.email}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-5 sm:mt-6 md:mt-8 lg:mt-10 pt-4 md:pt-5 lg:pt-6 border-t border-white/10">
          <p className="text-background/50 text-center text-xs md:text-sm">
            © {new Date().getFullYear()} {FOOTER_CONFIG.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
