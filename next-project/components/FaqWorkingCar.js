import React from "react";
import Heading from "../components/Heading/heading";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import styles from '../styles/Faqs.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaArrowAltCircleRight } from "react-icons/fa";
function FaqWorkingCar() {

  return (
    <>
      <div className={'conatiner'}>
        <div className={'row'}>
          <div>
            <Heading title={'FAQs'} />
          </div>
          <div className={'col-md-2'}></div>
          <div className={'col-md-8 col-sm-12 p-5'}>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What is the procedure of scrapping my car in Dubai and Abu Dhabi?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    The method scrapping your car at Crazy Car Corner is feasible and reliable.
                    You can get our assistance easily by following ways.<br />
                    <span className={'d-flex my-3'}><FaArrowAltCircleRight  className={styles.FaArrowAltCircleRight}/> You can Email us talktous@crazycarcorner.com</span>
                    <span className={'d-flex my-3'}><FaArrowAltCircleRight  className={styles.FaArrowAltCircleRight}/> You can also Whatsapp us +971 55 882 9990</span>
                    <span className={'d-flex my-3'}><FaArrowAltCircleRight  className={styles.FaArrowAltCircleRight}/> Send us Car details and pictures, to get a </span> 
                    <p className={'ml-4'}>prompt response clink on our link <a className={styles.sellMyCar} href="https://crazycarcorner.com/sell-my-car"> Sell My Car </a></p>
                    <span className={'d-flex'}><FaArrowAltCircleRight  className={styles.FaArrowAltCircleRight}/> By form filling</span>
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <br />
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Does Crazy Car Corner provide home Inspection?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Yes, Crazy Car Corner provides home inspection.
                    Our team members will be there at your location and will inspect your car.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <br />
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Is there a charge to use your service?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Definitely not! Our service is absolutely free, and if you like our offer,
                    you may sell your working car within 30 minutes. If we are providing you with free service,
                    we are not requiring you to sell your working car to us; it is entirely up to you.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <br />
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    My Emirates ID and visa is cancelled and expired, how can I sell my car?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Do not worry, you may sell your functioning or junk car in the UAE without a valid emirates ID or expired registration and insurance.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <br />
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How do you determine my offer?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    We look at current market circumstances as well as the year, make, model, mileage, and vehicle history record for your car and our team members will come to
                    your location and inspect your car from the inside out for serious flaws such as frame or flood damage. We will also take your automobile for a test drive to make sure the brakes and turn signals are in good order(among other things).
                    If repairs are required, we may need to alter our offer. In terms of cleanliness, the long-term maintenance and care of your vehicle are what determines our evaluation offer.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <br />
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    Will you charge me for the car inspection?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    No, you don’t have to pay any charges.
                    Our team member will arrive at the address you specify and offer you a free automobile inspection at Crazy Car Corner.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

            </Accordion>
          </div>
        </div>
      </div>

    </>
  );
}

export default FaqWorkingCar;
