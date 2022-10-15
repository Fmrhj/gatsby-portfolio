import "../../styles/styles.scss"

import Footer from "../components/Footer"
import Header from "../components/Header"
import ContactForm from "../components/ContactForm"
import MetaData from "../components/MetaData"
import React from "react"

const ContactPage = () => (
  <body>
    <div className="wrapper">
      <MetaData />
      <Header />
      <ContactForm />
    </div>
    <Footer />
  </body>
)

export default ContactPage
