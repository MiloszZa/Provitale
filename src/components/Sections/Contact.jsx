function Contact() {
  return (
    <section id="contact" className="py-5">
      <div className="container px-5 my-5">
        <div className="text-center">
          <h2 className="fw-bolder display-5 mb-4">Kontakt</h2>
          <p className="lead text-muted mb-5">
            Skontaktuj się ze mną, aby umówić się na wizytę
          </p>
        </div>

        <div className="row g-4">
          <div className="col-lg-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-4">
                  <i className="bi bi-telephone text-primary me-2"></i>
                  Dane kontaktowe
                </h5>

                <div className="mb-3">
                  <i className="bi bi-telephone-fill text-primary me-2"></i>
                  <strong>Telefon:</strong>
                  <a
                    href="tel:+48883940074"
                    className="text-decoration-none ms-2"
                  >
                    +48 883 940 074
                  </a>
                </div>

                <div className="mb-3">
                  <i className="bi bi-envelope-fill text-primary me-2"></i>
                  <strong>E-mail:</strong>
                  <a
                    href="mailto:fizjoterapiaprovitale@gmail.com"
                    className="text-decoration-none ms-2"
                  >
                    fizjoterapiaprovitale@gmail.com
                  </a>
                </div>

                <div className="mb-3">
                  <i className="bi bi-geo-alt-fill text-primary me-2"></i>
                  <strong>Adres:</strong>
                  <span className="ms-2">
                    ul. Warszawska 290, 43-155 Bieruń
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h5 className="card-title fw-bold mb-4">
                  <i className="bi bi-clock text-primary me-2"></i>
                  Godziny przyjęć
                </h5>

                <div className="mb-2 d-flex justify-content-between">
                  <span>Poniedziałek - Piątek</span>
                  <strong className="text-primary">8:00 - 20:00</strong>
                </div>

                <div className="mb-2 d-flex justify-content-between">
                  <span>Sobota</span>
                  <strong className="text-primary">9:00 - 14:00</strong>
                </div>

                <div className="d-flex justify-content-between">
                  <span>Niedziela</span>
                  <strong className="text-warning">Zamknięte</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
