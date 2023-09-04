import type { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";

const NavBar: NextPage = () => {
  const title = "{ T } E M P O R A L";
  const [showModal, setShowModal] = useState(false);
  const linkObj = [
    {
      name: "Demo",
      href: "https://demo.temporal.exchange/",
    },
    {
      name: "Docs",
      href: "/contact",
    },
    {
      name: "Litepaper",
      href: "/litepaper",
    },
  ];
  return (
    <header className="relative bg-[#161616] p-4 mt-4 text-[#F3F4F6]">
      <div
        className="absolute inset-0 justify-center md:justify-left"
        style={{
          marginLeft:"24px",  
          width:'250px',
          backgroundImage: `url('./TemporalLogoComplete.svg')`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left",
        }}
      />
      <div className="container relative z-10 mx-auto flex h-16 justify-between">
        <Link
          rel="noopener noreferrer"
          href="/"
          aria-label="Back to homepage"
          className="flex items-center p-2"
        >
          <h1 className="mr-3 mt-3 mb-3 ml-24 justify-center md:justify-left font-mono text-xl font-bold lg:text-2xl">
            
          </h1>
        </Link>
        <ul className="hidden items-stretch space-x-3 md:flex">
          {linkObj.map((link, idx) => {
            return (
              <li key={idx} className="flex">
                <Link
                  rel="noopener noreferrer"
                  href={link.href}
                  className="-mb-1 flex items-center border-b-2 px-4 dark:border-transparent"
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <button
          onClick={() => setShowModal(true)}
          className="flex justify-end p-4 md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
              <div className="relative my-6 mx-auto w-auto max-w-3xl">
                <div className="shadow-3xl relative flex w-full flex-col rounded-lg border-4 border-slate-500 bg-black text-gray-100 outline-none focus:outline-none">
                  <div className="relative flex-auto p-6">
                    <ul className="">
                      {linkObj.map((link, idx) => {
                        return (
                          <li
                            key={idx}
                            className="w-full border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50"
                          >
                            <Link href={link.href}>{link.name}</Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
                    <button
                      className="background-transparent mr-1 mb-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </div>
    </header>
  );
};

export default NavBar;
