import type {NextPage} from "next";
import {NextSeo} from "next-seo";

const ComingSoon: NextPage = () => {
    const handleJoinWaitlistClick = () => {
      // Open the Typeform when the user clicks on "Join Waitlist"
      window.open('https://z4y1xmgjna6.typeform.com/to/VVustsKl', '_blank');
    };
    return (
      <>
        <NextSeo title="LandingPage" />
        <main className="flex min-h-screen flex-col items-center justify-center">
          <button
            onClick={handleJoinWaitlistClick}
            className="mt-4 rounded bg-gradient-to-r from-black to-gray-500 px-4 py-2 text-white"
          >
            <h1 className="font-mono text-2xl text-white">Join Waitlist</h1>
          </button>
        </main>
      </>
    );
    };

export {};
    
export default ComingSoon;