"use client";
import Link from "next/link";
import NavLink from "./nav-links";
import Button from "../UI/button";
import { useState } from "react";
import { FiX } from "react-icons/fi";

const MainHeader: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const linkClassesDesktop =
    "text-bg-100 py-2 px-4 rounded-lg no-underline text-sm md:text-base hover:text-primary-200 transition-colors duration-200";

  const linkClassesMobile =
    "text-primary-600 py-2 px-4 rounded-lg no-underline text-sm md:text-base hover:text-primary-200 transition-colors duration-200";

  return (
    <header className="flex justify-between items-center px-6 py-4 md:px-14 border-b border-[#282a27] relative">
      <Link
        href="/"
        className="flex items-center justify-center no-underline text-primary-100 font-montserrat tracking-wide text-lg md:text-base"
      >
        Bike Bliss
      </Link>

      <nav className="hidden md:flex">
        <ul className="flex gap-6 m-0 p-0">
          {["Features", "Testimonials", "Faqs"].map((text) => (
            <li key={text}>
              <NavLink
                href={`#${text.toLowerCase()}`}
                className={linkClassesDesktop}
              >
                {text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="md:hidden z-50">
        {isMobileMenuOpen ? (
          <FiX size={24} onClick={toggleMobileMenu} />
        ) : (
          <Button label="Get Started" onClick={toggleMobileMenu} />
        )}
      </div>

      <div className="hidden md:block">
        <Button label="Contact" />
      </div>

      {isMobileMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-gradient-to-b from-gray-100 to-gray-200 z-40 p-6 shadow-lg md:hidden transition-transform duration-300 ease-out">
          <ul className="flex flex-col gap-4 m-0 p-0 text-lg">
            {["Features", "Testimonials", "FAQs"].map((text) => (
              <li key={text}>
                <NavLink
                  href={`#${text.toLowerCase()}`}
                  onClick={toggleMobileMenu}
                  className={linkClassesMobile}
                >
                  {text}
                </NavLink>
              </li>
            ))}
          </ul>
          <Button label="Contact" />
        </nav>
      )}
    </header>
  );
};

export default MainHeader;
