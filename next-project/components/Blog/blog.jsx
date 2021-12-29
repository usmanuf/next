import styles from "./blog.module.css";
import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faUser } from "@fortawesome/free-solid-svg-icons";
import CarImga from "../../public/assets/Images/car-inspection.jpg";
import CarImge from "../../public/assets/Images/dubai-img.jpg";

// import { URL_API, webHost } from "../../pages/variable";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import Moment from "react-moment";
import moment from "moment";
import { images } from "../../next.config";
import { URL_API } from "../../variables";

function BlogSinglePage(props) {
  // console.log("blogssssssssss", props);
  const [valueState, setValueState] = useState(1);

  useEffect(() => {
    getTags();
  }, []);

  const [pageNumber, setPageNumber] = useState(0);
  const [tagList, setTagList] = useState([]);

  const cardInfo = props.props;
  console.log("carddddddddd", cardInfo[0].tag);

  const cardPerPage = 10;
  const pageVisited = pageNumber * cardPerPage;
  const displayCards = cardInfo
    .slice(pageVisited, pageVisited + cardPerPage)
    .map((cardInfo, index) => {
      return (
        <div key={index}>
          <div className={`card ${styles.blogCard}`}>
            <div className="row ">
              <div className="col-lg-5">
                <Link
                  href={{
                    pathname: "/[slug]",
                    query: {
                      slug: cardInfo.slug,
                    },
                  }}
                  as={`/crazy-blog-${cardInfo.slug}`}
                  passHref
                >
                  <a>
                    <Image
                      height={400}
                      width={500}
                      className={`card-img ${styles.imgHeight}`}
                      src={`https://lync1869.rideshide.com/` + cardInfo.image}
                      alt=""
                    />
                  </a>
                </Link>
              </div>
              <div className="col-lg-7">
                <div className="card-body">
                  <p className={styles.dateCard}>
                    {moment(cardInfo?.created_at).format(
                      " DD MMMM YYYY, h:mm a"
                    )}
                  </p>
                  <a href="" className="text-decoration-none">
                    <p className={`card-title ${styles.cardHeading}`}>
                      {cardInfo.title}
                    </p>
                  </a>
                  <p className={`card-text ${styles.cardTextpblog}`}>
                    {cardInfo.article_text}
                  </p>
                  <p className={`card-title ${styles.cardHeading}`}>Tags</p>
                  <div
                    style={{
                      padding: "10px",
                    }}
                  >
                    {cardInfo?.tag.map((obj) => {
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
                  <hr style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }} />
                  <div className="d-flex flex-row justify-content-between align-items-center pe-xl-5">
                    {/* <p className={styles.cardIconsTextP}>
                      <FontAwesomeIcon
                        className={styles.cardIconsData}
                        icon={faEnvelope}
                      />
                      0 Comments
                    </p>
                    <p className={styles.cardIconsTextP}>
                      <FontAwesomeIcon
                        className={styles.cardIconsData}
                        icon={faEye}
                      />
                      83 Viewed
                    </p>
                    <p className={styles.cardIconsTextP}>
                      <FontAwesomeIcon icon={faUser} />

                      {cardInfo.posted_by}
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br />
          <hr style={{ height: "2px" }} />
          <br />
          <br />
        </div>
      );
    });

  const pageCount = Math.ceil(cardInfo.length / cardPerPage);

  const getTags = () => {
    axios
      .get("https://lync1869.rideshide.com/api/auth/customer/articles/create")
      .then((response) => {
        if (response.status == 200) {
          setTagList(response.data.tags);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  let cardNmbr = cardInfo.length;
  console.log(cardNmbr);

  const btnNonActive = () => {
    setValueState(0);
  };

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
      <div className={`row ${styles.blogRowMainDiv} `}>
        <div className={`col-12 col-md-8 col-xl-9 ${styles.cardColumnMain}`}>
          {displayCards}

          {cardNmbr > 6 ? (
            <ReactPaginate
              previousLabel={"< Previous"}
              nextLabel={"Next >"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={styles.paginationBtns}
              previousLinkClassName={styles.previousBtn}
              nextLinkClassName={styles.nextBtn}
              disabledClassName={styles.paginationDisabled}
              activeClassName={styles.paginationActive}
            />
          ) : (
            <div className="d-none"></div>
          )}
        </div>
        <div className="col-12 col-md-4 col-xl-3">
          {/* <a href="/blogForm">
            {" "}
            <button className={`btn btn-danger ${styles.blogPostBtn}`}>
              Post Your BLogs
            </button>
          </a> */}
          {/* <br />
          <br /> */}
          <p className={styles.PopularPosts}>Related Posts</p>
          <br />
          {cardInfo.slice(0, 5).map((data, index) => {
            console.log("dataaaaa", data);
            return (
              <div key={index}>
                <div className={`card ${styles.blogCard}`}>
                  <div className="row ">
                    <div className="col-5 ">
                      <Link
                        href={{
                          pathname: "/[slug]",
                          query: {
                            slug: data.slug,
                          },
                        }}
                        as={`/crazy-blog-${data.slug}`}
                        passHref
                      >
                        <a>
                          <Image
                            height={100}
                            width={100}
                            className={`card-img ${styles.imgHeight}`}
                            // src={`https://lync1869.rideshide.com/${data.image}`}
                            // src={CarImge}
                            src={`https://lync1869.rideshide.com/` + data.image}
                            alt=""
                          />
                        </a>
                      </Link>
                      {/*      <img*/}
                      {/*          src={`https://lync1869.rideshide.com/${data.image}`}/>*/}
                    </div>
                    <div className="col-7">
                      <div className="card-body" style={{ padding: "0px" }}>
                        <span className={styles.dateCardPopular}>
                          {moment(data?.created_at).format(
                            " DD MMMM YYYY, h:mm a"
                          )}
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
          <p className={styles.PopularPosts}>Related Tags</p>
          <div className="row">
            {tagList?.map((obj) => {
              return (
                <>
                  <div className={`col-4 ${styles.lightBtnTagsCol}`}>
                    <a
                      href=""
                      className={`btn btn-light ${styles.lightBtnTags}`}
                    >
                      {obj.name}
                    </a>
                  </div>
                  &nbsp;
                </>
              );
            })}
          </div>
          <br />
          <br />
          {/* <div className={styles.blogRightAddDiv}></div> */}
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default BlogSinglePage;

// export async function getStaticProps(){
//   const res =await fetch('https://lync1869.rideshide.com/api/get-articles')
//   const data =await res.json()
//   console.log("d",data)
//   return {
//     props :data
//   }
// }
