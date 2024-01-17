import { type NextPage } from "next";
import Head from "next/head";
import Navbar from '~/components/NavBar'
import Hero from "~/components/Hero";
import UseCases from "~/components/UseCases";
import Features from "~/components/Features";
import Partners from "~/components/Partners";
import Disclaimer from "~/components/Disclaimer";
import Footer from "~/components/Footer";


const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Temporal</title>
                <meta name="description" content="Decentralized Finances" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="bg-fixed bg-cover bg-center bg-no-repeat" style={{
                background: "rgba(10, 18, 29, 1) no-repeat",
                backgroundSize: 'cover',
                backgroundAttachment: "fixed"
            }}>
                <Navbar/>
                <Hero />
                <UseCases/>
                <Features />
                {/* <Partners /> */}
                <Disclaimer />
                <Footer />
            </main>
        </>
    );
};

export default Home;
