import React from "react";
import Head from "next/head";
import Meta from '@/layout/Meta';
import dynamic from "next/dynamic";
import { NextSeo } from "next-seo";
const AboutInfoSection = dynamic(() => import("../components/About/AboutInfoSection"));
const AboutTeamSection = dynamic(() => import("../components/About/AboutTeamSection"));
const AboutHowActuall = dynamic(() => import("../components/About/AboutHowActuall"));


const about = () => {
    return (
        <>
            <Head>
                <title>אודות-וסופייננס</title>
                <Meta
                description="סוסו פייננס נולד כחזון של ילד שגדל בבית חד-הורי, ועבר את תלאות העליה. אימי התמודדה עם עול המשכנתא, וכבן בכור הבטחתי לעצמי שאעזור לה, ולכל אחד להתמודד עם המעמסה של המשכנתא."
                />
                <NextSeo title="אודות-וסופייננס" />
            </Head>
            <AboutInfoSection/>
            <AboutTeamSection/>
            <AboutHowActuall/>
        </>
    )
}

export default about
