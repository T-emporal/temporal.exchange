import {NextSeo} from 'next-seo'
import Footer from './Footer'
import Navbar from './NavBar'

export default function Layout({ children } : any) {
    return (
        <>
            <NextSeo title="Temporal" description="Future of Market Mechanisms"/>
            <div className="min-h-screen overflow-x-hidden bg-[#161616] w-full">
                <Navbar/>
                <main>{children}</main>
            </div>
        </>
    )
}