import {ContactMessageOk, ContactMessageOkLetter} from "../styles/contactStyle";
import {IoIosCheckmarkCircle} from "react-icons/io";
import {FiAlertCircle} from "react-icons/fi";

const ErrorMessage = ({ children }) => (
    <div className='flex items-center text-red-800 dark:text-red-400'>
       {/* <span className='sr-only'>Alert</span>*/}
        <FiAlertCircle style={{color:"red", fontSize: "25px"}}/>
        <p className='ml-2 text-sm font-bold text-red-800 dark:text-red-400'>
            {children}
        </p>
    </div>
)

const SuccessMessage = ({ children }) => (
    <ContactMessageOk>
      {/*  <span className='sr-only'>Success</span>*/}
        <IoIosCheckmarkCircle style={{color:"#53A6FE", fontSize: "35px"}}/>
        <p>
            {children}
        </p>
    </ContactMessageOk>
)

const SuccessMessageLetter = ({ children }) => (
    <ContactMessageOkLetter>
        <span className='sr-only'>Success</span>
        <IoIosCheckmarkCircle style={{color:"#53A6FE", fontSize: "35px"}}/>
        <p>
            {children}
        </p>
    </ContactMessageOkLetter>
)

export { ErrorMessage, SuccessMessage,SuccessMessageLetter }