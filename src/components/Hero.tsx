import type { NextPage } from "next";
import React, { useState } from "react";
import Footer from "./Footer";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Hero: NextPage = () => {
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
      <div className="mt-16 flex items-center justify-center  md:flex-row md:space-x-4">
        <Link
          className=" flex items-center self-center rounded-full border border-[#0ABAB5CC] pl-12 pr-12 pt-4 pb-4 text-[#0ABAB5CC] hover:bg-[#0ABAB5CC] hover:text-black md:mb-0"
          href={"https://demo.temporal.exchange/"}
        >
          <span className="text-md font-open mr-2 whitespace-nowrap font-normal">
            Try Demo
          </span>
          <ArrowRightIcon className="w-5 h-5" />
        </Link>

        <div className="flex justify-center  ">
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
        <div className="flex-1 rounded-3xl border border-[#0ABAB5CC] border-opacity-100 bg-black bg-opacity-40 p-8">
          <div className="mb-4 text-4xl font-semibold text-[#0ABAB5CC]">01</div>
          <p className="font-helvetica-neue mb-2 text-xl text-white">
            Fixed Rate Borrowing and Lending
          </p>
          <div className="font-helvetica-neue text-lg font-extralight text-white">
            Interest Rates set purely by market forces.
          </div>
        </div>

        {/* Second Card */}
        <div className="flex-1 rounded-3xl border border-[#0ABAB5CC] border-opacity-100 bg-black bg-opacity-40 p-8">
          <div className="mb-4 text-4xl font-semibold text-[#0ABAB5CC]">02</div>
          <div className="font-helvetica-neue mb-2 text-xl text-white">
            Customized Duration
          </div>
          <div className="font-helvetica-neue text-lg font-extralight text-white xl:mt-8">
            Borrowers and Lenders can set their own maturities.
          </div>
        </div>

        {/* Third Card */}
        <div className="flex-1 rounded-3xl border border-[#0ABAB5CC] border-opacity-100 bg-black bg-opacity-40  p-8">
          <div className="mb-4 text-4xl font-semibold text-[#0ABAB5CC]">03</div>
          <div className="font-helvetica-neue mb-2 text-xl text-white">
            Customized Leverage Levels
          </div>
          <div className="font-helvetica-neue text-lg font-extralight text-white">
            Borrowers have the option to over or under-collateralize.
          </div>
        </div>

        {/* Fourth Card */}
        <div className="flex-1 rounded-3xl border border-[#0ABAB5CC] border-opacity-100 bg-black bg-opacity-40 p-8">
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
          className="group flex items-center rounded-full border-2 border-[#008884] bg-[#008884] pl-7 pr-7 pt-4 pb-4 text-[#000000] hover:bg-transparent hover:text-[#0ABAB5CC]"
          onClick={() => {
            window.location.href = "/contact";
          }}
        >
          <span className="text-18 font-helvetica-neue mr-2">Join Discord</span>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            xmlns="http://www.w3.org/2000/svg"
            className=" fill-black group-hover:fill-[#008884] "
          >
            <path d="M22.7738 7.94984C22.7738 7.94984 26.25 11.9761 26.25 19.2286V20.7494C26.25 20.7494 21.86 23.6103 20.5221 23.6103L19.2242 21.7232C20.0308 21.3619 21.1313 20.7348 21.1313 20.7348L20.7292 20.4236C20.7292 20.4236 18.1571 21.6153 15.0004 21.6153C11.8437 21.6153 9.27167 20.4236 9.27167 20.4236L8.86958 20.7348C8.86958 20.7348 9.97 21.3619 10.7767 21.7232L9.47875 23.6103C8.14 23.6103 3.75 20.7494 3.75 20.7494V19.2286C3.75 11.9761 7.22625 7.94984 7.22625 7.94984C7.22625 7.94984 9.60417 6.79901 11.8 6.49609L12.4812 7.78776C12.4812 7.78776 13.5642 7.53693 15 7.53693C16.4358 7.53693 17.5187 7.78776 17.5187 7.78776L18.2 6.49609C20.3958 6.79901 22.7738 7.94984 22.7738 7.94984ZM11.2542 18.169C12.3608 18.169 13.2575 17.1615 13.2575 15.9186C13.2575 14.6757 12.3604 13.6682 11.2542 13.6682C10.1479 13.6682 9.25083 14.6757 9.25083 15.9186C9.25083 17.1615 10.1475 18.169 11.2542 18.169ZM18.7458 18.169C19.8525 18.169 20.7492 17.1615 20.7492 15.9186C20.7492 14.6757 19.8521 13.6682 18.7458 13.6682C17.6392 13.6682 16.7425 14.6757 16.7425 15.9186C16.7425 17.1615 17.6392 18.169 18.7458 18.169Z" />
          </svg>
        </button>

        <button
          className="group flex items-center rounded-full border-2 border-[#008884] bg-[#008884] pl-6 pr-6 pt-4 pb-4 text-[#000000] hover:bg-transparent hover:text-[#0ABAB5CC]"
          onClick={(): void => {
            window.location.href = "/contact";
          }}
        >
          <span className="text-18 font-helvetica-neue mr-2">
            Join Telegram
          </span>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            className=" fill-black group-hover:fill-[#008884] "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5C21.9 27.5 27.5 21.9 27.5 15C27.5 8.1 21.9 2.5 15 2.5ZM20.8 11C20.6125 12.975 19.8 17.775 19.3875 19.9875C19.2125 20.925 18.8625 21.2375 18.5375 21.275C17.8125 21.3375 17.2625 20.8 16.5625 20.3375C15.4625 19.6125 14.8375 19.1625 13.775 18.4625C12.5375 17.65 13.3375 17.2 14.05 16.475C14.2375 16.2875 17.4375 13.375 17.5 13.1125C17.5087 13.0727 17.5075 13.0315 17.4966 12.9923C17.4857 12.953 17.4654 12.9171 17.4375 12.8875C17.3625 12.825 17.2625 12.85 17.175 12.8625C17.0625 12.8875 15.3125 14.05 11.9 16.35C11.4 16.6875 10.95 16.8625 10.55 16.85C10.1 16.8375 9.25 16.6 8.6125 16.3875C7.825 16.1375 7.2125 16 7.2625 15.5625C7.2875 15.3375 7.6 15.1125 8.1875 14.875C11.8375 13.2875 14.2625 12.2375 15.475 11.7375C18.95 10.2875 19.6625 10.0375 20.1375 10.0375C20.2375 10.0375 20.475 10.0625 20.625 10.1875C20.75 10.2875 20.7875 10.425 20.8 10.525C20.7875 10.6 20.8125 10.825 20.8 11Z" />
          </svg>
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
          className="group rounded-full border-2 border-[#008884] bg-[#008884] p-6 hover:bg-transparent "
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            className=" fill-black group-hover:fill-[#008884] "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3.91304 0C1.65 0 0.00636889 1.45111 0.00636889 3.44691C0.00636889 5.44969 1.68913 6.9647 3.91304 6.9647C6.17609 6.9647 7.81972 5.48557 7.81972 3.40602C7.71537 1.40324 6.10435 0 3.91304 0ZM0.652174 8.36718C0.293478 8.36718 0 8.6812 0 9.06501V29.3022C0 29.686 0.293478 30 0.652174 30H7.17391C7.53261 30 7.82609 29.686 7.82609 29.3022V9.06501C7.82609 8.6812 7.53261 8.36718 7.17391 8.36718H0.652174ZM10.4348 8.36718C10.0761 8.36718 9.78261 8.6812 9.78261 9.06501V29.3022C9.78261 29.686 10.0761 30 10.4348 30H16.3043C16.6643 30 16.9565 29.6874 16.9565 29.3022V18.8347V18.6602V18.4858C16.9565 16.8319 18.1439 15.4847 19.6569 15.3591C19.7352 15.3452 19.813 15.3455 19.8913 15.3455C19.9696 15.3455 20.0474 15.3452 20.1257 15.3591C21.6387 15.4847 22.8261 16.8319 22.8261 18.4858V29.3022C22.8261 29.6874 23.1183 30 23.4783 30H29.3478C29.7065 30 30 29.686 30 29.3022V17.439C30 12.924 27.7363 8.36718 22.6885 8.36718C20.3929 8.36718 18.6587 9.3164 17.6087 10.1049V9.06501C17.6087 8.6812 17.3152 8.36718 16.9565 8.36718H10.4348Z" />
          </svg>
        </a>

        {/* Twitter Button */}
        <a
          href="https://twitter.com/temporalfinance"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-full border-2 border-[#008884] bg-[#008884] p-7 hover:bg-transparent"
        >
          <svg
            width="31"
            height="25"
            viewBox="0 0 31 25"
            className=" fill-black group-hover:fill-[#008884] "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M30.0727 2.89219C28.9641 3.38437 27.7758 3.71484 26.5266 3.86484C27.8016 3.10078 28.7812 1.89141 29.2406 0.452344C28.05 1.15781 26.7258 1.67109 25.3219 1.94766C24.1969 0.747656 22.5937 0 20.8195 0C17.4117 0 14.6484 2.76094 14.6484 6.16875C14.6484 6.65156 14.7047 7.12265 14.8102 7.575C9.68203 7.31719 5.1375 4.86094 2.09297 1.12734C1.56094 2.04141 1.25859 3.10078 1.25859 4.23047C1.25859 6.37031 2.34609 8.25937 4.00312 9.36797C2.99062 9.33515 2.03906 9.05625 1.20703 8.59453C1.20703 8.62031 1.20703 8.64609 1.20703 8.67187C1.20703 11.6625 3.33516 14.1539 6.15469 14.7234C5.63906 14.8641 5.09297 14.9391 4.53047 14.9391C4.13203 14.9391 3.74531 14.9016 3.36797 14.8266C4.15547 17.2758 6.43359 19.0641 9.13125 19.1133C7.02187 20.768 4.36172 21.7523 1.46953 21.7523C0.970313 21.7523 0.480469 21.7242 0 21.6656C2.72812 23.4187 5.97187 24.4383 9.45703 24.4383C20.8055 24.4383 27.0117 15.0375 27.0117 6.88594C27.0117 6.61875 27.0047 6.34922 26.9953 6.08672C28.2 5.21719 29.2453 4.12969 30.0727 2.89219Z" />
          </svg>
        </a>

        {/* Medium Button */}
        <a
          href="https://medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-full border-2 border-[#008884] bg-[#008884] p-6 hover:bg-transparent"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            className=" fill-black group-hover:fill-[#008884] "
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M10 7.5C11.9891 7.5 13.8968 8.29018 15.3033 9.6967C16.7098 11.1032 17.5 13.0109 17.5 15C17.5 16.9891 16.7098 18.8968 15.3033 20.3033C13.8968 21.7098 11.9891 22.5 10 22.5C8.01088 22.5 6.10322 21.7098 4.6967 20.3033C3.29018 18.8968 2.5 16.9891 2.5 15C2.5 13.0109 3.29018 11.1032 4.6967 9.6967C6.10322 8.29018 8.01088 7.5 10 7.5ZM21.25 8.75C23.125 8.75 24.375 11.5487 24.375 15C24.375 18.4513 23.125 21.25 21.25 21.25C19.375 21.25 18.125 18.4513 18.125 15C18.125 11.5487 19.375 8.75 21.25 8.75ZM26.25 9.375C26.725 9.375 27.14 10.4088 27.35 12.1825L27.4088 12.7362L27.4325 13.03L27.47 13.6475L27.4825 13.9713L27.4975 14.6475L27.5 15L27.4975 15.3525L27.4825 16.0287L27.47 16.3538L27.4325 16.97L27.4075 17.2638L27.3512 17.8175C27.14 19.5925 26.7262 20.625 26.25 20.625C25.775 20.625 25.36 19.5912 25.15 17.8175L25.0912 17.2638C25.0826 17.1659 25.0747 17.068 25.0675 16.97L25.03 16.3525C25.0252 16.2446 25.021 16.1367 25.0175 16.0287L25.0025 15.3525V14.6475L25.0175 13.9713L25.03 13.6462L25.0675 13.03L25.0925 12.7362L25.1488 12.1825C25.36 10.4075 25.7738 9.375 26.25 9.375Z" />
          </svg>
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
