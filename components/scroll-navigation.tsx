"use client"

import { useState, useEffect, useCallback } from "react"

const ChevronUpIcon = ({ className, strokeWidth = 2.5 }: { className?: string; strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m18 15-6-6-6 6" />
  </svg>
)

const ChevronDownIcon = ({ className, strokeWidth = 2.5 }: { className?: string; strokeWidth?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
)

export default function ScrollNavigation() {
  const [showNav, setShowNav] = useState(false)
  const [atTop, setAtTop] = useState(true)
  const [atBottom, setAtBottom] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight

      setShowNav(scrollY > 100)
      setAtTop(scrollY < 100)
      setAtBottom(scrollY + windowHeight >= documentHeight - 50)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = useCallback(() => {
    const html = document.documentElement
    const originalBehavior = html.style.scrollBehavior
    html.style.scrollBehavior = "auto"
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    requestAnimationFrame(() => {
      html.style.scrollBehavior = originalBehavior || "smooth"
    })
  }, [])

  const scrollToBottom = useCallback(() => {
    const html = document.documentElement
    const originalBehavior = html.style.scrollBehavior
    html.style.scrollBehavior = "auto"
    const maxScroll =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
      ) - window.innerHeight
    window.scrollTo(0, maxScroll)
    document.documentElement.scrollTop = maxScroll
    document.body.scrollTop = maxScroll
    requestAnimationFrame(() => {
      html.style.scrollBehavior = originalBehavior || "smooth"
    })
  }, [])

  return (
    <>
      <button
        onClick={scrollToTop}
        disabled={atTop}
        className={`fixed right-2 md:right-3 top-1/2 -translate-y-8 z-40 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 ${
          showNav ? "opacity-100" : "opacity-0 pointer-events-none"
        } ${atTop ? "bg-transparent cursor-not-allowed" : "bg-gray-800/60 hover:bg-gray-700/80 backdrop-blur-sm"}`}
        aria-label="Scroll to top"
      >
        <ChevronUpIcon
          className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-colors ${atTop ? "text-gray-500" : "text-gray-200"}`}
          strokeWidth={2.5}
        />
      </button>

      <button
        onClick={scrollToBottom}
        disabled={atBottom}
        className={`fixed right-2 md:right-3 top-1/2 translate-y-2 z-40 w-7 h-7 md:w-8 md:h-8 flex items-center justify-center rounded-full transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-400 ${
          showNav ? "opacity-100" : "opacity-0 pointer-events-none"
        } ${atBottom ? "bg-transparent cursor-not-allowed" : "bg-gray-800/60 hover:bg-gray-700/80 backdrop-blur-sm"}`}
        aria-label="Scroll to bottom"
      >
        <ChevronDownIcon
          className={`w-3.5 h-3.5 md:w-4 md:h-4 transition-colors ${atBottom ? "text-gray-500" : "text-gray-200"}`}
          strokeWidth={2.5}
        />
      </button>
    </>
  )
}
