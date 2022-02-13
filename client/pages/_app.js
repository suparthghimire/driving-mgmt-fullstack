import "../styles/style-light.min.css";
import "../styles/icons.min.css";
import "../styles/globals.css";
import "react-toastify/dist/ReactToastify.css";

import Layout from "../components/Layout";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
