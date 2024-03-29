import React, { useState } from 'react';
import { ArrowLeftCircleIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import Navbar from '~/components/NavBar'
import Layout from '~/components/Layout';

import { Listbox } from '@headlessui/react';
import { motion } from 'framer-motion';

interface ErrorResponse {
  message: string;
}

interface Level {
  name: string;
  value: string;
}


const levels = [
  { name: 'Select Level', value: '' },
  { name: 'Yield Farmer', value: 'Yield Farmer' },
  { name: 'Professional Trader', value: 'Professional Trader' },
  { name: 'Institution / Ecosystem', value: 'Institution / Ecosystem' },
];

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ComingSoon: NextPage = () => {
  const [isDiscordFocused, setIsDiscordFocused] = useState(false);
  const [isTelegramFocused, setIsTelegramFocused] = useState(false);

  const [selectedLevel, setSelectedLevel] = useState<Level>(levels[0] as Level);
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [telegram, setTelegram] = useState('');
  const [discord, setDiscord] = useState('');

  const [isLoading, setIsLoading] = useState(false);

  const handleDiscordFocus = () => setIsDiscordFocused(true);
  const handleTelegramFocus = () => setIsTelegramFocused(true);
  const handleDiscordBlur = () => setIsDiscordFocused(false);
  const handleTelegramBlur = () => setIsTelegramFocused(false);

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    setIsLoading(true);

    const data = selectedLevel.value === 'Yield Farmer'
      ? { name, level: selectedLevel.value, telegramHandle: telegram, discordHandle: discord }
      : { name, level: selectedLevel.value, company, email };

    console.log('Data: ', data)

    try {
      const res = await fetch('/api/sheet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        window.location.href = "/thankYou";
      } else {
        const errorResponse = await res.json() as ErrorResponse;
        alert(`Error: ${errorResponse.message}`);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      alert("Some error occurred. Please try again");
    } finally {
      setIsLoading(false);
    }
  }

  const isSubmitDisabled = isLoading || name.trim() === '' || (selectedLevel.value === 'Yield Farmer' ? telegram.trim() === '' && discord.trim() === '' : company.trim() === '' && email.trim() === '');

  return (
    <>
      <NextSeo title="Coming soon" />
      <Layout>
        <div className='md:h-screen'>

          <Navbar></Navbar>

          <main className="flex mt-20 flex-col items-center justify-center mb-5 xl:mb-20">
            <div className="orb" />

            {/* <h3 className="text-center text-4xl md:text-5xl font leading-[70px] text-white">
              You <span className="text-temporal "> caught </span> us early! <br />
              Please leave your
              <span className="text-temporal "> details </span>
              and we’ll
              <span className="text-temporal "> reach </span>
              out to you.
            </h3> */}

            <h3 className="text-center text-4xl md:text-5xl font leading-[70px] text-white">
              You <span className="text-temporal "> caught </span> us early! <br />
            </h3>
          
            <h2 className="text-center text-xl leading-[70px] space-x-5 mt-6 text-white">
              <span className="text-temporal "> 1: </span> Leave your handle
              <span className="text-temporal "> 2: </span> Play some Temptris
              <span className="text-temporal "> 3: </span> We'll reach out to you
            </h2>



            <div className="text-center w-1/2 text-white">
              <form className="space-y-6 mt-12" onSubmit={onSubmit}>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className=" flex-1 placeholder-gray-400 text-white border rounded-xl bg-transparent border-temporal border-solid w-full py-3 pl-5 pr-16 focus:outline-none focus:border-temporal"
                    />
                  </div>
                  <Listbox as="div" className="relative flex-1" value={selectedLevel} onChange={setSelectedLevel}>
                    {({ open }) => (
                      <>
                        <Listbox.Button className="flex items-center justify-between text-white border rounded-xl bg-transparent border-temporal border-solid w-full py-3 px-5 focus:outline-none focus:border-temporal">
                          {selectedLevel.name}
                          <ChevronDownIcon className="h-5 w-5" aria-hidden="true" />

                        </Listbox.Button>

                        {open && (
                          <Listbox.Options static className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-gray-300 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                            {levels.map((level) => (
                              <Listbox.Option key={level.value} value={level} as={React.Fragment}>
                                {({ active, selected }) => (
                                  <li className={`flex justify-center items-center cursor-default select-none relative py-2 pr-4 pl-4 ${active ? 'bg-temporal text-white' : 'text-gray-900'}`}>
                                    {level.name}
                                  </li>
                                )}
                              </Listbox.Option>
                            ))}
                          </Listbox.Options>
                        )}
                      </>
                    )}
                  </Listbox>
                </div>
                {selectedLevel.name === 'Yield Farmer' && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    className="flex space-x-4"
                  >
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Telegram Handle"
                        value={telegram}
                        onChange={(e) => setTelegram(e.target.value)}
                        className="placeholder-gray-400 text-white border rounded-xl bg-transparent border-temporal border-solid w-full mb-6 py-3 pl-5 pr-16 focus:outline-none focus:border-temporal"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Discord Tag"
                        value={discord}
                        onChange={(e) => setDiscord(e.target.value)}
                        className="placeholder-gray-400 text-white border rounded-xl bg-transparent border-temporal border-solid w-full py-3 pl-5 pr-16 focus:outline-none focus:border-temporal"
                      />
                    </div>
                  </motion.div>

                )}
                {(selectedLevel.name === 'Professional Trader' || selectedLevel.name === 'Institution / Ecosystem') && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeInVariants}
                    className="flex space-x-4"
                  >
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="Company"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="placeholder-gray-400 text-white border rounded-xl bg-transparent border-temporal border-solid w-full py-3 pl-5 pr-16 sm:pr-32 focus:outline-none focus:border-temporal"
                      />
                    </div>
                    <div className="flex-1">
                      <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="placeholder-gray-400 text-white border rounded-xl bg-transparent border-temporal border-solid w-full py-3 pl-5 pr-16 sm:pr-32 focus:outline-none focus:border-temporal"
                      />
                    </div>
                  </motion.div>

                )}

                <div className="flex justify-center w-full">
                  <button
                    type="submit"
                    disabled={isSubmitDisabled}
                    className={`justify-center flex border-temporal bg-temporal ${isSubmitDisabled ? 'opacity-50 cursor-not-allowed' : 'hover:border-temporal/80 hover:bg-temporal/80'} text-black font-semibold py-3 px-6 rounded-xl relative`}
                  >
                    Submit
                    {isLoading && (
                      <div className="absolute bottom-0 left-0 right-0 mb-1 h-1 flex justify-center">
                        <div className="loader"></div>
                      </div>
                    )}
                  </button>
                </div>
              </form>
            </div>

            <Link className="mt-16 text-white text-lg flex items-center hover:text-temporal" href={"/"}>
              <ArrowLeftCircleIcon className="mr-2 h-10 w-10" />
              Go back to homepage
            </Link>
          </main>

          <div className="container mx-auto space-y-6 divide-y divide-[#0ABAB5CC] px-6 pb-8 md:space-y-12 md:fixed md:inset-x-0 md:bottom-0">

            <div className="grid justify-center pt-6 lg:justify-between">
              <div className="flex flex-col text-[#f9fafb] self-center text-center text-sm md:block md:space-x-6 lg:col-start-1">
                <span>©2023 Temporal All rights reserved</span>
              </div>
              <div className="flex justify-center space-x-4 pt-4 lg:col-end-13 lg:pt-0">
                <Link
                  rel="noopener noreferrer"
                  href="mailto:hello@temporal.exchange"
                  title="Email"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-temporal/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="temporal"
                    className="h-5 w-5"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/company/temporal-exchange/"
                  title="LinkedIn"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-temporal/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    className="h-5 w-5"
                    viewBox="0 0 50 50"
                  >
                    <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"></path>
                  </svg>
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="https://twitter.com/TemporalFinance"
                  title="Twitter"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-temporal/80"
                >   <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12.6007 0.769531H15.054L9.694 6.8962L16 15.2315H11.0627L7.196 10.1755L2.77067 15.2315H0.316L6.04933 8.6782L0 0.770198H5.06267L8.558 5.39153L12.6007 0.769531ZM11.74 13.7635H13.0993L4.324 2.16086H2.86533L11.74 13.7635Z" fill="black" />
                  </svg>

                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="/coming-soon"
                  title="Telegram"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-temporal/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    className="h-5 w-5"
                    viewBox="0 0 50 50"
                  >
                    <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
                  </svg>
                </Link>
                <Link
                  rel="noopener noreferrer"
                  href="/coming-soon"
                  title="Discord"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-temporal/80"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    className="h-7 w-7"
                    viewBox="0 0 72 72"
                  >
                    <path d="M54.657,19.077c0,0,8.343,9.663,8.343,27.069v3.65c0,0-10.536,6.866-13.747,6.866l-3.115-4.529	c1.936-0.867,4.577-2.372,4.577-2.372l-0.965-0.747c0,0-6.173,2.86-13.749,2.86s-13.749-2.86-13.749-2.86l-0.965,0.747	c0,0,2.641,1.505,4.577,2.372l-3.115,4.529C19.536,56.662,9,49.796,9,49.796v-3.65c0-17.406,8.343-27.069,8.343-27.069	s5.707-2.762,10.977-3.489l1.635,3.1c0,0,2.599-0.602,6.045-0.602s6.045,0.602,6.045,0.602l1.635-3.1	C48.95,16.315,54.657,19.077,54.657,19.077z M27.01,43.603c2.656,0,4.808-2.418,4.808-5.401c0-2.983-2.153-5.401-4.808-5.401	s-4.808,2.418-4.808,5.401C22.202,41.185,24.354,43.603,27.01,43.603z M44.99,43.603c2.656,0,4.808-2.418,4.808-5.401	c0-2.983-2.153-5.401-4.808-5.401c-2.656,0-4.808,2.418-4.808,5.401C40.182,41.185,42.334,43.603,44.99,43.603z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Layout>

    </>
  );
};

export default ComingSoon;
