import '../../styles/styles.scss'

import ContactBlock from "../components/contactBlock"
import Footer from "../components/footer"
import Header from "../components/header"
// import components
import MetaData from "../components/metaData"
import React from "react"

const ContactPage = () => (
    <div className="wrapper">
        <MetaData />
        <Header />
        <ContactBlock />
        <Footer />
    </div>
)

export default ContactPage