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
function FaqNotWorkingCar() {

    return (
        <>
            <div className={'conatiner'}>
                <div className={'row'}>
                    <div>
                        <Heading title={'FAQs'} />
                    </div>
                    <div className={'col-md-2'}></div>
                    <div className={'col-md-8 col-sm-12 p-4'}>

                        <Accordion>

                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Why should I sell my scrap car at Crazy Car Corner?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        Crazy Car Corner is the easiest way to sell your scrap car because here we
                                        are providing you with many facilities like; you don’t need to go somewhere to sell your car,
                                        our team members will come to your place wherever it is in Dubai, UAE, within 30 minutes we will
                                        buy your car after inspection. So, don’t waste the chance to grab all these facilities.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <br />
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Is an online offer a real offer or an estimate?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        We provide genuine deal which is authentic for your junk car.
                                        You will leave with money in hand after inspection.Many of our customers go away with a lot more than they expected.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <br />
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Will you pick up my junk car from my home?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        We will pick your vehicle from the place which is required by you, whether it’s your home or any other place.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <br />
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Will you inspect my car online?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        We can inspect your junk scrap or used car online and as well as our team members can also come to the place which you recommend.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <br />
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                        Will I need to deal with paperwork?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                        When you sell your vehicle to Crazy Car Corner, you would not have to deal with the paperwork at all.
                                        We handle all of the paperwork for you and release liability in the automobile you sell to us in a safe manner.
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

export default FaqNotWorkingCar;
