import {NextSeo} from 'next-seo'
import Footer from './Footer'
import Navbar from './NavBar'

// eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
export default function Layout({ children } : any) {
    return (
        <>
            <NextSeo title="Temporal" description="Future of Market Mechanisms"/>
            <div className="min-h-screen overflow-x-hidden bg-black w-full">
                <Navbar/>
                <main>{children}</main>
                <Footer/>
            </div>
        </>
    )
}