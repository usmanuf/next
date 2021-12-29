import React, { useState } from 'react';
import Map from '../components/Map';
import ContactDetail from "../components/ContactDetail";
import ContactForm from "../components/ContactForm";
import styles from '../styles/ContactUs.module.css';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css';
function Contact() {
  const [formvalues, setFormvalues] = useState({
    name: '',
    email: '',
    msg: ''
  })
  // function sendEmail(e) {
  //   console.log('asd')
  //   e.preventDefault();
  //   emailjs.sendForm('service_jsaoihr', 'template_h5vq1co', e.target, 'user_B0W0FA6EBGqj9vC542Rs3')
  //     .then((result) => {
  //       console.log(result.text);
  //       const parameters = {
  //         msg: 'Email Sent!',
  //         icon: 'fad fa-envelope',
  //         notifisystem
  //       }
  //       addNotification(parameters)
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  // }
  // const forminputs = contactinputs?.map(input => {
  //   return <Objectinput
  //     text={input.text}
  //     value={formvalues}
  //     setValue={setFormvalues}
  //     obj={input.value}
  //     textarea={input.textarea}
  //     name={input.name}
  //   />
  // })

  return (
    <>
     <Head>
        <title>
        Contact Us | Best Car Buyers– Crazy Car Corner 
        </title>
        <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="og:description" content="Whenever you want to search for the best car buyers and want to sell your used car for instant cash, you can contact us at any time anywhere in UAE." />
        <meta name="og:keywords" content="Best Car Buyers, Car Buyers, Car Buyers in UAE, Car Buyers in Dubai, Car Buyers in Abu Dhabi, Car Buyers in Sharjah, Car Buyers in Ajman, Car Buyers in Fujairah" />
        <meta content="#000000" data-react-helmet="true" />
      </Head>
    <div className={styles.ContactUs}>
      <div className={styles.HerosectionContactUs}></div>
      <ContactDetail />
      <ContactForm />
      <Map />
    </div>
    </>
  )
}
export default Contact
