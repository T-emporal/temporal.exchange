import {type NextPage} from "next";
import Head from "next/head";
import Hero from "~/components/Hero";
import Video from "./Video";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Temporal</title>
                <meta name="description" content="Decentralized Finances"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="bg-fixed bg-cover bg-center bg-no-repeat" style={{
                background: "rgba(255, 255, 255, .5) url('background.jpg') no-repeat",
                backgroundSize: 'cover'
            }}>

                {/* <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]"> */}
                <Video/>
                {/* <Features/> */}
            </main>
        </>
    );
};

export default Home;
