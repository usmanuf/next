import React from 'react';
import Heading from "../../components/Heading/heading";
import Bounce from 'react-reveal/Bounce';
import styles from '../../styles/WhyChooseUs.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function WhyChooseUs(props) {
    return (
        <div className={styles.WhyChooseUs}>
            <div className={'container'}>
                <Bounce left>
                    <div className={'mb-2'}>
                        <Heading title={'Why Choose Us?'} />
                    </div>
                    <div className={styles.paraWhy}>
                        Are you trying to <b>sell your car</b> that has been damaged or has been involved in an
                        accident? Crazy car corner was founded with the goal of making the automobile
                        selling process feasible for you. We have got you covered, regardless of how bad your
                        automobile is right now. Crazy Car Corner provides the quickest and most
                        convenient method to sell your junk car, as well as a variety of other services such
                        as free and instant automobile valuations, inspections, a guarantee to buy any
                        mechanically failed car in a matter of minutes, prompt money, and, of course,
                        paperwork with care. You may also sell your old automobile, as well as cars that are
                        completely wrecked or damaged, at Crazy Car Corner. We buy a car in the
                        applicable <b>cash for scrap car</b> and used automobile pricing ratings. We give this
                        information so that you may be confident in the dealerships upfront, reduced price.
                    </div>
                    <div className={styles.paraWhy}>
                        You may obtain a cash offer in minutes if you need a quick and easy way to trade in
                        your car with a bad engine by us. If you are looking for the <b>best way to sell a car</b>,
                        Crazy car corner is the best option. Our view is that a great automobile purchasing
                        experience is built on honesty, openness, and justice. Besides, whether the
                        automobile is in great shape or has seen better days, sell it to us for a premium sum
                        you would not find anywhere else. Furthermore, we aim to make things easy for our
                        sellers by coming to your home to check the vehicle for free.
                    </div>
                </Bounce>
                <Bounce left>
                    <div className={styles.paraGraphChoose}>
                        <div className={styles.headingWhy}>
                            Purchase Guaranteed
                        </div>
                        <div className={styles.paraWhy}>
                            If you want to sell your <b>used damaged cars</b>, Crazy car corner will buy them.
                            Whether your automobile is completely destroyed or has a little bit of issue, we will
                            buy it from you at a reasonable price with a guarantee. So, how tough is it to sell a
                            car in the UAE? Crazy Car Corner is only a phone call away. Just give us a call or
                            send us an email, and we will be on our way.
                        </div>
                    </div>
                </Bounce>
                <Bounce left>
                    <div className={styles.paraGraphChoose}>
                        <div className={styles.headingWhy}>
                            Instant Payment
                        </div>
                        <div className={styles.paraWhy}>
                            If you are searching to <b>sell my car on cash</b>, Crazy car corner is the best option.
                            Crazy car corner will instantly deposit your payment into your bank account or
                            receive cash at your doorstep since both are safer payment alternatives. We at
                            Crazy Car Corner do not take any payment method that you are unfamiliar with, and
                            we want you to feel safe about the payment methods we accept. So, what do you
                            have to lose?

                        </div>
                    </div>
                </Bounce>
                <Bounce left>
                    <div className={styles.paraGraphChoose}>
                        <div className={styles.headingWhy}>
                            Quick Sale
                        </div>
                        <div className={styles.paraWhy}>
                            If you need to sell your automobile quickly, Crazy Car Corner is a good option. Its
                            not simple to find a possible buyer in a hurry. But you do nont have to worry any
                            longer since Crazy Car corner will buy your automobile in 30 minutes, regardless of
                            whether its fully wrecked or not. Call us or send us an email, then sit back and relax
                            while we take care of the rest.

                        </div>
                    </div>
                </Bounce>
                <Bounce left>
                    <div className={styles.paraGraphChoose}>
                        <div className={styles.headingWhy}>
                            Hassle-Free Transaction
                        </div>
                        <div className={styles.paraWhy}>
                            Crazy Car Corner now allows you to experience hassle-free transactions with
                            minimum paperwork and the quickest transfer of ownership. You would not have to
                            worry about any paperwork or other procedures when you use Crazy Car Corner.
                            Use Whatsapp to communicate for additional details and in real-time.

                        </div>
                    </div>
                </Bounce>
            </div>


        </div>
    )
}
export default WhyChooseUs;
