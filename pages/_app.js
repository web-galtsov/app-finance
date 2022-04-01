import { useEffect } from "react";
import Layout from "@/layout/Layout";
import "../styles/globals.css";
import "../styles/Dropdown.css";
import AOS from "aos";
import "aos/dist/aos.css"
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import * as gtag from "../lib/gtag";
import Script from "next/script";

function MyApp({ Component, pageProps }) {

    useEffect(() => {
        AOS.init({
            easing: "ease-out-cubic",
            duration: 1200,
        });
    }, []);

    const router = useRouter()
    useEffect(() => {
        const handleRouteChange = (url) => {
            gtag.pageview(url)
        }
        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events])


    return (
        <Layout>
            <NextSeo
                title="soso.co.il-סוסו פייננס - ייעוץ ומחזור משכנתאות"
                titleTemplate="סוסו פייננס"
                defaultTitle="סוסו"
                description="תשואות פיננסים הינה אחת מחברות ייעוץ המשכנתאות המוערכות ביותר בישראל"
                canonical= "https://www.soso.co.il"
                openGraph={{
                    url: "https://www.soso.co.il",
                    title: "סוסו פייננס",
                    description: "תשואות פיננסים הינה אחת מחברות ייעוץ המשכנתאות המוערכות ביותר בישראל. בעלי החברה יוצאי המערכת הבנקאית אשר כיהנו בתפקידי מפתח בבנקים השונים בתחום האשראי והמשכנתאות. כמו כן, היועצים בחברה חברים בהתאחדות יועצי המשכנתאות",
                    images: [
                        {
                            url: "https://wazana.dev/og.png",
                            width: 800,
                            height: 420,
                            alt: "סוסו פייננס",
                        },
                    ],
                }}
            />
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            <Component {...pageProps} />
        </Layout>
    )
}

export default MyApp
