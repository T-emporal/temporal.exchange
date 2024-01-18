import {NextSeo} from 'next-seo'

export default function Layout({ children } : any) {
    return (
        <>
            <NextSeo title="Temporal" description="Future of Market Mechanisms"/>
            <div className="min-h-screen overflow-x-hidden w-full bg-center bg-no-repeat" style={{
                background: "rgba(10, 18, 29, 1) no-repeat",
                backgroundSize: 'cover',
                backgroundAttachment: "fixed"
            }}>
                <main>{children}</main>
            </div>
        </>
    )
}