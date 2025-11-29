import { useState, useEffect, useRef } from "react";

function Features() {
  const [counters, setCounters] = useState({
    patients: 0,
    experience: 0,
    effectiveness: 0,
    support: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const benefits = [
    {
      icon: "bi-person-check",
      title: "Indywidualne Podejście",
      description:
        "Każdy pacjent jest inny - dlatego tworzę spersonalizowane plany terapii dopasowane do Twoich potrzeb i celów.",
    },
    {
      icon: "bi-clock-history",
      title: "Doświadczenie",
      description:
        "Wieloletnie doświadczenie w pracy z pacjentami z różnymi schorzeniami narządu ruchu.",
    },
    {
      icon: "bi-gem",
      title: "Kompleksowa Opieka",
      description:
        "Od diagnostyki przez terapię po edukację - zapewniam pełną ścieżkę powrotu do zdrowia.",
    },
    {
      icon: "bi-heart-pulse",
      title: "Nowoczesne Metody",
      description:
        "Stosuję najnowsze, potwierdzone badaniami metody fizjoterapeutyczne dla najlepszych efektów.",
    },
  ];

  const targetValues = {
    patients: 500,
    experience: 10,
    effectiveness: 95,
    support: 24,
  };

  const animateCounter = (start, end, duration, setter) => {
    let startTimestamp = null;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);

      // Smooth easing function
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

          // Start all animations
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
        threshold: 0.7, // Start when 30% of section is visible
        rootMargin: "0px 0px -50px 0px", // Small offset from bottom
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
    <section className="py-5 bg-light" id="features" ref={sectionRef}>
      <div className="container px-5 my-5">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-5 mb-lg-0">
            <h2 className="fw-bolder display-6 mb-4">
              Dlaczego warto powierzyć mi swoje zdrowie?
            </h2>
            <p className="lead text-muted mb-4">
              W fizjoterapii nie chodzi tylko o eliminację bólu, ale o
              przywrócenie pełnej sprawności i poprawę jakości życia.
            </p>
            <div className="d-flex flex-wrap gap-3">
              <span className="badge bg-primary bg-opacity-10 text-primary fs-6 p-2">
                <i className="bi bi-check-circle me-1"></i>
                Profesjonalizm
              </span>
              <span className="badge bg-success bg-opacity-10 text-success fs-6 p-2">
                <i className="bi bi-check-circle me-1"></i>
                Empatia
              </span>
              <span className="badge bg-info bg-opacity-10 text-info fs-6 p-2">
                <i className="bi bi-check-circle me-1"></i>
                Zaangażowanie
              </span>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="row g-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="col-md-6">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <div className="bg-primary bg-opacity-10 text-primary rounded-2 p-3">
                        <i className={`bi ${benefit.icon} fs-4`}></i>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <h5 className="fw-bold mb-2">{benefit.title}</h5>
                      <p className="text-muted mb-0 small">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Statystyki z animacją */}
        <div className="row text-center mt-5 pt-5">
          <div className="col-md-3 col-6 mb-4">
            <div className="display-6 fw-bold text-primary mb-2">
              {counters.patients}+
            </div>
            <div className="text-muted">Zadowolonych pacjentów</div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="display-6 fw-bold text-success mb-2">
              {counters.experience}+
            </div>
            <div className="text-muted">Lat doświadczenia</div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="display-6 fw-bold text-warning mb-2">
              {counters.effectiveness}%
            </div>
            <div className="text-muted">Efektywności terapii</div>
          </div>
          <div className="col-md-3 col-6 mb-4">
            <div className="display-6 fw-bold text-info mb-2">
              {counters.support}/7
            </div>
            <div className="text-muted">Wsparcie dla pacjentów</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
