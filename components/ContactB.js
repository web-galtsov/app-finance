import React, { useEffect, useState } from "react";
import { SuccessMessage, ErrorMessage } from "./Message";
import { RiSendPlaneFill } from "react-icons/ri";

import {
  ContactWrapForm,
  ContactFormTitle,
  ContactFormDetail,
  ContactFormTitleH6,
  ContactFormInput,
  ContactFormTextarea,
  ContactLoad,
  ContactBoxInfo,
  FormBtn,
  RowCont,
} from "../styles/contactStyle";
import { Col6, Button, Col12 } from "@/layout/Styles";

export default function ContactB() {
  const [inputs, setInputs] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [form, setForm] = useState("");
  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };
  const onSubmitForm = async (e) => {
    e.preventDefault();
    if (inputs.name && inputs.phone) {
      setForm({ state: "loading" });
      try {
        const res = await fetch(`api/contact`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(inputs),
        });
        const { error } = await res.json();
        if (error) {
          setForm({
            state: "error",
            message: error,
          });
          return;
        }
        setForm({
          state: "success",
          message: "Thank you for contacting us, we will be in touch soon.",
        });
        setInputs({
          name: "",
          phone: "",
          email: "",
          message: "",
        });
      } catch (error) {
        setForm({
          state: "error",
          message: "Something went wrong",
        });
      }
    }
  };
  useEffect(() => {
    if (form.state) {
      const timeout = setTimeout(
        () => setForm({ state: "", message: "" }),
        2000
      );
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [form.state]);

  return (
    <Col6 className="pl">
      <ContactBoxInfo data-aos="fade-left">
        <ContactWrapForm>
          <ContactFormTitle>
            <ContactFormTitleH6>קבלו ייעוץ מהמומחים שלנו</ContactFormTitleH6>
            <h2>נהיה בקש</h2>
          </ContactFormTitle>
          <ContactFormDetail>
            <form onSubmit={(e) => onSubmitForm(e)}>
              <RowCont>
                <Col12 className="mb20">
                  <ContactFormInput
                    id="name"
                    type="text"
                    value={inputs.name}
                    onChange={handleChange}
                    required
                    placeholder="שם"
                    autocomplete="name"
                  />
                  <span className="error">*</span>
                </Col12>
                <Col12 className="mb20">
                  <ContactFormInput
                    id="phone"
                    type="tel"
                    value={inputs.phone}
                    onChange={handleChange}
                    autoComplete="phone"
                    required
                    placeholder="טלפון"
                  />
                  <span className="error">*</span>
                </Col12>
                <Col12 className="mb20">
                  <ContactFormInput
                    id="email"
                    type="email"
                    value={inputs.email}
                    onChange={handleChange}
                    placeholder="אימייל" // eslint-disable-next-line
                  />
                </Col12>
                <Col12 className="mb20">
                  <ContactFormTextarea
                    id="message"
                    type="text"
                    value={inputs.message}
                    onChange={handleChange}
                    placeholder="הודעת"
                    rows="4"
                    cols="30"
                  />
                </Col12>
                <Col12 className="mb20">
                  <FormBtn>
                    <Button
                      type="submit"
                      name="submit"
                      className="btn-color btn"
                    >
                      <RiSendPlaneFill
                        style={{
                          display: "inline-block",
                          fontSize: "1.15rem",
                          marginLeft: "10px",
                          verticalAlign: "middle",
                        }}
                      />
                      שלח
                    </Button>
                    {form.state === "loading" ? (
                      <ContactLoad>
                        <div className="lds-ellipsis">
                          <div />
                          <div />
                          <div />
                          <div />
                        </div>
                      </ContactLoad>
                    ) : form.state === "error" ? (
                      <ErrorMessage>{form.message}</ErrorMessage>
                    ) : (
                      form.state === "success" && <SuccessMessage />
                    )}
                  </FormBtn>
                </Col12>
              </RowCont>
            </form>
          </ContactFormDetail>
        </ContactWrapForm>
      </ContactBoxInfo>
    </Col6>
  );
}
