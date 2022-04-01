import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
    }
    render() {
        return (
            <Html lang="he-IL" dir="rtl">
                <Head>
                    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Hebrew:wght@300;400;600;700;800;900&display=swap" rel="stylesheet"/>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
