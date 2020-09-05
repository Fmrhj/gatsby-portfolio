import '../../styles/styles.scss'

import ContactBlock from "../components/contactBlock"
import Footer from "../components/footer"
import Header from "../components/header"
// import components
import MetaData from "../components/metaData"
import React from "react"

const ContactPage = () => (
    <body>
        <div className="wrapper">
            <MetaData />
            <Header />
            <ContactBlock />
        </div>
        <Footer />
    </body>
)

export default ContactPage