import React, { useState, useEffect, useRef } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header className="relative z-50">
      <div className="flex justify-between items-center p-6 ">
        <div className="flex items-center space-x-4">
          <a href="/" className="block">
            <img
              src="/logo.png"
              alt="AVR Logo"
              className="h-16 md:h-20 cursor-pointer transition-transform duration-200 hover:scale-105"
            />
          </a>
        </div>

        {/* Burger Button (hidden when open) */}
        {!isOpen && (
          <button
            className="md:hidden text-white focus:outline-none z-50"
            onClick={() => setIsOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        )}

        <nav
          ref={menuRef}
          className={`fixed top-0 right-0 h-full w-1/3 bg-black bg-opacity-95 flex flex-col items-start p-8 space-y-6 text-white text-lg font-headline transform transition-transform duration-300 ease-in-out z-40 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } md:static md:flex md:flex-row md:items-center md:space-y-0 md:space-x-4 md:w-auto md:translate-x-0 md:bg-transparent md:h-12 md:p-0`}
        >
          {/* X Button */}
          <button
            className="absolute top-6 right-6 text-white focus:outline-none md:hidden"
            onClick={() => setIsOpen(false)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <a href="/" className="hover:text-avrblue" onClick={() => setIsOpen(false)}>Home</a>
          <a href="/avr" className="hover:text-avrblue" onClick={() => setIsOpen(false)}>AVR Gaming</a>
          <a href="/sponsoren" className="hover:text-avrblue" onClick={() => setIsOpen(false)}>Sponsoren</a>
          <a href="/teams" className="hover:text-avrblue" onClick={() => setIsOpen(false)}>Teams</a>
          <a href="/shop" className="hover:text-avrblue" onClick={() => setIsOpen(false)}>Shop</a>
          <a href="/spenden" className="hover:text-avrblue" onClick={() => setIsOpen(false)}>Spenden</a>
          <a href="/kontakt" className="hover:text-avrblue" onClick={() => setIsOpen(false)}>Kontakt</a>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </header>
  );
}
