import type {NextPage} from "next";
import Link from "next/link";

const Footer: NextPage = () => {
    const t = "{ T }"
    return (
        <footer className="py-6 bg-black text-gray-50">
            <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <a rel="noopener noreferrer" href="#"
                           className="flex justify-center space-x-3 md:justify-start">
                            <span className="self-center text-2xl font-semibold font-mono">{t} E M P O R A L</span>
                        </a>
                    </div>
                    {/*<div className="col-span-6 text-center md:text-left md:col-span-3">*/}
                    {/*    <p className="pb-1 text-lg font-medium">Navigate</p>*/}
                    {/*    <ul>*/}
                    {/*        <li>*/}
                    {/*            <Link rel="noopener noreferrer" href="/docs"*/}
                    {/*                  className="hover:dark:text-violet-400">Docs</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link rel="noopener noreferrer" href="/litepaper"*/}
                    {/*                  className="hover:dark:text-violet-400">Litepaper</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link rel="noopener noreferrer" href="#"*/}
                    {/*                  className="hover:dark:text-violet-400">Link</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link rel="noopener noreferrer" href="#"*/}
                    {/*                  className="hover:dark:text-violet-400">Link</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link rel="noopener noreferrer" href="#"*/}
                    {/*                  className="hover:dark:text-violet-400">Link</Link>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    {/*<div className="col-span-6 text-center md:text-left md:col-span-3">*/}
                    {/*    <p className="pb-1 text-lg font-medium">Socials</p>*/}
                    {/*    <ul>*/}
                    {/*        <li>*/}
                    {/*            <Link rel="noopener noreferrer" href="/contact" className="hover:white">Twitter</Link>*/}
                    {/*        </li>*/}
                    {/*        <li>*/}
                    {/*            <Link rel="noopener noreferrer" href="/contact"*/}
                    {/*                  className="hover:dark:text-violet-400">Telegram</Link>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span>©2023 All rights reserved</span>
                        {/*<Link rel="noopener noreferrer" href="#">*/}
                        {/*    <span>Privacy policy</span>*/}
                        {/*</Link>*/}
                        {/*<Link rel="noopener noreferrer" href="#">*/}
                        {/*    <span>Terms of service</span>*/}
                        {/*</Link>*/}
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <Link rel="noopener noreferrer" href="mailto:hello@temporal.exchange" title="Email"
                              className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 className="w-5 h-5">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </Link>
                        <Link rel="noopener noreferrer" href="https://www.linkedin.com/company/temporal-exchange/"
                              title="LinkedIn"
                              className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-5 h-5"
                                 viewBox="0 0 50 50">
                                <path
                                    d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"></path>
                            </svg>
                        </Link>
                        {/* <Link rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                            </svg>
                        </Link> */}
                        <Link rel="noopener noreferrer" href="/contact" title="Twitter"
                              className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 className="w-5 h-5"
                                 viewBox="0 0 50 50">
                                <path
                                    d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                            </svg>
                        </Link>
                        <Link rel="noopener noreferrer" href="/contact" title="Telegram"
                              className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 className="w-5 h-5"
                                 viewBox="0 0 50 50">
                                <path
                                    d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
                            </svg>
                        </Link>
                        <Link rel="noopener noreferrer" href="/contact" title="Discord"
                              className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                 className="w-7 h-7"
                                 viewBox="0 0 72 72">
                                <path
                                    d="M54.657,19.077c0,0,8.343,9.663,8.343,27.069v3.65c0,0-10.536,6.866-13.747,6.866l-3.115-4.529	c1.936-0.867,4.577-2.372,4.577-2.372l-0.965-0.747c0,0-6.173,2.86-13.749,2.86s-13.749-2.86-13.749-2.86l-0.965,0.747	c0,0,2.641,1.505,4.577,2.372l-3.115,4.529C19.536,56.662,9,49.796,9,49.796v-3.65c0-17.406,8.343-27.069,8.343-27.069	s5.707-2.762,10.977-3.489l1.635,3.1c0,0,2.599-0.602,6.045-0.602s6.045,0.602,6.045,0.602l1.635-3.1	C48.95,16.315,54.657,19.077,54.657,19.077z M27.01,43.603c2.656,0,4.808-2.418,4.808-5.401c0-2.983-2.153-5.401-4.808-5.401	s-4.808,2.418-4.808,5.401C22.202,41.185,24.354,43.603,27.01,43.603z M44.99,43.603c2.656,0,4.808-2.418,4.808-5.401	c0-2.983-2.153-5.401-4.808-5.401c-2.656,0-4.808,2.418-4.808,5.401C40.182,41.185,42.334,43.603,44.99,43.603z"></path>
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;