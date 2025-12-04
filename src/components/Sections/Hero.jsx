import { useEffect, useState } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverPrimary, setHoverPrimary] = useState(false);
  const [hoverSecondary, setHoverSecondary] = useState(false);
  const [currentPain, setCurrentPain] = useState(0);
  const [particleData, setParticleData] = useState([]);
  const [explosionData, setExplosionData] = useState([]);

  const painTypes = [
    "kręgosłupem",
    "kolanami",
    "barkami",
    "bólami",
    "stawami",
    "plecami",
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Generate particle data once on mount - wrapped in setTimeout
    setTimeout(() => {
      const particles = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        size: `${Math.floor(Math.random() * 3) + 2}px`,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`,
        duration: `${10 + Math.random() * 10}s`,
      }));
      setParticleData(particles);
    }, 0);

    // Generate explosion data once on mount - wrapped in setTimeout
    setTimeout(() => {
      const explosions = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 80 - 40,
        y: Math.random() * 80 - 40,
      }));
      setExplosionData(explosions);
    }, 0);

    // Animate pain text
    const painInterval = setInterval(() => {
      setCurrentPain((prev) => (prev + 1) % painTypes.length);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(painInterval);
    };
  }, [painTypes.length]);

  return (
    <header
      className="position-relative min-vh-100 d-flex align-items-center overflow-hidden"
      id="home"
      style={{
        background:
          "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
      }}
    >
      {/* Animated background */}
      <div className="position-absolute w-100 h-100 top-0 left-0">
        {/* Animated wave pattern */}
        <div
          className="position-absolute w-100 h-100"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%239C92AC' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            opacity: 0.3,
            animation: "waveFloat 20s linear infinite",
          }}
        />

        {/* Floating particles */}
        {particleData.map((particle) => (
          <div
            key={particle.id}
            className="position-absolute rounded-circle"
            style={{
              width: particle.size,
              height: particle.size,
              background: "rgba(255, 255, 255, 0.1)",
              top: particle.top,
              left: particle.left,
              opacity: isVisible ? 0.5 : 0,
              animation: isVisible
                ? `particleFloat ${particle.duration} linear infinite`
                : "none",
              animationDelay: particle.delay,
            }}
          />
        ))}
      </div>

      <div className="container position-relative z-1">
        <div className="row align-items-center">
          {/* Left column - Text with interactive animations */}
          <div className="col-lg-6">
            <div className="text-white">
              {/* Interactive main headline */}
              <div className="mb-4">
                <h1
                  className="display-1 fw-bold mb-3"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(30px)",
                    transition: "all 0.8s ease 0.2s",
                    fontSize: "clamp(3rem, 8vw, 5rem)",
                    cursor: "default",
                  }}
                >
                  <div className="mb-4">
                    <span className="d-block mb-2 text-white">
                      Masz problem z
                    </span>
                    <div
                      className="position-relative"
                      style={{ height: "80px" }}
                    >
                      {painTypes.map((pain, index) => (
                        <div
                          key={index}
                          className="position-absolute top-0 start-0 w-100"
                          style={{
                            opacity: currentPain === index ? 1 : 0,
                            transform: `translateY(${
                              currentPain === index ? "0" : "20px"
                            })`,
                            transition: "all 0.5s ease",
                          }}
                        >
                          <span className="display-3 fw-bold text-primary">
                            {pain}?
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4">
                    <span
                      className="d-block text-white"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0)"
                          : "translateY(20px)",
                        transition: "all 0.8s ease 0.6s",
                      }}
                    >
                      Znajdźmy razem
                    </span>
                    <span
                      className="d-block text-white"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transform: isVisible
                          ? "translateY(0)"
                          : "translateY(20px)",
                        transition: "all 0.8s ease 0.8s",
                      }}
                    >
                      rozwiązanie.
                    </span>
                  </div>
                </h1>
              </div>

              {/* Animated subheadline */}
              <div
                className="mb-5"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s ease 1s",
                }}
              >
                <p
                  className="lead text-white-75 mb-0"
                  style={{
                    fontSize: "1.25rem",
                    maxWidth: "500px",
                    lineHeight: "1.6",
                  }}
                >
                  Specjalizuję się w pomaganiu osobom z problemami bólowymi
                  wrócić do pełnej sprawności i komfortu życia.
                </p>
              </div>

              {/* CTA Buttons with enhanced animations */}
              <div
                className="d-flex flex-wrap gap-4 mt-5"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s ease 1.2s",
                }}
              >
                {/* Primary CTA with particle effect */}
                <div className="position-relative">
                  {/* Particle effect on hover */}
                  {hoverPrimary &&
                    explosionData.map((explosion) => (
                      <div
                        key={explosion.id}
                        className="position-absolute rounded-circle bg-primary"
                        style={{
                          width: "4px",
                          height: "4px",
                          top: "50%",
                          left: "50%",
                          opacity: 0,
                          animation: `particleExplode 0.6s ease-out ${
                            explosion.id * 0.05
                          }s forwards`,
                          "--explosion-x": `${explosion.x}px`,
                          "--explosion-y": `${explosion.y}px`,
                        }}
                      />
                    ))}

                  <a
                    href="#contact"
                    className="btn btn-primary btn-lg px-5 py-3 fw-bold position-relative overflow-hidden border-0"
                    style={{
                      borderRadius: "50px",
                      background:
                        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                      minWidth: "220px",
                      transition: "all 0.3s ease",
                      boxShadow: "0 10px 30px rgba(102, 126, 234, 0.4)",
                    }}
                    onMouseEnter={() => setHoverPrimary(true)}
                    onMouseLeave={() => setHoverPrimary(false)}
                  >
                    <span className="position-relative z-2 d-flex align-items-center justify-content-center gap-3">
                      <span className="fs-5">⚡</span>
                      <span>Umów wizytę</span>
                      <svg
                        className={`transition-all ${
                          hoverPrimary ? "translate-x-3 rotate-12" : ""
                        }`}
                        width="22"
                        height="22"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        style={{ transition: "all 0.3s ease" }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </span>

                    {/* Shine effect */}
                    <div
                      className="position-absolute top-0 left-0 w-full h-full"
                      style={{
                        background:
                          "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
                        transform: "translateX(-100%)",
                        animation: hoverPrimary
                          ? "buttonShine 0.8s ease-out"
                          : "none",
                      }}
                    />
                  </a>
                </div>

                {/* Secondary CTA with wave effect */}
                <a
                  href="#about"
                  className="btn btn-outline-light btn-lg px-5 py-3 fw-bold position-relative overflow-hidden"
                  style={{
                    borderRadius: "50px",
                    borderWidth: "2px",
                    minWidth: "220px",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={() => setHoverSecondary(true)}
                  onMouseLeave={() => setHoverSecondary(false)}
                >
                  <span className="position-relative z-2 d-flex align-items-center justify-content-center gap-3">
                    <svg
                      className={`transition-all ${
                        hoverSecondary ? "bounce" : ""
                      }`}
                      width="22"
                      height="22"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      style={{ transition: "all 0.3s ease" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>O mnie</span>
                  </span>

                  {/* Wave effect on hover */}
                  {hoverSecondary && (
                    <div
                      className="position-absolute top-0 left-0 w-full h-full"
                      style={{
                        background: "rgba(255, 255, 255, 0.1)",
                        borderRadius: "50px",
                        animation: "waveRipple 0.6s ease-out",
                      }}
                    />
                  )}
                </a>
              </div>
            </div>
          </div>

          {/* Right column - Image with subtle effects */}
          <div className="col-lg-6">
            <div
              className="position-relative mt-5 mt-lg-0"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible
                  ? "translateX(0) scale(1)"
                  : "translateX(40px) scale(0.95)",
                transition: "all 0.8s ease 0.4s",
              }}
            >
              {/* Animated border */}
              <div
                className="position-absolute top-0 start-0 w-100 h-100 rounded-4"
                style={{
                  border: "2px solid rgba(102, 126, 234, 0.3)",
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "scale(1.05)" : "scale(1)",
                  transition: "all 0.8s ease 0.6s",
                  animation: "borderPulse 3s ease-in-out infinite",
                }}
              />

              {/* Image container */}
              <div className="position-relative rounded-4 overflow-hidden">
                {/* Image with zoom effect */}
                <div className="position-relative overflow-hidden rounded-4">
                  <img
                    className="img-fluid w-100 hover-zoom"
                    src="Provitale/assets/magda1.jpg"
                    alt="Magdalena Czarnecka-Zawadzka - Doświadczona fizjoterapeutka"
                    style={{
                      height: "600px",
                      objectFit: "cover",
                      objectPosition: "center top",
                      transition: "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)",
                    }}
                  />

                  {/* Gradient overlay */}
                  <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(15, 12, 41, 0.6) 0%, transparent 50%)",
                    }}
                  />

                  {/* Animated name overlay */}
                  <div className="position-absolute bottom-0 start-0 w-100 p-4 p-md-5">
                    <div className="text-white">
                      <div
                        className="mb-3"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible
                            ? "translateY(0)"
                            : "translateY(30px)",
                          transition: "all 0.8s ease 0.8s",
                        }}
                      >
                        <div className="fs-3 fw-light opacity-90 mb-1">
                          Magdalena
                        </div>
                        <div className="display-4 fw-bold">
                          Czarnecka-Zawadzka
                        </div>
                      </div>

                      <div
                        className="d-flex align-items-center gap-3"
                        style={{
                          opacity: isVisible ? 1 : 0,
                          transform: isVisible
                            ? "translateY(0)"
                            : "translateY(20px)",
                          transition: "all 0.8s ease 1s",
                        }}
                      >
                        <div
                          className="px-4 py-2 rounded-pill d-inline-flex align-items-center gap-2"
                          style={{
                            background: "rgba(102, 126, 234, 0.2)",
                            backdropFilter: "blur(10px)",
                            border: "1px solid rgba(102, 126, 234, 0.4)",
                          }}
                        >
                          <span className="text-primary">👩‍⚕️</span>
                          <span className="small">Fizjoterapeutka</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style>{`
        /* Fix dla mobilki - padding-top tylko na małych ekranach */
        @media (max-width: 768px) {
          header {
            padding-top: 80px !important;
            min-height: calc(100vh - 80px) !important;
          }
          
          /* Dodatkowy margines dla pierwszego kontenera */
          .container.position-relative.z-1 {
            margin-top: 10px;
          }
        }
        
        /* Poprawki tylko dla bardzo małych ekranów */
        @media (max-width: 576px) {
          header {
            padding-top: 70px !important;
            min-height: calc(100vh - 70px) !important;
          }
        }
        
        /* Reszta istniejących styli */
        @keyframes waveFloat {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
        
        @keyframes particleFloat {
          0% {
            transform: translateY(100vh) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) translateX(100px);
            opacity: 0;
          }
        }
        
        @keyframes particleExplode {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 1;
          }
          100% {
            transform: translate(calc(-50% + var(--explosion-x, 0px)), calc(-50% + var(--explosion-y, 0px))) scale(1);
            opacity: 0;
          }
        }
        
        @keyframes buttonShine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes waveRipple {
          0% {
            transform: scale(0.8);
            opacity: 1;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        
        @keyframes borderPulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        .text-primary {
          color: #667eea !important;
        }
        
        .bg-primary {
          background-color: #667eea !important;
        }
        
        .text-white-75 {
          color: rgba(255, 255, 255, 0.75) !important;
        }
        
        .translate-x-3 {
          transform: translateX(12px);
        }
        
        .rotate-12 {
          transform: rotate(12deg);
        }
        
        .bounce {
          animation: bounce 0.5s ease;
        }
        
        .hover-zoom {
          transition: transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .hover-zoom:hover {
          transform: scale(1.05);
        }
        
        @media (max-width: 992px) {
          .display-1 {
            font-size: 3.5rem !important;
          }
          
          .display-4 {
            font-size: 2.5rem !important;
          }
        }
        
        @media (max-width: 768px) {
          .display-1 {
            font-size: 2.8rem !important;
          }
          
          .display-4 {
            font-size: 2rem !important;
          }
          
          .col-lg-6 img {
            height: 450px !important;
          }
          
          .d-flex.flex-wrap {
            flex-direction: column;
            gap: 1rem !important;
          }
          
          .btn-lg {
            width: 100%;
          }
        }
        
        @media (max-width: 576px) {
          .display-1 {
            font-size: 2.3rem !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Hero;
