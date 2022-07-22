import Link from "next/link";

const NotFoundPage = () => {
  return (
    <header className="error_page">
      <div className="container">
        <div className="not_found_page">
          <div>404 error</div>
          <p>
            this page not found.
            <Link href="/">
              <a className="btn btn-lg btn-dark"> back to home page</a>
            </Link>
          </p>
        </div>
      </div>
    </header>
  );
};

export default NotFoundPage;
