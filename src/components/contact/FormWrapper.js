import classes from './FormWrapper.module.css'
import React from 'react'

function FormWrapper() {
  return (
    <div className={classes.formContainer}>
        <h1>Get in touch</h1>
        <form className={classes.formWrapper}>
              <div className={classes.inputContainer}>
                <label htmlFor='firstName'>First Name</label>
                <input type='text' name='firstName'/>
              </div>
              <div className={classes.inputContainer}>
                <label htmlFor='lastName'>Last Name</label>
                <input type='text' name='lastName'/>
              </div>
                <div className={classes.inputContainer}>
                  <label htmlFor='emailId'>Email*</label>
                  <input type='email' name='emailId'/>
                </div>
                <div className={`${classes.inputContainer} ${classes.message}`}>
                <label htmlFor='message'>Message</label>
                <input type='text' name='message'/>
              </div>
                <div className={classes.inputContainer}>
                  <label htmlFor='phone'>Phone</label>
                  <input type='text' name='phone'/>
                </div>           
              <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormWrapper
