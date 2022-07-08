import Head from "next/head";
import Form from "../components/Form";
import Info from "../components/Info";

const contact = () => {
  return (
    <>
      <Head>
        <title>Belgravia Contacts</title>
        <meta
          name="description"
          content="For any inquiries, please do not hesitate to contact us either by email or through a telephone call."
        />
        <meta name="og:title" content="Belgravia Contacts" />
        <meta
          name="og:description"
          content="For any inquiries, please do not hesitate to contact us either by email or through a telephone call."
        />
        <meta property="og:url" content="https://belgravia.qa/contact" />
      </Head>
      <main className="text-center pt-5">
        <div className="container py-5 mt-5">
          <div className="mb-5 pb-5 px-lg-5 px-1">
            <h2>Contact With us</h2>
            <p className="fw-bolder">
              For any inquiries, please do not hesitate to contact us either by
              email or through a telephone call.
            </p>
          </div>
          <Form />
        </div>
      </main>
      <Info />
    </>
  );
};

export default contact;
