function Pricing() {
  return (
    <section id="pricing" className="py-5">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bolder display-5 mb-3">Cennik</h2>
          <p className="lead text-muted">
            Przejrzyste ceny za profesjonalne usługi fizjoterapeutyczne
          </p>
        </div>

        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body p-4 text-center">
                <h5 className="card-title fw-bold mb-3">
                  Konsultacja fizjoterapeutyczna
                </h5>
                <div className="display-6 fw-bold text-primary mb-3">
                  150 zł
                </div>
                <ul className="list-unstyled mb-4">
                  <li className="mb-2">
                    <i className="bi bi-check text-success me-2"></i>
                    Badanie funkcjonalne
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-success me-2"></i>
                    Diagnoza problemu
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-success me-2"></i>
                    Plan terapii
                  </li>
                </ul>
                <a href="#contact" className="btn btn-primary">
                  Umów wizytę
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card h-100 border-0 shadow-lg">
              <div className="card-header bg-primary text-white text-center py-3">
                <h5 className="mb-0">Terapia indywidualna</h5>
              </div>
              <div className="card-body p-4 text-center">
                <div className="display-6 fw-bold text-primary mb-3">
                  120 zł
                </div>
                <small className="text-muted">za sesję</small>
                <ul className="list-unstyled my-4">
                  <li className="mb-2">
                    <i className="bi bi-check text-success me-2"></i>
                    Terapia manualna
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-success me-2"></i>
                    Ćwiczenia lecznicze
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-success me-2"></i>
                    Fizykoterapia
                  </li>
                  <li className="mb-2">
                    <i className="bi bi-check text-success me-2"></i>
                    Kinezyterapia
                  </li>
                </ul>
                <a href="#contact" className="btn btn-primary">
                  Umów wizytę
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
