import {FiMail, FiMap, FiPhoneCall} from "react-icons/fi";
const contactData = [
    {
        id: "2",
        address: "כתובות דוא\"ל",
       addressLink1: "soso1finance@gmail.com",
        addressLink2: "sosooffice2@gmail.com",
        linkA2: "mailto:sosooffice2@gmail.com",
        linkA1: "mailto:soso1finance@gmail.com",
        arialLabel: "email",
        icon: <FiMail/>
    },
    {
        id: "3",
        address: "מספר טלפון",
        addressLink1: "0503467613",
        addressLink2: "0537734677",
        linkA1: "tel:9720503467613",
        linkA2: "tel:9720537734677",
        arialLabel: "telethon",
        icon: <FiPhoneCall/>
    },
    {
        id: "1",
        address: "כתובת",
        addressLink1: "הכישור 30 חולון",
        addressLink2: "ישראל",
        arialLabel: "address",
        icon: <FiMap/>
    },

]
export default contactData;

