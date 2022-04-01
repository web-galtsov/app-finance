import React, { useEffect, useState } from "react";
import { FaLongArrowAltUp } from "react-icons/fa";
import { useWindowScroll } from "react-use";

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisiblity] = useState(false);

    useEffect(() => {
        if (pageYOffset > 400) {
            setVisiblity(true);
        } else {
            setVisiblity(false);
        }
    }, [pageYOffset]);

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

    if (!visible) {
        return false;
    }

    return (
        <div
            className="scroll-to-top cursor-pointer text-center"
            onClick={scrollToTop}
        >
            <FaLongArrowAltUp style={{
                display: "inline-block",
                verticalAlign: "middle",
                margin: "10px 9px",
                fontSize: "1.4rem"
            }}/>
        </div>
    );
};

export default ScrollToTop;