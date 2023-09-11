import type { NextPage } from "next";
import React, { useState } from "react";
import Footer from "./Footer";

const Hero: NextPage = () => {
  const [isLinkedinHovered, setLinkedinHovered] = useState(false);
  const [isMediumHovered, setMediumHovered] = useState(false);
  const [isTwitterHovered, setTwitterHovered] = useState(false);

  const [isTelegramHovered, setTelegramHovered] = useState(false);
  const [isDiscordHovered, setDiscordHovered] = useState(false);

  const [isTryDemoHovered, setTryDemoHovered] = useState(false);

  return (
    <section
      className="relative z-0 bg-[#161616] bg-cover bg-center"
      style={{
        backgroundImage: 'url("/Background.jpg")',
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container mx-auto flex flex-col items-center">
        <div className="text-center">
          {/* <h1 className="mt-8 mx-4 md:mx-0 text-center font-sans text-3xl font-extralight leading-tight text-[#0ABAB5CC] md:text-5xl lg:text-6xl">
            Yield Customized.
          </h1> */}
          <h2 className="mx-4 mt-16 font-sans text-4xl font-extralight leading-tight text-white md:mx-0 md:text-6xl lg:text-7xl">
            Yield <span className="text-[#0ABAB5CC]">Customized</span>
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
            Temporal introduces a revolutionary liquidity primitive for DeFi:
            Market Determined Yield Curves. <br /> The underlying innovation
            unifies siloed markets across time into a real-time continuous yield
            curve.
          </p>
        </div>
        <div />
      </div>

      {/* Section with Try Demo, Litepaper and Docs Buttons */}
      <div className="mt-16 flex flex-col justify-center space-y-4 md:flex-row md:space-x-4">
        <button
          className="mb-4 flex items-center self-center rounded-full border-[#0ABAB5CC] pl-12 pr-12 pt-4 pb-4 text-[#0ABAB5CC] hover:bg-[#0ABAB5CC] hover:text-black md:mb-0"
          style={{ borderWidth: "1px" }}
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
            className="mr-4 flex items-center rounded-full border-[#FFFFFF] pl-6 pr-6 pt-1 pb-1 text-[#FFFFFF] hover:border-[#0ABAB5CC] hover:bg-black hover:text-[#0ABAB5CC] md:ml-6"
            style={{ borderWidth: "1px" }}
            onClick={() => {
              window.location.href = "/litepaper";
            }}
          >
            <span className="text-12 font-helvetica-neue font-extralight">
              Litepaper
            </span>
          </button>

          <button
            className="flex items-center rounded-full border-[#FFFFFF] pl-8 pr-8 pt-2 pb-2 text-[#FFFFFF] hover:border-[#0ABAB5CC] hover:bg-black hover:text-[#0ABAB5CC]"
            style={{ borderWidth: "1px" }}
            onClick={() => {
              window.location.href = "/contact";
            }}
          >
            <span className="text-12 font-helvetica-neue font-extralight">
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
        <div className="flex-1 rounded-3xl border-2 border-[#0ABAB5CC] border-opacity-100 bg-black bg-opacity-40 p-8">
          <div className="mb-4 text-4xl font-semibold text-[#0ABAB5CC]">01</div>
          <p className="font-helvetica-neue mb-2 text-xl text-white">
            Fixed Rate Borrowing and Lending
          </p>
          <div className="font-helvetica-neue text-lg font-extralight text-white">
            Interest Rates set purely by market forces.
          </div>
        </div>

        {/* Second Card */}
        <div className="flex-1 rounded-3xl border-2 border-[#0ABAB5CC] border-opacity-100 bg-black bg-opacity-40 p-8">
          <div className="mb-4 text-4xl font-semibold text-[#0ABAB5CC]">02</div>
          <div className="font-helvetica-neue mb-2 text-xl text-white">
            Customized Duration
          </div>
          <div className="font-helvetica-neue xl:mt-8 text-lg font-extralight text-white">
            Borrowers and Lenders can set their own maturities.
          </div>
        </div>

        {/* Third Card */}
        <div className="flex-1 rounded-3xl border-2 border-[#0ABAB5CC] border-opacity-100 bg-black bg-opacity-40  p-8">
          <div className="mb-4 text-4xl font-semibold text-[#0ABAB5CC]">03</div>
          <div className="font-helvetica-neue mb-2 text-xl text-white">
            Customized Leverage Levels
          </div>
          <div className="font-helvetica-neue text-lg font-extralight text-white">
            Borrowers have the option to over or under-collateralize.
          </div>
        </div>

        {/* Fourth Card */}
        <div className="flex-1 rounded-3xl border-2 border-[#0ABAB5CC] border-opacity-100 bg-black bg-opacity-40 p-8">
          <div className="mb-4 text-4xl font-semibold text-[#0ABAB5CC]">04</div>
          <div className="font-helvetica-neue mb-2 text-xl text-white">
            No Liquidity Fragmentation
          </div>
          <div className="font-helvetica-neue text-lg font-extralight text-white">
            A novel order book designed to cumulate liquidity.
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div
        className="mx-24 mt-32 bg-[#0ABAB5CC] bg-opacity-30 md:mx-48"
        style={{ height: "0.5px" }}
      ></div>

      {/* Partner Section */}

      <div className="font-helvetica-neue leading-24 mx-4 mt-24 text-center text-4xl font-light text-white md:mx-0 md:text-5xl">
        Incentivized TestNet on{" "}
        <span className="text-[#0ABAB5CC]">Injective soon</span>
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
          className="flex items-center rounded-full border-2 border-[#008884] bg-[#008884] pl-7 pr-7 pt-4 pb-4 text-[#000000] hover:bg-transparent hover:text-[#0ABAB5CC]"
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
          className="flex items-center rounded-full border-2 border-[#008884] bg-[#008884] pl-6 pr-6 pt-4 pb-4 text-[#000000] hover:bg-transparent hover:text-[#0ABAB5CC]"
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
          className="rounded-full border-2 border-[#008884] bg-[#008884] p-6 hover:bg-transparent"
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
          className="rounded-full border-2 border-[#008884] bg-[#008884] p-7 hover:bg-transparent"
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
          className="rounded-full border-2 border-[#008884] bg-[#008884] p-6 hover:bg-transparent"
          onMouseEnter={() => setMediumHovered(true)} // Set hover state to true when mouse enters
          onMouseLeave={() => setMediumHovered(false)} // Set hover state to false when mouse leaves
        >
          <img
            src={isMediumHovered ? "/MediumIconHover.svg" : "/MediumIcon.svg"}
            alt="Medium Icon"
          />
        </a>
      </div>

      <div
        className="mx-24 mt-32 bg-[#0ABAB5CC] bg-opacity-30 md:mx-48"
        style={{ height: "0.5px" }}
      ></div>
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
    </section>
  );
};

export default Hero;
