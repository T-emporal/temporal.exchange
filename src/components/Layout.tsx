import {NextSeo} from 'next-seo'
import Navbar from './NavBar'
import { useRouter } from 'next/router';

export default function Layout({ children } : any){
    const router = useRouter();
    return (
        <>
            <NextSeo title="Temporal" description="Future of Market Mechanisms"/>
            <div className="min-h-screen overflow-x-hidden bg-[#161616] w-full">
            {router.pathname !== '/' && <Navbar />}
                <main>{children}</main>
            </div>
        </>
    )
}