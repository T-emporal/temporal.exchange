import type {NextPage} from "next";
import {NextSeo} from "next-seo";
import {Fragment, useState} from "react";

const Contact: NextPage = () => {
    const [telegram, setTelegram] = useState("");
    const [discord, setDiscord] = useState("");

    const [isHovered, setIsHovered] = useState(false);

    function handleTraditionalFormSubmit(event: React.FormEvent) {
        event.preventDefault();  // This prevents the form from submitting traditionally (page reload)
    }

    async function onSubmit(telegram: string, discord: string) {
    
        const message = `Discord handle: ${discord} and Telegram handle: ${telegram}`;
        const res = await fetch(`/api/sendmessage?name=NoName&message=${encodeURIComponent(message)}`);
        if (res.status === 200) {
            window.location.href="/thankYou"
        } else {
            alert("Some error occurred. Please try again")
        }
    }

    return (<Fragment>
        <NextSeo title="Contact"/>
        <main className="flex flex-col items-center justify-center">

            <div className="flex justify-center mx-4 mt-8">
                <img src="/MaskIcon.svg" alt="Vector 1" />
            </div>
            <h1 className="text-3xl md:text-5xl md:mx-16 mx-12 text-center text-white font-open font-extralight">
                We will be out of{" "} 
                <span className="text-[#3CC0A3]">
                     stealth mode 
                </span>
                {" "}soon. Please leave your handle and we’ll reach out to you.
            </h1>
            <form className="space-y-12 mt-24" onSubmit={handleTraditionalFormSubmit}>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Enter here" style={{fontSize:"1rem", boxShadow: "none", outline: "none"}}
                        aria-label="Telegram Handle"
                        onChange={(e) => setTelegram(e.target.value)}
                        className="text-[#9E9E9E] border rounded-xl bg-transparent border-[#3CC0A3] border-solid w-full py-3 pl-5 pr-16 sm:pr-32 focus:text-[#9E9E9E] focus:font-helvetica-neue focus:font-normal focus:outline-none focus:border-[#3CC0A3]"
                        />
                    <label className="absolute -top-7 left-0 text-[#9E9E9E] font-light font-helvetica-neue text-sm">
                        Telegram Handle
                    </label>
                </div>
  
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Enter here" style={{fontSize:"1rem" , boxShadow: "none", outline: "none"}}
                        aria-label="Discord Tag"
                        onChange={(e) => setDiscord(e.target.value)}
                        className="text-[#9E9E9E] border rounded-xl bg-transparent border-[#3CC0A3] border-solid w-full py-3 pl-5 pr-16 sm:pr-32 focus:text-[#9E9E9E] focus:font-helvetica-neue focus:font-normal focus:outline-none focus:border-[#3CC0A3]"
                    />
                    <label className="absolute -top-7 left-0 text-[#9E9E9E] font-light font-helvetica-neue text-sm">
                        Discord Tag
                    </label>
                </div>
                <div className="flex justify-center w-full">
                    <button 
                        type="submit"
                        style={{borderWidth: '1px'}}
                       
                        onClick={() => {
                            void (async () => {
                                try {
                                    await onSubmit(telegram, discord);
                                } catch (error) {
                                    console.error("Error occurred:", error);
                                }
                            })();
                        }}
                        className="justify-center flex border-[#008063] bg-[#008063] hover:border-[#3CC0A3] hover:bg-[#161616] hover:text-[#3CC0A3] font-helvetica-neue text-white font-light py-3 px-6 rounded-xl">
                        Submit
                    </button>
                </div>
                
            </form>

            <div 
                onMouseEnter={() => setIsHovered(true)} 
                onMouseLeave={() => setIsHovered(false)}
                onClick={() => window.location.href="/"}
                className="cursor-pointer flex items-center space-x-4 mt-16 mb-4 text-white font-helvetica-neue font-extralight hover:text-[#3CC0A3]"
            >
            <img src={isHovered ? "/arrow-left-circle-hover.svg" : "/arrow-left-circle.svg"} alt="Go back" />
            <span>Go back to Homepage</span>
            </div>


        </main>
    </Fragment>)
}

export default Contact;