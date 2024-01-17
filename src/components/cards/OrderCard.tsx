import { Fragment } from "react";
import {
    ArrowSmallLeftIcon,
    ArrowSmallRightIcon,
    ArrowDownCircleIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Listbox } from "@headlessui/react";

const tabs = [
    { name: "Trade", href: "#", current: false, lineColor: "#BF71DF" },
    { name: "Mint", href: "#", current: false, lineColor: "#0EE29B" },
    { name: "Earn", href: "#", current: false, lineColor: "#E86B3A" },
];

const selectedMintChain = { name: "stATOM", icon: "./logo_atom.svg", apy: "3.05%" }

function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
}
const currentMode = 'Mint'
const PlaceOrderCard = () => {
    return (
        <div className=" backdrop-blur-[4px] xl:py-6 rounded-xl flex flex-col py-4 xl:justify-between w-full "
            style={{
                background: 'radial-gradient(ellipse at center top, rgba(23, 58, 63, 0.35) 10%, rgba(4, 20, 32, 0) 100%)',
                boxShadow: '3.8px 3.8px 38px 0px rgba(70, 70, 70, 0.10) inset',
            }}>
            <div>
                {" "}
                <div className="flex items-center justify-between mb-2 xl:mb-4 px-4 xl:px-6">
                    <span className="text-md font-bold text-[#f2f2f2] uppercase">
                        Transact
                    </span>
                    <span
                        className="-rotate-45 flex items-center"
                    >
                        <ArrowSmallRightIcon
                            strokeWidth={3}
                            className="w-3 h-3 text-[#f2f2f2]"
                        />
                        <ArrowSmallLeftIcon
                            strokeWidth={3}
                            className="w-3 h-3 text-[#f2f2f2]"
                        />

                    </span>
                </div>

                <div className="border-b-[0.5px] border-gray-700">
                    <nav
                        className=" grid grid-cols-3 justify-items-center cursor-not-allowed"
                        aria-label="Tabs"
                        style={{ pointerEvents: 'none' }}
                    >
                        {tabs.map((tab) => (
                            <span
                                key={tab.name}

                                className={classNames(
                                    tab.name == currentMode
                                        ? "border-temporal text-temporal"
                                        : "border-transparent text-[rgb(242,242,242)] hover:border-gray-300 ",
                                    "whitespace-nowrap border-b-2 py-2 px-1 text-sm block w-full text-center font-normal uppercase cursor-pointer"
                                )}
                            >
                                {tab.name}
                            </span>
                        ))}
                    </nav>
                </div>


                <div className=" px-6 2xl:px-16 pb-5 ">
                    <div className="flex my-5 justify-center text-sm bg-transparent rounded-lg">
                        <button
                            className={`w-16 border border-r-0 border-temporal px-2 py-2 rounded-l-lg transition duration-500 ease-in-out text-xs text-white cursor-not-allowed`}
                            style={{
                                backgroundImage: 'linear-gradient(to right,  #005B5B , #002C3C)',
                                pointerEvents: 'none'
                            }}
                        >
                            MINT
                        </button>
                        <button
                            className={`w-16 border border-l-0 border-temporal px-2 py-2 rounded-r-lg transition duration-500 ease-in-out bg-teal-900/10 text-xs text-gray-400 cursor-not-allowed`}
                            style={{ pointerEvents: 'none' }}
                        >
                            REDEEM
                        </button>
                    </div>
                    <div className="mt-4">

                        <div className="flex items-center">
                            <div className="w-full pb-5">
                                <div className="w-full flex justify-between items-center">
                                    <label htmlFor="mint-amount" className="text-sm xl:text-sm font-medium leading-6 text-gray-100">
                                        Input
                                    </label>
                                    <label className="text-sm xl:text-sm font-medium leading-6 text-gray-100">
                                        Balance: 5000
                                    </label>
                                </div>

                                <div className="rounded-md border-2 border-temporal50 bg-neutral-950/50 mt-2 cursor-not-allowed flex" style={{ pointerEvents: 'none' }}>
                                    <div className="relative pr-5 flex-1 border-r border-temporal50 "
                                    >
                                        <Listbox value={selectedMintChain}>
                                            <Listbox.Button className="cursor-default text-gray-400 py-3 px-3 text-left w-full flex items-center">
                                                <span className=" truncate flex items-center text-gray-400">
                                                    <img src={selectedMintChain.icon} alt={selectedMintChain.name} className="w-6 mr-5 h-6" />
                                                    {selectedMintChain.name}
                                                </span>
                                                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                    <ChevronDownIcon
                                                        className="h-5 w-5 text-gray-400"
                                                        aria-hidden="true"
                                                    />
                                                </span>
                                            </Listbox.Button>

                                            <Listbox.Options className="absolute mt-1 w-full  bg-[#15191D] rounded-md shadow-lg z-100">
                                                <Listbox.Option key={selectedMintChain.name} value={selectedMintChain.name} as={Fragment}>
                                                </Listbox.Option>
                                            </Listbox.Options>
                                        </Listbox>
                                    </div>
                                    <input
                                        type="text"
                                        name="mint-amount"
                                        id="mint-amount"
                                        className="flex-1 border-0 border-l border-temporal50 py-0 text-gray-400 text-center bg-transparent focus:outline-none "
                                        placeholder=""
                                        aria-describedby="mint-amount"
                                        value='100'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <ArrowDownCircleIcon
                                strokeWidth={2}
                                className="w-7 h-7 text-temporal50"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center rounded-md border-2 border-temporal50 bg-neutral-950/50 mt-4">
                                <div className="flex-1 flex items-center border-r-2 border-temporal50 py-0 ">
                                    <img src={selectedMintChain.icon} alt={selectedMintChain.name} className="w-6 mx-5 h-6 " />
                                    <div>
                                        <div className="text-gray-400">PT {selectedMintChain.name}</div>
                                        <div className="text-gray-400 text-xs">30 Dec 2030</div>
                                    </div>
                                </div>
                                <span className="flex-1 py-3 text-center text-gray-400 bg-transparent">
                                    100
                                </span>
                            </div>

                            <div className="flex items-center rounded-md border-2 border-temporal50 bg-neutral-950/50 mt-4">
                                <div className="flex-1 flex items-center border-r-2 border-temporal50 py-0 ">
                                    <img src={selectedMintChain.icon} alt={selectedMintChain.name} className="w-6 mx-5 h-6 " />
                                    <div>
                                        <div className="text-gray-400">YT {selectedMintChain.name}</div>
                                        <div className="text-gray-400 text-xs">30 Dec 2030</div>
                                    </div>
                                </div>
                                <span className="flex-1 py-3 text-center text-gray-400 bg-transparent">
                                    100
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button
                className={`w-[250px] md:w-[300px] mx-auto mt-3 py-2 text-gray-300 rounded-md shadow-md border-2 border-temporal50`}
                style={{
                    backgroundImage: 'linear-gradient(to right, rgba(10, 186, 181, 0.25), rgba(0, 0, 0, 0) )',
                    pointerEvents: 'none'
                }}
            >
                MINT
            </button>

            {/* CMNTS: END The order form */}

        </div>
    );
};

export default PlaceOrderCard;

