import { useRef, useEffect, useState } from "react";

function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const floatingElements = [
    { top: "10%", left: "5%", delay: 0, icon: "bi-shield-check" },
    { top: "20%", right: "8%", delay: 0.2, icon: "bi-lightning" },
    { bottom: "30%", left: "7%", delay: 0.4, icon: "bi-gem" },
    { bottom: "15%", right: "12%", delay: 0.6, icon: "bi-star" },
  ];

  return (
    <section
      id="about"
      className="py-6 position-relative overflow-hidden"
      ref={sectionRef}
      style={{
        background: "linear-gradient(135deg, #f8f9ff 0%, #ffffff 100%)",
      }}
    >
      {/* Animated background elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div
          className="position-absolute"
          style={{
            top: "15%",
            left: "10%",
            width: "200px",
            height: "200px",
            background:
              "radial-gradient(circle, rgba(13,110,253,0.05) 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="position-absolute"
          style={{
            bottom: "20%",
            right: "15%",
            width: "150px",
            height: "150px",
            background:
              "radial-gradient(circle, rgba(111,66,193,0.05) 0%, transparent 70%)",
          }}
        ></div>
      </div>

      {/* Floating animated elements */}
      {floatingElements.map((element, index) => (
        <div
          key={index}
          className={`position-absolute text-primary opacity-10 ${
            isVisible ? "floating-element" : ""
          }`}
          style={{
            top: element.top,
            left: element.left,
            right: element.right,
            bottom: element.bottom,
            animationDelay: `${element.delay}s`,
          }}
        >
          <i className={`bi ${element.icon} display-4`}></i>
        </div>
      ))}

      <div className="container px-4 px-lg-5 my-6 position-relative">
        <div className="row align-items-center">
          {/* Left Column - Visual Elements */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="position-relative">
              {/* Main Image with gradient border */}
              <div className="rounded-4 overflow-hidden position-relative">
                <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-primary opacity-20 rounded-4 "></div>
                <img
                  src="Provitale/assets/magda2.jpg"
                  alt="Magdalena Czarnecka-Zawadzka"
                  className="img-fluid position-relative z-1 p-3"
                />
              </div>

              {/* Floating Stats Card */}
              <div
                className={`position-absolute bottom-0 end-0 translate-middle-y bg-white shadow-lg rounded-3 p-3 border-0 ${
                  isVisible ? "slide-in-right" : ""
                }`}
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-center">
                  <div className="display-6 fw-bold text-gradient-primary mb-1">
                    10+
                  </div>
                  <div className="small text-muted">Lat pasji</div>
                </div>
              </div>

              {/* Signature */}
              <div
                className={`position-absolute bottom-0 start-0 translate-middle-y bg-dark text-white px-3 py-2 rounded-pill ${
                  isVisible ? "slide-in-left" : ""
                }`}
                style={{ animationDelay: "0.7s" }}
              >
                <div className="d-flex align-items-center">
                  <i className="bi bi-pen-fill me-2 small"></i>
                  <span className="small fw-medium">
                    Magdalena Czarnecka-Zawadzka
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="col-lg-7">
            <div className={`ps-lg-5 ${isVisible ? "fade-in-up" : ""}`}>
              {/* Badge */}
              <div className="d-inline-block bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2 mb-4">
                <span className="small fw-bold">👋 Poznajmy się</span>
              </div>

              {/* Main Heading */}
              <h2 className="display-4 fw-bold mb-4">
                Twój przewodnik po
                <span className="text-gradient-primary d-block">
                  zdrowym ruchu
                </span>
              </h2>

              {/* Description */}
              <div className="mb-5">
                <p className="fs-5 text-muted mb-4">
                  Wierzę, że każdy zasługuje na życie bez bólu. Moja misja to
                  nie tylko leczenie, ale{" "}
                  <strong className="text-dark">edukacja i empowerment</strong>{" "}
                  pacjentów w drodze do pełnej sprawności.
                </p>

                {/* Highlight Cards */}
                <div className="row g-3 mb-4">
                  <div className="col-md-6">
                    <div className="bg-light rounded-3 p-3 border-start border-primary border-4 h-100">
                      <div className="d-flex align-items-center">
                        <div className="bg-primary bg-opacity-10 text-primary rounded-2 p-2 me-3">
                          <i className="bi bi-compass fs-5"></i>
                        </div>
                        <div>
                          <div className="fw-bold mb-1">
                            Holistyczne podejście
                          </div>
                          <small className="text-muted">
                            Całościowa opieka nad pacjentem
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="bg-light rounded-3 p-3 border-start border-success border-4 h-100">
                      <div className="d-flex align-items-center">
                        <div className="bg-success bg-opacity-10 text-success rounded-2 p-2 me-3">
                          <i className="bi bi-graph-up-arrow fs-5"></i>
                        </div>
                        <div>
                          <div className="fw-bold mb-1">Innowacyjne metody</div>
                          <small className="text-muted">
                            Najnowsze techniki terapeutyczne
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Philosophy Section */}
              <div className="mb-5">
                <h4 className="fw-bold mb-3">Moja filozofia pracy</h4>
                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-arrow-right-circle text-primary fs-5 me-3 mt-1"></i>
                  <div>
                    <strong className="text-dark">Ruch to lek</strong>
                    <p className="text-muted mb-0 small">
                      Odpowiednio dobrana aktywność może zastąpić wiele leków
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start mb-3">
                  <i className="bi bi-arrow-right-circle text-primary fs-5 me-3 mt-1"></i>
                  <div>
                    <strong className="text-dark">Słucham z uwagą</strong>
                    <p className="text-muted mb-0 small">
                      Każda historia pacjenta jest unikalna i wymaga
                      indywidualnego podejścia
                    </p>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <i className="bi bi-arrow-right-circle text-primary fs-5 me-3 mt-1"></i>
                  <div>
                    <strong className="text-dark">Edukuję i wspieram</strong>
                    <p className="text-muted mb-0 small">
                      Daję narzędzia do samodzielnego dbania o zdrowie
                    </p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3">
                <a
                  href="#contact"
                  className="btn btn-primary btn-lg px-4 py-3 shadow-hover"
                >
                  <i className="bi bi-calendar2-check me-2"></i>
                  Umów konsultację
                </a>
                <a
                  href="#contact"
                  className="btn btn-outline-dark btn-lg px-4 py-3"
                >
                  <i className="bi bi-chat-dots me-2"></i>
                  Zadaj pytanie
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
