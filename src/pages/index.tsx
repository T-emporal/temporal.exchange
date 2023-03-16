import { type NextPage } from "next";
import Head from "next/head";
import Features from "~/components/Features";
import Hero from "~/components/Hero";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Temporal</title>
        <meta name="description" content="Decentralized Finances" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-fixed bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: "url('https://static.wixstatic.com/media/c1b522_ab3c6afea5c04905a84bd2e01b0463a5~mv2.jpeg/v1/fill/w_1240,h_929,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c1b522_ab3c6afea5c04905a84bd2e01b0463a5~mv2.jpeg')",
      }}>
        {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"> */}
        <Hero />
        {/* <Features/> */}
      </main>
    </>
  );
};

export default Home;
