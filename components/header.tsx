"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "#footer", label: "Contact" },
    { href: "#companies", label: "About" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header
      id="header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-card/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          <a href="#hero" className="flex items-center gap-2 md:gap-3 group">
            <div className="relative overflow-hidden rounded w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 transition-transform group-hover:scale-105">
              <Image src="/logos/header-logo.jpg" alt="DGrealtor Logo" fill className="object-contain" priority />
            </div>
            <span
              className={`font-serif font-semibold tracking-tight transition-colors text-base md:text-lg lg:text-xl ${
                isScrolled ? "text-foreground" : "text-white"
              }`}
            >
              DGrealtor
            </span>
          </a>

          <nav className="flex items-center gap-4 md:gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-medium tracking-wide transition-colors hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded text-sm md:text-base lg:text-lg ${
                  isScrolled ? "text-muted-foreground" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
