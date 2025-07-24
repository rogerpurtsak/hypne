import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001D5E] text-white px-6 pt-16 pb-8 rounded-t-[50px]">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center gap-6">
        <h2 className="text-xl font-semibold">Võta meiega ühendust</h2>

        <div className="flex flex-col items-center gap-2 text-sm">
          <div className="flex items-center gap-2">
            <span>📧</span>
            <a href="mailto:hypne@hypne.com" className="hover:underline">
              hypne@hypne.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>📞</span>
            <a href="tel:+3725028126" className="hover:underline">
              +372 5028 126
            </a>
          </div>
        </div>

        <div className="w-full flex justify-between items-center flex-wrap mt-10 text-sm gap-4">
          <div className="font-bold text-2xl">HYPNE</div>

          <div className="flex-1 text-center">
            © 2025 <a href="#" className="ml-2 hover:underline">Privaatsuspoliitika</a>
          </div>

          <div className="flex gap-2">
            <button className="bg-[#20E5B0] text-[#001D5E] px-4 py-1 rounded-full shadow hover:scale-105 transition">
              Meist
            </button>
            <button className="bg-[#00A5CF] text-white px-4 py-1 rounded-full shadow hover:scale-105 transition">
              Kontakt
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
