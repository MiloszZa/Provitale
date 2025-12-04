import React, { useState } from "react";

function Pricing() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState("single"); // "single" or "package"

  const singleServices = [
    {
      id: 1,
      title: "Konsultacja fizjoterapeutyczna",
      price: "150 zł",
      duration: "60-75 min",
      features: [
        "Szczegółowe badanie funkcjonalne",
        "Diagnoza problemu z wywiadem",
        "Indywidualny plan terapii",
        "Omówienie dalszego postępowania",
        "Wstępne zalecenia terapeutyczne",
      ],
      popular: true,
      badge: "Najczęściej wybierane",
      color: "primary",
      icon: "bi-clipboard-heart",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      id: 2,
      title: "Terapia indywidualna",
      price: "120 zł",
      duration: "50-60 min",
      features: [
        "Terapia manualna",
        "Ćwiczenia lecznicze dostosowane do potrzeb",
        "Fizykoterapia (w zależności od wskazań)",
        "Kinezyterapia",
        "Instruktaż ćwiczeń domowych",
      ],
      popular: false,
      badge: "Sesja terapeutyczna",
      color: "success",
      icon: "bi-heart-pulse",
      gradient: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    },
    {
      id: 3,
      title: "Terapia osteopatyczna",
      price: "180 zł",
      duration: "60-75 min",
      features: [
        "Holistyczna diagnoza osteopatyczna",
        "Terapia manualna strukturalna",
        "Techniki wisceralne",
        "Praca z układem czaszkowo-krzyżowym",
        "Integracja całego ciała",
      ],
      popular: false,
      badge: "Specjalistyczna",
      color: "warning",
      icon: "bi-body-text",
      gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
    },
  ];

  const packageServices = [
    {
      id: 4,
      title: "Pakiet 4 sesji",
      price: "440 zł",
      originalPrice: "480 zł",
      savings: "40 zł",
      duration: "4 x 50-60 min",
      features: [
        "4 pełne sesje terapeutyczne",
        "Oszczędność 40 zł",
        "Priorytetowe terminy",
        "Regularny monitoring postępów",
        "Dostosowany plan na cały pakiet",
        "Materiały edukacyjne w cenie",
      ],
      popular: true,
      badge: "Najlepsza wartość",
      color: "danger",
      icon: "bi-stars",
      gradient: "linear-gradient(135deg, #ff416c 0%, #ff4b2b 100%)",
    },
    {
      id: 5,
      title: "Pakiet 8 sesji",
      price: "840 zł",
      originalPrice: "960 zł",
      savings: "120 zł",
      duration: "8 x 50-60 min",
      features: [
        "8 pełnych sesji terapeutycznych",
        "Oszczędność 120 zł",
        "Gwarantowane terminy co tydzień",
        "Kompleksowy program rehabilitacji",
        "Regularne przeglądy postępów",
        "Dodatkowe konsultacje online",
        "Zestaw ćwiczeń premium",
      ],
      popular: false,
      badge: "Kompleksowy",
      color: "info",
      icon: "bi-award",
      gradient: "linear-gradient(135deg, #2193b0 0%, #6dd5ed 100%)",
    },
  ];

  const additionalServices = [
    {
      title: "Masaż leczniczy",
      price: "100 zł / 45 min",
      description: "Skupiony na konkretnych obszarach bólowych",
    },
    {
      title: "Konsultacja online",
      price: "100 zł / 45 min",
      description: "Porada zdalna + plan ćwiczeń",
    },
    {
      title: "Wizyta domowa",
      price: "200 zł",
      description: "Wizyta w domu pacjenta (Bieruń i okolice)",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-6 py-lg-7 position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%)",
      }}
    >
      {/* Background decorative elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100">
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "400px",
            height: "400px",
            top: "-200px",
            right: "-100px",
            background:
              "radial-gradient(circle, rgba(13, 110, 253, 0.1) 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="position-absolute rounded-circle"
          style={{
            width: "300px",
            height: "300px",
            bottom: "-150px",
            left: "-100px",
            background:
              "radial-gradient(circle, rgba(25, 135, 84, 0.1) 0%, transparent 70%)",
          }}
        ></div>
      </div>

      <div className="container position-relative z-1">
        {/* Header */}
        <div className="text-center mb-6">
          <div className="position-relative d-inline-block mb-4">
            <span
              className="badge px-5 py-3 rounded-pill d-inline-flex align-items-center gap-2 fs-5 fw-bold shadow-lg position-relative overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                color: "white",
                border: "2px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              {/* Efekt błyszczenia */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                  transform: "translateX(-100%)",
                  animation: "shine 3s infinite",
                }}
              ></div>
              <span className="position-relative z-1">CENNIK</span>
            </span>

            {/* Małe dekoracyjne kropki */}
            <div className="position-absolute top-0 end-0 translate-middle">
              <div
                className="rounded-circle bg-warning"
                style={{ width: "10px", height: "10px" }}
              ></div>
            </div>
            <div className="position-absolute bottom-0 start-0 translate-middle">
              <div
                className="rounded-circle bg-info"
                style={{ width: "8px", height: "8px" }}
              ></div>
            </div>
          </div>

          <h2 className="fw-bold display-4 mb-3">
            <span className="text-gradient">Inwestycja</span> w Twoje zdrowie
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Profesjonalne usługi fizjoterapeutyczne w przystępnych cenach.
            Wybierz pakiet dopasowany do Twoich potrzeb.
          </p>
        </div>

        {/* Toggle for single vs package */}
        <div className="row justify-content-center mb-5">
          <div className="col-lg-8">
            <div className="bg-white rounded-4 shadow-sm p-1 d-inline-flex mx-auto">
              <button
                className={`btn btn-lg px-4 py-2 fw-medium border-0 rounded-3 ${
                  activeTab === "single"
                    ? "bg-primary text-white"
                    : "bg-transparent text-dark"
                }`}
                onClick={() => setActiveTab("single")}
                style={{ transition: "all 0.3s ease" }}
              >
                <i className="bi bi-calendar-check me-2"></i>
                Pojedyncze sesje
              </button>
              <button
                className={`btn btn-lg px-4 py-2 fw-medium border-0 rounded-3 ${
                  activeTab === "package"
                    ? "bg-primary text-white"
                    : "bg-transparent text-dark"
                }`}
                onClick={() => setActiveTab("package")}
                style={{ transition: "all 0.3s ease" }}
              >
                <i className="bi bi-gift me-2"></i>
                Pakiety oszczędnościowe
              </button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="row g-4 justify-content-center">
          {(activeTab === "single" ? singleServices : packageServices).map(
            (service) => (
              <div key={service.id} className="col-lg-4 col-md-6">
                <div
                  className={`card h-100 border-0 rounded-4 overflow-hidden position-relative ${
                    hoveredCard === service.id ? "shadow-lg" : "shadow"
                  }`}
                  style={{
                    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                    transform:
                      hoveredCard === service.id
                        ? "translateY(-10px)"
                        : "translateY(0)",
                  }}
                  onMouseEnter={() => setHoveredCard(service.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Popular badge */}
                  {service.popular && (
                    <div
                      className="position-absolute top-0 start-50 translate-middle-x mt-3"
                      style={{ zIndex: 2 }}
                    >
                      <span
                        className="badge px-3 py-2 fw-bold shadow-sm"
                        style={{
                          background: service.gradient,
                          color: "white",
                          fontSize: "0.85rem",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <i className="bi bi-star-fill me-1"></i>
                        {service.badge}
                      </span>
                    </div>
                  )}

                  {/* Card header with gradient */}
                  <div
                    className="card-header border-0 py-4 px-4 text-center position-relative overflow-hidden"
                    style={{
                      background: service.gradient,
                      minHeight: "140px",
                    }}
                  >
                    {/* Animated background effect */}
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background:
                          "linear-gradient(45deg, transparent 25%, rgba(255,255,255,0.1) 50%, transparent 75%)",
                        backgroundSize: "200% 200%",
                        animation:
                          hoveredCard === service.id
                            ? "shine 1.5s ease-in-out infinite"
                            : "none",
                      }}
                    ></div>

                    <div className="position-relative z-1">
                      <div
                        className="icon-wrapper mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle"
                        style={{
                          width: "60px",
                          height: "60px",
                          background: "rgba(255, 255, 255, 0.2)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(255, 255, 255, 0.3)",
                        }}
                      >
                        <i className={`bi ${service.icon} fs-3 text-white`}></i>
                      </div>
                      <h4 className="card-title fw-bold text-white mb-2">
                        {service.title}
                      </h4>
                      {!service.popular && (
                        <span className="badge bg-white bg-opacity-20 text-white border-0">
                          {service.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price section */}
                  <div className="card-body p-4 text-center">
                    <div className="mb-3">
                      <div className="display-4 fw-bold text-dark mb-1">
                        {service.price}
                      </div>
                      {service.originalPrice && (
                        <div className="text-decoration-line-through text-muted mb-1">
                          {service.originalPrice}
                        </div>
                      )}
                      {service.savings && (
                        <div className="text-success fw-bold small">
                          <i className="bi bi-arrow-down-circle-fill me-1"></i>
                          Oszczędzasz {service.savings}
                        </div>
                      )}
                      <div className="text-muted small">{service.duration}</div>
                    </div>

                    {/* Features list */}
                    <ul className="list-unstyled mb-4 text-start">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="mb-2">
                          <div className="d-flex align-items-start">
                            <i
                              className="bi bi-check-circle-fill text-success me-2 mt-1 flex-shrink-0"
                              style={{ fontSize: "0.9rem" }}
                            ></i>
                            <span className="small">{feature}</span>
                          </div>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="mt-4 pt-3 border-top">
                      <a
                        href="#contact"
                        className="btn btn-lg w-100 py-3 fw-bold d-flex align-items-center justify-content-center gap-2"
                        style={{
                          background: service.gradient,
                          color: "white",
                          border: "none",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "scale(1.02)";
                          e.currentTarget.style.boxShadow =
                            "0 10px 25px rgba(0,0,0,0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "scale(1)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        <i className="bi bi-calendar-check"></i>
                        Umów wizytę
                        <i className="bi bi-arrow-right"></i>
                      </a>
                    </div>
                  </div>

                  {/* Ribbon for packages */}
                  {service.originalPrice && (
                    <div
                      className="position-absolute top-0 end-0 m-3"
                      style={{ zIndex: 2 }}
                    >
                      <div
                        className="badge px-3 py-2 fw-bold text-white"
                        style={{
                          background:
                            "linear-gradient(135deg, #dc3545 0%, #ff6b6b 100%)",
                          fontSize: "0.8rem",
                        }}
                      >
                        <i className="bi bi-percent me-1"></i>
                        PROMOCJA
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>

        {/* Additional Services */}
        <div className="row mt-6 pt-5">
          <div className="col-lg-8 mx-auto">
            <div className="card border-0 rounded-4 shadow-sm overflow-hidden">
              <div
                className="card-header border-0 py-3"
                style={{
                  background:
                    "linear-gradient(135deg, #6a11cb 0%, #2575fc 100%)",
                }}
              >
                <h4 className="fw-bold text-white text-center mb-0">
                  <i className="bi bi-plus-circle me-2"></i>
                  Dodatkowe usługi
                </h4>
              </div>
              <div className="card-body p-4">
                <div className="row g-4">
                  {additionalServices.map((service, idx) => (
                    <div key={idx} className="col-md-4">
                      <div className="d-flex align-items-start p-3 rounded-3 h-100 bg-light hover-lift">
                        <div className="flex-shrink-0">
                          <div
                            className="rounded-circle d-flex align-items-center justify-content-center"
                            style={{
                              width: "45px",
                              height: "45px",
                              background:
                                "linear-gradient(135deg, #0d6efd 0%, #198754 100%)",
                              color: "white",
                            }}
                          >
                            <i className="bi bi-plus-lg"></i>
                          </div>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="fw-bold mb-1">{service.title}</h6>
                          <p className="text-primary fw-bold mb-1">
                            {service.price}
                          </p>
                          <p className="small text-muted mb-0">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ / Additional Info */}
        <div className="row mt-5 pt-4">
          <div className="col-lg-8 mx-auto">
            <div className="bg-white rounded-4 p-4 p-md-5 shadow-sm border">
              <div className="row align-items-center">
                <div className="col-md-8">
                  <h5 className="fw-bold mb-2">
                    <i className="bi bi-question-circle text-primary me-2"></i>
                    Masz pytania dotyczące cennika?
                  </h5>
                  <p className="text-muted mb-0">
                    Skontaktuj się ze mną, aby omówić szczegóły i dobrać
                    optymalny plan terapii dla Twoich potrzeb.
                  </p>
                </div>
                <div className="col-md-4 text-md-end mt-3 mt-md-0">
                  <a
                    href="#contact"
                    className="btn btn-primary btn-lg px-4 py-3 fw-bold d-inline-flex align-items-center gap-2"
                  >
                    <i className="bi bi-chat-dots"></i>
                    Zapytaj o szczegóły
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Info */}
        <div className="text-center mt-5 pt-3">
          <p className="text-muted small mb-2">
            <i className="bi bi-info-circle me-1"></i>
            Akceptowane formy płatności:
          </p>
          <div className="d-flex justify-content-center gap-3">
            <span className="badge bg-light text-dark border px-3 py-2">
              <i className="bi bi-cash-coin me-1"></i> Gotówka
            </span>
            <span className="badge bg-light text-dark border px-3 py-2">
              <i className="bi bi-credit-card me-1"></i> Karta płatnicza
            </span>
            <span className="badge bg-light text-dark border px-3 py-2">
              <i className="bi bi-bank me-1"></i> Przelew
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(135deg, #0d6efd 0%, #198754 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hover-lift {
          transition: all 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        @keyframes shine {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.5rem;
          }

          .display-6 {
            font-size: 2.5rem;
          }

          .card-header {
            min-height: 120px !important;
            padding: 1.5rem !important;
          }
        }

        @media (max-width: 576px) {
          .btn-lg {
            padding: 0.75rem 1rem !important;
            font-size: 1rem !important;
          }

          .additional-services .col-md-4 {
            margin-bottom: 1rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Pricing;
