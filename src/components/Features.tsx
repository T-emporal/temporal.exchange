import type { NextPage } from "next";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from "framer-motion";

const Features: NextPage = () => {

    // --------------------Framer Motion--------------------
    const scrollFeaturesRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: scrollFeaturesRef,
        offset: ["start end", "end center"],
    });

    // Transform scrollYProgress to a width percentage for animation
    const width = useTransform(scrollYProgress, [0, 0.4], ["0%", "40%"]);

    // Define the initial and final background colors and box-shadow based on the images
    const initialBackground = "#000000";
    const finalBackground = "#028583";
    const initialBoxShadow = "0px 20px 20px -40px rgba(0, 0, 0, 0.5)";
    const finalBoxShadow = "0px 10px 70px 40px rgba(2, 133, 131 1)";

    // Use Framer Motion's useTransform to interpolate between initial and final values
    const background = useTransform(
        scrollYProgress,
        [0, 1],
        [initialBackground, finalBackground]
    );
    const boxShadow = useTransform(
        scrollYProgress,
        [0, 1],
        [initialBoxShadow, finalBoxShadow]
    );

    // --------------------Framer Motion--------------------

    return (
        <section className="dark:text-gray-100">
            <div className="relative p-16 w-full md:w-3/4  container mx-auto items-center  z-10 "
                style={{
                    background: "rgb(10, 18, 29)",
                    // background: "white",
                }}>

            </div>
            <motion.div
                className="progress-bar z-1"
                style={{ width, background, boxShadow }}
            />

            <div ref={scrollFeaturesRef} className="justify-center mt-8 md:mt-24 text-center text-5xl font-light text-white lg:flex">
                Features
            </div>

            <div className="mx-4 mt-20 grid grid-cols-1 gap-4 sm:mx-24 lg:grid-cols-4">

                {/* First Card */}
                <div className="p-10 text-center backdrop-blur-[4px] rounded-xl"
                    style={{
                        background: 'radial-gradient(ellipse at center top, rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%)',
                        boxShadow: '3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10) inset',
                    }}>
                    <div className="flex justify-center items-center mb-8">
                        <img src="./FeaturesLink.png" alt="Concentrated Liquidity via a novel vAMM" />
                    </div>
                    <h3 className="text-lg mb-8 font-semi bold">Concentrated Liquidity via a novel vAMM</h3>
                </div>

                {/* Second Card */}
                <div className="p-10 text-center backdrop-blur-[4px] rounded-xl"
                    style={{
                        background: 'radial-gradient(ellipse at center top, rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%)',
                        boxShadow: '3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10) inset',
                    }}>
                    <div className="flex justify-center items-center mb-8">
                        <img src="./FeaturesDatabase.png" alt="No Liquidity Fragmentation" />
                    </div>
                    <h3 className="text-lg mb-8 font-semi bold">No Liquidity Fragmentation</h3>
                </div>

                {/* Third Card */}
                <div className="p-10 text-center backdrop-blur-[4px] rounded-xl"
                    style={{
                        background: 'radial-gradient(ellipse at center top, rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%)',
                        boxShadow: '3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10) inset',
                    }}>
                    <div className="flex justify-center items-center mb-8">
                        <img src="./FeaturesEfficiency.png" alt="Capital Efficiency" />
                    </div>
                    <h3 className="text-lg mb-8 font-semi bold">Capital Efficiency</h3>
                </div>

                {/* Fourth Card */}
                <div className="p-10 text-center backdrop-blur-[4px] rounded-xl"
                    style={{
                        background: 'radial-gradient(ellipse at center top, rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%)',
                        boxShadow: '3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10) inset',
                    }}>
                    <div className="flex justify-center items-center mb-8">
                        <img src="./FeaturesModular.png" alt="Modular Structure" />
                    </div>
                    <h3 className="text-lg mb-8 font-semi bold">Modular Structure</h3>
                </div>
            </div>


            <div className="mx-24 md:mx-48 mt-32 h-0.5 bg-gradient-to-r from-transparent via-temporal to-transparent"></div>


        </section>
    )
}

export default Features;