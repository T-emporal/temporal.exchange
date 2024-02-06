import type { NextPage } from "next";
import Image from 'next/image';

import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

const Features: NextPage = () => {
    
    // --------------------Framer Motion NEW--------------------
    // Animation controls
    const controls = useAnimation();

    // Define the initial and final values for the animation
    const initialWidth = '0%';
    const finalWidth = '35%';
    const initialBackground = "#000000";
    const finalBackground = "#028583";
    const initialBoxShadow = "0px 20px 20px -40px rgba(0, 0, 0, 0.5)";
    const finalBoxShadow = "0px 0px 90px 80px rgba(2, 133, 131 1)";

    // Setup the Intersection Observer
    const scrollFeaturesRef = useRef(null);
    const inView = useInView(scrollFeaturesRef,{
        margin: "50% 0% 0% 0%"
    })
    React.useEffect(() => {
        if (inView) {
            void controls.start({
                width: finalWidth,
                background: finalBackground,
                boxShadow: finalBoxShadow,
                transition: { duration: 1 }
            });
        } else {
            void controls.start({
                width: initialWidth,
                background: initialBackground,
                boxShadow: initialBoxShadow
            });
        }
    }, [inView, controls]);

    // --------------------Framer Motion NEW--------------------

    return (
        <section className="dark:text-gray-100">
  
            <motion.div
                className="progress-bar z-1"
                style={{ width: initialWidth, background: initialBackground, boxShadow: initialBoxShadow }}
                animate={controls}
            />
            <div ref={scrollFeaturesRef} className="relative justify-center z-10 mt-8 md:mt-12 text-center text-5xl font-light text-white lg:flex">
                Features
            </div>

            <div className="mx-4 mt-20 grid grid-cols-1 gap-4 sm:mx-24 lg:grid-cols-4">

                {/* First Card */}
                <div className="relative rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-400/60 to-transparent rounded-xl z-0"></div>
                    <div className="p-10 h-full text-center backdrop-blur-[4px] rounded-xl"
                        style={{
                            margin: '0.05rem',
                            background: 'linear-gradient(rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%), rgba(10, 18, 29, 1)',
                            boxShadow: '3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10) inset',
                            position: 'relative',
                            zIndex: 1
                        }}>
                        <div className="flex justify-center items-center mb-8">
                            <Image src="/FeaturesLink.png" alt="Concentrated Liquidity via a novel vAMM" width={100} height={100} />
                        </div>
                        <h3 className="default-sans-serif text-white text-lg mb-8 font-semi bold">Concentrated Liquidity via a novel vAMM</h3>
                    </div>
                </div>

                {/* Second Card */}
                <div className="relative rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-400/60 to-transparent rounded-xl z-0"></div>
                    <div className="p-10 h-full text-center backdrop-blur-[4px] rounded-xl"
                        style={{
                            margin: '0.05rem',
                            background: 'linear-gradient(rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%), rgba(10, 18, 29, 1)',
                            boxShadow: '3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10) inset',
                            position: 'relative',
                            zIndex: 1
                        }}>
                        <div className="flex justify-center items-center mb-8">
                            <Image src="/FeaturesDatabase.png" alt="No Liquidity Fragmentation" width={100} height={100} />
                        </div>
                        <h3 className="default-sans-serif text-white text-lg mb-8 font-semi bold">No Liquidity Fragmentation</h3>
                    </div>
                </div>

                {/* Third Card */}
                <div className="relative rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-400/60 to-transparent rounded-xl z-0"></div>
                    <div className="p-10 h-full text-center backdrop-blur-[4px] rounded-xl"
                        style={{
                            margin: '0.05rem',
                            background: 'linear-gradient(rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%), rgba(10, 18, 29, 1)',
                            boxShadow: '3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10) inset',
                            position: 'relative',
                            zIndex: 1
                        }}>
                        <div className="flex justify-center items-center mb-8">
                            <Image src="/FeaturesEfficiency.png" alt="Capital Efficiency" width={100} height={100} />
                        </div>
                        <h3 className="default-sans-serif text-white text-lg mb-8 font-semi bold">Capital Efficiency</h3>
                    </div>
                </div>

                {/* Fourth Card */}
                <div className="relative rounded-xl overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-gray-400/60 to-transparent rounded-xl z-0"></div>
                    <div className="p-10 h-full text-center backdrop-blur-[4px] rounded-xl"
                        style={{
                            margin: '0.05rem',
                            background: 'linear-gradient(rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%), rgba(10, 18, 29, 1)',
                            boxShadow: '3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10) inset',
                            position: 'relative',
                            zIndex: 1
                        }}>
                        <div className="flex justify-center items-center mb-8">
                            <Image src="/FeaturesModular.png" alt="Modular Structure" width={100} height={100} />
                        </div>
                        <h3 className="default-sans-serif text-white text-lg mb-8 font-semi bold">Modular Structure</h3>
                    </div>
                </div>
            </div>


            <div className="mx-24 md:mx-48 mt-32 h-0.5 bg-gradient-to-r from-transparent via-temporal to-transparent"></div>


        </section>
    )
}

export default Features;