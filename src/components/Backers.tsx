import type { NextPage } from "next";
import Image from 'next/image';

import React from 'react';

const Backers: NextPage = () => {

    return (
        <section className="dark:text-gray-100">

            <div className="container mx-auto px-4 md:px-24 mt-32">
                <div className="relative justify-center z-10 mt-8 md:mt-12 text-center text-5xl font-light text-white lg:flex">
                    Backed By
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4  mt-20">

                    <div className="relative rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-400/60 to-transparent rounded-xl z-0"></div>
                        <div className="relative p-10 h-full text-center backdrop-blur-[4px] rounded-xl"
                            style={{
                                margin: '0.05rem',
                                background: 'linear-gradient(rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%), rgba(10, 18, 29, 1)',
                                boxShadow: 'inset 3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10)',
                            }}>
                            <div className="flex justify-center items-center h-full">
                                <Image src="./Outlier_Ventures_Logo.svg" alt="Outlier Ventures Logo" width={350} height={100} />
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-400/60 to-transparent rounded-xl z-0"></div>
                        <div className="relative p-10 h-full text-center backdrop-blur-[4px] rounded-xl"
                            style={{
                                margin: '0.05rem',
                                background: 'linear-gradient(rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%), rgba(10, 18, 29, 1)',
                                boxShadow: 'inset 3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10)',
                            }}>
                            <div className="flex justify-center items-center h-full">
                                <Image src="./Wormhole_Logo_Full.svg" alt="Wormhole Logo" width={320} height={100} />
                            </div>
                        </div>
                    </div>

                    <div className="relative rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-400/60 to-transparent rounded-xl z-0"></div>
                        <div className="relative p-10 h-full text-center backdrop-blur-[4px] rounded-xl"
                            style={{
                                margin: '0.05rem',
                                background: 'linear-gradient(rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%), rgba(10, 18, 29, 1)',
                                boxShadow: 'inset 3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10)',
                            }}>
                            <div className="flex justify-center items-center h-full">
                                <Image src="./Borderless_Logo.svg" alt="Borderless Logo" width={300} height={100} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default Backers;