import type {NextPage} from "next";
import {NextSeo} from "next-seo";
import {useWindowSize} from "~/hooks/useWindowSize";

const LitePaper: NextPage = () => {
    const windowSize = useWindowSize();
    return (
        <>
            <NextSeo title="Litepaper"/>
            <main className="flex min-h-screen flex-col items-center justify-center">
                {/*<h1 className="text-4xl text-white font-mono">Coming Soon🔥</h1>*/}
                {/*<iframe title="Temporal LitePaper"*/}
                {/*        height={windowSize.height}*/}
                {/*        width={windowSize.width}*/}
                {/*    // type="application/pdf"*/}
                {/*        src='temporal-litepaper.pdf'*/}
                {/*/>*/}
                <iframe src="https://drive.google.com/file/d/1_HA_d85yX3NBQtm3B3mXzMLEty9duVof/preview"
                        width={windowSize.width} height={windowSize.height} allow="autoplay"></iframe>
            </main>
        </>
    )
}

export default LitePaper;