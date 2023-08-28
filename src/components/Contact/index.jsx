import React, {useState} from "react";
import { ContactStyled } from "./Styled";
import { Form, Field, Formik, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import { ReactComponent as Mail } from "../../assets/icons/mail.svg";
import { ReactComponent as Phone } from "../../assets/icons/phone.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Whatsapp } from "../../assets/icons/whatsapp.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";

const Contact = ({ toggle, setModal }) => {
  const[loading, setLoading] = useState(false);
  const[error, setError] = useState(false);

  const initialValues = {
    name: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
      name: Yup.string().required("Enter your name"),
      email: Yup.string().email("Enter a Valid Email").required("Enter your email"),
      message: Yup.string().required("Enter your message"),
  });  

  const handleSubmit = async (values, {resetForm}) => {
    setLoading(true);

    const res = await fetch(process.env.REACT_APP_CONTACT_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    if(res.ok === true) {
      setLoading(false)
      setModal(true)
      resetForm()
      setError(false)
    } else {
      setLoading(false);
      setError(true)
    }
  }

  const TextError = (props) => {
    return (
        <div className="error">
            {props.children}
        </div>
    )
  }

  const SubmitError = () => {
    return (
        <div className="submit_error">
            Unable to send message. Please try again
        </div>
    )
  }

  return (
    <ContactStyled
      id="contact"
      className={`content ${toggle === 5 ? "active-content" : ""}`}  
    >
      <h2 data-aos="fade-left">Have a question or want to work together?</h2>

      <p data-aos="fade-up">
        I'm available for a frontend development opportunity where I can
        contribute, learn and grow. Don't hesitate to reach out to me if you
        have any opportunity.
      </p>

      <div className="wrap">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          <Form data-aos="fade-up">
            {error && <SubmitError />}

            <div>
              <Field name="name" placeholder="Your Name" />
              <ErrorMessage name='name' component={TextError} />
            </div>

            <div>
              <Field name="email" placeholder="Your Email" inputMode='email' />
              <ErrorMessage name='email' component={TextError} />
            </div>

            <div>
              <Field name="message" as='textarea' rows="8" placeholder="Your Message" />
              <ErrorMessage name='message' component={TextError} />
            </div>

            <button type="submit" disabled={loading}>{ loading ? 'Sending...' : 'SUBMIT'}</button>
          </Form>
        </Formik>

        <div className="links">
          <h4> Get in touch </h4>

          <div>
            <a
              href="mailto:olasunkanmi.salam22@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Mail />
            </a>
            <a href="tel:2349018175157" target="_blank" rel="noreferrer">
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
              href="https://wa.me/2349018175157"
              target="_blank"
              rel="noreferrer"
            >
              <Whatsapp />
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
