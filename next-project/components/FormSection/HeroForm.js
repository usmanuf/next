import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
import { URL_API } from "../../variables";
import Image from 'next/image';
import "bootstrap/dist/css/bootstrap.min.css";
import CarLoader from '../../public/assets/Images/Loader.gif';
import styles from '../../styles/HeroForm.module.css';
const HeroFrom = (props) => {
    const [Maker, setMaker] = useState([]);
    const [Model, setModel] = useState([]);
    const [vehicle, setVehicle_id] = useState('');
    const [year_id, setYear_id] = useState('');
    const [condition, setCondition] = useState('');
    const [model_id, setModel_id] = useState('');
    const [color_id, setColor_id] = useState('');
    const [mileage_id, setMileage_id] = useState('');
    const [city, setCity] = useState('');
    const [phone, setNumber] = useState("");

    const [loader, setLoader] = useState(false);

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

    const [Year, setYear] = useState([
        {
            id: 1,
            year: 1983
        }, {
            id: 2,
            year: 1984
        }, {
            id: 3,
            year: 1985
        }, {
            id: 4,
            year: 1986
        }, {
            id: 5,
            year: 1987
        }, {
            id: 6,
            year: 1988
        }, {
            id: 7,
            year: 1989
        }, {
            id: 8,
            year: 1990
        }, {
            id: 9,
            year: 1991
        }, {
            id: 9,
            year: 1992
        }, {
            id: 10,
            year: 1993
        }, {
            id: 11,
            year: 1994
        }, {
            id: 12,
            year: 1995
        }, {
            id: 13,
            year: 1996
        }, {
            id: 14,
            year: 1997
        }, {
            id: 15,
            year: 1998
        }, {
            id: 16,
            year: 1999
        }, {
            id: 17,
            year: 2000
        }, {
            id: 18,
            year: 2001
        }, {
            id: 19,
            year: 2002
        }, {
            id: 20,
            year: 2003
        }, {
            id: 21,
            year: 2004
        }, {
            id: 22,
            year: 2005
        }, {
            id: 23,
            year: 2006
        }, {
            id: 24,
            year: 2007
        }, {
            id: 25,
            year: 2008
        }, {
            id: 26,
            year: 2009
        }, {
            id: 27,
            year: 2010
        }, {
            id: 28,
            year: 2011
        }, {
            id: 19,
            year: 2012
        }, {
            id: 20,
            year: 2013
        }, {
            id: 21,
            year: 2014
        }, {
            id: 22,
            year: 2015
        }, {
            id: 23,
            year: 2016
        }, {
            id: 24,
            year: 2017
        }, {
            id: 25,
            year: 2018
        }, {
            id: 26,
            year: 2019
        }, {
            id: 27,
            year: 2020
        }, {
            id: 28,
            year: 2021
        }, {
            id: 29,
            year: 2022
        }
    ]);
    const [CarCondition, setCarCondition] = useState([
        {
            id: 1,
            condition: 'Damaged',
        },
        {
            id: 2,
            condition: 'Scrap',
        }, {
            id: 3,
            condition: 'Working',
        },
    ]);
    const [Color, setColor] = useState([
        {
            id: 1,
            color: 'Black'
        },
        {
            id: 2,
            color: ' Blue'
        }, {
            id: 3,
            color: ' Brown'
        }, {
            id: 4,
            color: ' Gold'
        },
        {
            id: 5,
            color: ' Gray'
        }, {
            id: 6,
            color: ' Green'
        }, {
            id: 7,
            color: ' Orange'
        },
        {
            id: 8,
            color: ' Purple'
        },
        {
            id: 9,
            color: ' Red'
        },
        {
            id: 10,
            color: ' Sliver'
        },
        {
            id: 11,
            color: ' Yellow'
        },
        {
            id: 12,
            color: ' White'
        },
    ])
    const [Mileage, setMileage] = useState([
        {
            id: 1,
            Mileage: 'Dont know , assume normal usage',
            val:10000
        },
        {
            id: 2,
            Mileage: 'More than 250,000 KM',
            val:250000
        },
        {
            id: 3,
            Mileage: 'Upto 10,000 KM',
            val:10000
        },
        {
            id: 4,
            Mileage: 'Upto 100,000 KM',
            val:100000
        },
        {
            id: 5,
            Mileage: 'Upto 125,000 KM',
            val:125000
        },
        {
            id: 6,
            Mileage: 'Upto 150,000 KM',
            val:150000
        },
        {
            id: 7,
            Mileage: 'Upto 125,000 KM',
            val:125000
        },
        {
            id: 8,
            Mileage: 'Upto 175,000 KM',
            val:175000
        },
        {
            id: 9,
            Mileage: 'Upto 20,000 KM',
            val:20000
        },
        {
            id: 10,
            Mileage: 'Upto 200,000 KM',
            val:200000
        },
        {
            id: 11,
            Mileage: 'Upto 225,000 KM',
            val:225000
        },
        {
            id: 12,
            Mileage: 'Upto 250,000 KM',val:250000
        },
        {
            id: 13,
            Mileage: 'Upto 30,000 KM',
            val:30000
        },
        {
            id: 14,
            Mileage: 'Upto 40,000 KM',
            val:40000
        },
        {
            id: 15,
            Mileage: 'Upto 5,000 KM',
            val:5000
        },
        {
            id: 16,
            Mileage: 'Upto 60,000 KM',
            val:60000
        },
        {
            id: 17,
            Mileage: 'Upto 80,000 KM',
            val:80000
        },


    ])

    const [city_id, setCity_id] = useState([]);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    useEffect(() => {
        setTimeout(()=>{
            getServiesData();

            getCityData();
        },500)

    }, []);
    const getServiesData = async () => {
        await fetch(URL_API + "posts/vehicles")
            .then((responce) => responce.json())
            .then((data) => {
                console.log("servicesfcgcgcfgfcgfc data", data.vehicles);
                setMaker(data.vehicles);
            });
    };
    const getCityData = async () => {
        axios.post(URL_API + "posts/form-info").then(response => {
            // console.log('city',response.data.selectList)
            setCity_id(response.data.selectList)
        }).catch(error => {
            console.log("error", error)
        })

        // await fetch()
        //     .then((responce) => responce.json())
        //     .then((data) => {
        //         console.log("cities data", data);
        //         setCity_id(data);
        //     });
    };
    function MakerId(id) {
        console.log("soddddme", id)
        if(id){

            axios.post(URL_API + "posts/vehicle/" + id).then(response => {
                console.log('responseModel', response.data.models.vehicle_modles)
                setModel(response.data.models.vehicle_modles)
            }).catch(error => {
                console.log("error", error)
            })
            console.log('Logs every minute gfgffgf');

        }

    }
    // console.log('Model',setModel)
    let history = useRouter();
    const [loading, setLoading] = useState(false);
    const onSubmit = (data) => {
        console.log("somedaata", data);

        if (!loader) {
            setLoader(true)
            console.log('loader')
            setTimeout(() => {
                setLoader(false);
            }, 10000);
        }
        setLoading(true);
        // console.log("some", data);
        let formData = new FormData();
        formData.append("name", data.name);
        formData.append("email", data.email);
        formData.append("color", data.color);
        formData.append("address", data.address);
        formData.append("phone", data.phone);
        formData.append("year", data.year);
        formData.append("city_id", data.city_id);
        formData.append("mileage", data.mileage);
        formData.append("vehicle_id", data.vehicle_id);
        formData.append("vehicle_model_id", data.vehicle_model_id);
        formData.append("car_condition_id", data.car_condition_id);
        formData.append('alloy_wheels', data.alloy_wheels ? 1 : 0);
        formData.append('leather_seats', data.leather_seats ? 1 : 0);
        formData.append('sun_roof', data.sun_roof ? 1 : 0);

        axios
            .post(URL_API + "car-enquiry", formData)
            .then((response) => {
                console.log(response);
                setLoading(false);
                history.push("/thank-you");

            })
            .catch((error) => {
                console.log(error.response.data.errors);

            });
    };
    return (

        <div className={styles.HomeForm}>
            <div className={styles.fromWrapper}>
                <div className={"flex flex-column"}>
                    <div className={styles.Homeformtitle}>FREE and INSTANT Online Valuation</div>
                </div>
                {loader ? (
                    <div className={styles.carloaderwrapper}>
                        <Image className={styles.carloader} src={CarLoader} alt={"car-Loader"} />
                    </div>
                ) : null}
                <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className={'row'}>
                                        <div className={'col-sm-12 col-lg-6'}>
                                            <div className={styles.formfield}>
                                                {vehicle ?
                                                    <select
                                                        {...register("vehicle_id", { required: true })}
                                                        name="vehicle_id"
                                                        id="integration_city_id"
                                                        className={styles.selectedfield}
                                                        onChange={(e) => MakerId(e.target.value)}
                                                    >
                                                        <option className={styles.colorStyles} value="">
                                                            -- Select Maker --
                                                        </option>
                                                        {Maker.map((val, index) => {
                                                            return (
                                                                <option
                                                                    className={styles.colorStyles}
                                                                    key={index}
                                                                    value={val.id}
                                                                >
                                                                    {val.vehicle_name}
                                                                </option>
                                                            );
                                                        })}
                                                    </select>
                                                    :
                                                    <select
                                                        {...register("vehicle_id", { required: true })}
                                                        name="vehicle_id"
                                                        id="integration_city_id"
                                                        className={styles.selectedfield1}
                                                        onChange={(e) => {
                                                            MakerId(e.target.value)
                                                            setVehicle_id(e.target.value)
                                                        }}
                                                    >
                                                        <option className={styles.colorStyles} value="">
                                                            -- Select Maker --
                                                        </option>
                                                        {Maker.map((val, index) => {
                                                            return (
                                                                <option
                                                                    className={styles.colorStyles}
                                                                    key={index}
                                                                    value={val.id}
                                                                >
                                                                    {val.vehicle_name}
                                                                </option>
                                                            );
                                                        })}
                                                    </select>
                                                }
                                                {errors.vehicle_id && errors.vehicle_id.type === "required" && (
                                                    <span className={styles.inputerrors}>Maker is required</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className={'col-sm-12 col-lg-6'}>
                                            <div className={styles.formfield}>
                                                {model_id ?
                                                    <select
                                                        {...register("vehicle_model_id", { required: true })}
                                                        name="vehicle_model_id"
                                                        id="integration_city_id"
                                                        className={styles.selectedfield}
                                                        onChange={(e) =>
                                                            setModel_id(e.target.value)
                                                        }
                                                    >
                                                        <option className={styles.colorStyles} value="">
                                                            --Select Model--
                                                        </option>
                                                        {Model.map((val, index) => {
                                                            return (
                                                                <option
                                                                    className={styles.colorStyles}
                                                                    key={index}
                                                                    value={val.id}
                                                                >
                                                                    {val.modle_name}
                                                                </option>
                                                            );
                                                        })}
                                                    </select>
                                                    :
                                                    <select
                                                        {...register("vehicle_model_id", { required: true })}
                                                        name="vehicle_model_id"
                                                        id="integration_city_id"
                                                        className={styles.selectedfield1}
                                                        onChange={(e) =>
                                                            setModel_id(e.target.value)
                                                        }
                                                    >
                                                        <option className={styles.colorStyles} value="">
                                                            -- Select Model --
                                                        </option>
                                                        {Model.map((val, index) => {
                                                            return (
                                                                <option
                                                                    className={styles.colorStyles}
                                                                    key={index}
                                                                    value={val.id}
                                                                >
                                                                    {val.modle_name}
                                                                </option>
                                                            );
                                                        })}
                                                    </select>
                                                }
                                                {errors.vehicle_model_id && errors.vehicle_model_id.type === "required" && (
                                                    <span className={styles.inputerrors}>Model is required</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className={'col-sm-12 col-lg-6'}>
                                            <div className={styles.formfield}>
                                                {year_id ?
                                                    <select
                                                        {...register("year", { required: true })}
                                                        name="year"
                                                        id="integration_city_id"
                                                        className={styles.selectedfield}
                                                        onChange={(e) =>
                                                            setYear_id(e.target.value)
                                                        }
                                                    >
                                                        <option className={styles.colorStyles} value="">
                                                            -- Choose Years --
                                                        </option>
                                                        {Year.map((val, index) => {
                                                            return (
                                                                <option
                                                                    className={styles.colorStyles}
                                                                    key={index}
                                                                    value={val.year}
                                                                >
                                                                    {val.year}
                                                                </option>
                                                            );
                                                        })}
                                                    </select>
                                                    :
                                                    <select
                                                        {...register("year", { required: true })}
                                                        name="year"
                                                        id="integration_city_id"
                                                        className={styles.selectedfield1}
                                                        onChange={(e) =>
                                                            setYear_id(e.target.value)
                                                        }
                                                    >
                                                        <option className={styles.colorStyles} value="">
                                                            -- Choose Years --
                                                        </option>
                                                        {Year.map((val, index) => {
                                                            return (
                                                                <option
                                                                    className={styles.colorStyles}
                                                                    key={index}
                                                                    value={val.year}
                                                                >
                                                                    {val.year}
                                                                </option>
                                                            );
                                                        })}
                                                    </select>
                                                }
                                                {errors.year && errors.year.type === "required" && (
                                                    <span className={styles.inputerrors}>Year is required</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className={'col-sm-12 col-lg-6'}>
                                            <div className={styles.formfield}>
                                                {condition ?
                                                    <select
                                                        {...register("car_condition_id", { required: true })}
                                                        name="car_condition_id"
                                                        id="integration_city_id"
                                                        className={styles.selectedfield}
                                                        onChange={(e) =>
                                                            setCondition(e.target.value)
                                                        }
                                                    >
                                                        <option className={styles.colorStyles} value="">
                                                            -- Select Condition --
                                                        </option>
                                                        {CarCondition.map((val, index) => {
                                                            return (
                                                                <option
                                                                    className={styles.colorStyles}
                                                                    key={index}
                                                                    value={val.condition}
                                                                >
                                                                    {val.condition}
                                                                </option>
                                                            );
                                                        })}
                                                    </select>
                                                    :
                                                    <select
                                                        {...register("car_condition_id", { required: true })}
                                                        name="car_condition_id"
                                                        id="integration_city_id"
                                                        className={styles.selectedfield1}
                                                        onChange={(e) =>
                                                            setCondition(e.target.value)
                                                        }
                                                    >
                                                        <option className={styles.colorStyles} value="">
                                                            -- Select Condition --
                                                        </option>
                                                        {CarCondition.map((val, index) => {
                                                            return (
                                                                <option
                                                                    className={styles.colorStyles}
                                                                    key={index}
                                                                    value={val.condition}
                                                                >
                                                                    {val.condition}
                                                                </option>
                                                            );
                                                        })}
                                                    </select>
                                                }
                                                {errors.car_condition_id && errors.car_condition_id.type === "required" && (
                                                    <span className={styles.inputerrors}>Car Condition is required</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className={'col-sm-12 col-lg-6'}>
                                            <div className={styles.formfield}>
                                                {color_id ?
                                                    <select
                                                        {...register("color", { required: true })}
                                                        name="color"
                                                        id="integration_city_id"
                                                        className={styles.selectedfield}
                                                        onChange={(e) =>
                                                            setColor_id(e.target.value)
                                                        }
                                                    >
                                                        <option className={styles.colorStyles} value="">
                                                            -- Choose Color --
                                                        </option>
                                                        {Color.map((val, index) => {
                                                            return (
                                                                <option
                                                                    className={styles.colorStyles}
                                                                    key={index}
                                                                    value={val.color}
                                                                >
                                                                    {val.color}
                                                                </option>
                                                            );
                                                        })}
                                                    </select>
                                                    :
                                                    <select
                                                        {...register("color", { required: true })}
                                                        name="color"
                                                        id="integration_city_id"
                                                        className={styles.selectedfield1}
                                                        onChange={(e) =>
                                                            setColor_id(e.target.value)
                                                        }
                                                    >
                                                        <option className={styles.colorStyles} value="">
                                                            -- Choose Color --
                                                        </option>
                                                        {Color.map((val, index) => {
                                                            return (
                                                                <option
                                                                    className={styles.colorStyles}
                                                                    key={index}
                                                                    value={val.color}
                                                                >
                                                                    {val.color}
                                                                </option>
                                                            );
                                                        })}
                                                    </select>
                                                }
                                                {errors.color && errors.color.type === "required" && (
                                                    <span className={styles.inputerrors}>Color is required</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className={'col-sm-12 col-lg-6'}>
                                            <div className={styles.formfield}>
                                                {mileage_id ?
                                                    <select
                                                        {...register("mileage", { required: true })}
                                                        name="mileage"
                                                        id="integration_city_id"
                                                        className={styles.selectedfield}
                                                        onChange={(e) =>
                                                            setMileage_id(e.target.value)
                                                        }
                                                    >
                                                        <option className={styles.colorStyles} value="">
                                                            -- Car Mileage Upto --
                                                        </option>
                                                        {Mileage.map((val, index) => {
                                                            return (
                                                                <option
                                                                    className={styles.colorStyles}
                                                                    key={index}
                                                                    value={val.val}
                                                                >
                                                                    {val.Mileage}
                                                                </option>
                                                            );
                                                        })}
                                                    </select>
                                                    :
                                                    <select
                                                        {...register("mileage", { required: true })}
                                                        name="mileage"
                                                        id="integration_city_id"
                                                        className={styles.selectedfield1}
                                                        onChange={(e) =>
                                                            setMileage_id(e.target.value)
                                                        }
                                                    >
                                                        <option className={styles.colorStyles} value="">
                                                            -- Car Mileage Upto --
                                                        </option>
                                                        {Mileage.map((val, index) => {
                                                            return (
                                                                <option
                                                                    className={styles.colorStyles}
                                                                    key={index}
                                                                    value={val.id}
                                                                >
                                                                    {val.Mileage}
                                                                </option>
                                                            );
                                                        })}
                                                    </select>
                                                }
                                                {errors.mileage && errors.mileage.type === "required" && (
                                                    <span className={styles.inputerrors}>Mileage is required</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className={'col-sm-12'}>
                                            <div className={styles.formfield}>
                                                {city ?
                                                    <select
                                                        {...register("city_id", { required: true })}
                                                        name="city_id"
                                                        id="integration_city_id"
                                                        className={styles.selectedfield}
                                                        onChange={(e) =>
                                                            setCity(e.target.value)
                                                        }
                                                    >
                                                        <option className={styles.colorStyles} value="">
                                                            -- Choose City --
                                                        </option>

                                                        {city_id.map((val, index) => {
                                                            return (<>
                                                                {val.select_type == 'CITY' ?
                                                                    <option
                                                                        className={styles.colorStyles}
                                                                        key={index}
                                                                        value={val.id}
                                                                    >
                                                                        {val.select_option}
                                                                    </option>
                                                                    : ''}
                                                            </>);
                                                        })
                                                        }
                                                    </select>
                                                    :
                                                    <select
                                                        {...register("city_id", { required: true })}
                                                        name="city_id"
                                                        id="integration_city_id"
                                                        className={styles.selectedfield1}
                                                        onChange={(e) =>
                                                            setCity(e.target.value)
                                                        }
                                                    >
                                                        <option className={styles.colorStyles} value="">
                                                            -- Choose City --
                                                        </option>

                                                        {city_id.map((val, index) => {
                                                            return (<>
                                                                {val.select_type == 'CITY' ?
                                                                    <option
                                                                        className={styles.colorStyles}
                                                                        key={index}
                                                                        value={val.id}
                                                                    >
                                                                        {val.select_option}
                                                                    </option>
                                                                    : ''}
                                                            </>);
                                                        })
                                                        }
                                                    </select>
                                                }
                                                {errors.city_id && errors.city_id.type === "required" && (
                                                    <span className={styles.inputerrors}>City is required</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className={'col-sm-12 col-lg-6'}>
                                            <div className={styles.formfield}>
                                                <input
                                                    className={styles.forminput}
                                                    {...register("name", { required: true })}
                                                    maxLength="25"
                                                    type="text"
                                                    name="name"
                                                    placeholder="Enter Your Name"

                                                />

                                                {errors.name && errors.name.type === "required" && (
                                                    <span className={styles.inputerrors}>Name is required</span>
                                                )}
                                            </div>
                                        </div>
                                        <div className={'col-sm-12 col-lg-6'}>
                                            <div className={styles.formfield}>
                                                <input
                                                    className={styles.forminput}
                                                    {...register('email', {
                                                        required: true, pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                            message: "invalid email address"
                                                        }
                                                    })}
                                                    name="email"
                                                    placeholder="Your Email"
                                                />
                                                {errors.email && errors.email.type === "required" && (
                                                    <span className={styles.inputerrors}>Email is required</span>
                                                )}
                                                {errors.email?.message && <span className={styles.inputerrors}>{errors.email?.message}</span>}

                                            </div>
                                        </div>
                                        <div className={'col-sm-12'}>
                                            <div className={styles.formfield}>

                                                <input
                                                    className={styles.forminput}
                                                    minLength="11"
                                                    maxLength="12"
                                                    {...register("phone", {
                                                        required: true,
                                                        minLength: {
                                                            value: 11,
                                                            message: "Phone No must be minimums 12 characters",
                                                        },
                                                        maxLength: {
                                                            value: 12,
                                                            message: "Phone No must be maximums 12 characters",
                                                        },
                                                        pattern: {
                                                            value: /^[0-9\b]+$/,
                                                            message: "Sorry Phone Number is only Numeric characters",
                                                        },
                                                    })}
                                                    name="phone"
                                                    id="phone"
                                                    type="tel"
                                                    placeholder="+971 88 432 7659"

                                                    value={number ? number : phone}
                                                    onChange={(e) => {
                                                        checkInput(e)

                                                    }}

                                                />

                                                {errors.phone && errors.phone.type === "required" && (
                                                    <span className={styles.inputerrors}>Phone No is required</span>
                                                )}
                                                {errors.phone?.message && (
                                                    <span className={styles.inputerrors}>{errors.phone?.message}</span>
                                                )}
                                            </div>
                                        </div>
                                        <br />
                                        <div className={'container'}>
                                            <div className={styles.marStyles}>
                                                <div className={styles.checkbox_wraps}>
                                        <div className={'row'}>
                                            <div className="col-md-4">
                                                <div className={styles.checkboxHome}>
                                                <input
                                                    className={"m-1"}
                                                    type="checkbox"
                                                    {...register('leather_seats',)}
                                                    name="leather_seats"
                                                    id="LeatherSeats"
                                                    value="1"

                                                    color={'black'}
                                                />
                                               <span className={'text-white'}>Leather Seats</span>
                                               </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className={styles.checkboxHome}>
                                                <input
                                                    className={"m-1"}
                                                    type="checkbox"
                                                    {...register('sun_roof',)}
                                                    name="sun_roof"
                                                    id="Sunroof"
                                                    value="1"

                                                />
                                               <span className={'text-white'}>Sunroof </span>
                                               </div>
                                            </div>
                                            <div className="col-md-4">
                                                <div className={styles.checkboxHome}>
                                                <input
                                                    className={"m-1"}
                                                    type="checkbox"
                                                    {...register('alloy_wheels',)}
                                                    name="alloy_wheels"
                                                    id="AlloyWheel"
                                                    value="1"
                                                />
                                               <span className={'text-white'}>Alloy Wheels</span>
                                               </div>
                                            </div>
                                        </div>


                                    </div>
                                    <div className={styles.btnHeroSection}>
                                        <button
                                            disabled={loading}
                                            type="submit"
                                            className={styles.btnHomeform}>
                                            Submit
                                        </button>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                </form>

                </div>
            </div>
        </div>
    );
};
export default HeroFrom;
