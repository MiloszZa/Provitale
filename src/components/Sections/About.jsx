import { useRef, useEffect, useState } from "react";
import CountUp from "react-countup";

function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [countStarted, setCountStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => setCountStarted(true), 300);
        }
      },
      {
        threshold: 0.2,
        rootMargin: "50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      value: 12,
      suffix: "+",
      label: "lat doświadczenia",
      description: "Praktyki klinicznej",
    },
    {
      value: 2000,
      suffix: "+",
      label: "zadowolonych pacjentów",
      description: "Pozytywne rezultaty",
    },
    {
      value: 95,
      suffix: "%",
      label: "skuteczności",
      description: "Wskaźnik sukcesu terapii",
    },
    {
      value: 500,
      suffix: "+",
      label: "godzin szkoleń",
      description: "Ciągły rozwój",
    },
  ];

  const specialties = [
    {
      icon: "⚕️",
      title: "Rehabilitacja ortopedyczna",
      desc: "Urazy, kontuzje, bóle stawów",
    },
    {
      icon: "📈",
      title: "Fizjoterapia sportowa",
      desc: "Powrót do aktywności po kontuzjach",
    },
    {
      icon: "🧠",
      title: "Terapia manualna",
      desc: "Zaawansowane techniki leczenia",
    },
    {
      icon: "🤸",
      title: "Trening medyczny",
      desc: "Indywidualne programy ćwiczeń",
    },
  ];

  return (
    <section
      id="about"
      className="py-5 py-lg-6 position-relative overflow-hidden about-section"
      ref={sectionRef}
      style={{
        background:
          "linear-gradient(135deg, #f0f9ff 0%, #f5f7ff 50%, #e6f0ff 100%)",
      }}
    >
      <div className="container px-3 px-lg-4 my-4 my-lg-5 position-relative">
        <div className="row align-items-center">
          {/* Left Column - Image (hidden on mobile/tablet) */}
          <div className="col-lg-5 order-2 order-lg-1 mb-4 mb-lg-0 about-image-column">
            <div
              className={`position-relative ${
                isVisible ? "about-float-in" : ""
              }`}
            >
              <div className="rounded-4 overflow-hidden position-relative shadow-lg">
                <img
                  src="Provitale/assets/magda2.jpg"
                  alt="Magdalena Czarnecka-Zawadzka - Fizjoterapeutka"
                  className="img-fluid w-100 about-image-frame"
                  style={{
                    height: "auto",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-7 order-1 order-lg-2">
            <div className={`ps-lg-4 ${isVisible ? "about-fade-in-up" : ""}`}>
              {/* Badge */}
              <div
                className={`d-inline-flex align-items-center px-3 py-2 rounded-pill bg-white shadow-sm mb-3 mb-md-4 ${
                  isVisible ? "about-slide-in-left" : ""
                }`}
                style={{
                  border: "1px solid rgba(14, 165, 233, 0.1)",
                }}
              >
                <div className="about-pulse-dot me-2"></div>
                <span className="text-primary fw-medium small">
                  FIZJOTERAPEUTKA Z PASJĄ
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="display-5 display-md-4 fw-bold mb-3 mb-md-4 lh-sm about-heading">
                Cześć, jestem Magda
              </h1>

              {/* Description */}
              <p className="fs-5 text-dark opacity-75 mb-4 mb-md-5 about-description">
                "Wierzę, że każdy zasługuje na życie bez bólu.
                <span className="d-block mt-2">
                  Moją misją jest nie tylko leczyć, ale{" "}
                  <strong className="text-dark">edukować i inspirować</strong>{" "}
                  do aktywnego, zdrowego życia."
                </span>
              </p>

              {/* Animated Stats */}
              <div className="row g-3 g-md-4 mb-4 mb-md-5">
                {stats.map((stat, index) => (
                  <div className="col-6 col-md-3 d-flex" key={index}>
                    <div
                      className={`about-stat-card text-center p-2 p-md-3 d-flex flex-column justify-content-center align-items-center w-100 ${
                        isVisible ? "about-fade-in-stagger" : ""
                      }`}
                      style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                    >
                      <div className="display-5 display-md-4 fw-bold text-primary mb-1">
                        {countStarted ? (
                          <CountUp
                            end={stat.value}
                            suffix={stat.suffix}
                            duration={2.5}
                            decimals={stat.value % 1 !== 0 ? 1 : 0}
                            delay={0}
                          />
                        ) : (
                          `0${stat.suffix}`
                        )}
                      </div>
                      <div className="fw-medium text-dark mb-1 small">
                        {stat.label}
                      </div>
                      <div className="text-dark opacity-75 x-small">
                        {stat.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              {/* Specialties */}
              <div className="mb-4 mb-md-5">
                <h3 className="fw-bold mb-3 mb-md-4 text-dark">
                  W czym się specjalizuję?
                </h3>
                <div className="row g-3">
                  {specialties.map((item, index) => (
                    <div className="col-md-6" key={index}>
                      <div
                        className={`about-specialty-card p-3 rounded-3 bg-white border-start border-3 border-primary ${
                          isVisible ? "about-slide-in-right-stagger" : ""
                        }`}
                        style={{
                          animationDelay: `${0.5 + index * 0.1}s`,
                          boxShadow: "0 4px 12px rgba(14, 165, 233, 0.08)",
                        }}
                      >
                        <div className="d-flex align-items-start">
                          <div className="about-icon-container rounded-circle me-3">
                            <span className="fs-4">{item.icon}</span>
                          </div>
                          <div>
                            <h5 className="fw-bold text-dark mb-1">
                              {item.title}
                            </h5>
                            <p className="text-dark opacity-75 mb-0 small">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Philosophy */}
              <div
                className="bg-white rounded-3 p-3 p-md-4 mb-4 mb-md-5 shadow-sm about-philosophy-card"
                style={{ border: "1px solid rgba(14, 165, 233, 0.1)" }}
              >
                <div className="d-flex align-items-start">
                  <div className="about-icon-soft-blue rounded-circle p-2 me-3 flex-shrink-0">
                    <i className="bi bi-heart-pulse fs-5 text-primary"></i>
                  </div>
                  <div>
                    <h4 className="fw-bold text-dark mb-2">
                      Moja filozofia pracy
                    </h4>
                    <p className="text-dark opacity-75 mb-0">
                      Łączę najnowsze badania naukowe z indywidualnym podejściem
                      do każdego pacjenta. Nie stosuję szablonowych rozwiązań -
                      każda terapia jest dostosowana do Twoich unikalnych
                      potrzeb i celów.
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3">
                <a
                  href="#contact"
                  className="btn btn-primary btn-lg px-4 px-md-5 py-3 fw-bold about-btn-primary"
                >
                  <i className="bi bi-calendar-check me-2"></i>
                  Umów wizytę
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline-primary btn-lg px-4 px-md-5 py-3 fw-bold about-btn-outline"
                >
                  <i className="bi bi-telephone me-2"></i>
                  Zadzwoń do mnie
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
