import React from "react";
import BlogSinglePage from "../components/Blog/blog";

function Blog(props) {
  return (
    <div>
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
