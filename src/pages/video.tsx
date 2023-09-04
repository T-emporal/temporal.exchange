import type { NextPage } from "next";
import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';



const Video: NextPage = () => {

  const fadeInOutVariants = {
    initial: { opacity: 0, scale: 1 },
    animate: { opacity: 1, scale: 2, transition: { duration: 1 } }
};

  const [isIntroFinished, setIsIntroFinished] = useState(false);
  const router = useRouter(); // Declare the router

  useEffect(() => {
    if (!isIntroFinished) {
      setTimeout(() => {
        setIsIntroFinished(true);
      }, 2000);
    }
  }, [isIntroFinished]);

  useEffect(() => {
    if (isIntroFinished) {
      // Navigate to the root route once the animation completes
      router.push('/hero');
    }
  }, [isIntroFinished]);

  return (
    <AnimatePresence>
    {!isIntroFinished && (
      <motion.img
        initial="initial"
        animate="animate"
        variants={fadeInOutVariants}
        src="/mandela.svg"
        alt="Intro Logo"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" 
      />
    )}
  </AnimatePresence>
  )
}

export default Video;
