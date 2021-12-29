import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { IoLogoWhatsapp } from "react-icons/io";
import { URL_API, ImageURL } from "../variables";
import axios from "axios";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/SingleMakesPage.module.css";
import moment from "moment";
// import '../components/Blog/blog.module.css';
export async function getServerSideProps(context) {
  let slug = context.query;
  return {
    props: {
      slug: slug,
    },
  };
}

const Testing = (props) => {
  useEffect(() => {
    getRelatedArticles();
    getArticleDetail(); 
  }, []);

  let slug = props.slug.slug;
  // console.log("slug data  show ", slug.split("crazy-blog-"));

  var str = props.slug.slug.slice(8);

  var n = str;
  const [data, setData] = useState([]);
  const [maker, setMaker] = useState("");
  const [articleDetail, setArticleDetail] = useState();
  const [articles, setArticles] = useState([]);

  const getRelatedArticles = () => {
    axios
      .get(URL_API + "auth/customer/articles")
      .then((response) => {
        if (response.status == 200) {
          setArticles(response.data.articles);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getArticleDetail = () => {
    const slug2 = props.slug.slug.split("crazy-blog-");
    axios
      .get(URL_API + `article/${slug2[1]}`)
      .then((response) => {
        if (response.data.status == 200) {
          setArticleDetail(response.data.article);
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  //   const callUseEffect = () => {
  //     setInterval(() => {
  //       getArticleDetail();
  //     }, [2000]);
  //   };

  const location = useRouter();
  var name = props.location?.detail;

  return (
    <>
      <div className={""}>
        <div className={styles.HeroiImgBlog}>
          <div className={styles.paddingTopBottomBlog}></div>
        </div>
        <section className="py-5">
          <div className="container px-4 px-lg-5 my-5">
            <div className="row gx-4 gx-lg-5 ">
              <div className="col-md-6">
                <Image
                  className="card-img-top mb-5 mb-md-0"
                  src={`https://lync1869.rideshide.com/` + articleDetail?.image}
                  alt="..."
                  height={500}
                  width={500}
                />
                {/* <img
              className="card-img-top mb-5 mb-md-0"
              src={AboutImages}
              alt="..."
              width="200px"
              height="500px"
              style={{ paddingTop: "20px" }}
            /> */}
              </div>
              <div className="col-md-6">
                <div className="small mb-1">&nbsp; &nbsp;</div>
                <h2 className="display-6 fw-bolder">{articleDetail?.title}</h2>
                <div className="fs-5 mb-5">
                  <p className={`card-title ${styles.cardHeading}`}>Tags</p>
                  <div
                    style={{
                      padding: "10px",
                    }}
                  >
                    {articleDetail?.tag.map((obj) => {
                      return (
                        <>
                          <span
                            style={{
                              color: "white",
                              backgroundColor: "#a9d5a9",
                              padding: "10px",
                              borderRadius: "15px",
                            }}
                          >
                            {obj.name}
                          </span>
                          &nbsp;
                        </>
                      );
                    })}
                  </div>
                  <span></span>
                </div>

                <div className="fs-5 mb-5">
                  <p className={`card-title ${styles.cardHeading}`}>
                    Description
                  </p>
                  <div
                    style={{
                      padding: "10px",
                    }}
                  >
                    <p className="lead" style={{ fontSize: "15px" }}>
                      {articleDetail?.article_text}

                      <br></br>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className={"container mb-5"}>
          <h2 className="fw-bolder mb-4">Related Blogs</h2>
          {articles?.map((article) => {
            return (
              <>
                <div className="card mb-3">
                  <div className="row no-gutters">
                    <div className="col-md-2">
                      <Link
                        href={{
                          pathname: "/[slug]",
                          query: {
                            slug: article.slug,
                          },
                        }}
                        as={`/crazy-blog-${article.slug}`}
                        passHref
                      >
                        <a>
                          <Image
                            height={250}
                            width={350}
                            className={`card-img ${styles.imgHeight}`}
                            // src={`https://lync1869.rideshide.com/${data.image}`}
                            // src={CarImge}
                            src={
                              `https://lync1869.rideshide.com/` + article.image
                            }
                            alt=""
                          />
                        </a>
                      </Link>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{article.title}</h5>
                        <p className="card-text">{article.article_text}.</p>
                        <p className="card-text">
                          <small className="text-muted">
                            Dated :{" "}
                            {moment(article?.created_at).format(
                              " DD MMMM YYYY, h:mm a"
                            )}
                          </small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>

      {/* <div>
    <Image
      className={styles.HerosectionAllMakeSingle}
      src={ImageURL + maker.hero_image}
      width={1200}
      height={600}
      layout="responsive"
      alt="sell-make"
    />
  </div>

  <div className="container">
    <div className="row mt-2 p-4">
      <div className={"m-auto text-center"}>
        <div className={styles.modelHeading}>
          <h1>
            {" "}
            <span className={styles.spanStyles}>Sell My</span>{" "}
            {maker.vehicle_name}
          </h1>
        </div>
      </div>
      <div className={styles.paraWhy}>{maker.description}</div>
      <div className="col-md-12 col-sm-12">
        <div className={styles.carModels}>
          <p>For your instant and FREE valuation,the quick and easy way!</p>
          <div className={"col-md-4 col-sm-12"}>
            <div className={styles.btnDiv}>
              <a
                href="https://api.whatsapp.com/send?phone=+971558829990&text=I%27m%20interested%20to%20sell%20my%20Car"
                className={styles.btnHomesSellCar}
              >
                <IoLogoWhatsapp className={styles.iconHome} />
                WhatsApp
              </a>
              <Link href="/free-online-valuation">
                <a className={styles.btnHomesSellCar}>
                  Get Free Inspection
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <div className="col-md-12">
        <div className={styles.h2Div}>
          <h2 className={styles.h2}>{name} MODELS WE ARE LOOKING TO BUY</h2>
        </div>
      </div>
    </div>
    <br />

    <div className="row">
      {data?.map((data, index) => {
        return (
          <>
            {data.image ? (
              <div key={index} className="col-md-3 col-sm-12">
                <div className={styles.picDiv}>
                  <div className={styles.boxStylesModelSingle}>
                    <Image
                      className={styles.imageSinglePage}
                      src={ImageURL + data.image}
                      width={300}
                      height={200}
                      alt="maker"
                    />
                  </div>
                  <div className={styles.boxStylesModelSingleText}>
                    <p className={styles.pTag}>{data.modle_name}</p>
                  </div>
                </div>
              </div>
            ) : null}
          </>
        );
      })}
    </div>

    <br />
    <br />
  </div>
  <div className="col-md-3 col-sm-12"></div>
  <div>
    <SellAnyCar />
  </div> */}

      <div className="container blogContainer">
        {/* <div className="blogHeroiImg">
      <p className="blogHeroiImgText">
        Sell Your Used Car the Easy Way |<br />
        Get an Instant Cash Offer
      </p>
    </div> */}
        <br />
        <br />
        <div className="row rowBlogCard">
          <div className="col-12 col-md-8 col-lg-9 caroselImageP">
            <div className="card mb-5">
              {/* <p className="sliderImageText">19 Oct</p> */}
              {/* 
          <Slider {...settings} className="card-img-top">
            {AboutImages.slice(0, 8).map((data, index) => {
              return (
                <div className="mainDiv">
                  <div key={index} className={"citiesAbout"}>
                    <div className={"AboutImageCarousel"}>
                      <div className="pp">
                        <img className={"imgcity"} src={data.img} alt={"/"} />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider> */}

              <br />
              {/* <div class="card-body singlePageBodyPadding">
            <span class="card-title titleCardSize ms-4">
              GM finds its balance with sales of pickups
            </span>
            <p class="card-title titleCardSize2 ms-4">
              By: <span className="spanText">Admin </span> Comment:{" "}
              <span className="spanText">3</span>
            </p>
            <br />
            <p class="card-text ms-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              aspernatur illum vel sunt libero voluptatum repudiandae valium
              maxime tenetur.
            </p>
            <p class="card-text ms-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              aspernatur illum vel sunt libero voluptatum repudiandae valium
              maxime tenetur.
            </p>
            <div class=" textBackground">
              <i class="fas fa-quote-left leftQuote"></i>
              <p class="card-text textStyle">
                <q>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  aspernatur illum vel sunt libero voluptatum repudiandae
                  valium maxime tenetur.
                </q>
              </p>
            </div>
            <br />
            <p class="card-text ms-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              aspernatur illum vel sunt libero voluptatum repudiandae valium
              maxime tenetur.
            </p>
            <p class="card-text ms-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              aspernatur illum vel sunt libero voluptatum repudiandae valium
              maxime tenetur.
            </p>
            <div className="imgPContainerDiv">
              <p class="card-text ms-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                aspernatur illum vel sunt libero voluptatum repudiandae
                valium maxime tenetur.
              </p>
              <img
                src="./CarBrands/car1.jpg"
                alt=""
                style={{ width: "45%", height: "auto" }}
              />
            </div>
            <p class="card-text ms-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              aspernatur illum vel sunt libero voluptatum repudiandae valium
              maxime tenetur.
            </p>
            <br />
            <br />
            <div className="shareDiv">
              <p class="card-text ms-4">
                TAGS <span className="spanText5">Auto,</span>{" "}
                <span className="spanText5">Oil,</span>{" "}
                <span className="spanText5">News</span>
              </p>
              <div className="shareDiv2">
                <p class="card-text px-5">SHARE THIS</p>
                <a href="">
                  <i class="fab fa-facebook"></i>
                </a>{" "}
                <a href="">
                  <i class="fab fa-twitter"></i>
                </a>{" "}
                <a href="">
                  <i class="fab fa-google-plus"></i>
                </a>
              </div>
            </div>
          </div> */}
            </div>
            <br /> {/*comments Section to edit */}
            {/* <div className="commentMainDiv">
          <div className="commentConatiner">
            <img className="commentImg" src="./CarBrands/car1.jpg" alt="" />
            <p className="commentP">
              <span className="commentAuthor">Admin</span> says: <br />
              <span className="commentDate">April 5, 2018 at 1:38pm</span>
            </p>
          </div>
          <div className="commetBody">
            <p className="commetBodyP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              aspernatur illum vel sunt libero voluptatum repudiandae valium
              maxime tenetur.
            </p>
            <button className="btn btn-light btnComment">Reply</button>
          </div>
        </div> */}
            <br />
            <br />
            {/* <p className="replyHeading">Leave a Reply</p>
        <p className="replyPText">
          Your email address will not be published. Required fields are
          marked *
        </p>
        <br />
        <form class="form-block">
          <div class="form-group">
            <textarea
              class="form-input replyTextArea"
              required=""
              placeholder="Comment"
            ></textarea>
          </div>
          <div className="form-group">
            <div class="form-check col form-check-inline">
              <input
                className="form-check-input "
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio3"
                value="option3"
              />
              <label
                className="form-check-label text-muted"
                for="inlineRadio3"
              >
                Save my name, email, and website in this browser for the
                next time I comment.
              </label>
            </div>
          </div>
          <br />
          <a class="btn btn-primary pull-left replyFormBtn">Post Comment</a>
        </form> */}
          </div>
          <div className="col-12 col-md-4 col-lg-3 smallScreenPadding">
            {/* <SideBarBlog /> */}
          </div>
        </div>
      </div>
    </>
  );
};
export default Testing;
