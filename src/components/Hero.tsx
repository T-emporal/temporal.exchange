import type {NextPage} from "next";
import Link from "next/link";

const Hero: NextPage = () => {
    return (
        <section className="text-gray-100">
            <div
                className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-18 xl:max-w-9xl">
                <h1 className="text-4xl font-bold leading-none sm:text-5xl">A New DeFi Primitive:
                    <span className="text-zinc-300"> Market-Determined Yield / Forward Curves</span>
                </h1>
                <p className="text-zinc-200 px-8 mt-8 mb-12 text-lg sm:text3xl font-semibold">
                    <span>Built via a novel approach of Unifying Temporally discrete markets into Realtime, Continuous Forward Curves.</span>
                    <br/>
                    <span>Applied to Debt and Derivative markets. Participants can enter Custom-duration Lending / Borrowing or Futures contracts. Priced entirely by market forces.</span>
                </p>
                <div className="flex flex-wrap justify-center">
                    <Link href="/docs">
                        <button className="px-14 py-5 m-2 text-lg font-semibold rounded bg-black text-white">Docs
                        </button>
                    </Link>
                    <Link href="/litepaper">
                        <button className="px-14 py-5 m-2 text-lg font-semibold rounded text-black bg-white">LitePaper
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Hero;