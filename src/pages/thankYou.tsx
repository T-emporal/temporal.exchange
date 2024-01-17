import type {NextPage} from "next";
import {NextSeo} from "next-seo";
import {Fragment, useState} from "react";
import { useRouter } from 'next/router';

const ThankYou : NextPage= () => {

    const router = useRouter();
    const [isHovered, setIsHovered] = useState(false);

    return (<Fragment>
        <NextSeo title="Thank You"/>
        <main className="flex flex-col items-center justify-center w-screen h-screen">

        <h1 className="flex flex-col text-3xl space-y-8 md:text-5xl md:mx-16 mx-12 text-center text-white font-open font-extralight">
            
            <span className="text-[#0ABAB5]">
                    Thank You!
            </span>
            <span >
            We&apos;ll reach out to you soon.
            </span>
        </h1>

        <div 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
                onClick={(): void => { void(window.location.href="/"); }}
                className="cursor-pointer flex items-center space-x-4 mt-16 mb-4 text-white   font-extralight hover:text-[#0ABAB5]"
            >
            <img src={isHovered ? "/arrow-left-circle-hover.svg" : "/arrow-left-circle.svg"} alt="Go back" />
            <span>Go back to Homepage</span>
            </div>


        </main>
    </Fragment>)
}

export default ThankYou;