import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'

function Navbar() {

    const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent text-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="inline-block duration-500 transform hover:scale-110"
            >
              <img
                className="w-[80px] sm:w-[100px]"
                src="/hypne_nav.png"
                alt="Navbar"
              />
            </button>


        {/* telo menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        <ul className="hidden md:flex space-x-10">
          <li>

                <button
                  onClick={() => {
                    const section = document.getElementById('hydrosys');
                    section?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  className="inline-block px-10 py-3 bg-[#0F7DA0] text-white font-outfit rounded-3xl shadow-2xl hover:bg-white/30 hover:shadow-lg hover:ring-2 hover:ring-white transition duration-500 transform hover:scale-105"
                  style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  Hüdrosüsteemid
                </button>


            </li>
          <li>
            <button
                  onClick={() => {
                    const section = document.getElementById('skeem');
                    section?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  className="inline-block px-10 py-3 bg-[#0F7DA0] text-white font-outfit rounded-3xl shadow-2xl hover:bg-white/30 hover:shadow-lg hover:ring-2 hover:ring-white transition duration-500 transform hover:scale-105"
                  style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  Skeemid
                </button>

            </li>
          <li>

            <button
                  onClick={() => {
                    const section = document.getElementById('hypne');
                    section?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  className="inline-block px-10 py-3 bg-[#0F7DA0] text-white font-outfit rounded-3xl shadow-2xl hover:bg-white/30 hover:shadow-lg hover:ring-2 hover:ring-white transition duration-500 transform hover:scale-105"
                  style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  Hypne
                </button>

            </li>
        </ul>
      </div>

            <div
            className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out px-6 ${
                isOpen ? 'max-h-96 opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
            }`}
            >
            <ul className="space-y-4">
              <li>
                <button
                  onClick={() => {
                    document.getElementById('hydrosys')?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  className="block w-full text-center px-10 py-3 bg-[#0F7DA0] text-white font-outfit rounded-3xl shadow-xl hover:bg-white/30 hover:shadow-lg hover:ring-2 hover:ring-white transition duration-300 transform hover:scale-105"
                  style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  Hüdrosüsteemid
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById('skeem')?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  className="block w-full text-center px-10 py-3 bg-[#0F7DA0] text-white font-outfit rounded-3xl shadow-xl hover:bg-white/30 hover:shadow-lg hover:ring-2 hover:ring-white transition duration-300 transform hover:scale-105"
                  style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  Skeemid
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    document.getElementById('hypne')?.scrollIntoView({ behavior: 'smooth' });
                    setIsOpen(false);
                  }}
                  className="block w-full text-center px-10 py-3 bg-[#0F7DA0] text-white font-outfit rounded-3xl shadow-xl hover:bg-white/30 hover:shadow-lg hover:ring-2 hover:ring-white transition duration-300 transform hover:scale-105"
                  style={{
                    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                    boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.6)',
                  }}
                >
                  Hypne
                </button>
              </li>
            </ul>

            </div>


    </nav>
  )
}

export default Navbar