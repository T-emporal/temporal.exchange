import type {NextPage} from "next";
import {NextSeo} from "next-seo";
import {useWindowSize} from "~/hooks/useWindowSize";

const LitePaper: NextPage = () => {
    const windowSize = useWindowSize();
    return (
        <>
            <NextSeo title="LitePaper"/>
            <main className="flex min-h-screen flex-col items-center justify-center">
                {/*<h1 className="text-4xl text-white font-mono">Coming Soon🔥</h1>*/}
                <iframe title="Temporal LitePaper"
                        height={windowSize.height}
                        width={windowSize.width}
                    // type="application/pdf"
                        src='temporal-litepaper.pdf'
                />
            </main>
        </>
    )
}

export default LitePaper;