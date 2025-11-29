function BlogCard({ post }) {
  return (
    <div className="col-lg-4 mb-5">
      <div className="card h-100 shadow border-0">
        <img
          className="card-img-top"
          src={post.image}
          height="300"
          alt={post.title}
        />
        <div className="card-body p-4">
          <div className="badge bg-primary bg-gradient rounded-pill mb-2">
            {post.category}
          </div>
          <a
            className="text-decoration-none link-dark stretched-link"
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h5 className="card-title mb-3">{post.title}</h5>
          </a>
          <p className="card-text mb-0">{post.excerpt}</p>
        </div>
        <div className="card-footer p-4 pt-0 bg-transparent border-top-0">
          <div className="d-flex align-items-end justify-content-between">
            <div className="d-flex align-items-center">
              <img
                className="rounded-circle me-3"
                src="/assets/magda2 - Copy.jpg"
                height="40"
                width="40"
                alt={post.author}
              />
              <div className="small">
                <div className="fw-bold">{post.author}</div>
                <div className="text-muted">
                  {post.date} &middot; {post.readTime}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
