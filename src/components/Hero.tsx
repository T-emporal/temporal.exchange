import type { NextPage } from "next";
import Link from "next/link";

const Hero: NextPage = () => {
    return (
        <section className="text-gray-100">
            <div
                className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-18 xl:max-w-9xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">A New DeFi Primitive:
                    <span className="text-zinc-300"> Market-Determined Yield Curves</span>
                </h1>
                <p className="text-left text-zinc-200 px-8 mt-8 mb-12 text-xl font-semibold">
                    <span>Temporal’s realtime continuous yield curves are shaped purely by market forces</span>
                    <br />
                    <div className="mt-2">
                    <span>Users can</span>
                        <ul className="ml-4">
                            <li>• Customize maturity</li>
                            <li>• Lend / Borrow at fixed-rates</li>
                        </ul>
                    </div>
                </p>
                <div className="flex flex-wrap justify-center">
                    <Link href="/comingSoon">
                        <button className="px-14 py-5 m-2 text-lg font-semibold rounded bg-black text-white">Join Waitlist
                        </button>
                    </Link>
                    {/* <Link href="/litepaper">
                        <button className="px-14 py-5 m-2 text-lg font-semibold rounded text-black bg-white">Litepaper
                        </button>
                    </Link>
                    <Link href="https://demo.temporal.exchange/">
                        <button className="px-14 py-5 m-2 text-lg font-semibold rounded text-black bg-white">Demo
                        </button>
                    </Link> */}
                </div>
            </div>
        </section>
    )
}

export default Hero;