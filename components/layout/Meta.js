import Head from "next/head"

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
            <meta name='keywords' content={keywords} />
            <meta name='description' content={description} />
            <meta charSet="utf-8" content="text/html;charset=UTF-8" />
            <link rel="icon" type="image/x-icon" href="https://soso.co.il/favicon.ico" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: "סוסופייננס",
    keywords: "מסלול ריבית קבועה צמודה,הלוואה,הלוואות לכל מטרה וייעוץ משכנתאות,מסלולים וריביות,לניתוח הפרופיל הפיננסית מסלולי המשכנתאותתת,המשכנתא,מחזור משכנתא,משכנתא חוץ בנקאיתת,איחוד הלוואות,משכנתא,משכנתאות,מחשבון משכנתא,לקחת משכנתא,לקבל משכנתא,סוגי משכנתאות",
    description: "תשואות פיננסים מתמחה בייעוץ, ליווי וגיוס אשראי ומשכנתאות. אנו עובדים בשיתוף פעולה עם מיטב גופי המימון והאשראי במשק, כדוגמת הבנקים, חברות הביטוח ועוד.",
}

export default Meta
