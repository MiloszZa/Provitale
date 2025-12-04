import { useState, useEffect, useRef } from "react";

function Features() {
  const [counters, setCounters] = useState({
    patients: 0,
    experience: 0,
    effectiveness: 0,
    support: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const sectionRef = useRef(null);

  // Proste frazy zmieniające się cyklicznie
  const appointmentPhrases = [
    "Pierwszy krok do zdrowia",
    "Profesjonalna pomoc",
    "Indywidualne podejście",
    "Szybka ulga w bólu",
  ];

  const problems = [
    {
      icon: "😣",
      title: "Przewlekły ból pleców?",
      description: "Ciągły dyskomfort utrudniający codzienne aktywności?",
    },
    {
      icon: "🏃",
      title: "Ograniczenia ruchowe?",
      description: "Nie możesz swobodnie się schylić, biegać czy ćwiczyć?",
    },
    {
      icon: "😴",
      title: "Problemy ze snem?",
      description: "Ból uniemożliwia Ci spokojny sen i regenerację?",
    },
    {
      icon: "💊",
      title: "Uzależnienie od leków?",
      description: "Bierzesz coraz więcej tabletek przeciwbólowych?",
    },
  ];

  const solutions = [
    {
      icon: "🎯",
      title: "Precyzyjna diagnoza",
      description: "Znajdujemy źródło bólu, nie tylko leczymy objawy.",
    },
    {
      icon: "💪",
      title: "Indywidualny plan",
      description: "Terapia dostosowana do Twojego stylu życia i celów.",
    },
    {
      icon: "📚",
      title: "Edukacja pacjenta",
      description: "Uczymy, jak samodzielnie zapobiegać nawrotom dolegliwości.",
    },
    {
      icon: "✨",
      title: "Nowoczesne metody",
      description: "Łączymy sprawdzone techniki z najnowszymi badaniami.",
    },
  ];

  const targetValues = {
    patients: 2000,
    experience: 12,
    effectiveness: 95,
    support: 50,
  };

  // Animacja zmiany tekstu co 3 sekundy
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prev) => (prev + 1) % appointmentPhrases.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const animateCounter = (start, end, duration, setter) => {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const value = Math.floor(start + easeOutQuart * (end - start));

      setter(value);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          animateCounter(0, targetValues.patients, 2000, (value) => {
            setCounters((prev) => ({ ...prev, patients: value }));
          });

          animateCounter(0, targetValues.experience, 1500, (value) => {
            setCounters((prev) => ({ ...prev, experience: value }));
          });

          animateCounter(0, targetValues.effectiveness, 1800, (value) => {
            setCounters((prev) => ({ ...prev, effectiveness: value }));
          });

          animateCounter(0, targetValues.support, 1200, (value) => {
            setCounters((prev) => ({ ...prev, support: value }));
          });
        }
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section
      className="py-5 py-lg-6 bg-gradient-light"
      id="features"
      ref={sectionRef}
    >
      <div className="container px-4 px-lg-5 my-5">
        <div className="text-center mb-5">
          <div className="feature-badge mb-3">POMOC W BÓLU</div>
          <h2 className="display-5 fw-bold mb-3">
            Masz dość bólu, który rządzi Twoim życiem?
            <span className="text-gradient d-block mt-2">
              Pomożemy Ci odzyskać kontrolę!
            </span>
          </h2>
          <p className="lead text-dark opacity-75">
            Nie musisz żyć z bólu. Nasi specjaliści pomogli już tysiącom
            pacjentów wrócić do pełnej sprawności.
          </p>
        </div>

        {/* Problems Section */}
        <div className="row mb-5">
          <div className="col-lg-6">
            <h3 className="fw-bold mb-4">
              <span className="text-primary">
                Czy zmagasz się z którymś z tych problemów?
              </span>
            </h3>
            <div className="row g-3">
              {problems.map((problem, index) => (
                <div key={index} className="col-md-6">
                  <div className="problem-card p-3 rounded-3 bg-white shadow-sm hover-lift">
                    <div className="d-flex align-items-start">
                      <div className="problem-icon display-6 me-3">
                        {problem.icon}
                      </div>
                      <div>
                        <h5 className="fw-bold text-dark mb-1">
                          {problem.title}
                        </h5>
                        <p className="text-dark opacity-75 mb-0 small">
                          {problem.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Section */}
          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="solution-box bg-white rounded-4 shadow-lg p-4 p-md-5 h-100">
              <h3 className="fw-bold mb-4 text-center">
                <span className="text-gradient">Jak możemy Ci pomóc?</span>
              </h3>
              <div className="row g-3">
                {solutions.map((solution, index) => (
                  <div key={index} className="col-md-6">
                    <div className="solution-card p-3 rounded-3 bg-light text-center h-100 hover-scale">
                      <div className="solution-icon display-5 mb-2">
                        {solution.icon}
                      </div>
                      <h5 className="fw-bold text-dark mb-1">
                        {solution.title}
                      </h5>
                      <p className="text-dark opacity-75 mb-0 small">
                        {solution.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animated Stats */}
        <div className="row text-center mt-5 pt-5">
          <div className="col-md-3 col-6 mb-4">
            <div className="stat-card p-3 hover-stat">
              <div className="display-5 fw-bold text-primary mb-2">
                {counters.patients}+
              </div>
              <div className="text-dark fw-medium">Pacjentów</div>
              <div className="text-dark opacity-75 x-small">
                odzyskało radość ruchu
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="stat-card p-3 hover-stat">
              <div className="display-5 fw-bold text-success mb-2">
                {counters.experience}+
              </div>
              <div className="text-dark fw-medium">Lat doświadczenia</div>
              <div className="text-dark opacity-75 x-small">w terapii bólu</div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="stat-card p-3 hover-stat">
              <div className="display-5 fw-bold text-warning mb-2">
                {counters.effectiveness}%
              </div>
              <div className="text-dark fw-medium">Skuteczności</div>
              <div className="text-dark opacity-75 x-small">
                w redukcji bólu
              </div>
            </div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="stat-card p-3 hover-stat">
              <div className="display-5 fw-bold text-info mb-2">
                {counters.support}%
              </div>
              <div className="text-dark fw-medium">Pacjentów</div>
              <div className="text-dark opacity-75 x-small">
                czuje ulgę już po 1 wizycie
              </div>
            </div>
          </div>
        </div>

        {/* Sekcja Umów Wizytę - UPROSZCZONA */}
        <div className="text-center mt-5 pt-5">
          <div
            className="appointment-card bg-gradient-primary rounded-4 p-4 p-md-5 shadow-lg mx-auto"
            style={{ maxWidth: "800px" }}
          >
            <div className="mb-4">
              <h2 className="display-5 fw-bold text-white mb-3">
                Umów wizytę -{" "}
                <span className="changing-text">
                  {appointmentPhrases[currentPhrase]}
                </span>
              </h2>
              <p className="text-white text-opacity-90 fs-5 mb-4">
                Zacznij żyć bez bólu już dziś. Skontaktuj się z nami, aby umówić
                konsultację z naszym specjalistą.
              </p>
            </div>

            {/* Proste ikonki */}
            <div className="row justify-content-center mb-4">
              <div className="col-auto">
                <div
                  className="icon-circle bg-white text-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="bi bi-calendar-check fs-4"></i>
                </div>
                <div className="mt-2 text-white small">Online 24/7</div>
              </div>
              <div className="col-auto">
                <div
                  className="icon-circle bg-white text-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="bi bi-clock fs-4"></i>
                </div>
                <div className="mt-2 text-white small">Szybki termin</div>
              </div>
              <div className="col-auto">
                <div
                  className="icon-circle bg-white text-primary rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "60px", height: "60px" }}
                >
                  <i className="bi bi-heart fs-4"></i>
                </div>
                <div className="mt-2 text-white small">Troskliwa opieka</div>
              </div>
            </div>

            {/* Przyciski */}
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
              <a
                href="#contact"
                className="btn btn-light btn-lg px-5 py-3 fw-bold d-flex align-items-center justify-content-center"
              >
                <i className="bi bi-calendar-check me-2"></i>
                <span>UMÓW WIZYTĘ</span>
              </a>

              <a
                href="tel:+48123456789"
                className="btn btn-outline-light btn-lg px-5 py-3 fw-bold d-flex align-items-center justify-content-center"
              >
                <i className="bi bi-telephone me-2"></i>
                <span>ZADZWOŃ TERAZ</span>
              </a>
            </div>

            {/* Dodatkowe info */}
            <div className="mt-4 pt-3">
              <div className="text-white text-opacity-75">
                <i className="bi bi-info-circle me-2"></i>
                Pierwsza wizyta obejmuje szczegółową diagnozę i plan leczenia
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prosty CSS dla animacji */}
      <style jsx>{`
        .bg-gradient-primary {
          background: linear-gradient(135deg, #4f6ef7 0%, #3a56e5 100%);
        }

        .appointment-card {
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }

        .appointment-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(58, 86, 229, 0.2);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .changing-text {
          display: inline-block;
          color: #ffd166;
          animation: textChange 0.5s ease;
        }

        .icon-circle {
          transition: all 0.3s ease;
          animation: float 6s ease-in-out infinite;
        }

        .icon-circle:nth-child(2) {
          animation-delay: 1s;
        }

        .icon-circle:nth-child(3) {
          animation-delay: 2s;
        }

        .icon-circle:hover {
          transform: scale(1.1) rotate(5deg);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .btn-light {
          background: white;
          color: #3a56e5;
          border: none;
          transition: all 0.3s ease;
          animation: pulse 2s infinite;
        }

        .btn-light:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        .btn-outline-light {
          transition: all 0.3s ease;
        }

        .btn-outline-light:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .hover-lift {
          transition: transform 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
        }

        .hover-scale {
          transition: transform 0.3s ease;
        }

        .hover-scale:hover {
          transform: scale(1.03);
        }

        .hover-stat {
          transition: all 0.3s ease;
        }

        .hover-stat:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        @keyframes textChange {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
          }
        }

        /* Subtelne animacje dla kart */
        .problem-card,
        .solution-card {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeUp 0.6s ease forwards;
        }

        .problem-card:nth-child(1) {
          animation-delay: 0.1s;
        }
        .problem-card:nth-child(2) {
          animation-delay: 0.2s;
        }
        .problem-card:nth-child(3) {
          animation-delay: 0.3s;
        }
        .problem-card:nth-child(4) {
          animation-delay: 0.4s;
        }

        .solution-card:nth-child(1) {
          animation-delay: 0.2s;
        }
        .solution-card:nth-child(2) {
          animation-delay: 0.3s;
        }
        .solution-card:nth-child(3) {
          animation-delay: 0.4s;
        }
        .solution-card:nth-child(4) {
          animation-delay: 0.5s;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Animacja liczników */
        .stat-card div:first-child {
          animation: countPop 0.5s ease-out;
        }

        @keyframes countPop {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
}

export default Features;
