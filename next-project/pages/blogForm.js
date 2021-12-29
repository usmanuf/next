import React, { useState, useEffect } from "react";
import axios from "axios";
import { URL_API } from "../variables";
import Router from "next/router";

import AppForm from "./AppForm";
import BlogForm from "../components/Blog/Blog-Form/BlogForm";
import styles from "../components/Blog/Blog-Form/blogForm.module.css";
import { FormGroup, Input, Label } from "reactstrap";
import Select from "react-select";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const BlogForm2 = () => {
  const [title, setTitle] = useState();
  const [description, setDescription] = useState();
  const [tags, setTags] = useState([]);
  const [image, setImage] = useState();
  const [tagList, setTagList] = useState([]);

  // form validation rules
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("Title is required"),
    description: Yup.string().required("Description is required"),
    image: Yup.string().required("Image is required"),
    tags: Yup.string().required("Tag is required"),

    // firstName: Yup.string().required("First Name is required"),
    // lastName: Yup.string().required("Last name is required"),
    // dob: Yup.string()
    //   .required("Date of Birth is required")
    //   .matches(
    //     /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
    //     "Date of Birth must be a valid date in the format YYYY-MM-DD"
    //   ),
    // email: Yup.string().required("Email is required").email("Email is invalid"),
    // password: Yup.string()
    //   .min(6, "Password must be at least 6 characters")
    //   .required("Password is required"),
    // confirmPassword: Yup.string()
    //   .oneOf([Yup.ref("password"), null], "Passwords must match")
    //   .required("Confirm Password is required"),
    // acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  useEffect(() => {
    getTags();
    let token = localStorage.getItem("token");
    // console.log("token", token);
    // if (token) {
    //   Router.push("/blogForm");
    // } else {
    //   Router.push("/login");
    // }
  }, []);

  const onTitleChange = (e) => {
    setTitle([e.target.value]);
  };
  const onDescChange = (e) => {
    setDescription([e.target.value]);
  };

  const onTagsChange = (tags) => {
    setTags(tags);
  };

  console.log("selected options", tags);

  const onImageChange = (event) => {
    if (!event.target.files[0]) {
      return false;
    } else {
      let files = event.target.files || event.dataTransfer.files;
      if (!files.length) return;
      setImage(files[0]);
    }
  };
  const getTags = () => {
    axios
      .get(URL_API + "auth/customer/articles/create")
      .then((response) => {
        if (response.status == 200) {
          const options = [];
          obj = {};
          for (var i = 0; i < response.data.tags.length; i++) {
            var obj = {};
            obj["value"] = response.data.tags[i].id;
            obj["label"] = response.data.tags[i].name;
            options.push(obj);
          }

          setTagList(options);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    let formData = new FormData();
    formData.append("title", title);
    formData.append("image", image);
    formData.append("article_text", description);
    formData.append("tags", JSON.stringify(tags));

    axios
      .post(URL_API + "auth/customer/articles", formData)
      .then((response) => {
        if (response.status == 200) {
          Router.push("/thank-you");
        }
        // console.log("inside api   object values ", object);
        // console.log(response);
        // setLoading(false);
        // history.push("/thank-you");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className={`container-fluid`}>
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
                <Input
                  name="title"
                  type="text"
                  //   class={`form-control ${styles.blogPostFormInput}`}
                  id="post-title"
                  onChange={(e) => onTitleChange(e)}
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
                <Input
                  component="textarea"
                  name="article_text"
                  //   class={`form-control ${styles.blogPostFormInput}`}
                  id="post-description"
                  rows="8"
                  onChange={(e) => onDescChange(e)}
                  required
                />
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="post-Images" className={styles.labelPostForm}>
                  Add Photo
                </label>
                <Input
                  id="file"
                  type="file"
                  name="image"
                  //   class={`form-control ${styles.blogPostFormInput}`}
                  onChange={(e) => onImageChange(e)}
                  required
                />
              </div>
              <br />

              <FormGroup>
                <Label for="City">Service Tags</Label>
                <Select
                  allowSelectAll={true}
                  value={tags}
                  onChange={onTagsChange}
                  options={tagList}
                  isMulti={true}
                />
              </FormGroup>

              <br />
              <Input
                type="submit"
                name="submit"
                className={`btn btn-danger ${styles.blogPostFormBtn}`}
                value="Post Now"
              />
            </div>
            <br />
            <br />
          </div>
        </div>
        {/* <BlogForm handleChange={handleChange} /> */}
      </form>
    </div>
  );
};

export default BlogForm2;
