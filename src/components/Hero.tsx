import type { NextPage } from "next";
import Link from "next/link";

const Hero: NextPage = () => {
    return (
        <section className="text-gray-100">
            <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-18 xl:max-w-9xl">
                <h1 className="text-4xl font-bold leading-none sm:text-7xl">Unified Spot &
                    <span className="dark:text-grey-800"> Futures markets</span>
                </h1>
                <p className="px-8 mt-8 mb-12 text-lg sm:text-5xl">The next evolution in AMM and Exchanges</p>
                <div className="flex flex-wrap justify-center">
                    <Link href="/docs"><button className="px-14 py-5 m-2 text-lg font-semibold rounded bg-black text-white">Docs</button></Link>
                    <Link href="/whitepaper"><button className="px-14 py-5 m-2 text-lg font-semibold rounded text-black bg-white">WhitePaper</button></Link>
                </div>
            </div>
        </section>
    )
}

export default Hero;