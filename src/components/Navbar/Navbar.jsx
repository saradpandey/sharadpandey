import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import "./Navbar.css";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 120;

      navLinks.forEach((link) => {
        const section = document.querySelector(link.href);

        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  /* =================================
     MOBILE NAVIGATION FIX
  ================================= */

  const handleMobileClick = (href) => {
    const section = document.querySelector(href);

    if (!section) return;

    // Close mobile menu
    setMobileMenuOpen(false);

    // Wait for menu to close before scrolling
    setTimeout(() => {
      const navbar = document.querySelector(".navbar");

      const navbarHeight = navbar
        ? navbar.offsetHeight
        : 65;

      const sectionPosition =
        section.getBoundingClientRect().top +
        window.pageYOffset;

      window.scrollTo({
        top: sectionPosition - navbarHeight,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <motion.nav
      className={`navbar ${
        scrolled ? "scrolled" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
      }}
    >

      <div className="navbar-container">

        {/* LOGO */}

        <a
          href="#home"
          className="logo"
        >
          S.P
        </a>


        {/* DESKTOP NAV LINKS */}

        <div className="nav-links">

          {navLinks.map((link, index) => (

            <motion.a
              key={link.name}
              href={link.href}

              className={`nav-link ${
                activeSection === link.href.slice(1)
                  ? "active"
                  : ""
              }`}

              initial={{
                opacity: 0,
                y: -20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: index * 0.05,
              }}
            >
              {link.name}
            </motion.a>

          ))}

        </div>


        {/* NAV ACTIONS */}

        <div className="nav-actions">

          <a
            href="#contact"
            className="btn-hire"
          >
            Hire Me
          </a>


          {/* MOBILE TOGGLE */}

          <button
            className="mobile-toggle"

            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }

            aria-label="Toggle navigation"
          >

            {mobileMenuOpen ? (
              <HiX />
            ) : (
              <HiMenuAlt3 />
            )}

          </button>

        </div>

      </div>


      {/* MOBILE MENU */}

      <AnimatePresence>

        {mobileMenuOpen && (

          <motion.div
            className="mobile-menu"

            initial={{
              opacity: 0,
              height: 0,
            }}

            animate={{
              opacity: 1,
              height: "auto",
            }}

            exit={{
              opacity: 0,
              height: 0,
            }}
          >

            {navLinks.map((link) => (

              <a
                key={link.name}

                href={link.href}

                onClick={(e) => {
                  e.preventDefault();
                  handleMobileClick(
                    link.href
                  );
                }}

                className={`mobile-nav-link ${
                  activeSection ===
                  link.href.slice(1)
                    ? "active"
                    : ""
                }`}
              >
                {link.name}
              </a>

            ))}

          </motion.div>

        )}

      </AnimatePresence>

    </motion.nav>
  );
}