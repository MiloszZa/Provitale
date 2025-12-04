import { useState, useEffect } from "react";
import BlogCard from "../UI/BlogCard";
import { FaFacebook, FaArrowRight, FaHeart, FaUsers } from "react-icons/fa";

function BlogPreview() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoverCard, setHoverCard] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const facebookStats = [
    { icon: <FaUsers />, value: "1k+", label: "Obserwujących" },
    { icon: <FaHeart />, value: "500+", label: "Polubień" },
    { icon: <FaFacebook />, value: "Codziennie", label: "Nowe posty" },
  ];

  return (
    <section className="py-5 relative overflow-hidden bg-gradient-to-b from-blue-50/30 to-white">
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply opacity-20 animate-pulse animation-delay-2000"></div>

      <div className="container px-5 my-5 relative z-10">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div className="text-center position-relative">
                <div className="d-inline-block p-3 mb-4 bg-white rounded-circle shadow-sm">
                  <FaFacebook className="text-3xl text-primary" />
                </div>
                <h2 className="fw-bolder display-6 mb-3">
                  Mój blog na{" "}
                  <span className="text-gradient text-primary">Facebooku</span>
                </h2>
                <p className="lead fw-normal text-muted mb-4">
                  Poniżej znajdziesz moje ostatnie wpisy. Dołącz do społeczności
                  i bądź na bieżąco!
                </p>

                {/* Facebook Stats */}
                <div className="d-flex justify-content-center gap-4 mb-5">
                  {facebookStats.map((stat, idx) => (
                    <div
                      key={idx}
                      className="d-flex flex-column align-items-center p-3 bg-white rounded-3 shadow-sm hover-shadow transition-all"
                      style={{ minWidth: "120px" }}
                      onMouseEnter={() => setHoverCard(`stat-${idx}`)}
                      onMouseLeave={() => setHoverCard(null)}
                    >
                      <div
                        className={`mb-2 transition-colors ${
                          hoverCard === `stat-${idx}`
                            ? "text-primary"
                            : "text-muted"
                        }`}
                      >
                        {stat.icon}
                      </div>
                      <div className="fw-bold fs-4">{stat.value}</div>
                      <div className="text-muted small">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Facebook CTA */}
                <div className="mb-5 p-4 bg-gradient-primary text-white rounded-4 shadow-lg">
                  <div className="row align-items-center">
                    <div className="col-md-8 text-md-start text-center mb-md-0 mb-3">
                      <h4 className="fw-bold mb-2">
                        Dołącz do społeczności Provitale!
                      </h4>
                      <p className="mb-0 opacity-90">
                        Śledź najnowsze wpisy i otrzymuj wartościowe treści
                      </p>
                    </div>
                    <div className="col-md-4 text-md-end text-center">
                      <a
                        href="https://www.facebook.com//profile.php?id=61568069184701"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-light btn-lg rounded-pill px-4 fw-bold d-inline-flex align-items-center gap-2 hover-scale"
                      >
                        Obserwuj <FaArrowRight />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Facebook Link Footer */}
          <div className="text-center mt-5 pt-4 border-top">
            <p className="text-muted mb-3">
              Wszystkie wpisy znajdziesz na moim profilu:
            </p>
            <a
              href="https://www.facebook.com/profile.php?id=61568069184701&locale=pl_PL"
              target="_blank"
              rel="noopener noreferrer"
              className="d-inline-flex align-items-center gap-2 text-decoration-none text-primary fw-bold hover-grow"
            >
              <FaFacebook className="fs-5" />
              <span className="border-bottom border-primary">
                Mój profil Facebook
              </span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .text-gradient {
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .bg-gradient-primary {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
        }
        .hover-shadow:hover {
          box-shadow: 0 10px 30px rgba(59, 130, 246, 0.15) !important;
        }
        .hover-scale:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
        .hover-grow:hover {
          transform: translateY(-2px);
          transition: transform 0.3s ease;
        }
        .transform.scale-105 {
          transform: scale(1.05);
        }
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
        }
        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}

export default BlogPreview;
