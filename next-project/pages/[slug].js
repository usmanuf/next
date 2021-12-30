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
import Head from "next/head";
import Html from "../pages/Html";
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
  const articleDetailVariable = {};
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
  const [articleDetail2, setArticleDetail2] = useState();
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

  const getArticleDetailSamePage = (slug) => {
    const slug2 = props.slug.slug.split("crazy-blog-");
    axios
      .get(URL_API + `article/${slug}`)
      .then((response) => {
        if (response.data.status == 200) {
          setArticleDetail(response.data.article);
          setArticleDetail2(response.data.article);
          articleDetailVariable = response.data.article;
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const getArticleDetail = () => {
    const slug2 = props.slug.slug.split("crazy-blog-");
    axios
      .get(URL_API + `article/${slug2[1]}`)
      .then((response) => {
        if (response.data.status == 200) {
          setArticleDetail(response.data.article);
          setArticleDetail2(response.data.article);
          articleDetailVariable = response.data.article;
        }
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const location = useRouter();
  var name = props.location?.detail;
  return (
    <>
      <Head>
        <title>{articleDetail?.title} – Crazy Car Corner</title>
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta
          name="og:description"
          content="Are you trying to sell your car that has been damaged? Crazy Car Corner was founded with the goal of making the automobile selling process feasible for you."
        />
        <meta
          name="og:keywords"
          content="Sell my car, sell any car, who can buy my car, best car scrapping service, cash for my scrap car, used cars buyer, used Cars for Sell, Car Buyers, Used Damaged Cars, online car valuation"
        />
        <meta content="#000000" data-react-helmet="true" />
      </Head>

      <div className={""}>
        <div className={styles.HeroiImgBlog}>
          <div className={styles.paddingTopBottomBlog}></div>
        </div>
        <section className="py-5">
          <Html
            articleDetail={articleDetail2}
            articles={articles}
            styles={styles}
          />
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
                        <a
                          onClick={() => getArticleDetailSamePage(article.slug)}
                        >
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
    </>
  );
};
export default Testing;
