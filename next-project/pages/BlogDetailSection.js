import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";
import CarsPurchase from "../components/MainPage/CarsPurchase";
import { useRouter } from "next/router";

function BlogDetailSection(props) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className="container px-4 px-lg-5 my-5">
        <div className="row gx-4 gx-lg-5 ">
          <div className="col-md-6">
            <Image
              className="card-img-top mb-5 mb-md-0"
              src={
                `https://lync1869.rideshide.com/` + props.articleDetail?.image
              }
              alt="..."
              height={500}
              width={500}
            />
          </div>
          <div className="col-md-6">
            <div className="small mb-1">&nbsp; &nbsp;</div>
            <h1 className="display-6 fw-bolder">
              {props.articleDetail?.title}
            </h1>
            <div className="fs-5 mb-5">
              {/* <p className={`card-title ${props.styles.cardHeading}`}>Tags</p> */}
              <p>Tags</p>
              <div
                style={{
                  padding: "10px",
                }}
              >
                {props.articleDetail?.tag?.map((obj) => {
                  return (
                    <>
                      <span
                        style={{
                          color: "white",
                          backgroundColor: "#77ac54",
                          padding: "10px",
                          borderRadius: "5px",
                        }}
                      >
                        {obj.name}
                      </span>
                      &nbsp;
                    </>
                  );
                })}
              </div>
            </div>

          </div>
          <div className="fs-5 mb-2">
              {/* <p className={`card-title ${props.styles.cardHeading}`}> */}
              <h3>Description</h3>
              <div
                style={{
                  padding: "10px",
                }}
              >
                <p className="lead" style={{ fontSize: "1.1rem", fontWeight:'600', textAlign:'justify' }}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: props.articleDetail?.article_text,
                    }}
                  />
                  
                </p>
              </div>
            </div>
        </div>
      </div>
     
    
    </>
  );
}

export default BlogDetailSection;
