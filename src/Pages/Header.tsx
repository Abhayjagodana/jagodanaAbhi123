import { Link, NavLink } from "react-router";
import { useState, useEffect } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-14 z-[100] w-full">
      <div
        className={`mx-auto flex max-w-[1200px] items-center justify-between rounded-10 px-4 py-4 md:px-8  ${
          scrolled ? "border border-black bg-white shadow-md w-[900px] rounded-lg" : ""
        }`}
      >
        {/* Logo */}
        <a className="flex h-[36px] items-center gap-2" href="/">
          <img
            src="https://www.jagodana.com/logo.jpg"
            width="36"
            height="36"
            alt="company logo"
            title="company logo"
            className="max-h-[36px] object-contain"
          />
          <p className="text-xl font-bold capitalize">Jagodana Abhi LLC</p>
        </a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-5 lg:flex">
          <Link to="/Product" className="font-semibold">
            Products
          </Link>
          <Link
            className="flex items-center gap-2 rounded-md bg-black bg-gradient-to-l from-black via-white/20 to-black px-6 py-3 text-sm font-semibold text-white shadow-lg"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={toggleMenu}>
            <img
              src="https://www.jagodana.com/icon/menu.svg"
              alt="menu"
              className="h-6 w-6"
            />
          </button>

          {isOpen && (
            <div className="absolute right-[1px] top-[64px] z-50 mx-2 w-[calc(100%-20px)] rounded-[10px] border border-black bg-white p-3">
              <div className="flex flex-col items-center justify-center gap-3">
                <NavLink
                  className="py-2 text-lg font-bold text-primary"
                  to="/Product"
                >
                  Products
                </NavLink>
                <NavLink
                  className="flex max-h-6 items-center justify-center rounded-10 bg-black bg-gradient-to-l from-black via-white/20 to-black px-6 py-4 text-sm font-semibold text-white shadow-lg"
                  to="/contact"
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
