function Testimonial() {
  const testimonials = [
    {
      text: "Pani Magdalena pomogła mi wrócić do pełnej sprawności po kontuzji kolana. Profesjonalne podejście i indywidualny plan terapii sprawiły, że już po miesiącu mogłem wrócić do treningów.",
      author: "Marek Kowalski",
      role: "Sportowiec amator",
      rating: 5,
    },
    {
      text: "Bóle kręgosłupa dokuczały mi od lat. Dzięki terapii u Pani Magdaleny pozbyłam się dolegliwości i nauczyłam się jak prawidłowo dbać o postawę. Polecam z całego serca!",
      author: "Anna Nowak",
      role: "Pacjentka",
      rating: 5,
    },
    {
      text: "Fantastyczne podejście do pacjenta! Pani Magda nie tylko pomogła mojemu dziecku z wadą postawy, ale też wytłumaczyła nam wszystko w przystępny sposób. Bardzo profesjonalna obsługa.",
      author: "Katarzyna Wiśniewska",
      role: "Mama pacjenta",
      rating: 5,
    },
  ];

  return (
    <section className="py-5 bg-white" id="testimonial">
      <div className="container px-5 my-5">
        <div className="text-center mb-5">
          <h2 className="fw-bolder display-5 mb-3">Opinie Pacjentów</h2>
          <p className="lead text-muted">
            Zobacz co mówią pacjenci o efektach mojej pracy
          </p>
        </div>

        <div className="row g-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-4">
                  {/* Gwiazdki */}
                  <div className="text-warning mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <i key={i} className="bi bi-star-fill"></i>
                    ))}
                  </div>

                  {/* Tekst opinii */}
                  <div className="fs-6 mb-4 fst-italic text-muted">
                    "{testimonial.text}"
                  </div>

                  {/* Autor */}
                  <div className="d-flex align-items-center">
                    <div className="flex-shrink-0">
                      <div
                        className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "50px", height: "50px" }}
                      >
                        <i className="bi bi-person-fill fs-5"></i>
                      </div>
                    </div>
                    <div className="flex-grow-1 ms-3">
                      <div className="fw-bold text-dark">
                        {testimonial.author}
                      </div>
                      <div className="small text-muted">{testimonial.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
