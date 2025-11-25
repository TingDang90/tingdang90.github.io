import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.png" alt="Earable Sensing Logo" width={40} height={40} className="h-10 w-auto" />
              <span className="text-lg font-small">Earable Sensing for Health</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#overview" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                Overview
              </Link>
              <Link href="#research" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                Research
              </Link>
              <Link href="#publications" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                Publications
              </Link>
              <Link href="#team" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                Team
              </Link>
              <Link href="#collaborators" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                Collaboration
              </Link>
            </nav>
          </div>
          <Button variant="outline" className="rounded-full" asChild>
            <Link href="mailto:ting.dang@unimelb.edu.au">Contact Us</Link>
          </Button>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white py-24 sm:py-32">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50" />
          <div className="container relative flex flex-col items-center">
            <div className="w-full max-w-5xl">
              <Image
                src="/final-sally.jpeg"
                alt="Earable sensing device"
                width={1200}
                height={600}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section id="overview" className="py-24 bg-white">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                  Revolutionizing Health Monitoring
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  This project aims to explore the potential of earable devices for continuous monitoring of vital signs
                  and cognitive functions. By leveraging multimodal sensing technologies integrated into earable
                  devices, we seek to develop non-invasive methods for tracking various physiological parameters and
                  cognitive states.
                </p>
                <p className="text-lg text-gray-600">
                  The research focuses on overcoming challenges related to signal quality, power efficiency, and user
                  comfort, while ensuring accurate and reliable health and cognitive monitoring in everyday settings.
                </p>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <Image src="/final2.png" alt="Earable sensing technology" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Research Focus Section */}
        <section id="research" className="py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Research Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center mb-6"></div>
                <h3 className="text-xl font-semibold mb-4">Device Sensing</h3>
                <p className="text-gray-600">
                  Developing innovative sensing technologies for earable devices to capture physiological and cognitive
                  signals with high fidelity.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center mb-6"></div>
                <h3 className="text-xl font-semibold mb-4">AI Modeling</h3>
                <p className="text-gray-600">
                  Creating advanced AI models to interpret complex multimodal data from earable sensors for health and
                  cognitive insights.
                </p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <div className="h-12 w-12 bg-red-500 rounded-full flex items-center justify-center mb-6"></div>
                <h3 className="text-xl font-semibold mb-4">Health Applications</h3>
                <p className="text-gray-600">
                  Developing algorithms and applications to transform raw sensor data into actionable health and
                  cognitive insights.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Publications Section */}
        <section id="publications" className="py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Recent Publications</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <Link
                  href="https://ieeexplore.ieee.org/abstract/document/10887838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-xl font-semibold mb-2 hover:text-red-500 transition-colors">
                    Cognitive Load Monitoring via Earable Acoustic Sensing
                  </h3>
                  <p className="text-gray-600 mb-4">
                    J. Quan, K. Al-Naimi, X. Wei, Y. Liu, F. Kawsar, A. Montanari, T. Dang
                  </p>
                  <p className="text-sm text-gray-500">ICASSP 2025</p>
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <Link
                  href="https://ieeexplore.ieee.org/document/10446436"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-xl font-semibold mb-2 hover:text-red-500 transition-colors">
                    Towards Enabling DPOAE Estimation on Single-Speaker Earbuds
                  </h3>
                  <p className="text-gray-600 mb-4">I. Shahid, K. Al-Naimi, T. Dang, Y. Liu, F. Kawsar, A. Montanari</p>
                  <p className="text-sm text-gray-500">ICASSP 2024</p>
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <Link
                  href="https://dl.acm.org/doi/10.1145/3638550.3641136"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-xl font-semibold mb-2 hover:text-red-500 transition-colors">
                    OptiBreathe: An Earable-based PPG System for Continuous Respiration Rate, Breathing Phase, and Tidal
                    Volume Monitoring
                  </h3>
                  <p className="text-gray-600 mb-4">
                    J. Romero, A. Ferlini, D. Spathis, T. Dang, K. Farrahi, F. Kawsar, A. Montanari
                  </p>
                  <p className="text-sm text-gray-500">HotMobile 2024</p>
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <Link
                  href="https://dl.acm.org/doi/10.1145/3631409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-xl font-semibold mb-2 hover:text-red-500 transition-colors">
                    ClearSpeech: Improving Voice Quality of Earbuds Using Both In-Ear and Out-Ear Microphones
                  </h3>
                  <p className="text-gray-600 mb-4">D. Ma, T. Dang, M. Ding, R. Balan</p>
                  <p className="text-sm text-gray-500">UbiComp, 2024</p>
                </Link>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                <Link
                  href="https://ieeexplore.ieee.org/abstract/document/10099317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h3 className="text-xl font-semibold mb-2 hover:text-red-500 transition-colors">
                    hEARt: Motion-resilient Heart Rate Monitoring with In-ear Microphones
                  </h3>
                  <p className="text-gray-600 mb-4">K. Butkow, T. Dang, A. Ferlini, D. Ma, and C. Mascolo</p>
                  <p className="text-sm text-gray-500">PerCom 2023</p>
                </Link>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Link href="/publications">
                <Button variant="outline" className="rounded-full px-8">
                  View all publications
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 bg-gray-50">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">Our Team</h2>
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <Link href="https://tingdang90.github.io" target="_blank" rel="noopener noreferrer">
                    <h3 className="text-xl font-semibold hover:text-red-500 transition-colors">Ting Dang</h3>
                  </Link>
                  <p className="text-gray-600 mt-1">Project Lead</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold">Siyi Wang</h3>
                  <p className="text-gray-600 mt-1">PhD Candidate</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold">Jiaheng Dong</h3>
                  <p className="text-gray-600 mt-1">PhD Candidate</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold">Yang Xiao</h3>
                  <p className="text-gray-600 mt-1">PhD Candidate</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Collaborators Section */}
        <section id="collaborators" className="py-24 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-12 text-center">
              International Collaboration
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="flex flex-col items-center">
                <div className="h-20 w-40 relative mb-4">
                  <Image src="/Nokia_Bell_Labs_2023.svg.png" alt="Nokia Bell Labs" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-28 w-56 relative mb-4">
                  <Image
                    src="/university-of-cambridge.png"
                    alt="University of Cambridge"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-40 w-80 relative mb-4">
                  <Image src="/collab-emotiv.png" alt="Emotiv" fill className="object-contain" />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-20 w-40 relative mb-4">
                  <Image
                    src="/University_of_Southampton_Logo.png"
                    alt="University of Southampton"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-40 w-80 relative mb-4">
                  <Image
                    src="/singapore-management-university-smu-logo-png_seeklogo-353772.png"
                    alt="Singapore Management University"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-20 w-40 relative mb-4">
                  <Image
                    src="/University-of-Maryland-Logo.png"
                    alt="University of Maryland"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <div className="flex flex-col items-center">
                <div className="h-20 w-40 relative mb-4">
                  <Image src="/ETH_Zürich_Logo_black.svg.png" alt="ETH Zurich" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-red-600 to-red-700 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Join the Future of Health & Cognitive Monitoring
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto mb-10">
              Interested in collaborating or learning more about our research on vital signs and cognitive functions?
              Get in touch with our team.
            </p>
            <Button className="rounded-full px-8 bg-white text-red-600 hover:bg-gray-100" asChild>
              <Link href="mailto:ting.dang@unimelb.edu.au">Contact Us</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
