import {NextSeo} from 'next-seo'

export default function Layout({ children } : any) {
    return (
        <>
            <NextSeo title="Temporal" description="Future of Market Mechanisms"/>
            <div className="min-h-screen overflow-x-hidden bg-transparent w-full">
                <main>{children}</main>
            </div>
        </>
    )
}