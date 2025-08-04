import hydraImage from '/hydra.png'
import { useInView } from 'react-intersection-observer'
import FadeInSection from './components/FadeInSection';

function Home() {

    const { ref: spiraalRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  })

  return (
    <div>
      <div
        className="min-h-screen pt-20 px-4 overflow-x-hidden"
      >
        <div className="flex flex-col md:flex-row items-center justify-between text-white pt-20 p-8 w-full">
          {/* vasak tekst */}
          <FadeInSection>
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h2 className="text-3xl md:text-5xl font-bold leading-snug text-center md:text-left">
              <span className="text-white">Pakume</span>{' '}
              <span className="text-[#20E5B0]">erinevaid hüdraulikalahendusi</span>{' '}
              <span className="block">pikaajalise kogemuse baasil.</span>
            </h2>
          </div>
          </FadeInSection>
          

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
                className="relative mt-40 min-h-screen overflow-visible"
              >
                
                {inView && (
                  <div
                    className="w-8 h-8 bg-[#00A5CF] rounded-full shadow-lg z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 animate-visible-loop"
                  />
                )}

                <div className="-mx-4">
                  <img
                    src="/seehoopis.png"
                    alt="Spiraal"
                    className="w-screen h-auto object-cover"
                  />
                </div>

            </div>

            <FadeInSection>
              <h1 className='text-4xl font-bold text-center text-white font-outfit mb-20'>
                Meist
              </h1>
            </FadeInSection>

  {/* 1. mull */}
  <FadeInSection>
  <div
    className="w-[90vw] max-w-[500px] aspect-square rounded-full bg-[#001D5E] text-white flex flex-col items-center justify-center text-center p-4 shadow-xl border-4 border-white mx-auto lg:-translate-x-64 mb-10 overflow-hidden space-y-4"
  >
    <img src="/settings.png" alt="Settings Icon" className="w-8 sm:w-10 md:w-12" />
    <h3 className="text-base sm:text-lg md:text-xl font-bold">Hüdrosüsteemid</h3>
    <p className="text-[11px] sm:text-xs md:text-sm leading-tight sm:leading-normal font-outfit text-center px-4 max-w-[85%]">
      Hüdrosüsteem on tänapäeva masinate juures tihti kasutatav abisüsteem, mis võimaldab suhteliselt väikeste mõõtmete juures panna masina osi tegema suurt jõudu ja kontrollitud liikumist nõudvaid liigutusi. Süsteemi üldine tööpõhimõte on kõrge rõhu all oleva töövedeliku (tavaliselt hüdroõli) suunamine tööorganisse (hüdrosilinder, hüdromootor) ja uuesti kokkukogumine järgmise tsükli alustamiseks. Süsteemi jätkusuutliku töö tagamiseks kasutatakse süsteemis palju erinevaid omavahel ühendatud komponente.
    </p>
  </div>




  </FadeInSection>

  {/* 2. mull */}
   <FadeInSection>
  <div
    className="w-[90vw] max-w-[500px] aspect-square rounded-full bg-[#001D5E] text-white flex flex-col items-center justify-center text-center p-4 shadow-xl border-4 border-white mx-auto lg:translate-x-64 mb-10 overflow-hidden space-y-4"
  >
    <img src="/kang.png" alt="Repair Icon" className="w-10 md:w-20" />
    <h3 className="text-lg sm:text-xl font-bold">Hüdroskeem</h3>
    <p className="text-[13px] sm:text-sm md:text-base leading-snug sm:leading-normal font-outfit text-center px-4 max-w-[85%]">
      Hüdrosüsteemide tööpõhimõtte mõistmiseks on oluline hüdroskeemi olemasolu. Hästi koostatud skeemilt saab välja lugeda süsteemis olevad komponendid, nende omavahelised ühendused, funktsioonid ja põhilised parameetrid. Need teadmised on eelduseks süsteemi säästlikuks kasutamiseks ja hooldamiseks.
    </p>
  </div>



  </FadeInSection>

  {/* 3. mull */}
  <FadeInSection>
  <div
    className="w-[90vw] max-w-[500px] aspect-square rounded-full bg-[#001D5E] text-white flex flex-col items-center justify-center text-center p-4 shadow-xl border-4 border-white mx-auto mb-10 overflow-hidden space-y-4"
  >
    <img src="/home.png" alt="Home Icon" className="w-8 md:w-14" />
    <h3 className="text-lg sm:text-xl font-bold">HYPNE</h3>
    <p className="text-[13px] sm:text-sm md:text-base leading-snug font-outfit text-center px-4 max-w-[85%]">
      Hypne koostab töötava hüdraulika lahenduse arendusjärgus masinale. Hypne kaardistab olemasolevaid hüdrosüsteeme ja koostab hüdroskeemi, mis aitab mõista süsteemi tööpõhimõtet.
    </p>
  </div>


  </FadeInSection>
</div>

            


    </div>
  )
}

export default Home
