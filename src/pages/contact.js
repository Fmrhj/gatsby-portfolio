import "../../styles/styles.scss"

import Footer from "../components/Footer"
import Header from "../components/Header"
import ContactForm from "../components/ContactForm"
import MetaData from "../components/MetaData"
import React from "react"

const ContactPage = () => (
  <div>
    <div className="wrapper">
      <MetaData />
      <Header />
      <ContactForm />
    </div>
    <Footer />
  </div>
)

export default ContactPage
