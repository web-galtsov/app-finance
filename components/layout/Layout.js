import NavMenu from "@/layout/Nav"
import Meta from "@/layout/Meta"
import Footer from "@/layout/Footer";
import ScrollToTop from "@/layout/ScrollToTop"

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <NavMenu />
            {children}
            <Footer/>
            <ScrollToTop/>
        </>
    )
}
export default Layout