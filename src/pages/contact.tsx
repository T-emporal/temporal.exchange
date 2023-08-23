import type {NextPage} from "next";
import {NextSeo} from "next-seo";
import {Fragment, useState} from "react";

const Contact: NextPage = () => {
    const [telegram, setTelegram] = useState("");
    const [discord, setDiscord] = useState("");

    async function onSubmit(handle: string, social: string) {
        if (handle === "") {
            return alert("No handle provided")
        }
        // eslint-disable-next-line @typescript-eslint/await-thenable
        const res = await fetch(`/api/sendmessage?name=NoName&message=${handle} at ${social}`)
        if (res.status === 200) {
            alert("Message Sent")
        } else {
            alert("Error occurred")
        }
    }

    return (<Fragment>
        <NextSeo title="Contact"/>
        <main className="flex min-h-screen flex-col items-center justify-center -mt-16"
        style={{
            backgroundImage: 'url("/waves-backdrop.svg")',
            backgroundSize: "cover",
            /* backgroundPosition: "center",*/
          }}>
            <h1 className="text-4xl text-center text-white mb-2 font-mono max-w-xl">
                We will be out of stealth mode soon.
                Please leave your handle and we’ll reach out to you
            </h1>
            <form className="w-full max-w-sm">
                <div className="flex items-center border-b border-gray-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Telegram Handle"
                        aria-label="Telegram Handle"
                        onChange={(e) => setTelegram(e.target.value)}
                    />
                    <button
                        className="flex-shrink-0 font-semibold bg-grey-500 hover:bg-grey-700 border-grey-500 hover:border-grey-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="button"
                        /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
                        onClick={() => onSubmit(telegram, "Telegram")}
                    >
                        S E N D
                    </button>
                </div>
                <div className="flex items-center border-b border-gray-500 py-2">
                    <input
                        className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                        type="text"
                        placeholder="Discord Tag"
                        aria-label="Discord Tag"
                        onChange={(e) => setDiscord(e.target.value)}
                    />
                    <button
                        className="flex-shrink-0 font-semibold bg-grey-500 hover:bg-grey-700 border-grey-500 hover:border-grey-700 text-sm border-4 text-white py-1 px-2 rounded"
                        type="button"
                        /* eslint-disable-next-line @typescript-eslint/no-misused-promises */
                        onClick={() => onSubmit(discord, "Discord")}
                    >
                        S E N D
                    </button>
                </div>
            </form>

        </main>
    </Fragment>)
}

export default Contact;