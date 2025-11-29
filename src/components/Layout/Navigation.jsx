import { useState, useEffect } from "react";

function Navigation() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveLink(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Strona Główna", icon: "bi-house" },
    { id: "about", label: "O Mnie", icon: "bi-person" },
    { id: "features", label: "Usługi", icon: "bi-list-check" },
    { id: "testimonial", label: "Opinie", icon: "bi-star" },
    { id: "pricing", label: "Cennik", icon: "bi-cash" },
    { id: "contact", label: "Kontakt", icon: "bi-telephone" },
  ];

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg fixed-top ${
          scrolled ? "nav-scrolled" : "nav-transparent"
        }`}
      >
        <div className="container">
          {/* Brand */}
          <div className="navbar-brand">
            <div
              className="brand-container"
              onClick={() => scrollToSection("home")}
            >
              <div className="brand-icon">
                <i className="bi bi-heart-pulse"></i>
              </div>
              <div className="brand-text">
                <span className="brand-name">Provitale</span>
                <span className="brand-subtitle">Fizjoterapia</span>
              </div>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`navbar-toggler ${mobileMenuOpen ? "menu-open" : ""}`}
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navigation Menu - CENTERED */}
          <div
            className={`collapse navbar-collapse ${
              mobileMenuOpen ? "show" : ""
            }`}
            id="navbarNav"
          >
            <ul className="navbar-nav mx-auto">
              {" "}
              {/* mx-auto for centering */}
              {navItems.map((item) => (
                <li key={item.id} className="nav-item">
                  <a
                    className={`nav-link ${
                      activeLink === item.id ? "active" : ""
                    }`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <i className={`bi ${item.icon} nav-icon`}></i>
                    <span className="nav-label">{item.label}</span>
                    <div className="nav-indicator"></div>
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="nav-cta">
              <a href="tel:+48883940074" className="cta-button">
                <i className="bi bi-telephone"></i>
                <span>Zadzwoń</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navigation;
