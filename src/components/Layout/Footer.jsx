function Footer() {
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
            <div className="d-flex justify-content-center justify-content-md-end">
              <a
                href="#"
                className="text-light text-decoration-none me-3 small"
              >
                <i className="bi bi-shield-check me-1"></i>
                Polityka Prywatności
              </a>
              <a href="#" className="text-light text-decoration-none small">
                <i className="bi bi-file-text me-1"></i>
                Regulamin
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
