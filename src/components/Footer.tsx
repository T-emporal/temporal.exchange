import type { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
    const t = "{ T }"
    return (
        <footer className="py-6 bg-black text-gray-50">
            <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
                <div className="grid grid-cols-12">
                    <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                        <a rel="noopener noreferrer" href="#" className="flex justify-center space-x-3 md:justify-start">
                            <span className="self-center text-2xl font-semibold font-mono">{t} E M P O R A L</span>
                        </a>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Navigate</p>
                        <ul>
                            <li>
                                <Link rel="noopener noreferrer" href="/docs" className="hover:dark:text-violet-400">Docs</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="/whitepaper" className="hover:dark:text-violet-400">Whitepaper</Link>
                            </li>
                            {/* <li>
						<Link rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Link</Link>
					</li>
					<li>
						<Link rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Link</Link>
					</li>
					<li>
						<Link rel="noopener noreferrer" href="#" className="hover:dark:text-violet-400">Link</Link>
					</li> */}
                        </ul>
                    </div>
                    <div className="col-span-6 text-center md:text-left md:col-span-3">
                        <p className="pb-1 text-lg font-medium">Socials</p>
                        <ul>
                            <li>
                                <Link rel="noopener noreferrer" href="/contact" className="hover:white">Twitter</Link>
                            </li>
                            <li>
                                <Link rel="noopener noreferrer" href="/contact"
                                      className="hover:dark:text-violet-400">Telegram</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid justify-center pt-6 lg:justify-between">
                    <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                        <span>©2023 All rights reserved</span>
                        <Link rel="noopener noreferrer" href="#">
                            <span>Privacy policy</span>
                        </Link>
                        <Link rel="noopener noreferrer" href="#">
                            <span>Terms of service</span>
                        </Link>
                    </div>
                    <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                        <Link rel="noopener noreferrer" href="mailto:hello@temporal.exchange" title="Email" className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                            </svg>
                        </Link>
                        <Link rel="noopener noreferrer" href="https://www.linkedin.com/company/temporal-exchange/" title="LinkedIn" className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-5 h-5"
                                viewBox="0 0 50 50">
                                <path d="M 8 3.0097656 C 4.53 3.0097656 2.0097656 5.0892187 2.0097656 7.9492188 C 2.0097656 10.819219 4.59 12.990234 8 12.990234 C 11.47 12.990234 13.990234 10.870625 13.990234 7.890625 C 13.830234 5.020625 11.36 3.0097656 8 3.0097656 z M 3 15 C 2.45 15 2 15.45 2 16 L 2 45 C 2 45.55 2.45 46 3 46 L 13 46 C 13.55 46 14 45.55 14 45 L 14 16 C 14 15.45 13.55 15 13 15 L 3 15 z M 18 15 C 17.45 15 17 15.45 17 16 L 17 45 C 17 45.55 17.45 46 18 46 L 27 46 C 27.552 46 28 45.552 28 45 L 28 30 L 28 29.75 L 28 29.5 C 28 27.13 29.820625 25.199531 32.140625 25.019531 C 32.260625 24.999531 32.38 25 32.5 25 C 32.62 25 32.739375 24.999531 32.859375 25.019531 C 35.179375 25.199531 37 27.13 37 29.5 L 37 45 C 37 45.552 37.448 46 38 46 L 47 46 C 47.55 46 48 45.55 48 45 L 48 28 C 48 21.53 44.529063 15 36.789062 15 C 33.269062 15 30.61 16.360234 29 17.490234 L 29 16 C 29 15.45 28.55 15 28 15 L 18 15 z"></path>
                            </svg>
                        </Link>
                        {/* <Link rel="noopener noreferrer" href="#" title="GitHub" className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
                                <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                            </svg>
                        </Link> */}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;