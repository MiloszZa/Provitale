import { useState, useEffect } from "react";

function Contact() {
  const [currentTime, setCurrentTime] = useState(new Date());

  // Aktualizacja czasu co minutę
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Sprawdzenie czy jesteśmy w godzinach pracy
  const isOpen = () => {
    const day = currentTime.getDay();
    const hour = currentTime.getHours();
    const minute = currentTime.getMinutes();
    const currentMinutes = hour * 60 + minute;

    if (day >= 1 && day <= 5) {
      // Poniedziałek-Piątek
      return currentMinutes >= 8 * 60 && currentMinutes < 20 * 60;
    } else if (day === 6) {
      // Sobota
      return currentMinutes >= 9 * 60 && currentMinutes < 14 * 60;
    }
    return false; // Niedziela zamknięte
  };

  // Formatowanie dnia tygodnia
  const getPolishDayName = (day) => {
    const days = [
      "Niedziela",
      "Poniedziałek",
      "Wtorek",
      "Środa",
      "Czwartek",
      "Piątek",
      "Sobota",
    ];
    return days[day];
  };

  return (
    <section
      id="contact"
      className="py-6 py-lg-7 bg-light position-relative overflow-hidden"
    >
      {/* Dekoracyjne elementy tła */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{ zIndex: 0 }}
      >
        <div
          className="position-absolute"
          style={{
            top: "10%",
            left: "5%",
            width: "300px",
            height: "300px",
            background:
              "radial-gradient(circle, rgba(25, 135, 84, 0.1) 0%, transparent 70%)",
          }}
        ></div>
        <div
          className="position-absolute"
          style={{
            bottom: "10%",
            right: "5%",
            width: "400px",
            height: "400px",
            background:
              "radial-gradient(circle, rgba(13, 110, 253, 0.1) 0%, transparent 70%)",
          }}
        ></div>
      </div>

      <div
        className="container px-4 px-lg-5 position-relative"
        style={{ zIndex: 1 }}
      >
        <div className="text-center mb-6">
          <h2 className="fw-bold display-4 mb-3 animate-fade-in">
            <span className="text-gradient">Skontaktuj się</span> z nami
          </h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: "700px" }}>
            Jesteśmy tutaj, aby Ci pomóc. Umów się na wizytę lub zadzwoń, aby
            uzyskać więcej informacji.
          </p>
        </div>

        <div className="row g-5">
          {/* Lewa kolumna - Dane kontaktowe */}
          <div className="col-lg-7">
            <div className="card h-100 border-0 shadow-lg rounded-4 overflow-hidden contact-card">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-box bg-primary bg-gradient text-white rounded-3 p-3 me-3">
                    <i className="bi bi-telephone fs-3"></i>
                  </div>
                  <h3 className="fw-bold mb-0">Dane kontaktowe</h3>
                </div>

                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="contact-item p-3 rounded-3 bg-light h-100 hover-lift">
                      <div className="d-flex">
                        <div className="flex-shrink-0 text-primary">
                          <i className="bi bi-telephone-fill fs-4"></i>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="fw-bold mb-1">Telefon</h5>
                          <a
                            href="tel:+48883940074"
                            className="text-decoration-none fs-5 fw-bold text-dark"
                          >
                            +48 883 940 074
                          </a>
                          <p className="text-muted small mb-0">
                            Kliknij, aby zadzwonić
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="contact-item p-3 rounded-3 bg-light h-100 hover-lift">
                      <div className="d-flex">
                        <div className="flex-shrink-0 text-primary">
                          <i className="bi bi-envelope-fill fs-4"></i>
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h5 className="fw-bold mb-1">E-mail</h5>
                          <a
                            href="mailto:fizjoterapiaprovitale@gmail.com"
                            className="text-decoration-none text-dark"
                          >
                            fizjoterapiaprovitale@gmail.com
                          </a>
                          <p className="text-muted small mb-0">
                            Odpowiadamy w ciągu 24h
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="contact-item p-3 rounded-3 bg-light h-100 hover-lift">
                      {/* Usuwam d-flex które tworzyło lewą kolumnę z ikoną */}
                      <div>
                        <h5 className="fw-bold mb-1">Adres gabinetu</h5>
                        <p className="fs-5 fw-bold text-dark mb-0">
                          ul. Warszawska 290, 43-155 Bieruń
                        </p>
                        <p className="text-muted small mb-3">
                          <i className="bi bi-info-circle me-1"></i>
                          Bezpłatny parking dla pacjentów
                        </p>

                        {/* ZDJĘCIE GABINETU - bez żadnych dodatkowych kontenerów */}
                        <div className="ratio rounded-3 overflow-hidden shadow-sm">
                          <a
                            href="https://maps.google.com/?q=ul.+Warszawska+290,+43-155+Bieruń"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="position-relative d-block w-100 h-100"
                            style={{ textDecoration: "none" }}
                          >
                            {/* Zdjęcie gabinetu */}
                            <img
                              src="Provitale/public/assets/gabinet.jpg"
                              alt="Gabinet Provitale - Magdalena Czarnecka-Zawadzka"
                              className="w-100 h-100"
                              style={{
                                objectFit: "cover",
                                transition: "transform 0.5s ease",
                              }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.transform =
                                  "scale(1.03)")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.transform = "scale(1)")
                              }
                            />

                            {/* Nakładka z napisem na środku */}
                            <div
                              className="position-absolute top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center"
                              style={{
                                backgroundColor: "rgba(0, 0, 0, 0.4)",
                                transition: "background-color 0.3s ease",
                              }}
                              onMouseEnter={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                  "rgba(0, 0, 0, 0.6)")
                              }
                              onMouseLeave={(e) =>
                                (e.currentTarget.style.backgroundColor =
                                  "rgba(0, 0, 0, 0.4)")
                              }
                            >
                              <div className="text-center text-white p-3">
                                <i className="bi bi-geo-alt-fill fs-2 mb-2"></i>
                                <h6 className="fw-bold mb-1">
                                  Zobacz dojazd do gabinetu
                                </h6>
                                <p className="small mb-0">
                                  Kliknij, aby otworzyć mapę
                                </p>
                                <div className="mt-2">
                                  <span
                                    className="badge px-2 py-1"
                                    style={{
                                      backgroundColor: "#0d6efd",
                                      border: "none",
                                      fontSize: "0.75rem",
                                    }}
                                  >
                                    <i className="bi bi-arrow-right me-1"></i>{" "}
                                    Mapy Google
                                  </span>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prawa kolumna - Godziny otwarcia i aktualny status */}
          <div className="col-lg-5">
            <div className="card border-0 shadow-lg rounded-4 overflow-hidden h-100">
              <div className="card-body p-4 p-md-5">
                <div className="d-flex align-items-center mb-4">
                  <div className="icon-box bg-warning bg-gradient text-white rounded-3 p-3 me-3">
                    <i className="bi bi-clock fs-3"></i>
                  </div>
                  <h3 className="fw-bold mb-0">Godziny przyjęć</h3>
                </div>

                {/* Aktualny status - POPRAWIONA WIDOCZNOŚĆ */}
                <div
                  className="p-4 rounded-3 mb-4 shadow-sm"
                  style={{
                    background: isOpen()
                      ? "linear-gradient(135deg, #d1e7dd 0%, #a3cfbb 100%)"
                      : "linear-gradient(135deg, #f8d7da 0%, #f1aeb5 100%)",
                    border: `2px solid ${isOpen() ? "#198754" : "#dc3545"}`,
                  }}
                >
                  <div className="d-flex align-items-center justify-content-between">
                    <div>
                      <h5 className="fw-bold mb-1 text-dark">
                        Aktualnie jesteśmy
                      </h5>
                      <p className="mb-0 text-dark">
                        {getPolishDayName(currentTime.getDay())},{" "}
                        {currentTime.toLocaleTimeString("pl-PL", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <div className="text-end">
                      <span
                        className={`badge ${
                          isOpen() ? "bg-success" : "bg-danger"
                        } fs-6 px-3 py-2 shadow-sm`}
                      >
                        {isOpen() ? (
                          <>
                            <span
                              className="d-inline-block rounded-circle me-1"
                              style={{
                                width: "8px",
                                height: "8px",
                                backgroundColor: "white",
                              }}
                            ></span>
                            OTWARTE
                          </>
                        ) : (
                          "ZAMKNIĘTE"
                        )}
                      </span>
                      <p className="small text-dark mt-1 mb-0">
                        {isOpen()
                          ? "Zapraszamy!"
                          : "Zapraszamy w godzinach otwarcia"}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Godziny otwarcia */}
                <div className="hours-list">
                  {[
                    {
                      day: "Poniedziałek - Piątek",
                      hours: "8:00 - 20:00",
                      isToday:
                        currentTime.getDay() >= 1 && currentTime.getDay() <= 5,
                    },
                    {
                      day: "Sobota",
                      hours: "9:00 - 14:00",
                      isToday: currentTime.getDay() === 6,
                    },
                    {
                      day: "Niedziela",
                      hours: "Zamknięte",
                      isToday: currentTime.getDay() === 0,
                      isClosed: true,
                    },
                  ].map((schedule, index) => (
                    <div
                      key={index}
                      className={`d-flex justify-content-between align-items-center p-3 rounded-3 mb-2 ${
                        schedule.isToday ? "bg-primary text-white" : "bg-light"
                      }`}
                    >
                      <div className="d-flex align-items-center">
                        {schedule.isToday && (
                          <span className="badge bg-white text-primary me-2">
                            DZISIAJ
                          </span>
                        )}
                        <span
                          className={`fw-medium ${
                            schedule.isClosed ? "text-muted" : ""
                          }`}
                        >
                          {schedule.day}
                        </span>
                      </div>
                      <strong
                        className={`fs-5 ${
                          schedule.isClosed
                            ? "text-danger"
                            : schedule.isToday
                            ? "text-white"
                            : "text-primary"
                        }`}
                      >
                        {schedule.hours}
                      </strong>
                    </div>
                  ))}
                </div>

                {/* Informacje dodatkowe */}
                <div className="mt-4 pt-3 border-top">
                  <div className="d-flex align-items-start mb-3">
                    <i className="bi bi-info-circle text-primary me-2 mt-1"></i>
                    <div>
                      <h6 className="fw-bold mb-1">Informacje</h6>
                      <p className="text-muted small mb-0">
                        Pierwsza wizyta trwa około 60 minut i obejmuje
                        szczegółową diagnozę oraz plan leczenia.
                      </p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <i className="bi bi-calendar-check text-primary me-2 mt-1"></i>
                    <div>
                      <h6 className="fw-bold mb-1">Rezerwacja wizyt</h6>
                      <p className="text-muted small mb-0">
                        Zalecamy wcześniejszą rezerwację terminu, szczególnie w
                        godzinach popołudniowych.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Przycisk umawiania wizyty */}
                <div className="mt-4 pt-3">
                  <a
                    href="tel:+48883940074"
                    className="btn btn-primary btn-lg w-100 py-3 fw-bold d-flex align-items-center justify-content-center"
                  >
                    <i className="bi bi-calendar-check me-2 fs-4"></i>
                    Umów wizytę telefonicznie
                  </a>
                  <p className="text-center text-muted small mt-2 mb-0">
                    lub napisz do nas e-mail: fizjoterapiaprovitale@gmail.com
                  </p>
                </div>
              </div>
            </div>
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

        .icon-box {
          transition: all 0.3s ease;
        }

        .contact-card {
          transition: all 0.3s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
        }

        .hover-lift {
          transition: all 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }

        @keyframes animate-fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: animate-fade-in 0.8s ease-out;
        }

        /* Responsywność */
        @media (max-width: 768px) {
          .display-4 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;
