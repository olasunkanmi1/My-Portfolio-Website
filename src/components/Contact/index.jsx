import React from "react";
import { ContactStyled } from "./Styled";
import { useFormik } from "formik";
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/whatsapp.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const onSubmit = (values) => {
  console.log("Form Data", values);
};

const validate = (values) => {
  //values.name values.email values.message
  //errors.name errors.email errors.message

  let errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(values.email)) {
    errors.email = "Enter a Valid Email";
  }

  if (!values.message) {
    errors.message = "Required";
  }

  return errors;
};

const Contact = ({ toggle }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  return (
    <ContactStyled
      id="contact"
      className={toggle === 5 ? "content active-content" : "content"}
    >
      <h2>Have a question or want to work together?</h2>

      <p>
        I'm actively seeking for a frontend development opportunity where I can
        contribute, learn and grow. Don't hesitate to reach out to me if you
        have any opportunity.
      </p>

      <div className="wrap">
        <form action="" onSubmit={formik.handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              placeholder="Name"
            />
            {formik.touched.name && formik.errors.name && (
              <p>{formik.errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              placeholder="Email"
            />
            {formik.touched.email && formik.errors.email && (
              <p>{formik.errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.message}
              id=""
              cols="30"
              rows="10"
              placeholder="Message"
            />
            {formik.touched.message && formik.errors.message && (
              <p>{formik.errors.message}</p>
            )}
          </div>
          <button type="submit">SUBMIT</button>
        </form>

        <div className="links">
          <h4>Connect with me via: </h4>

          <div>
            <a
              href="mailto:olasunkanmiaq@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Mail />
            </a>
            <a href="tel:2348100991565" target="_blank" rel="noreferrer">
              <Phone />
            </a>
            <a
              href="https://www.linkedin.com/in/aqo"
              target="_blank"
              rel="noreferrer"
            >
              <Linkedin />
            </a>
            <a
              href="https://wa.me/2349098419054"
              target="_blank"
              rel="noreferrer"
            >
              <Whatsapp />
            </a>
            <a
              href="https://www.twitter.com/ola_szuko"
              target="_blank"
              rel="noreferrer"
            >
              <Twitter />
            </a>
            <a
              href="https://www.github.com/olasunkanmi1"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
    </ContactStyled>
  );
};

export default Contact;
