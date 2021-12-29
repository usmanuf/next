import { Field } from "formik";
import styles from "./blogForm.module.css";

function BlogForm({ handleChange }) {
  return (
    <div className={`container-fluid ${styles.ContainerBlogForm}`}>
      <div className={styles.HeroiImgBlogForm}>
        <div className={styles.paddingTopBottomBlogForm}>
          <h1 className={styles.HeroiImgTextBlogForm}>Add Your Post</h1>
          <h5 className={styles.HeroiImgTextH5BlogForm}>
            Home<span className={styles.symbolSizeBlogForm}>&gt; </span> Add
            Your Post
          </h5>
        </div>
      </div>
      <br />
      <div className="container">
        <p className={styles.blogPostPtext}>
          <span className={styles.blogPostSpanText}>Home / Blog / </span>Add
          Posting
        </p>
        <p className={`${styles.blogPostHeading} ps-5`}>Add Your Post</p>
        <div className={`form ${styles.blogPostForm}`}>
          <div className="form-group">
            <label htmlFor="post-title" className={styles.labelPostForm}>
              Post title
            </label>
            <Field
              name="title"
              type="text"
              className={`form-control ${styles.blogPostFormInput}`}
              id="post-title"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="post-description" className={styles.labelPostForm}>
              Ad Description{" "}
              <span className={styles.blogFormDesciptionSpan}>
                Enter long description for your project
              </span>
            </label>
            <Field
              component="textarea"
              name="article_text"
              class={`form-control ${styles.blogPostFormInput}`}
              id="post-description"
              rows="8"
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="post-Images" className={styles.labelPostForm}>
              Add Photos
            </label>
            <input
              id="file"
              type="file"
              name="image"
              className={`form-control ${styles.blogPostFormInput}`}
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="post-tags" className={styles.labelPostForm}>
              Tags
            </label>
            <Field
              as="select"
              // id="inputState"
              class={`form-control ${styles.blogPostFormInput}`}
              id="post-tags"
              name="tags"
            >
              <option className="optionText" value="" disabled selected>
                Select tags
              </option>
              <option value="1" className="hoverOption">
                audi
              </option>
              <option value="2">acura</option>
            </Field>
          </div>
          <br />
          <button className={`btn btn-danger ${styles.blogPostFormBtn}`}>
            Post Now
          </button>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default BlogForm;
