import React, { useEffect } from "react";
import Whatsapp from "../public/assets/Images/whatsapp.png";
import styles from "../styles/ThankYou.module.css";
import Image from "next/image";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import Router from "next/router";

function ThankYou() {
  useEffect(() => {
    window.scrollTo(0, 0);

    setTimeout(() => {
      Router.push("/blog");
    }, 2000);
  }, []);

  return (
    <div className="container mt-2 mb-5 p-3">
      <div className="row">
        <div className={"col-md-1 col-sm-12"}></div>
        <div className={"col-md-10 col-sm-12"}>
          <div className={styles.wrapper}>
            <div className={styles.wrapperS}>
              <h1 className={styles.thanksHead}>Thank you !</h1>
              <p>
                Thank you for selecting{" "}
                <b>
                  {" "}
                  <a
                    className={styles.websiteLink}
                    href="https://crazycarcorner.com/"
                  >
                    {" "}
                    crazycarcorner.com{" "}
                  </a>
                </b>{" "}
                to sell your car, one of our representatives will call you
                shortly to discuss your car condition and options, in the mean
                time you may click whatsapp icon to share your car interior and
                exterior pics without even saving our contact which will speedup
                the process.
              </p>
              {/* <p>After a review, we’ll post it soon. </p> */}

              <Link
                className={styles.gohome}
                href="https://api.whatsapp.com/send?phone=+971558829990&text=I'm%20interested%20to%20sell%20my%20car"
              >
                <a>
                  <Image
                    className={styles.whatsappStyles}
                    width={60}
                    height={60}
                    priority
                    src={Whatsapp}
                    alt={"whatsapp-icon"}
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ThankYou;
