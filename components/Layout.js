import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, className, pageProps, ...rest }) => {
  return (
    <div
      className="w-screen flex-column justify-center items-center mb-6 px-6"
      {...rest}
    >
      <Head>
        <title>Jeff Hampton</title>
        <meta
          name="description"
          content="My photo portfolio. Hope you like dogs."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header pageProps={pageProps} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
