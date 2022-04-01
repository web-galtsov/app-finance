import React, { useState, useEffect } from "react";
import {SuccessMessageLetter, ErrorMessage} from "./Message";
import {RiSendPlaneFill} from "react-icons/ri";

import {
    FormBtn,
    LetterInput,
    ContentLetter,
    WrapLetter,
    LetterForm,
    ContactLoadLetter
} from "../styles/contactStyle";
import { Button} from "@/layout/Styles";

export default function Letter() {
    const [inputs, setInputs] = useState({
        email: "",
    })
    const [form, setForm] = useState('')
    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }))
    }
    const onSubmitForm = async (e) => {
        e.preventDefault()
        if ( inputs.email ) {
            setForm({ state: "loading" })
            try {
                const res = await fetch(`api/letter`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(inputs),
                })
                const { error } = await res.json()
                if (error) {
                    setForm({
                        state: "error",
                        message: error,
                    })
                    return
                }
                setForm({
                    state: "success",
                    message: "Thank you for contacting us, we will be in touch soon.",
                })
                setInputs({
                    email: "",
                })
            } catch (error) {
                setForm({
                    state: "error",
                    message: "Something went wrong",
                })
            }
        }
    }
    useEffect(() => {
        if (form.state) {
            const timeout = setTimeout(() => setForm({state:"", message: ""}), 2000);
            return () => {
                clearTimeout(timeout);
            };
        }
    }, [form.state]);
    return (
            <WrapLetter>
               <LetterForm onSubmit={(e) => onSubmitForm(e)}>
                  <ContentLetter>
                       <LetterInput
                                  id="email"
                                  type="email"
                                  value={inputs.email}
                                  onChange={handleChange}
                                  placeholder="אימייל" // eslint-disable-next-line
                       />
                       <FormBtn>
                          <Button
                                 type="submit"
                                 name="submit"
                                 className="btn-color btn"
                                 style={{ borderRadius: "20px 0 0 20px"}}
                          >
                          <RiSendPlaneFill style={{display: "inline-block",fontSize: "1.15rem",marginLeft: "10px",verticalAlign: "middle"}}/>
                                  שלח
                          </Button>
                                  {form.state === "loading" ? (
                                    <ContactLoadLetter>
                                        <div className="lds-ellipsis">
                                           <div/><div/><div/><div/></div>
                                    </ContactLoadLetter>
                                            ) : form.state === "error" ? (
                                     <ErrorMessage>{form.message}</ErrorMessage>
                                            ) : (
                                           form.state === "success" && <SuccessMessageLetter/>
                                    )}
                       </FormBtn>
                  </ContentLetter>
               </LetterForm>
            </WrapLetter>
       )
    }
