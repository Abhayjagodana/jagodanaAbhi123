import { Link, NavLink } from "react-router";
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-5 z-50 w-full">
      <Helmet>
                <meta charSet="utf-8" />
                <title>Header-jagodanaabhi-123</title>
                
            </Helmet>
      <div
        className={`mx-auto flex max-w-[1200px] items-center justify-between rounded-xl px-4 py-4 md:px-8 transition-all duration-300 ${
          scrolled ? "border border-black bg-white shadow-lg max-w-[700px] " : ""
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://www.jagodana.com/logo.jpg"
            alt="company logo"
            width="36"
            height="36"
            className="object-contain max-h-[36px]"
          />
          <p className="text-xl font-bold capitalize">Jagodana Abhi LLC</p>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden gap-5 lg:flex">
          <NavLink to="/Product" className="font-semibold">
            Products
          </NavLink>
          <NavLink
            to="/contact"
            className="rounded-md bg-black bg-gradient-to-l from-black via-white/20 to-black px-6 py-2 text-sm font-semibold text-white shadow-lg"
          >
            Contact Us
          </NavLink>
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
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="lg:hidden mx-auto mt-2 w-[95%] max-w-[1200px] rounded-xl border border-black bg-white p-4 shadow-md">
          <div className="flex flex-col items-center gap-4">
            <NavLink to="/Product" className="font-semibold text-lg">
              Products
            </NavLink>
            <NavLink
              to="/contact"
              className="w-full rounded-md bg-black bg-gradient-to-l from-black via-white/20 to-black px-6 py-2 text-center text-sm font-semibold text-white shadow-lg"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
