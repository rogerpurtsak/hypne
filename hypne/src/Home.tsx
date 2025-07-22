import React from 'react'
import hydraImage from '/hydra.png'

function Home() {
  return (
    <div>
      <div
        className="min-h-screen pt-20 px-4"
        style={{
          background: 'linear-gradient(to bottom, #002286 27%, rgba(32, 229, 176, 0.43) 100%)'
        }}
      >
        {/* Ülemine osa – tekst ja pilt kõrvuti */}
        <div className="flex flex-col md:flex-row items-center justify-between text-white pt-20 p-8 w-full">
          {/* vasak tekst */}
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold leading-snug text-center md:text-left">
              <span className="text-white">Me pakume</span>{' '}
              <span className="text-[#20E5B0]">erinevaid hüdraulikalahendusi</span>{' '}
              <span className="block">pikaajalise kogemuse baasil.</span>
            </h2>
          </div>

          {/* parempoolne pilt */}
          <div className="relative md:w-1/2">
            {/* sinised kihid */}
            <div
              className="absolute top-6 left-3 w-full h-full rounded-xl bg-[#0076C5] z-0 scale-[85%] md:scale-100 md:top-10 md:left-7"
              style={{ transform: "rotate(5deg)" }}
            ></div>

            <div
              className="absolute top-4 left-2 w-full h-full rounded-xl bg-[#00A5CF] z-0 scale-[80%] md:scale-100 md:top-8 md:left-6"
              style={{ transform: "rotate(1deg)" }}
            ></div>

            <div className="relative z-10 bg-white rounded-xl p-4 shadow-lg">
              <img
                src={hydraImage}
                alt="Hüdraulikajoonis"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

        <div className="relative mt-20 overflow-hidden">
        {/* Spiraal vasak all – nihutatud ekraanist vasakule ja alla */}
        <img
          src="/spiraal.png"
          alt="Spiraal"
          className="absolute bottom-[-20px] left-[-40px] w-32 md:w-1/3"
        />

        {/* Spiraal parem üleval – nihutatud ekraanist paremale ja üles */}
        <img
          src="/spiraal.png"
          alt="Spiraal"
          className="absolute top-[30px] right-[-40px] w-32 md:w-1/3"
        />

        {/* Sisu sees */}
        <div className="relative z-10 py-20">
          <h2 className="text-4xl font-bold text-white text-center">
            Midagi lahedat siia!
          </h2>
        </div>
      </div>

      </div>

    </div>
  )
}

export default Home
