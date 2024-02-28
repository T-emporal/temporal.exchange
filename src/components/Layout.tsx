import {NextSeo} from 'next-seo'
import { motion } from "framer-motion";

export default function Layout({ children } : any) {
    return (
        <>
            <NextSeo title="Temporal" description="Future of Market Mechanisms"/>
            <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{
              type: "spring",
              duration: 1
            }}
            className="min-h-screen overflow-x-hidden w-full bg-center bg-no-repeat" style={{
                background: "rgba(10, 18, 29, 1) no-repeat",
                backgroundSize: 'cover',
                backgroundAttachment: "fixed"
            }}>
                <main>{children}</main>
            </motion.div>
        </>
    )
}