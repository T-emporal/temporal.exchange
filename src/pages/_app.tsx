import { type AppType } from "next/dist/shared/lib/utils";
import Layout from "~/components/Layout";
import "~/styles/globals.css";
import localFont from 'next/font/local'

// const sansation = localFont({
//   src: [
//     {
//       path: '../../public/font-sansation/Sansation_Light.ttf',
//       weight: '200',
//       style: 'normal',
//     },
//     {
//       path: '../../public/font-sansation/Sansation_Regular.ttf',
//       weight: '400',
//       style: 'normal',
//     },
//     {
//       path: '../../public/font-sansation/Sansation_Bold.ttf',
//       weight: '700',
//       style: 'normal',
//     },
//     {
//       path: '../../public/font-sansation/Sansation_Light_Italic.ttf',
//       weight: '200',
//       style: 'italic',
//     },
//     {
//       path: '../../public/font-sansation/Sansation_Italic.ttf',
//       weight: '400',
//       style: 'italic',
//     },
//     {
//       path: '../../public/font-sansation/Sansation_Bold_Italic.ttf',
//       weight: '700',
//       style: 'italic',
//     }
//   ],
//   variable: '--font-sansation'
// })


// const MyApp: AppType = ({ Component, pageProps }) => {
//   return (
//     <Layout className={`${sansation.variable}`}>
//       <Component {...pageProps} />
//     </Layout>
//   );
// };

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
