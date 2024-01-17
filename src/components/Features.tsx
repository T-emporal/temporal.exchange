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
            <div className="relative p-12 w-full md:w-3/4  container mx-auto items-center  z-10 "
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


            <div className="mx-4 mt-8 grid grid-cols-1 gap-4 sm:mx-24 lg:grid-cols-4">
                {/* First Card */}
                <div className="flex-1 rounded-3xl border border-[#0ABAB540] border-opacity-100 bg-black bg-opacity-40 p-8">
                    <div className="mb-4 text-4xl font-semibold text-[#0ABAB5CC]">01</div>
                    <p className="  mb-2 text-xl text-white">
                        Fixed Rate Borrowing and Lending
                    </p>
                    <div className="  text-lg font-extralight text-white">
                        Interest Rates set purely by market forces.
                    </div>
                </div>

                {/* Second Card */}
                <div className="flex-1 rounded-3xl border border-[#0ABAB540] border-opacity-100 bg-black bg-opacity-40 p-8">
                    <div className="mb-4 text-4xl font-semibold text-[#0ABAB5CC]">02</div>
                    <div className="  mb-2 text-xl text-white">
                        Customized Duration
                    </div>
                    <div className="  text-lg font-extralight text-white xl:mt-8">
                        Borrowers and Lenders can set their own maturities.
                    </div>
                </div>

                {/* Third Card */}
                <div className="flex-1 rounded-3xl border border-[#0ABAB540] border-opacity-100 bg-black bg-opacity-40  p-8">
                    <div className="mb-4 text-4xl font-semibold text-[#0ABAB5CC]">03</div>
                    <div className="  mb-2 text-xl text-white">
                        Customized Leverage Levels
                    </div>
                    <div className="  text-lg font-extralight text-white">
                        Borrowers have the option to over or under-collateralize.
                    </div>
                </div>

                {/* Fourth Card */}
                <div className="flex-1 rounded-3xl border border-[#0ABAB540] border-opacity-100 bg-black bg-opacity-40 p-8">
                    <div className="mb-4 text-4xl font-semibold text-[#0ABAB5CC]">04</div>
                    <div className="  mb-2 text-xl text-white">
                        No Liquidity Fragmentation
                    </div>
                    <div className="  text-lg font-extralight text-white">
                        A novel order book designed to cumulate liquidity.
                    </div>
                </div>
            </div>

            {/* Separator Line */}
            <div
                className="mx-24 mt-32 bg-[#0ABAB5CC] bg-opacity-5 md:mx-48"
                style={{ height: "0.1px" }}
            ></div>

        </section>
    )
}

export default Features;