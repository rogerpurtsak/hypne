import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001D5E] text-white px-6 pt-16 pb-8 rounded-t-[50px]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="text-xl font-semibold">Võta meiega ühendust</h2>

        <div className="flex flex-col items-center gap-2 text-sm">
          <div className="flex items-center gap-2">
            <img src="/mail.png" alt="Mail Icon" className='w-10'/>
            <a href="mailto:hypne@hypne.com" className="hover:underline">
              hypne@hypne.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <img src="/phone.png" alt="Phone Icon" className='w-5'/>
            <a href="tel:+3725028126" className="hover:underline">
              +372 5028 126
            </a>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-center mt-10 text-sm gap-6 text-center sm:text-left">
        {/* Vasak – logo */}
            <div className="font-bold text-2xl lg:text-left sm:text-center">HYPNE</div>

            {/* Kesk – Privaatsus */}
            <div className="sm:col-span-2 lg:col-span-1 lg:text-center">
                Legendid aegade algusest
            </div>

            {/* Parem – nupud */}
            <div className="flex justify-center lg:justify-end gap-2">
                <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-[#0F7DA0] w-1/3 h-10 text-white font-outfit shadow-2xl rounded-3xl inline-block duration-500 transform hover:scale-110 hover:bg-white/30 hover:shadow-lg hover:ring-2 hover:ring-white"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.6)',
                  }}
            >Tagasi üles</button>
            </div>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
