import styles from "./blog.module.css";
import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CustomInputt from "./CommentsSection/Comments";
import Image from "next/image";

function Blog() {
  const cardInfo = [
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
    {
      image: "./Icons/img-car.jpg",
      title:
        "Price list of Toyota Cars 2019, The Change of Interior & Exterior",
      text: "If you want the widest powertrain choices or you need your pickup to be safe and secure when towing...",
    },
  ];

  return (
    <div className={`container-fluid ${styles.ContainerBlog}`}>
      <div className={styles.HeroiImgBlog}>
        <div className={styles.paddingTopBottomBlog}>
          {/*<h1 className={styles.HeroiImgTextBlog}>Blog Section</h1>*/}
          {/*<h5 className={styles.HeroiImgTextH5Blog}>*/}
          {/*  Home<span className={styles.symbolSizeBlog}>&gt; </span> Blog Section*/}
          {/*</h5>*/}
        </div>
      </div>
      <br />
      <br />
      <div className={`row ${styles.blogRowMainDiv}`}>
        <div className={`col-12 col-md-8 col-xl-9 ${styles.cardColumnMain}`}>
          {/*<p className={styles.singlePtext}>*/}
          {/*  <span className={styles.singlePageSpanText}>Home / Blog / </span>Review The*/}
          {/*  Evolutions Of CMB, Stronger & Faster!*/}
          {/*</p>*/}
          <br />
          <p className={styles.singleHeading}>
            On the off chance that you have an escalated stop, mull over{" "}
            <br className="d-none d-lg-block" /> a short taking a ander at
            outing.
          </p>
          <p className={styles.singlePTextBody}>
            On the off chance that you have an escalated stop, mull over a short
            taking a ander at outing. This especially is shrewd in urban areas
            with brilliant open transportation decisions.
          </p>
          <p className={styles.singlePTextBody}>
            In other words, what keeps us safe can go too far, and keep us too
            safe. In fact, it can trigger self-centering. Coven try is a city
            with a thousand years of history that has plenty to offer the
            visiting tourist. Located in the heart of Warwickshire. One
            morninng, when Gregor Samsa woke from troubled dreams, he found
            himself transformed in his bed into a horrible vermin. He lay on his
            armour-like back, and if he lifted his head a little he could see
            his brown belly, slightly domed and divided by arches into stiff
            sections.
          </p>
          <br />
          <div className={styles.textBackground}>
            <i className={`fas fa-quote-left ${styles.leftQuote}`}></i>
            <p className={`card-text ${styles.textStyle}`}>
              More impressive in almost every way than the vehicle it replaces.
              Always is CMB!
            </p>
          </div>
          <br />
          <p className={styles.singlePerformanceText}>
            Performance & Improvement
          </p>
          <p className={styles.singlePTextBody}>
            High-Volume models include the well-equiped LT, the
            street-performance-oriented RST (which will offer the classNames
            first turbocharged four-cylinder engine) and a more feature-friendly
            LT Trail Boss 4x4, which has all the Trail Boss features but can
            luxuriously optioned. Each of these trim levels sports the
            traditional Chevy Bow-Tie emblem on the grille.
          </p>
          <br />
          <div className="row pe-md-5">
            <div className="col-12 col-md-6 pe-sm-4 pb-4">
              <Image src="./Icons/img-car.jpg" alt="" style={{ width: "100%" }} />
            </div>
            <div className="col-12 col-md-6 ps-sm-4 pb-4">
              <Image
                src="./Icons/img-car.jpg"
                alt=""
                style={{ width: "100%" }}
              />
            </div>
          </div>
          <br />
          <div className={`${styles.singleEndLinksTags} pb-2`}>
            <div>
              <a
                href=""
                className={`btn btn-light ${styles.lightBtnTags} pe-4 ps-4 me-2`}
                style={{ width: "auto" }}
              >
                Vehicles
              </a>
              <a
                href=""
                className={`btn btn-light ${styles.lightBtnTags} pe-4 ps-4 me-2`}
                style={{ width: "auto" }}
              >
                Vehicles
              </a>
              <a
                href=""
                className={`btn btn-light ${styles.lightBtnTags} pe-4 ps-4 me-2`}
                style={{ width: "auto" }}
              >
                Vehicles
              </a>
            </div>
            {/* <div>icons png images</div> */}
          </div>
          <br />
          <hr className={styles.singleHRTag} />
          <br />
          <br />
          <div className={styles.authorMainDiv}>
            <div className={styles.imgContainerDiv}>
              <Image src="./Icons/img-car.jpg" className="authorImg" alt="" />
              <div className={styles.authorTextContainer}>
                <span className={styles.authorSpanText}>The Author</span>
                <p className={styles.authorNameText}>Edward Goldblatt</p>
                <span className={styles.authorPText}>
                  Im McGregor, a gentleman and lover of life. More off this less
                  hello salamander lied porpoise much over tightly circa horse
                  taped so innocously outside crud mightly rigorous negative one
                  inside gorilla.
                </span>
              </div>
            </div>
            <br />
            <br />
            <br />
            <p className={styles.commentHeading}>02 COMMENTS</p>
            <CustomInputt />
            <br />
            <br />
            <br />
            <br />
          </div>
        </div>
        <div className="col-12 col-md-4 col-xl-3">
          <a href="">
            {" "}
            <button className={`btn btn-danger ${styles.blogPostBtn}`}>
              Post Your Ads
            </button>
          </a>
          <br />
          <br />
          <p className={styles.PopularPosts}>Popular Posts</p>
          <br />
          {cardInfo?.slice(0, 5).map((data, index) => {
            return (
              <div key={index}>
                <div className={`card ${styles.blogCard}`}>
                  <div className="row ">
                    <div className="col-5 ">
                      <a href="">
                        <Image className="card-img " src={data.image} alt="" />
                      </a>
                    </div>
                    <div className="col-7">
                      <div className="card-body" style={{ padding: "0px" }}>
                        <span className={styles.dateCardPopular}>
                          July 31, 2021
                        </span>
                        <p
                          className={`card-title ${styles.cardHeadingPopular}`}
                        >
                          {data.title}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <hr />
              </div>
            );
          })}
          <br />
          <p className={styles.PopularPosts}>Popular Tags</p>
          <div className="row">
            <div className={`col-4 ${styles.lightBtnTagsCol}`}>
              <a href="" className={`btn btn-light ${styles.lightBtnTags}`}>
                Vehicles
              </a>
            </div>
            <div className={`col-4 ${styles.lightBtnTagsCol}`}>
              <a href="" className={`btn btn-light ${styles.lightBtnTags}`}>
                Vehicles
              </a>
            </div>
            <div className={`col-4 ${styles.lightBtnTagsCol}`}>
              <a href="" className={`btn btn-light ${styles.lightBtnTags}`}>
                Vehicles
              </a>
            </div>
            <div className={`col-4 ${styles.lightBtnTagsCol}`}>
              <a href="" className={`btn btn-light ${styles.lightBtnTags}`}>
                Vehicles
              </a>
            </div>
            <div className={`col-4 ${styles.lightBtnTagsCol}`}>
              <a href="" className={`btn btn-light ${styles.lightBtnTags}`}>
                Vehicles
              </a>
            </div>
            <div className={`col-4 ${styles.lightBtnTagsCol}`}>
              <a href="" className={`btn btn-light ${styles.lightBtnTags}`}>
                Vehicles
              </a>
            </div>
            <div className={`col-4 ${styles.lightBtnTagsCol}`}>
              <a href="" className={`btn btn-light ${styles.lightBtnTags}`}>
                Vehicles
              </a>
            </div>
            <div className={`col-4 ${styles.lightBtnTagsCol}`}>
              <a href="" className={`btn btn-light ${styles.lightBtnTags}`}>
                Vehicles
              </a>
            </div>
            <div className={`col-4 ${styles.lightBtnTagsCol}`}>
              <a href="" className={`btn btn-light ${styles.lightBtnTags}`}>
                Vehicles
              </a>
            </div>
          </div>
          <br />
          <br />
          <div className={styles.blogRightAddDiv}></div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Blog;
