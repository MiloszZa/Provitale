import React from "react";

function Footer() {
  const generatePDF = () => {
    // Tworzymy zawartość regulaminu w formacie HTML
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
              <li>pacjentowi lub jego przedstawicielowi ustawowemu, bądź osobie upoważnionej przez pacjenta,</li>
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
              <li>Przestrzegania zakazu palenia tytoniu oraz spożywania alkoholu na terenie gabinetu.</li>
              <li>Przestrzegania zasad bezpieczeństwa przeciwpożarowego.</li>
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
    <footer className="bg-dark text-white pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Informacje o firmie */}
          <div className="col-lg-4 col-md-6 mb-4">
            <div className="d-flex align-items-center mb-3">
              <div className="bg-primary rounded-circle p-2 me-3">
                <i className="bi bi-heart-pulse text-white fs-4"></i>
              </div>
              <h4 className="fw-bold mb-0 text-primary">Provitale</h4>
            </div>
            <p className="text-light mb-3">
              Profesjonalna fizjoterapia z indywidualnym podejściem do każdego
              pacjenta. Pomagam wrócić do pełnej sprawności i poprawić jakość
              życia.
            </p>
            <div className="d-flex">
              <div className="bg-primary bg-opacity-10 rounded p-3 me-3 text-center">
                <i className="bi bi-award-fill text-primary fs-5"></i>
                <div className="small mt-1">Doświadczenie</div>
              </div>
              <div className="bg-primary bg-opacity-10 rounded p-3 me-3 text-center">
                <i className="bi bi-person-check-fill text-primary fs-5"></i>
                <div className="small mt-1">Indywidualne podejście</div>
              </div>
              <div className="bg-primary bg-opacity-10 rounded p-3 text-center">
                <i className="bi bi-shield-check text-primary fs-5"></i>
                <div className="small mt-1">Profesjonalizm</div>
              </div>
            </div>
          </div>

          {/* Kontakt */}
          <div className="col-lg-4 col-md-6 mb-4">
            <h5 className="fw-bold border-bottom border-primary pb-2 mb-4">
              <i className="bi bi-telephone me-2"></i>
              Kontakt
            </h5>

            <div className="mb-3 d-flex align-items-start">
              <i className="bi bi-geo-alt-fill text-primary me-3 mt-1"></i>
              <div>
                <h6 className="fw-bold mb-1">Adres</h6>
                <p className="mb-0 text-light">
                  ul. Warszawska 290
                  <br />
                  43-155 Bieruń
                </p>
              </div>
            </div>

            <div className="mb-3 d-flex align-items-start">
              <i className="bi bi-telephone-fill text-primary me-3 mt-1"></i>
              <div>
                <h6 className="fw-bold mb-1">Telefon</h6>
                <a
                  href="tel:+48883940074"
                  className="text-white text-decoration-none hover-text-primary"
                >
                  +48 883 940 074
                </a>
              </div>
            </div>

            <div className="mb-4 d-flex align-items-start">
              <i className="bi bi-envelope-fill text-primary me-3 mt-1"></i>
              <div>
                <h6 className="fw-bold mb-1">E-mail</h6>
                <a
                  href="mailto:fizjoterapiaprovitale@gmail.com"
                  className="text-white text-decoration-none hover-text-primary"
                >
                  fizjoterapiaprovitale@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Social Media i Godziny otwarcia */}
          <div className="col-lg-4 col-md-12 mb-4">
            <h5 className="fw-bold border-bottom border-primary pb-2 mb-4">
              <i className="bi bi-clock me-2"></i>
              Godziny przyjęć
            </h5>

            <div className="mb-4">
              <div className="d-flex justify-content-between border-bottom border-secondary pb-1 mb-2">
                <span>Poniedziałek - Piątek</span>
                <span className="fw-bold text-primary">8:00 - 20:00</span>
              </div>
              <div className="d-flex justify-content-between border-bottom border-secondary pb-1 mb-2">
                <span>Sobota</span>
                <span className="fw-bold text-primary">9:00 - 14:00</span>
              </div>
              <div className="d-flex justify-content-between">
                <span>Niedziela</span>
                <span className="fw-bold text-warning">Zamknięte</span>
              </div>
            </div>

            <h6 className="fw-bold mb-3">
              <i className="bi bi-heart me-2"></i>
              Obserwuj nas
            </h6>
            <div className="d-flex">
              <a
                href="https://www.facebook.com/profile.php?id=61568069184701"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-primary btn-sm me-2 d-flex align-items-center"
              >
                <i className="bi bi-facebook me-1"></i>
                Facebook
              </a>
              <a
                href="https://www.znanylekarz.pl/magdalena-czarnecka-zawadzka/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-info btn-sm d-flex align-items-center"
              >
                <i className="bi bi-heart-pulse me-1"></i>
                ZnanyLekarz
              </a>
            </div>
          </div>
        </div>

        {/* Stopka dolna */}
        <hr className="my-4 border-secondary" />

        <div className="row align-items-center">
          <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
            <p className="mb-0 text-light">
              <i className="bi bi-c-circle me-1"></i>
              2025 Fizjoterapia Magdalena Czarnecka Zawadzka. Wszelkie prawa
              zastrzeżone.
            </p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end flex-wrap gap-2">
              <button
                onClick={handleDownloadPDF}
                className="btn btn-outline-light btn-sm d-flex align-items-center"
              >
                <i className="bi bi-file-pdf me-1"></i>
                Pobierz Regulamin (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
