import { type NextPage } from "next";
import Head from "next/head";
import Navbar from '~/components/NavBar'
import Hero from "~/components/Hero";
import Backers from "~/components/Backers";
import UseCases from "~/components/UseCases";
import Features from "~/components/Features";
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

            <main className="font-sans">
                <Navbar/>
                <Hero />
                <UseCases/>
                <Features />
                <Disclaimer />
                <Footer />
            </main>
        </>
    );
};

export default Home;
