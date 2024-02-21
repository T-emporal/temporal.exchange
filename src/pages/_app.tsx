import { type AppType } from "next/dist/shared/lib/utils";
import Layout from "~/components/Layout";
import "~/styles/globals.css";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <GoogleTagManager gtmId="GTM-KRVCD2GP" />
      <GoogleAnalytics gaId="G-JN63Q35Z7F" />
    </Layout>
  );
};

export default MyApp;
