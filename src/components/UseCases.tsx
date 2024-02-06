import type { NextPage } from "next";
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';

import CurvedChart from "~/components/cards/YieldCurve";
import PlaceOrderCard from "~/components/cards/OrderCard";
import type { ScriptableContext } from "chart.js";
import { motion, useInView, useAnimation } from "framer-motion";


// --------------------Chart Setup--------------------

type ChartOptions = {
    responsive: boolean;
    animation?: object;
    elements?: object;
    plugins?: object;
    maintainAspectRatio: boolean;
    scales: object;
};

const curvedData = {
    labels: [0, 2, 4, 6, 8, 10],
    datasets: [
        {
            label: 'Yield',
            data: [3.00, 3.05, 3.10, 3.15, 3.20, 3.25, 3.30],
            fill: true,
            backgroundColor: (context: ScriptableContext<"line">) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, "rgba(0, 52, 100, 1)");
                gradient.addColorStop(0.5, "rgba(0, 52, 100, 0.7)");
                gradient.addColorStop(1, "rgba(0, 52, 100, 0.1)");
                return gradient;
            },
            borderColor: 'rgba(0, 52, 100, 1)',
            tension: 0.4,
        },
    ],
};

const curvedOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    elements: { point: { radius: 1, rotation: 30 } },
    plugins: {
        legend: {
            position: 'top' as const,
            display: false,
        },
        title: {
            display: true,
        },
        customCanvasBackgroundColor: {
            color: "transparent",
            display: false,
        },
    },
    scales: {
        x: {
            beginAtZero: true,
            title: {
                display: true,
                text: 'DURATION',
                color: 'white',
            },
            grid: {
                display: false,
            },
            ticks: {
                callback: function (value: number) {
                    return value !== 0 ? value * 2 : '';
                },
            }
        },
        y: {
            beginAtZero: false,
            min: 2.95,
            title: {
                display: true,
                text: 'YIELD',
                color: 'white',
            },
            grid: {
                display: false,
            },
            ticks: {
                callback: function (value: number) {
                    return value >= 3.00 ? Number(value).toFixed(2) : '';
                },
            }
        },
    },
};

// --------------------Chart Setup--------------------


