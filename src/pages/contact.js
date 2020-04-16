import React from "react"
import '../../styles/styles.scss'

// import components
import MetaData from "../components/metaData"
import Header from "../components/header"
import ContactBlock from "../components/contactBlock"

const ContactPage = () => (
    <div className="wrapper">
        <MetaData />
        <Header />
        <ContactBlock />
    </div>
)

export default ContactPage