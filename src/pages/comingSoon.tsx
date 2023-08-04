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
            <h1 className="text-4xl text-white font-mono">Join Waitlist</h1>
            <button
              onClick={handleJoinWaitlistClick}
              className="bg-blue-500 text-white px-4 py-2 mt-4 rounded"
            >
              Join Waitlist
            </button>
          </main>
        </>
      );
    };

export {};
    
export default ComingSoon;