const Features: NextPage = () => {

    // --------------------Framer Motion NEW--------------------
    // Animation controls
    const controls = useAnimation();

    // Define the initial and final values for the animation
    const initialWidth = '0%';
    const finalWidth = '40%'; // Adjust according to your preference
    const initialBackground = "#000000";
    const finalBackground = "#028583";
    const initialBoxShadow = "0px 20px 20px -40px rgba(0, 0, 0, 0.5)";
    const finalBoxShadow = "0px 50px 100px 70px rgba(2, 133, 131 1)";

    // Setup the Intersection Observer
    const scrollUseCasesRef = useRef(null)
    const scrollUseCasesinView = useInView(scrollUseCasesRef, {
        margin: "50% 0% 0% 0%"
    })
    React.useEffect(() => {
        if (scrollUseCasesinView) {
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
    }, [scrollUseCasesinView, controls]);

    // --------------------Framer Motion NEW--------------------


    // --------------------Chart Animation--------------------
    const [key, setKey] = useState(0);

    const ref = useRef(null)
    const inView = useInView(ref, {
        margin: "50% 0% 50% 0%"
    })


    useEffect(() => {

        if (inView) {
            // const totalDuration = 2000;
            // const delayBetweenPoints = totalDuration / curvedData.labels.length;

            // const animation = {
            //     x: {
            //         type: 'number',
            //         easing: 'linear',
            //         duration: delayBetweenPoints,
            //         from: NaN,
            //         delay: (ctx: any) => ctx.type === 'data' && !ctx.xStarted ? (ctx.xStarted = true, ctx.index * delayBetweenPoints) : 0,
            //     },
            //     y: {
            //         type: 'number',
            //         easing: 'linear',
            //         duration: delayBetweenPoints,
            //         from: (ctx: any) => ctx.chart.scales.y.getPixelForValue(2.95),
            //         delay: (ctx: any) => ctx.type === 'data' && !ctx.yStarted ? (ctx.yStarted = true, ctx.index * delayBetweenPoints) : 0,
            //     },
            // };
            // setChartOptions(prevOptions => {
            //     const newOptions = { ...prevOptions, animation };
            //     return newOptions;
            // });
            setKey(prevKey => prevKey + 1);

        }
    }, [inView]);

    // --------------------Chart Animation--------------------

    return (
        <section className="dark:text-gray-100">

            <div className="relative p-16 m-2 w-full md:w-3/4  container mx-auto items-center  z-10 "
                style={{
                    background: "rgb(10, 18, 29)",
                }}>

            </div>

            <motion.div
                className="progress-bar z-1"
                style={{ width: initialWidth, background: initialBackground, boxShadow: initialBoxShadow }}
                animate={controls}
            />
            <div ref={scrollUseCasesRef} className="relative justify-center z-10 mt-8 md:mt-12 text-center text-5xl font-light text-white lg:flex">
                Use Cases
            </div>

            <div className="bg-dark-blue text-white ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center py-12">
                        <h1 className="text-3xl mt-12 font-semibold tracking-widest">YIELD TRADING</h1>
                        <p className="default-sans-serif mt-12 text-xl">Empower your users with an unparalleled experience in trading yield</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
                        <div className="col-span-2">
                            <div className="relative rounded-xl overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-b from-gray-400/60 to-transparent rounded-xl z-0"></div>
                                <PlaceOrderCard />
                            </div>
                        </div>
                        <div className="col-span-3 relative rounded-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-400/60 to-transparent rounded-xl z-0"></div>
                            <div className=" backdrop-blur-[4px] text-xl rounded-xl p-6"
                                style={{
                                    margin: '0.05rem',
                                    background: 'linear-gradient(rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%), rgba(10, 18, 29, 1)',
                                    boxShadow: '3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10) inset',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                <span className="text-lg font-bold text-[#f2f2f2] uppercase">
                                    Yield Curve
                                </span>
                                <div ref={ref}>
                                    <CurvedChart data={curvedData} options={curvedOptions} toggleSwitch={true} key={key} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-2">

                        <div className="relative rounded-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-400/60 to-transparent rounded-xl z-0"></div>
                            <div className="relative p-10 h-full text-center backdrop-blur-[4px] rounded-xl"
                                style={{
                                    margin: '0.05rem',
                                    background: 'linear-gradient(rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%), rgba(10, 18, 29, 1)',
                                    boxShadow: '3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10) inset',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                <div className="flex justify-center items-center mb-8">
                                    <Image src="/MaximisedCapitalEfficiency.svg" alt="Maximised Capital Efficiency" width={100} height={100} />
                                </div>
                                <h3 className="text-lg mb-8 font-semi bold tracking-widest">MAXIMIZED CAPITAL EFFICIENCY</h3>
                                <p className="default-sans-serif mt-8 mb-8">Experience the power of unified liquidity. A single pool for each asset for all maturity levels.</p>
                            </div>
                        </div>

                        <div className="relative rounded-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-400/60 to-transparent rounded-xl z-0"></div>
                            <div className="relative p-10 h-full text-center backdrop-blur-[4px] rounded-xl"
                                style={{
                                    margin: '0.05rem',
                                    background: 'linear-gradient(rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%), rgba(10, 18, 29, 1)',
                                    boxShadow: '3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10) inset',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                <div className="flex justify-center items-center mb-8">
                                    <Image src="/NoMaturityLimits.svg" alt="No Maturity Limits" width={100} height={100} />
                                </div>
                                <h3 className="text-lg font mb-8 font-semibold tracking-widest">NO MATURITY <span className="hidden m-0 p-0 sm:block"></span> LIMITS</h3>
                                <p className="default-sans-serif mt-8 mb-8">Trade yields of any duration daily.
                                    Without fragmentation or waiting for maturity additions.</p>
                            </div>
                        </div>

                        <div className="relative rounded-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-400/60 to-transparent rounded-xl z-0"></div>
                            <div className="relative p-10 h-full text-center backdrop-blur-[4px] rounded-xl"
                                style={{
                                    margin: '0.05rem',
                                    background: 'linear-gradient(rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%), rgba(10, 18, 29, 1)',
                                    boxShadow: '3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10) inset',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                <div className="flex justify-center items-center mb-8">
                                    <Image src="/YieldTradingOnMargin.svg" alt="Yield Trading On Margin" width={100} height={100} />
                                </div>
                                <h3 className="text-lg font mb-8 font-semibold tracking-widest">YIELD TRADING ON MARGIN</h3>
                                <p className="default-sans-serif mt-8 mb-8">Amplify returns by leveraging up your bets</p>
                            </div>
                        </div>

                    </div>

                    <div className="text-center pt-12">
                        <h1 className="text-3xl mt-12 font-semibold tracking-widest"> INTEREST RATE SWAPS</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-12">
                        <div className="  text-center backdrop-blur-[4px] rounded-xl">
                            <div className="flex justify-center items-center mb-8">
                                <DotLottiePlayer
                                    src="./InterestRateSwaps.lottie"
                                    autoplay
                                    loop
                                    speed={0.4}
                                >
                                </DotLottiePlayer>
                            </div>
                        </div>

                        <div className="p-10 md:mt-36 backdrop-blur-[4px] rounded-xl text-lg">
                            <div className="flex  items-center mb-4">
                                <Image src="/icons/link.svg" className="mr-4 mt-1" width={24} height={24} alt="Link icon" />

                                <div className="flex-1" style={{ minHeight: '4rem' }}>
                                    <p className="default-sans-serif">Matched-maturities to lower borrowing costs or hedge interest rate risk.</p>
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                <Image src="/icons/graph-dot.svg" className="mr-4 mt-1" width={24} height={24} alt="Graph icon" />

                                <div className="flex-1" style={{ minHeight: '4rem' }}>
                                    <p className="default-sans-serif">User-friendly and intuitive way to speculate on the direction of rates.</p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <Image src="/icons/delta.svg" className="mr-4 mt-1" width={24} height={24} alt="Delta icon" />

                                <div className="flex-1" style={{ minHeight: '4rem' }}>
                                    <p className="default-sans-serif">$20T Real-World use case brought to DeFi. Whitelabelled for dApps to offer their users.</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="text-center pt-12">
                        <h1 className="text-3xl font-semibold tracking-widest">REPO MARKET</h1>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-12">

                        <div className="relative rounded-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-400/60 to-transparent rounded-xl z-0"></div>
                            <div className="p-10 text-center backdrop-blur-[4px] rounded-xl"
                                style={{
                                    margin: '0.05rem',
                                    background: 'linear-gradient(rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%), rgba(10, 18, 29, 1)',
                                    boxShadow: '3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10) inset',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                <p className="default-sans-serif mt-2 mb-12 md:px-12">Designed to facilitate fixed-rate borrowing / lending across various short-term maturities upto a year.</p>

                                <div className="flex justify-center items-center mb-8">
                                    <Image src="/RepoMarketSwap.svg" alt="Repo Market Swap" width={320} height={180} />
                                    {/* <DotLottiePlayer
                                        src="./RepoMarketCubes.lottie"
                                        autoplay
                                        loop
                                        speed={0.7}
                                        style={{ height: "180px" }}

                                    >
                                    </DotLottiePlayer> */}
                                </div>
                            </div>
                        </div>

                        <div className="relative rounded-xl overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-b from-gray-400/60 to-transparent rounded-xl z-0"></div>
                            <div className="p-10 h-full text-left backdrop-blur-[4px] rounded-xl"
                                style={{
                                    margin: '0.05rem',
                                    background: 'linear-gradient(rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%), rgba(10, 18, 29, 1)',
                                    boxShadow: '3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10) inset',
                                    position: 'relative',
                                    zIndex: 1
                                }}>
                                <p className="default-sans-serif md:pl-20 mt-2 mb-4">A Repo market helps your users</p>
                                <div className="flex items-center ">
                                    <div className="w-3 h-3 md:ml-20 bg-temporal rounded-full"></div>
                                    <p className="default-sans-serif pl-4 ">Reduce funding rates for their long positions</p>
                                </div>
                                <div className="flex items-center mt-2 mb-8">
                                    <div className="w-3 h-3 md:ml-20 bg-temporal rounded-full"></div>
                                    <p className="default-sans-serif pl-4 ">Cover short positions cheaply</p>
                                </div>

                                <div className="flex justify-center items-center mb-8">
                                    {/* <Image src="/RepoMarketWaves.png" alt="Repo Market Waves" width={460} height={110} /> */}
                                    <DotLottiePlayer
                                        src="./RepoMarketWaves.lottie"
                                        autoplay
                                        loop
                                        speed={0.2}
                                        style={{ marginTop: "20px", height: "110px" }}
                                        className=""
                                    >
                                    </DotLottiePlayer>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="relative mt-2 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-b from-gray-400/60 to-transparent rounded-xl z-0"></div>
                        <div className="pt-5 px-10text-left backdrop-blur-[4px] rounded-xl"
                            style={{
                                margin: '0.05rem',
                                background: 'linear-gradient(rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%), rgba(10, 18, 29, 1)',
                                boxShadow: '3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10) inset',
                                position: 'relative',
                                zIndex: 1
                            }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-4 md:pl-10 mt-4 md:mt-12">
                                <div className="flex-col items-center mb-8 max-w-md">
                                    <h1 className="text-lg  mb-8 font-semibold tracking-widest">CUSTOM-BUILT REPO MARKET FOR YOUR DAPP</h1>
                                    <p className="default-sans-serif text-lg">With Shared Liquidity across markets built with Temporal</p>
                                </div>

                                <div className="flex justify-center items-center mb-0 pr-10">
                                    <DotLottiePlayer
                                        src="./PlaceOrderBox.lottie"
                                        autoplay
                                        loop
                                        speed={0.8}
                                        className="glow rounded-xl"
                                    >
                                    </DotLottiePlayer>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className=" rounded-xl z-10 relative grid grid-cols-1 md:grid-cols-2 gap-2 mt-6 pb-6"
                        style={{
                            background: "rgb(10, 18, 29)",
                            // background: "white",
                        }}>
                        <div className="text-center backdrop-blur-[4px] rounded-xl">
                            <div className="flex justify-center items-center">
                                <DotLottiePlayer
                                    src="./OnChainBondMarket.lottie"
                                    autoplay
                                    loop
                                    speed={0.6}
                                >
                                </DotLottiePlayer>
                            </div>
                        </div>
                        <div className=" grid grid-cols-1 items-center text-lg backdrop-blur-[4px] rounded-xl">
                            <div className="rounded-xl text-lg p-4">
                                <h3 className="text-3xl mb-4 font-semibold tracking-widest">ON-CHAIN BOND MARKET</h3>
                                <div className="flex  items-start mb-4">
                                    <Image src="/icons/warehouse.svg" className="mr-4 mt-1" width={24} height={24} alt="Warehouse icon" />

                                    <div className="flex-1" style={{ minHeight: '2rem' }}>
                                        <p className="default-sans-serif">Shared liquidity across the entire yield curve.</p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-2">
                                    <Image src="/icons/chess-king.svg" className="mr-4 mt-1" width={24} height={24} alt="Chess King icon" />

                                    <div className="flex-1" style={{ minHeight: '4rem' }}>
                                        <p className="default-sans-serif">Dealers only initiate and maintain issuer specific yield curves. Tactically adjusting the spread without altering AMM state.</p>
                                    </div>
                                </div>
                                <div className="flex items-center mb-2">
                                    <Image src="/icons/redo-spark.svg" className="mr-4 mt-1" width={24} height={24} alt="Redp icon" />

                                    <div className="flex-1" style={{ minHeight: '4rem' }}>
                                        <p className="default-sans-serif">Vastly more efficient over OTC systems which have fragmented markets for each bond.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </section>
    )
}

export default Features;