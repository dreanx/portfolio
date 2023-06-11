import { useState } from "react";
import Link from "next/link";

export default function Nav() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-900">
      <div className="container mx-auto py-4 text-center">
        <div className="flex items-center justify-around">
          {/* Logo only in large screens */}
          <div className="hidden lg:block">
            <Link href="/">
              <span className="font-bangers text-white text-2xl">Logo</span>
            </Link>
          </div>
          <div className="md:hidden">
            {/* Hamburger Icon only in small screens*/}
            <button
              className="text-white focus:outline-none"
              onClick={handleMobileMenuToggle}
            >
              <img
                src="/hamburger.svg"
                alt="Hamburger Icon"
                className="w-30 h-20"
              />
            </button>
          </div>
          <ul
            className={`md:flex items-center space-x-4 md:space-x-16 ${
              isMobileMenuOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <Link href="/">
                <span className="text-white hover:text-gray-300 text-lg">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/WebProjects">
                <span className="text-white hover:text-gray-300 text-lg">
                  Web Projects
                </span>
              </Link>
            </li>
            <li>
              <Link href="/GameProjects">
                <span className="text-white hover:text-gray-300 text-lg">
                  Game Development
                </span>
              </Link>
            </li>
            <li>
              <Link href="/About">
                <span className="text-white hover:text-gray-300 text-lg">
                  About
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
