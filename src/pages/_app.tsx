import { type AppType } from "next/dist/shared/lib/utils";
import Layout from "~/components/Layout";
import "~/styles/globals.css";

import { AnimatePresence } from 'framer-motion'
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google'

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <AnimatePresence mode="wait" initial={false}>
        <Component {...pageProps} />
      </AnimatePresence>

      <GoogleTagManager gtmId="GTM-KRVCD2GP" />
      <GoogleAnalytics gaId="G-JN63Q35Z7F" />
    </Layout>
  );
};

export default MyApp;
