import "@/styles/globals.css";
import Layout from "@/components/Layout";

const App = ({ Component, pageProps }) => {
  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
