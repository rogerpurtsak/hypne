import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001D5E] text-white px-6 pt-16 pb-8 rounded-t-[50px]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="text-xl font-semibold">Võta meiega ühendust</h2>

        <div className="flex flex-col items-center gap-2 text-sm">
          <div className="flex items-center gap-2">
            <img src="/mail.png" alt="Mail Icon" className="w-6" />
            <a href="mailto:hypne@hypne.com" className="hover:underline">hypne@hypne.com</a>
          </div>
          <div className="flex items-center gap-2">
            <img src="/phone.png" alt="Phone Icon" className="w-5" />
            <a href="tel:+3725028126" className="hover:underline">+372 5028 126</a>
          </div>
        </div>

        <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 mt-10 text-sm text-center lg:text-left">
          {/* Vasak – logo */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
            <div className="font-bold text-2xl">HYPNE</div>
          </div>

          {/* Kesk – tekst */}
          <div className="w-full lg:w-1/3 flex justify-center">
            <div>Legendid aegade algusest</div>
          </div>

          {/* Parem – nupp */}
          <div className="w-full lg:w-1/3 flex justify-center lg:justify-end">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="bg-[#0F7DA0] px-6 h-10 text-white font-outfit shadow-2xl rounded-3xl duration-500 transform hover:scale-110 hover:bg-white/30 hover:shadow-lg hover:ring-2 hover:ring-white"
              style={{
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
                boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.6)',
              }}
            >
              Tagasi üles
            </button>
          </div>
        </div>



      </div>
    </footer>
  );
};

export default Footer;
