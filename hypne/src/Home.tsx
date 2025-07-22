import React from 'react'
import hydraImage from '/hydra.png'
import { useInView } from 'react-intersection-observer'

function Home() {

    const { ref: spiraalRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <div>
      <div
        className="min-h-screen pt-20 px-4"
        style={{
          background: 'linear-gradient(to bottom, #002286 27%, rgba(32, 229, 176, 0.43) 100%)'
        }}
      >
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

        <div
                ref={spiraalRef}
                className="relative mt-20 overflow-hidden min-h-[300px]"
              >
                {inView && (
                  <div
                    className="w-8 h-8 bg-[#00A5CF] rounded-full shadow-lg z-30 absolute top-1/2 animate-visible-loop"
                  />
                )}


                <img
                  src="/spiraal.png"
                  alt="Spiraal"
                  className="absolute bottom-[-20px] left-[-40px] w-72 md:w-[300px] transition-transform duration-300 hover:scale-110 z-20"
                />
                <img
                  src="/spiraal.png"
                  alt="Spiraal"
                  className="absolute top-[30px] right-[-40px] w-72 md:w-[300px] transition-transform duration-300 hover:scale-110 z-20"
                />
              </div>

      </div>

    </div>
  )
}

export default Home
