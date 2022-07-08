import Head from "next/head";
import ResForm from "../components/ResForm";

const reservation = () => {

  return (
    <>
      <Head>
        <title>Book a Table in Belgravia Restaurant</title>
        <meta name="description" content="Click to book and reserve your table before it’s too late!" />
        <meta name="og:title" content="Book a Table in Belgravia Restaurant" />
        <meta name="og:description" content="Click to book and reserve your table before it’s too late!" />
        <meta property="og:url" content="https://belgravia.qa/reservation" />

      </Head>
      <header className="bg-light reservation py-5">
        <div className="container mt-5">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2>book a table</h2>
              <p>Book your table online at Belgravia Restaurant now and enjoy the European cuisine in Al Hazm Mall.</p>
            </div>
            <div className="col-md-6">
              <ResForm />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default reservation