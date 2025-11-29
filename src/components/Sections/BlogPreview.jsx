import BlogCard from "../UI/BlogCard";

function BlogPreview() {
  const blogPosts = [
    {
      id: 1,
      image: "Provitale/assets/ciaza.jpg",
      category: "Zdrowie",
      title: "🌸 Ból kręgosłupa w ciąży? Nie musisz się z nim męczyć! 🌸",
      excerpt:
        "Ciąża to wyjątkowy czas – ale dla wielu kobiet także okres, w którym pojawiają się bóle kręgosłupa, miednicy, odcinka lędźwiowego czy spojenia łonowego...",
      link: "https://www.facebook.com/search/top?q=provitale%20fizjoterapia%20magdalena%20czarnecka-zawadzka&locale=pl_PL!",
      author: "Magdalena Czarnecka-Zawadzka",
      date: "Listopad 25, 2025",
      readTime: "6 min",
    },
    {
      id: 2,
      image: "Provitale/assets/dyskopatia.jpg",
      category: "Zdrowie",
      title:
        "🟦 DYSKOPATIA LĘDŹWIOWA — mechanizmy, objawy i podejście terapeutyczne",
      excerpt:
        "Dyskopatia w odcinku lędźwiowym to wynik degeneracji lub przeciążenia krążka międzykręgowego, prowadzących do jego odwodnienia...",
      link: "https://www.facebook.com/permalink.php/?story_fbid=122166651344602306&id=61568069184701",
      author: "Magdalena Czarnecka-Zawadzka",
      date: "Listopad 21, 2025",
      readTime: "5 min",
    },
    {
      id: 3,
      image: "Provitale/assets/woda.jpg",
      category: "Zdrowie",
      title:
        "💧 Dlaczego nawodnienie ma kluczowe znaczenie dla regeneracji tkanek?",
      excerpt:
        "Woda to nie tylko składnik naszego ciała – to środowisko, w którym zachodzi każda reakcja biologiczna. Mięśnie, powięzi, stawy...",
      link: "#!",
      author: "Magdalena Czarnecka-Zawadzka",
      date: "Listopad 21, 2025",
      readTime: "5 min",
    },
  ];

  return (
    <section className="py-5">
      <div className="container px-5 my-5">
        <div className="row gx-5 justify-content-center">
          <div className="col-lg-8 col-xl-6">
            <div className="text-center">
              <h2 className="fw-bolder">Mój blog</h2>
              <p className="lead fw-normal text-muted mb-5">
                Poniżej znajdziesz moje ostanie wpisy
              </p>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogPreview;
