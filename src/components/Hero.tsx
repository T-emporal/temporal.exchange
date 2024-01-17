import type { NextPage } from "next";
import React, { useState } from "react";
import Link from "next/link";
import CurvedChart from "~/components/cards/YieldCurve";
import { ScriptableContext } from "chart.js";

const curvedData = {
  labels: [0, 2, 4, 6, 8, 10, 12],
  datasets: [
    {
      label: 'Yield',
      data: [3.00, 3.05, 3.10, 3.15, 3.20, 3.25, 3.30],
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
    },
    y: {
      beginAtZero: false,
      title: {
        display: true,
        text: 'YIELD',
        color: 'white',
      },
      grid: {
        display: false,
      },
    },
  },
};


const Hero: NextPage = () => {
  return (
    <section
      className="relative z-0  bg-cover bg-center  max-w-[1440px] mx-auto"

    >
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center">
          <h2 className="mx-4 mt-20 text-wrap text-4xl leading-tight text-white md:mx-0 md:text-6xl lg:text-7xl  max-w-[1100px]">
            Institutional Grade Liquidity Layer  for  <span className="text-[#0ABAB5CC]">Yield Markets</span>
          </h2>
          <p
            className="mx-8 text-white text-center font-sans text-xl  leading-8 mt-12 max-w-[950px]"
          >
            Temporal provides a shared omnichain vAMM. The novel design generates a continuous
            market-determined yield curve for dApps to optimize their own yield applications.
          </p>
        </div>
        <div />
      </div>

      {/* Section with Try Demo, Litepaper and Docs Buttons */}
      <div className="mt-16 flex items-center justify-center  md:flex-row md:space-x-4">
        <Link
          className=" flex items-center self-center rounded-full border-2 border-temporal px-12 py-4 text-temporal hover:bg-temporal hover:text-white transition-colors"
          href={"/coming-soon"}
        >
          <span className="text-xl px-5">
            Try App
          </span>
        </Link>
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
          <CurvedChart data={curvedData} options={curvedOptions} toggleSwitch={false} />
        </div>

      </div>

    </section>
  );
};

export default Hero;
