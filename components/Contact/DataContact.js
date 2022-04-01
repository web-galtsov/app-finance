import {FiMail, FiMap, FiPhoneCall} from "react-icons/fi";
const contactData = [
    {
        id: "2",
        address: "כתובות דוא\"ל",
        addressLink1: "Info@soso.co.il",
        addressLink2: "soso1finance@gmail.com",
        linkA1: "mailto:Info@soso.co.il",
        linkA2: "mailto:soso1finance@gmail.com",
        arialLabel: "email",
        icon: <FiMail/>
    },
    {
        id: "3",
        address: "מספר טלפון",
        addressLink1: "(+972) 053-7734677",
        addressLink2: "(+972) 054-6868540",
        linkA1: "tel:9720537734677",
        linkA2: "tel:9720546868540",
        arialLabel: "telethon",
        icon: <FiPhoneCall/>
    },
    {
        id: "1",
        address: "כתובת",
        addressLink1: "ראשון לציון, משה לוי 12",
        addressLink2: "ישראל",
        arialLabel: "address",
        icon: <FiMap/>
    },

]
export default contactData;

