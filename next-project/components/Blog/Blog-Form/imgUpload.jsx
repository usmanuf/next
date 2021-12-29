
import Image from "next/image";
import React, { useState } from "react";
import styles from "./blogForm.module.css"

const UploadFiles = () => {
  const [file, setFile] = useState([]);

  function uploadSingleFile(e) {
    setFile([...file, URL.createObjectURL(e.target.files[0])]);
    console.log("file", file);
  }

  function upload(e) {
    e.preventDefault();
    console.log(file);
  }

  function deleteFile(e) {
    const s = file.filter((item, index) => index !== e);
    setFile(s);
    console.log(s);
  }

  return (
      <div>
      <div className={`form-group ${styles.preview}`}>
        {file.length > 0 &&
          file.map((item, index) => {
            return (
              <div key={item}>
                <Image src={item} alt="" />
                <button type="button" onClick={() => deleteFile(index)}>
                  delete
                </button>
              </div>
            );
          })}
      </div>

      <div className="form-group">
      <label htmlFor="post-Images" className={styles.labelPostForm}>
              Add Photos
            </label>
        <input
          type="file"
          disabled={file.length === 5}
          className={`form-control ${styles.blogPostFormInput}`}
          onChange={uploadSingleFile}
        />
      </div>
      {/* <button
        type="button"
        className="btn btn-primary btn-block"
        onClick={upload}
      >
        Upload
      </button> */}
      </div>
  );
};

export default UploadFiles;