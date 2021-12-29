import Image from "next/image";
import React, {useState, useEffect} from "react"
// import {FaChevronDown} from "react-icons/fa";
import user from "../../slider/image/carPic.jpg";
import styles from "./custom.module.css"

const CustomInput=({cancellor,
  parentId,
  value,
  edit,
  submit,
  handleCancel,
  })=>{
    const [text, setText] = useState(value)

    const handleChange = (e) => {
        setText(e.target.value)
      }
    return(
        <form className={styles.formConatinerCustomCss}>
            <div className={styles.form}>
            <div className={styles.inputdiv}> 
            <div className={styles.row1}> <Image className={styles.commnetImage} src={user} alt="" />
            
                {/* <div className="arrow-left"></div> */}
                
                <span className={styles.inputname} >Comment as:<span className={styles.inputname2}>your email</span></span>
                </div>
                <textarea
                    rows="4"
                    className={styles.inputbox}
                    type='text'
                    placeholder='Enter Your Comment..'
                    component='input'
                    value={text}
                    onChange={handleChange}></textarea>  
            
            </div> 
            <hr />
            
        <div className={styles.btndiv}>
          <button
          className={styles.post-btn}
            onClick={() =>submit(cancellor, text, parentId, edit, setText)}
            type="submit" 
            disabled={!text}
          >
            Post
          </button>
            <button className={styles.cancelbtn}
            onClick={() => handleCancel(cancellor,edit)}>
              Cancel
            </button>
        </div>
        </div>
      </form>
    )
}

export default CustomInput