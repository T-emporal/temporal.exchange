import type { NextPage } from "next";
import React, { useRef, useState, useEffect } from 'react';
import Link from "next/link";
import CurvedChart from "~/components/cards/YieldCurve";
import type { ScriptableContext } from "chart.js";
import { useInView } from "framer-motion";

// Drawing a logarithmic graph
const xValues = [1, 2, 4, 6, 8, 10, 12]; // X-axis values
const yValues = xValues.map(x => Math.log(x));

// Since logarithmic values can be quite small, you might want to scale them up to fit your chart
const scaleFactor = 1; // Adjust this factor to scale the values up to a range you like
const scaledYValues = yValues.map(y => (y * scaleFactor) + 2); // Scale and shift the log values

const curvedData = {
  labels: xValues,
  datasets: [
    {
      label: 'Yield',
      // data: [3.00, 3.15, 3.30, 3.35, 3.45, 3.50, 3.55],
      data: scaledYValues,
      fill: true,
      backgroundColor: (context: ScriptableContext<"line">) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 200);
        gradient.addColorStop(0, "rgba(255, 99, 132 ,1)");
        gradient.addColorStop(0.5, "rgba(255, 99, 132 ,0.25)");
        gradient.addColorStop(1, "rgba(255, 99, 132 ,0.1)");
        return gradient;
      },
      borderColor: 'rgb(255, 99, 132)',
      tension: 0.4,
      cubicInterpolationMode: 'monotone'
    },
  ],
};

const curvedOptions = {
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
      min: 1.5,
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
          return value >= 2.00 ? Number(value).toFixed(2) : '';
        },
      }
    },
  },
};


const Hero: NextPage = () => {
  // --------------------Chart Animation--------------------
  const [key, setKey] = useState(0);

  const ref = useRef(null)
  const inView = useInView(ref,{
    margin: "10% 0% 50% 0%"
})

  useEffect(() => {

    if (inView) {
      // const totalDuration = 2000;
      // const delayBetweenPoints = totalDuration / curvedData.labels.length;

      // const animation = {
      //   x: {
      //     type: 'number',
      //     easing: 'linear',
      //     duration: delayBetweenPoints,
      //     from: NaN,
      //     delay: (ctx: any) => ctx.type === 'data' && !ctx.xStarted ? (ctx.xStarted = true, ctx.index * delayBetweenPoints) : 0,
      //   },
      //   y: {
      //     type: 'number',
      //     easing: 'linear',
      //     duration: delayBetweenPoints,
      //     from: (ctx: any) => ctx.chart.scales.y.getPixelForValue(2.95),
      //     delay: (ctx: any) => ctx.type === 'data' && !ctx.yStarted ? (ctx.yStarted = true, ctx.index * delayBetweenPoints) : 0,
      //   },
      // };
      // setChartOptions(prevOptions => {
      //   const newOptions = { ...prevOptions, animation };
      //   return newOptions;
      // });
      setKey(prevKey => prevKey + 1);

    }
  }, [inView]);

  // --------------------Chart Animation--------------------


  return (
    <section
      className="relative z-0  bg-cover bg-center  max-w-[1440px] mx-auto"

    >
      <div className="container mx-auto flex flex-col items-center">
        <div className="orb" />

        <div className="text-center">
          <h2 className="mx-4 mt-20 xl:mt-40 text-wrap text-4xl leading-tight text-white md:mx-0 md:text-6xl lg:text-7xl  ">
            Institutional Grade Liquidity Layer  for
            <span className="hidden sm:block"></span>
            <span className="text-[#0ABAB5CC]"> Yield Markets</span>
          </h2>
          <p
            className="mx-4 text-white text-center font-light text-2xl leading-8 mt-12 "
          >
            Temporal provides a shared omnichain vAMM. The novel design generates a continuous
            <span className="hidden sm:block"></span>
            market-determined yield curve for dApps to optimize their own yield applications.
          </p>
        </div>
        <div />

        <div className="mt-16 flex items-center justify-center  md:flex-row md:space-x-4">
          <Link
            className=" flex items-center self-center rounded-full border-2 border-temporal px-12 py-4 text-temporal hover:bg-temporal hover:text-white transition-colors"
            href={"/coming-soon"}
          >
            <span className="text-xl px-5">
              Join Waitlist
            </span>
          </Link>
        </div>
      </div>

      <div className=" mt-16 container mx-auto items-center max-w-[1000px]">
        <div className="h-full mx-5 relative backdrop-blur-[4px] text-xl rounded-xl p-6"
          style={{
            background: 'radial-gradient(ellipse at center top, rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%)',
            boxShadow: '3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10) inset',
          }}>
          <span className="text-lg font-bold text-[#f2f2f2] uppercase">
            Yield Curve
          </span>
          <div ref={ref}>
            <CurvedChart data={curvedData} options={curvedOptions} toggleSwitch={false} key={key} />
          </div>
        </div>
      </div>

      {/* ----------------Graph with border---------------- */}

      {/* <div className=" mt-16 container mx-auto items-center max-w-[1000px]">
        <div className="relative rounded-xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-400/60 to-transparent rounded-xl z-0"></div>
          <div className="h-full mx-5 relative backdrop-blur-[4px] text-xl rounded-xl p-6"
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
            <CurvedChart data={curvedData} options={curvedOptions} toggleSwitch={false} />
          </div>
        </div>
      </div> */}

      {/* ----------------Graph with border---------------- */}


    </section>
  );
};

export default Hero;
