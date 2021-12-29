import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from 'axios';
import { useForm } from "react-hook-form";
import { URL_API } from "../variables";
import "bootstrap/dist/css/bootstrap.min.css";
import CarLoader from '../public/assets/Images/Comp-1.gif';

import Bounce from 'react-reveal/Bounce';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/ContactForm.module.css';
import Image from "next/image";
function ContactForm() {
    let history = useRouter();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const [loading, setLoading] = useState(false);
    // const [value, setValue] = useState()
    const [loader, setLoader] = useState(false);

    const [phone, setNumber] = useState(null);
    const country_code = 971;

    const [number, setPhone] = useState('');

    const checkInput = (e) => {
        const onlyDigits = e.target.value.replace(/\D/g, "");
        setNumber(onlyDigits);
        if (!number) {
            let number1 = '+971' + onlyDigits
            setPhone(number1)
        }
        else {
            let number1 = onlyDigits
            setPhone(number1)
        }

        console.log('number', number)
    };
    const onSubmit = (data, e) => {
        if (!loader) {
            setLoader(true)
            console.log('loader')
            setTimeout(() => {
                setLoader(false);
            }, 7000);
        }

        setLoading(true);
        console.log("some", data);
        let formData = new FormData();

        formData.append('message', data.message);
        formData.append('name', data.name);
        formData.append('subject', data.subject);
        formData.append('email', data.email);
        formData.append('phone', number);

        axios.post(URL_API + "contacts", formData).then(response => {
            console.log(response);
            e.target.reset();
            setLoading(false);
            history.push("thank-you-contact")
            // history.push("/Thank-you", {
            //     data: data
            // });
            reset();
        }).catch(error => {
            console.log("error", error.response);
        })

    }


    return (
        <div className={'container' }>
        <div className={styles.ContactForm}>
            <div className={'row'}  >
                <div className='col-md-3'></div>
                <div className={'col-md-6 col-sm-12 mb-6'}>
                    {/*{loader ? (*/}
                    {/*    <div className={styles.carloaderwrapperC}>*/}
                    {/*        <Image className={styles.carloaderC} src={CarLoader} alt={'car loader'} />*/}
                    {/*    </div>*/}
                    {/*) : null}*/}
                    <Bounce up>
                    
                    <form onSubmit={handleSubmit(onSubmit)} id="carContact">
                        <div className={'row'}>
                            <div className={'col-lg-4 col-sm-12'}>
                                <div className={styles.formGroup}>
                                    <input {...register('name', {
                                        required: true, pattern: {
                                            value: /[A-Za-z]/,
                                            message:
                                                "Sorry the names is only Alphabetic characters"
                                        }
                                    })}
                                        type={'text'} className={styles.inputField} placeholder={'Full Name'} />
                                    {errors.name?.message && <span style={{color:"red "}}className="input-error">{errors.name?.message}</span>}
                                    {errors.name && errors.name.type === "required" &&
                                        <p style={{color:"red"}}>Name is required</p>}
                                </div>
                            </div>
                            <div className={'col-lg-4 col-sm-12'}>
                                <div className={styles.formGroup}>
                                    <input {...register('email', {
                                        required: true, pattern: {
                                            value: /[A-Za-z]/ + /^[0-9\b]+$/,
                                            message: "invalid email address"
                                        }
                                    })} type={'text'} className={styles.inputField} placeholder={'Email'} />
                                </div>
                                {errors.email?.message && <span style={{color:"red !important"}}className="input-error">{errors.email?.message}</span>}
                                {errors.email && errors.email.type === "required" &&
                                    <p style={{color:"red"}}className="input-error">Email is required</p>}
                            </div>
                            <div className={'col-lg-4 col-sm-12'}>
                                <div className={styles.formGroup}>
                                    <input type={'tel'}
                                        {...register('phone', {
                                            required: true, minLength: {
                                                value: 11,
                                                message: "Phone No must be minimums 12 characters"
                                            },
                                            maxLength: {
                                                value: 12,
                                                message: "Phone No must be maximums 12 characters"
                                            },
                                            pattern: {
                                                value: (/^[0-9\b]+$/),
                                                message:
                                                    "Sorry Phone Number is only Numeric characters"
                                            }
                                        })} className={styles.inputField} maxLength={12}

                                        placeholder={'+971 88 432 7659'}
                                        country={'us'}
                                        value={number ? number : phone}
                                        onChange={(e) => {
                                            checkInput(e)

                                        }}
                                    
                                    />
                                    {errors.phone?.message && <span className="input-error">{errors.phone?.message}</span>}
                                    {errors.phone && errors.phone.type === "required" &&
                                        <p style={{color:"red"}} className="input-error">Phone is required</p>}
                                </div>
                            </div>
                            <div className={'col-sm-12'}>
                                <div className={styles.formGroup}>
                                    <textarea {...register('message', { required: true })} rows={'5'} type={'text'} className={styles.inputField} placeholder={'Type Your Message'} />
                                    {errors.message && errors.message.type === "required" &&
                                        <p style={{color:"red"}} className="input-error">Message is required</p>}
                                </div>
                            </div>
                            <div className={'col-md-12 col-sm-12'}>
                                <button type="submit" disabled={loading} className={styles.chooseWorkingBtn}>
                                    Send Message
                                </button>

                            </div>
                        </div>
                    </form>
                    </Bounce>
                </div>
            </div>
        </div>
        </div>
    );
}
export default ContactForm;
