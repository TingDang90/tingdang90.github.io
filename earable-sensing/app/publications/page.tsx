import Link from "next/link"
import { ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Publications() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="container py-12">
        <h1 className="text-4xl font-bold mb-12">Publications</h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold mb-6">2024</h2>
            <div className="space-y-6">
              <div id="publication0" className="bg-gray-50 p-6 rounded-xl">
                <Link
                  href="https://ieeexplore.ieee.org/abstract/document/10887838"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm mb-2 inline-block"
                >
                  https://ieeexplore.ieee.org/abstract/document/10887838
                </Link>
                <h3 className="text-xl font-semibold mb-2">Cognitive Load Monitoring via Earable Acoustic Sensing</h3>
                <p className="text-gray-600 mb-4">
                  J. Quan, K. Al-Naimi, X. Wei, Y. Liu, F. Kawsar, A. Montanari, T. Dang
                </p>
                <p className="text-gray-600 mb-4">
                  This paper opens a new pathway for using earable acoustic sensing in monitoring cognitive function and
                  holds great potential for future cognitive augmentation.
                </p>
                <div className="flex gap-4">
                  <Button size="sm" variant="outline" asChild>
                    <Link
                      href="https://ieeexplore.ieee.org/document/10446436"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PDF
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline">
                    DOI
                  </Button>
                  <Button size="sm" variant="outline">
                    BibTeX
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-4">ICASSP 2024</p>
              </div>

              <div id="publication1" className="bg-gray-50 p-6 rounded-xl">
                <Link
                  href="https://ieeexplore.ieee.org/document/10446436"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm mb-2 inline-block"
                >
                  https://ieeexplore.ieee.org/document/10446436
                </Link>
                <h3 className="text-xl font-semibold mb-2">
                  Towards Enabling DPOAE Estimation on Single-Speaker Earbuds
                </h3>
                <p className="text-gray-600 mb-4">I. Shahid, K. Al-Naimi, T. Dang, Y. Liu, F. Kawsar, A. Montanari</p>
                <p className="text-gray-600 mb-4">
                  This paper explores the feasibility of measuring Distortion Product Otoacoustic Emissions (DPOAE)
                  using single-speaker earbuds, which could enable non-invasive monitoring of inner ear health and
                  potentially detect early signs of hearing loss.
                </p>
                <div className="flex gap-4">
                  <Button size="sm" variant="outline" asChild>
                    <Link
                      href="https://ieeexplore.ieee.org/document/10446436"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PDF
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline">
                    DOI
                  </Button>
                  <Button size="sm" variant="outline">
                    BibTeX
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-4">ICASSP 2024</p>
              </div>

              <div id="publication2" className="bg-gray-50 p-6 rounded-xl">
                <Link
                  href="https://dl.acm.org/doi/10.1145/3638550.3641136"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm mb-2 inline-block"
                >
                  https://dl.acm.org/doi/10.1145/3638550.3641136
                </Link>
                <h3 className="text-xl font-semibold mb-2">
                  OptiBreathe: An Earable-based PPG System for Continuous Respiration Rate, Breathing Phase, and Tidal
                  Volume Monitoring
                </h3>
                <p className="text-gray-600 mb-4">
                  J. Romero, A. Ferlini, D. Spathis, T. Dang, K. Farrahi, F. Kawsar, A. Montanari
                </p>
                <p className="text-gray-600 mb-4">
                  This research presents OptiBreathe, a novel system that uses photoplethysmography (PPG) sensors in
                  earable devices to continuously monitor respiration rate, breathing phases, and tidal volume,
                  providing comprehensive respiratory insights in everyday settings.
                </p>
                <div className="flex gap-4">
                  <Button size="sm" variant="outline" asChild>
                    <Link
                      href="https://dl.acm.org/doi/10.1145/3638550.3641136"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PDF
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline">
                    DOI
                  </Button>
                  <Button size="sm" variant="outline">
                    BibTeX
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-4">HotMobile 2024</p>
              </div>

              <div id="publication3" className="bg-gray-50 p-6 rounded-xl">
                <Link
                  href="https://dl.acm.org/doi/10.1145/3631409"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm mb-2 inline-block"
                >
                  https://dl.acm.org/doi/10.1145/3631409
                </Link>
                <h3 className="text-xl font-semibold mb-2">
                  ClearSpeech: Improving Voice Quality of Earbuds Using Both In-Ear and Out-Ear Microphones
                </h3>
                <p className="text-gray-600 mb-4">D. Ma, T. Dang, M. Ding, R. Balan</p>
                <p className="text-gray-600 mb-4">
                  ClearSpeech introduces a novel approach to enhance voice quality in earbuds by combining signals from
                  both in-ear and out-ear microphones, significantly improving speech clarity in noisy environments.
                </p>
                <div className="flex gap-4">
                  <Button size="sm" variant="outline" asChild>
                    <Link href="https://dl.acm.org/doi/10.1145/3631409" target="_blank" rel="noopener noreferrer">
                      PDF
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline">
                    DOI
                  </Button>
                  <Button size="sm" variant="outline">
                    BibTeX
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-4">UbiComp, 2024</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-6">2023</h2>
            <div className="space-y-6">
              <div id="publication4" className="bg-gray-50 p-6 rounded-xl">
                <Link
                  href="https://ieeexplore.ieee.org/abstract/document/10099317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-sm mb-2 inline-block"
                >
                  https://ieeexplore.ieee.org/abstract/document/10099317
                </Link>
                <h3 className="text-xl font-semibold mb-2">
                  hEARt: Motion-resilient Heart Rate Monitoring with In-ear Microphones
                </h3>
                <p className="text-gray-600 mb-4">K. Butkow, T. Dang, A. Ferlini, D. Ma, and C. Mascolo</p>
                <p className="text-gray-600 mb-4">
                  hEARt presents a motion-resilient approach to heart rate monitoring using in-ear microphones,
                  addressing one of the major challenges in earable sensing by maintaining accuracy during physical
                  activities and movement.
                </p>
                <div className="flex gap-4">
                  <Button size="sm" variant="outline" asChild>
                    <Link
                      href="https://ieeexplore.ieee.org/abstract/document/10099317"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      PDF
                    </Link>
                  </Button>
                  <Button size="sm" variant="outline">
                    DOI
                  </Button>
                  <Button size="sm" variant="outline">
                    BibTeX
                  </Button>
                </div>
                <p className="text-sm text-gray-500 mt-4">PerCom 2023</p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
