import React from "react";
import Navbar from "../components/Header/Navbar";
import ContactUsComponent from "../components/Contact-Us/Contact-Us-component";
import Footer from "../components/Footer/Footer";
import Breadcrumb from "../components/UI/Breadcrumbs/Breadcrumb";
import { Helmet } from "react-helmet";
import GoogleAdsConversionTracking from "../components/GoogleAdsConversionTracker/GoogleAdsConversionTracker";


const ContactUs = () =>{
    return(
        <>
        <Helmet>
        <link rel="canonical" href="https:// https://www.alghawalimanpower.com/contact" />
            <meta name="keywords" content="nepali housemaid, sri lanka domestic worker,maids from nepal,indian housemaids, maid in muscat,nannies in Oman, cleaning service, nepal domestic help" />
            <meta name="description" content="Al Ghawali provides housemaid services in Oman for household. To hire a housekeeper, get in touch with us now." />
            <title>Professional Housekeeping Services in Muscat | Al Ghawali</title>
            <GoogleAdsConversionTracking />
        </Helmet>
            <Navbar />
            <Breadcrumb url="/contact" pageName="Contact Us"/>
            <ContactUsComponent />
            <Footer />
        </>
    )
}

export default ContactUs;