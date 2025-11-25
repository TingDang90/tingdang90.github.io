"use client"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t py-12 bg-white">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Image src="/logo.png" alt="Earable Sensing Logo" width={40} height={40} className="h-8 w-auto" />
          </div>
          <nav className="flex gap-6">
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Privacy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Terms
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-gray-900">
              Contact
            </Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Earable Sensing Research. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
