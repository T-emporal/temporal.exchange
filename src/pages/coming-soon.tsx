import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import type { NextPage } from "next";
import { NextSeo } from "next-seo";
import Lottie from "lottie-react";
import animation from "../../public/hour_glass.json"
import Link from "next/link";
const ComingSoon: NextPage = () => {
  const handleJoinWaitlistClick = () => {
    // Open the Typeform when the user clicks on "Join Waitlist"
    window.open("https://z4y1xmgjna6.typeform.com/to/VVustsKl", "_blank");
  };
  return (
    <>
      <NextSeo title="Coming soon" />
      <main className="flex mt-20 flex-col items-center justify-center space-y-16">
        <h3 className="text-center text-[62px] font-thin leading-[70px] text-white">
          The wait is almost over.
          <br />
          <span className="text-temporal">Testnet</span> is coming!
        </h3>
        <Lottie className="h-[400px]" animationData={animation} loop={true} />
        <Link className="text-white flex items-center" href={"/"}>
          <ArrowLeftCircleIcon className="mr-2 h-6 w-6" />
          Go back to homepage
        </Link>
      </main>
    </>
  );
};

export default ComingSoon;
