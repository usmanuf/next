import Head from "next/head";
import React from "react";
import BlogSinglePage from "../components/Blog/blog";

function Blog(props) {
  return (
    <div>
      <Head>
        <title>Blogs – Crazy Car Corner</title>
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
      <BlogSinglePage props={props.articles} />
    </div>
  );
}

export default Blog;

export async function getStaticProps() {
  const res = await fetch("https://lync1869.rideshide.com/api/get-articles");
  const data = await res.json();
  console.log("d", data);
  return {
    props: data,
  };
}
