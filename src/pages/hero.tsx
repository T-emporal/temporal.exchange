import type { NextPage } from "next";
import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { motion, AnimatePresence } from 'framer-motion';
import NavBar from "../components/NavBar";
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';

const Hero: NextPage = () => {

  const fadeInOutVariants = {
    initial: { opacity: 0, scale: 1 },
    animate: { opacity: 0, scale: 2, transition: { duration: 1 } }
};

  const fadeInOutVariantsForMainContent = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1 } }
  };

  const [isLinkedinHovered, setLinkedinHovered] = useState(false);
  const [isMediumHovered, setMediumHovered] = useState(false);
  const [isTwitterHovered, setTwitterHovered] = useState(false);

  const [isTelegramHovered, setTelegramHovered] = useState(false);
  const [isDiscordHovered, setDiscordHovered] = useState(false);

  const [isTryDemoHovered, setTryDemoHovered] = useState(false);

  const [isIntroFinished, setIsIntroFinished] = useState(false);

  useEffect(() => {
    if (!isIntroFinished) {
      setTimeout(() => {
        setIsIntroFinished(true);
      }, 0);
    }
  }, [isIntroFinished]);

  return (
   
    <section
      
      className="relative z-4 bg-[#161616] bg-cover bg-center"
      style={{
        backgroundImage: 'url("/Background.jpg")',
        backgroundAttachment: "fixed",
      }}
    >
      <AnimatePresence>
    {!isIntroFinished && (
      <motion.img
        initial="initial"
        animate="animate"
        variants={fadeInOutVariants}
        src="/IntroLogo.svg"
        alt="Intro Logo"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
      />
    )}
  </AnimatePresence>
  {isIntroFinished && (
        <motion.div
          initial="initial"
          animate="animate"
          variants={fadeInOutVariantsForMainContent}
          className="container mx-auto flex flex-col "
        >
        <div className="text-center">
          <h1 className="mx-4 mt-8 text-center font-sans text-3xl font-extralight leading-tight text-[#3CC0A3] md:mx-0 md:text-5xl lg:text-6xl">
            Revolutionary Liquidity Primitive:
          </h1>
          <h2 className="mx-4 mt-4 font-sans text-4xl font-extralight leading-tight text-white md:mx-0 md:text-6xl lg:text-7xl">
            Market-Determined Yield Curves
          </h2>
          <p
            className="mx-8"
            style={{
              color: "#FFFFFF",
              textAlign: "center",
              fontFamily: "Helvetica Neue",
              fontSize: "22px",
              fontStyle: "normal",
              fontWeight: 300,
              lineHeight: "32px",
              marginTop: "48px",
            }}
          >
            Temporal&apos;s real-time continuous yield curves, shaped purely by
            market
            <br /> forces, allow users to customize maturity and lend/borrow at
            fixed-rates.
          </p>
        </div>
        <div />
      {/* </div> */}

      {/* Section with Try Demo, Litepaper and Docs Buttons */}
      <div className="mt-16 flex flex-col justify-center space-y-4 md:flex-row md:space-x-4">
        <button
          className="mb-4 flex items-center self-center rounded-full border-2 border-[#3CC0A3] pl-12 pr-12 pt-4 pb-4 text-[#3CC0A3] hover:bg-[#3CC0A3] hover:text-black md:mb-0"
          onClick={() => {
            window.location.href = "https://demo.temporal.exchange/";
          }}
          onMouseEnter={() => setTryDemoHovered(true)} // Set hover state to true when mouse enters
          onMouseLeave={() => setTryDemoHovered(false)}
        >
          <span className="text-16 font-open mr-2 font-normal">Try Demo</span>
          <img
            src={
              isTryDemoHovered ? "/arrow-right-hover.svg" : "/arrow-right.svg"
            }
            alt="Arrow"
          />
        </button>

        <div className="flex justify-center md:justify-start md:pb-2">
          <button
            className="mr-4 flex items-center rounded-full border-2 border-[#FFFFFF] pl-6 pr-6 pt-1 pb-1 hover:border-[#3CC0A3] hover:bg-black hover:text-[#3CC0A3] md:ml-6"
            onClick={() => {
              window.location.href = "/video";
            }}
          >
            <span className="text-12 font-helvetica-neue font-extralight text-[#FFFFFF]">
              Litepaper
            </span>
          </button>

          <button
            className="flex items-center rounded-full border-2 border-[#FFFFFF] pl-8 pr-8 pt-2 pb-2 hover:border-[#3CC0A3] hover:bg-black hover:text-[#3CC0A3]"
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            <span className="text-12 font-helvetica-neue font-extralight text-[#FFFFFF]">
              Docs
            </span>
          </button>
        </div>
      </div>

      {/* Features section showing 4 cards aligned right next to each other */}

      <div className="lg:justify-left font-helvetica-neue mt-16 text-center text-2xl font-light text-white lg:ml-24 lg:flex">
        Features
      </div>

      <div className="mx-4 mt-8 grid grid-cols-1 gap-4 sm:mx-24 lg:grid-cols-4">
        {/* First Card */}
        <div className="flex-1 rounded-3xl border-2 border-[#3CC0A3] border-opacity-15 bg-black bg-opacity-40 p-8" style={{borderWidth: '0.5px'}}>
          <div className="mb-4 text-4xl font-semibold text-[#3CC0A3]">01</div>
          <p className="font-helvetica-neue mb-2 text-xl text-white">
            Market-Determined Yield Curves
          </p>
          <div className="font-helvetica-neue text-lg font-extralight text-white">
            Interest rates set purely by market forces.
          </div>
        </div>

        {/* Second Card */}
        <div className="flex-1 rounded-3xl border-2 border-[#3CC0A3] border-opacity-100 bg-black bg-opacity-40 p-8" style={{borderWidth: '0.5px'}}>
          <div className="mb-4 text-4xl font-semibold text-[#3CC0A3]">02</div>
          <div className="font-helvetica-neue mb-2 text-xl text-white">
            Custom Maturities
          </div>
          <div className="font-helvetica-neue text-lg font-extralight text-white">
            Borrowing and lending durations are no longer limited by the pool.
          </div>
        </div>

        {/* Third Card */}
        <div className="flex-1 rounded-3xl border-2 border-[#3CC0A3] border-opacity-100 bg-black bg-opacity-40 p-8" style={{borderWidth: '0.5px'}}>
          <div className="mb-4 text-4xl font-semibold text-[#3CC0A3]">03</div>
          <div className="font-helvetica-neue mb-2 text-xl text-white">
            Undercollateralized Borrowing
          </div>
          <div className="font-helvetica-neue text-lg font-extralight text-white">
            Collateralise your position & borrow upto 5x.
          </div>
        </div>

        {/* Fourth Card */}
        <div className="flex-1 rounded-3xl border-2 border-[#3CC0A3] border-opacity-100 bg-black bg-opacity-40 p-8" style={{borderWidth: '0.5px'}}>
          <div className="mb-4 text-4xl font-semibold text-[#3CC0A3]">04</div>
          <div className="font-helvetica-neue mb-2 text-xl text-white">
            No Liquidity Fragmentation
          </div>
          <div className="font-helvetica-neue text-lg font-extralight text-white">
            A novel order book designed to cumulate liquidity.
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="mx-4 mt-32 h-0.5 bg-[#3CC0A3] bg-opacity-30 md:mx-24"></div>

      {/* Partner Section */}

      <div className="font-helvetica-neue leading-24 mx-4 mt-24 text-center text-4xl font-light text-white md:mx-0 md:text-5xl">
        Incentivized TestNet on{" "}
        <span className="text-[#3CC0A3]">Injective soon</span>
      </div>

      <div className="mx-4 mt-16 flex justify-center">
        <img src="/PartnerLogo.svg" alt="Vector 1" />
        {/* <img src="/xIcon.svg" alt="Vector 2" />
        <img src="/injective-logo.svg" alt="Vector 3" /> */}
      </div>

      <div className="font-helvetica-neue text-18 leading-24 mx-4 mt-16 text-center font-light text-white md:mx-0">
        Join our community, stay updated, and contribute to the future of
        finance!
      </div>

      <div className="mt-8 flex flex-col items-center justify-center space-y-8 md:flex-row md:space-y-0 md:space-x-10">
        <button
          className="flex items-center rounded-full border-2 border-[#008063] bg-[#008063] pl-7 pr-7 pt-4 pb-4 text-[#000000] hover:bg-[#161616] hover:text-[#008063]"
          onClick={() => {
            window.location.href = "/contact";
          }}
          onMouseEnter={() => setDiscordHovered(true)} // Set hover state to true when mouse enters
          onMouseLeave={() => setDiscordHovered(false)} // Set hover state to false when mouse leaves
        >
          <span className="text-18 font-helvetica-neue mr-2">Join Discord</span>
          <img
            src={
              isDiscordHovered ? "/DiscordIconHover.svg" : "/DiscordIcon.svg"
            }
            alt="Arrow"
          />
        </button>

        <button
          className="flex items-center rounded-full border-2 border-[#008063] bg-[#008063] pl-6 pr-6 pt-4 pb-4 text-[#000000] hover:bg-[#161616] hover:text-[#008063]"
          onMouseEnter={() => setTelegramHovered(true)} // Set hover state to true when mouse enters
          onMouseLeave={() => setTelegramHovered(false)} // Set hover state to false when mouse leaves
          onClick={(): void => {
            window.location.href = "/contact";
          }}
        >
          <span className="text-18 font-helvetica-neue mr-2">
            Join Telegram
          </span>
          <img
            src={
              isTelegramHovered ? "/TelegramIconHover.svg" : "/TelegramIcon.svg"
            }
            alt="Arrow"
          />
        </button>
      </div>

      <div className="font-helvetica-neue text-18 leading-24 mt-8 text-center font-light text-white">
        Follow us on
      </div>

      <div className="mt-8 flex flex-row justify-center space-x-4">
        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/company/temporal-exchange/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-2 border-[#008063] bg-[#008063] p-6 hover:bg-[#161616]"
          onMouseEnter={() => setLinkedinHovered(true)} // Set hover state to true when mouse enters
          onMouseLeave={() => setLinkedinHovered(false)} // Set hover state to false when mouse leaves
        >
          <img
            src={
              isLinkedinHovered ? "/LinkedinIconHover.svg" : "/LinkedinIcon.svg"
            }
            alt="LinkedIn Icon"
          />
        </a>

        {/* Twitter Button */}
        <a
          href="https://twitter.com/temporalfinance"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-2 border-[#008063] bg-[#008063] p-7 hover:bg-[#161616]"
          onMouseEnter={() => setTwitterHovered(true)} // Set hover state to true when mouse enters
          onMouseLeave={() => setTwitterHovered(false)} // Set hover state to false when mouse leaves
        >
          <img
            src={
              isTwitterHovered
                ? "/TwitterIconNewHover.svg"
                : "/TwitterIconNew.svg"
            }
            alt="Twitter Icon"
          />
        </a>

        {/* Medium Button */}
        <a
          href="https://medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border-2 border-[#008063] bg-[#008063] p-6 hover:bg-[#161616]"
          onMouseEnter={() => setMediumHovered(true)} // Set hover state to true when mouse enters
          onMouseLeave={() => setMediumHovered(false)} // Set hover state to false when mouse leaves
        >
          <img
            src={isMediumHovered ? "/MediumIconHover.svg" : "/MediumIcon.svg"}
            alt="Medium Icon"
          />
        </a>
      </div>

      <div className="mx-4 mt-32 h-0.5 bg-[#3CC0A3] bg-opacity-30 md:mx-24"></div>
      <div
        className="font-helvetica-neue mt-24 text-center font-light text-white"
        style={{ fontSize: "48px", lineHeight: "48px" }}
      >
        Disclaimer
      </div>

      <div
        className="font-helvetica-neue mx-12 mt-12 mb-24 justify-center text-center font-light text-white md:mx-32"
        style={{ fontSize: "18px", lineHeight: "24px" }}
      >
        This is a testnet website for Temporal. All interactions are simulations
        and do not involve real assets. Ensure to exercise caution and conduct
        thorough research before using any new platform.
      </div>
      <Footer />
      
      </motion.div>)}
    </section>
    
  );
};

export default Hero;
