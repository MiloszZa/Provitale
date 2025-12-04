import React, { useState } from "react";

function Footer() {
  const [email, setEmail] = useState("");

  const generatePDF = () => {
    // ... (ta funkcja pozostaje bez zmian jak w oryginalnym kodzie)
    const regulaminContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="UTF-8">
          <title>Regulamin Gabinetu PROVITALE Fizjoterapia</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              margin: 40px;
              color: #333;
            }
            .header {
              text-align: center;
              margin-bottom: 40px;
              border-bottom: 2px solid #007bff;
              padding-bottom: 20px;
            }
            h1 {
              color: #007bff;
              margin-bottom: 10px;
            }
            h2 {
              color: #0056b3;
              margin-top: 30px;
              margin-bottom: 15px;
              font-size: 18px;
            }
            h3 {
              color: #0056b3;
              margin-top: 20px;
              margin-bottom: 10px;
              font-size: 16px;
            }
            .section {
              margin-bottom: 25px;
            }
            .footer {
              text-align: center;
              margin-top: 40px;
              padding-top: 20px;
              border-top: 1px solid #ccc;
              font-style: italic;
              color: #666;
            }
            .date {
              font-weight: bold;
              color: #007bff;
            }
            .print-btn {
              background-color: #007bff;
              color: white;
              border: none;
              padding: 10px 20px;
              border-radius: 5px;
              cursor: pointer;
              font-size: 16px;
              margin: 20px 0;
            }
            .print-btn:hover {
              background-color: #0056b3;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Regulamin Gabinetu PROVITALE Fizjoterapia</h1>
            <h3>Magdalena Czarnecka-Zawadzka</h3>
            <p>opublikowany w dniu <span class="date">01.09.2024 r.</span></p>
          </div>

          <div class="section">
            <h2>Cele i podstawowe zadania gabinetu</h2>
            <p>1. Celem gabinetu jest udzielanie świadczeń rehabilitacyjnych.</p>
            <p>2. Do zadań z zakresu rehabilitacji należy: wykonywanie zabiegów leczniczych z zakresu metod specjalnych fizjoterapii oraz kinezyterapii.</p>
            <p>3. Świadczenie usług z zakresu osteopatii.</p>
            <p>4. Dbanie o bezpieczeństwo pacjenta.</p>
          </div>

          <div class="section">
            <h2>Przebieg procesu działania świadczeń</h2>
            <p>1. Gabinet organizuje rehabilitację w sposób zapewniający pacjentom najbardziej dogodną formę korzystania ze świadczeń.</p>
            <p>2. Fizjoterapeuta na podstawie skierowania od lekarza specjalisty lub wywiadu i funkcjonalnego badania pacjenta proponuje rodzaj zabiegów i czas trwania terapii.</p>
            <p>3. Fizjoterapeuta ma prawo wymagać przeprowadzenia dodatkowych badań.</p>
            <p>4. Gabinet prowadzi elektroniczną dokumentację medyczną świadczeń oraz zapewnia ochronę danych zawartych w tej dokumentacji.</p>
            <p>5. Gabinet może udostępnić dokumentację medyczną:</p>
            <ul>
              <li>pacjentowi lub jego przedstawicielowi ustawowemu, bądź osoba upoważniona przez pacjenta,</li>
              <li>zakładowi opieki zdrowotnej i osobom wykonującym zawód medyczny poza zakładami opieki zdrowotnej, jeśli dokumentacja ta jest niezbędna do zapewnienia ciągłości świadczeń zdrowotnych</li>
              <li>innym upoważnionym organom.</li>
            </ul>
          </div>

          <div class="section">
            <h2>Zasady rezerwowania wizyty</h2>
            <p>1. Rezerwacji zabiegów można dokonać osobiście lub telefonicznie.</p>
            <p>2. Dokonując rezerwacji należy podać imię, nazwisko i telefon kontaktowy.</p>
            <p>3. Wizyty będą udzielane w terminie uzgodnionym z pacjentem.</p>
            <p>4. Istnieje możliwość przeniesienia zabiegu na inny termin pod warunkiem powiadomienia gabinetu o zmianie nie później niż 24h przed umówioną wizytą.</p>
          </div>

          <div class="section">
            <h2>Zasady odwołania rezerwacji wizyty</h2>
            <p>1. Pacjenci proszeni są o powiadomienie terapeuty najpóźniej 24 godz. przed terminem rezerwacji, wtedy wizyta zostanie przeniesiona na dogodny dla Pacjenta termin bez poniesienia kosztów.</p>
            <p>2. Jeśli odwołanie wizyty nastąpi później niż 24 godz. przed planowanym wykonaniem zabiegu lub Pacjent dokona rezerwacji terminu wizyty i nie stawi się o określonej godzinie, wcześniej jej nie odwołując, Pacjent zobowiązuje się do pokrycia 100% wartości odwołanej wizyty na następnej wizycie lub przelewem na konto bankowe: ING 28 1050 1605 1000 0097 6544 1341.</p>
            <p>3. Odwoływanie zabiegów możliwe jest tylko od poniedziałku do piątku, tzn. zabieg z poniedziałku z godziny 12:00 można odwołać do piątku do 12:00.</p>
            <p>4. Święta/dni wolne od pracy: w przypadku gdy dzień ustawowo wolny od pracy wypada w tygodniu (poniedziałek – piątek), a wizyta jest umówiona w pierwszym dniu roboczym, należy ją odwołać najpóźniej w ostatnim dniu roboczym poprzedzającym dzień wolny. Czyli jeżeli święto/dzień wolny jest w środę, a wizyta umówiona jest na czwartek o godzinie 12:00, należy ją odwołać najpóźniej we wtorek do godziny 12:00.</p>
            <p>5. Jeżeli Pacjent dokonał rezerwacji online i wizyta nie zostanie odwołana przez Pacjenta wcześniej niż 24h lub Pacjent nie stawił się w umówionym terminie, nastąpi naliczenie 100% ceny za wizytę.</p>
            <p>6. Jeśli odwołanie wizyty nastąpi przez fizjoterapeutę później niż 24h przed planowanym wykonaniem zabiegu, wizyta ta zostanie przeniesiona na najbliższy wolny termin dogodny dla Pacjenta oraz nie zostanie za nią pobrana opłata.</p>
          </div>

          <div class="section">
            <h2>Czas</h2>
            <p>1. Gabinet jest czynny od poniedziałku do piątku w godzinach od 7.00 do 20.00 z wyłączeniem świąt i weekendów.</p>
            <p>2. Firma Fizjoterapia Magdalena Czarnecka-Zawadzka zastrzega sobie możliwość zmiany czasu pracy. Informacja o zmianach będzie podana na stronie internetowej.</p>
            <p>3. Czas wizyty wynosi ok. 50 min.</p>
            <p>4. W przypadku spóźnienia się na umówiona wizytę, terapeuta nie wydłuża czasu trwania wizyty.</p>
          </div>

          <div class="section">
            <h2>Prawa pacjenta</h2>
            <p>W czasie korzystania z usług fizjoterapeutycznych pacjent ma prawo do:</p>
            <ol>
              <li>Poszanowania godności oraz uprzejmego traktowania przez personel.</li>
              <li>Świadczeń wykonywanych przez personel o odpowiednich kwalifikacjach.</li>
              <li>Rzetelnej i jasno sprecyzowanej informacji o stanie zdrowia pacjenta.</li>
              <li>Pełnej dyskrecji dotyczącej informacji na temat pacjenta.</li>
              <li>Pełnej informacji na temat proponowanych zabiegów fizjoterapeutycznych.</li>
              <li>Pomocy i wyjaśnień o sposobie wykonywania zabiegów fizjoterapeutycznych.</li>
            </ol>
          </div>

          <div class="section">
            <h2>Obowiązki pacjenta</h2>
            <p>W czasie korzystania z usług fizjoterapeutycznych do obowiązków pacjenta należy:</p>
            <ol>
              <li>Przestrzeganie zasad higieny osobistej.</li>
              <li>Posiadania stroju sportowego w trakcie wykonywania ćwiczeń.</li>
              <li>Stawiania się punktualnie na umówioną wizytę.</li>
              <li>Przestrzegania zaleceń lekarza i fizjoterapeuty.</li>
              <li>Poinformowanie fizjoterapeuty o aktualnych i przebytych schorzeniach oraz istniejących przeciwwskazaniach do rehabilitacji.</li>
              <li>Poinformowanie fizjoterapeuty jeżeli stan zdrowia ulegnie zmianie.</li>
              <li>Przestrzeganie zakazu palenia tytoniu oraz spożywania alkoholu na terenie gabinetu.</li>
              <li>Przestrzeganie zasad bezpieczeństwa przeciwpożarowego.</li>
            </ol>
          </div>

          <div class="section">
            <h2>Postanowienia końcowe</h2>
            <p>• Regulamin wchodzi w życie z dniem 01.09.2024</p>
            <p>• Gabinet PROVITALE Fizjoterapia Magdalena Czarnecka-Zawadzka zastrzega sobie możliwość zmiany Regulaminu i Cennika.</p>
            <p>• Korzystanie z zabiegów fizjoterapii jest jednoznaczne z akceptacją wyżej wymienionego regulaminu.</p>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <button class="print-btn" onclick="window.print()">
              🖨️ Drukuj lub Zapisz jako PDF
            </button>
          </div>

          <div class="footer">
            <p>Dokument wygenerowany: ${new Date().toLocaleDateString(
              "pl-PL"
            )}</p>
            <p>Gabinet PROVITALE Fizjoterapia | ul. Warszawska 290, 43-155 Bieruń</p>
            <p>Tel: +48 883 940 074 | Email: fizjoterapiaprovitale@gmail.com</p>
          </div>
        </body>
      </html>
    `;

    // Tworzymy nowe okno z zawartością regulaminu
    const printWindow = window.open("", "_blank", "width=800,height=600");
    printWindow.document.write(regulaminContent);
    printWindow.document.close();

    // Fokus na nowym oknie
    printWindow.focus();
  };

  const handleDownloadPDF = () => {
    generatePDF();
  };

  return (
    <footer className="footer-section position-relative overflow-hidden">
      {/* Background elements */}
      <div className="position-absolute top-0 start-0 w-100 h-100 bg-gradient-dark"></div>

      {/* Animated dots background */}
      <div className="position-absolute top-0 start-0 w-100 h-100 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="position-absolute bg-primary rounded-circle"
            style={{
              width: `${Math.random() * 10 + 2}px`,
              height: `${Math.random() * 10 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 20 + 10}s infinite linear`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container position-relative z-1">
        {/* Main Footer Content */}
        <div className="row g-5 py-5">
          {/* Brand Column */}
          <div className="col-lg-4 col-md-6">
            <div className="brand-section mb-4">
              <div className="d-flex align-items-center mb-4">
                <div className="logo-icon me-3">
                  <div className="logo-circle bg-gradient-primary text-white d-flex align-items-center justify-content-center">
                    <i className="bi bi-heart-pulse fs-3"></i>
                  </div>
                </div>
                <div>
                  <h2 className="fw-bold text-white mb-0">Provitale</h2>
                  <p className="text-light mb-0">Fizjoterapia & Osteopatia</p>
                </div>
              </div>
              <p className="text-light mb-4">
                Profesjonalna fizjoterapia z indywidualnym podejściem do każdego
                pacjenta. Pomagam wrócić do pełnej sprawności i poprawić jakość
                życia.
              </p>

              <div className="d-flex gap-3 mb-4">
                {[
                  { icon: "bi-award-fill", label: "Doświadczenie" },
                  { icon: "bi-person-check-fill", label: "Indywidualne" },
                  { icon: "bi-shield-check", label: "Profesjonalizm" },
                ].map((item, index) => (
                  <div key={index} className="feature-pill">
                    <div className="icon-wrapper">
                      <i className={`bi ${item.icon}`}></i>
                    </div>
                    <span className="small">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Column */}
          <div className="col-lg-4 col-md-6">
            <div className="contact-section mb-4">
              <h4 className="fw-bold text-white mb-4 pb-2 border-bottom border-primary">
                <i className="bi bi-geo-alt me-2"></i>
                Kontakt
              </h4>

              <div className="contact-info">
                {[
                  {
                    icon: "bi-geo-alt-fill",
                    title: "Adres gabinetu",
                    content: "ul. Warszawska 290, 43-155 Bieruń",
                    link: null,
                  },
                  {
                    icon: "bi-telephone-fill",
                    title: "Telefon",
                    content: "+48 883 940 074",
                    link: "tel:+48883940074",
                  },
                  {
                    icon: "bi-envelope-fill",
                    title: "E-mail",
                    content: "fizjoterapiaprovitale@gmail.com",
                    link: "mailto:fizjoterapiaprovitale@gmail.com",
                  },
                  {
                    icon: "bi-clock-fill",
                    title: "Godziny pracy",
                    content: "Pon-Pt: 8:00-20:00 | Sob: 9:00-14:00",
                    link: null,
                  },
                ].map((item, index) => (
                  <div key={index} className="contact-item mb-3">
                    <div className="d-flex">
                      <div className="contact-icon">
                        <i className={`bi ${item.icon}`}></i>
                      </div>
                      <div className="ms-3">
                        <h6 className="fw-bold text-light mb-1">
                          {item.title}
                        </h6>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="text-decoration-none text-light hover-primary"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-light mb-0">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-4 d-flex gap-2">
                <a
                  href="tel:+48883940074"
                  className="btn btn-primary btn-sm d-flex align-items-center"
                >
                  <i className="bi bi-telephone me-1"></i>
                  Zadzwoń
                </a>
                <a
                  href="mailto:fizjoterapiaprovitale@gmail.com"
                  className="btn btn-outline-light btn-sm d-flex align-items-center"
                >
                  <i className="bi bi-envelope me-1"></i>
                  Napisz
                </a>
              </div>
            </div>
          </div>

          {/* Social & Links Column */}
          <div className="col-lg-4 col-md-12">
            <div className="row">
              {/* Social Media */}
              <div className="col-md-6 col-lg-12 mb-4">
                <h4 className="fw-bold text-white mb-4 pb-2 border-bottom border-primary">
                  <i className="bi bi-heart me-2"></i>
                  Obserwuj nas
                </h4>

                <div className="social-links">
                  {[
                    {
                      platform: "Facebook",
                      icon: "bi-facebook",
                      url: "https://www.facebook.com/profile.php?id=61568069184701",
                      color: "#1877f2",
                    },
                    {
                      platform: "ZnanyLekarz",
                      icon: "bi-heart-pulse",
                      url: "https://www.znanylekarz.pl/magdalena-czarnecka-zawadzka/",
                      color: "#00b894",
                    },
                    {
                      platform: "Instagram",
                      icon: "bi-instagram",
                      url: "#",
                      color: "#e4405f",
                    },
                    {
                      platform: "Google Maps",
                      icon: "bi-geo",
                      url: "https://maps.google.com/?q=ul.+Warszawska+290,+43-155+Bieruń",
                      color: "#34a853",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-btn"
                      style={{ "--social-color": social.color }}
                    >
                      <i className={`bi ${social.icon}`}></i>
                      <span>{social.platform}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="divider py-1">
          <div className="line"></div>
          <div className="logo-center">
            <div className="logo-small bg-gradient-primary text-white">
              <i className="bi bi-heart-pulse"></i>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="row py-4">
          <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
            <p className="text-light mb-0">
              <i className="bi bi-c-circle me-1"></i>
              2025 Fizjoterapia Magdalena Czarnecka-Zawadzka. Wszelkie prawa
              zastrzeżone.
            </p>
            <p className="small text-light mt-2">
              NIP: ... | REGON: ... | Gabinet Fizjoterapii
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              <a href="#privacy" className="text-light small hover-primary">
                Polityka prywatności
              </a>
              <a href="#terms" className="text-light small hover-primary">
                Warunki korzystania
              </a>
              <a href="#cookies" className="text-light small hover-primary">
                Cookies
              </a>
            </div>
            <p className="small text-light mt-3">
              Stworzone z <i className="bi bi-heart-fill text-danger mx-1"></i>{" "}
              dla Twojego zdrowia
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-section {
          background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
          color: white;
          position: relative;
        }

        .bg-gradient-dark {
          background: linear-gradient(
            135deg,
            rgba(26, 26, 46, 0.95) 0%,
            rgba(22, 33, 62, 0.95) 100%
          );
        }

        .logo-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0d6efd 0%, #198754 100%);
          transition: all 0.3s ease;
        }

        .logo-circle:hover {
          transform: rotate(360deg);
          box-shadow: 0 0 20px rgba(13, 110, 253, 0.5);
        }

        .feature-pill {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 10px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          min-width: 80px;
          transition: all 0.3s ease;
        }

        .feature-pill:hover {
          background: rgba(13, 110, 253, 0.1);
          transform: translateY(-3px);
        }

        .feature-pill .icon-wrapper {
          width: 40px;
          height: 40px;
          background: rgba(13, 110, 253, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 8px;
        }

        .feature-pill i {
          color: #0d6efd;
          font-size: 1.2rem;
        }

        .newsletter-card {
          background: rgba(255, 255, 255, 0.05);
          padding: 20px;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-item {
          padding: 10px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .contact-item:hover {
          background: rgba(255, 255, 255, 0.05);
          transform: translateX(5px);
        }

        .contact-icon {
          width: 40px;
          height: 40px;
          background: rgba(13, 110, 253, 0.1);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .contact-icon i {
          color: #0d6efd;
          font-size: 1.2rem;
        }

        .hover-primary:hover {
          color: #0d6efd !important;
          text-decoration: none;
        }

        .social-links {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 10px;
        }

        .social-btn {
          display: flex;
          align-items: center;
          padding: 10px 15px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid transparent;
        }

        .social-btn:hover {
          background: var(--social-color);
          transform: translateY(-3px);
          border-color: var(--social-color);
          color: white;
        }

        .social-btn i {
          margin-right: 8px;
          font-size: 1.2rem;
        }

        .quick-links {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .quick-link-item {
          padding: 10px 15px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 8px;
          color: white;
          text-decoration: none;
          transition: all 0.3s ease;
          border: none;
          text-align: left;
        }

        .quick-link-item:hover {
          background: rgba(13, 110, 253, 0.1);
          transform: translateX(5px);
          color: #0d6efd;
        }

        .pdf-link {
          background: rgba(220, 53, 69, 0.1);
          color: #dc3545;
        }

        .pdf-link:hover {
          background: rgba(220, 53, 69, 0.2);
          color: #dc3545 !important;
        }

        .divider {
          position: relative;
          margin: 2rem 0;
        }

        .line {
          height: 1px;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.2),
            transparent
          );
        }

        .logo-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        .logo-small {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0d6efd 0%, #198754 100%);
          box-shadow: 0 0 15px rgba(13, 110, 253, 0.3);
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          33% {
            transform: translateY(-20px) rotate(120deg);
          }
          66% {
            transform: translateY(10px) rotate(240deg);
          }
        }

        /* Responsive */
        @media (max-width: 768px) {
          .social-links {
            grid-template-columns: 1fr;
          }

          .feature-pill {
            min-width: 70px;
            padding: 8px;
          }

          .feature-pill .icon-wrapper {
            width: 35px;
            height: 35px;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
