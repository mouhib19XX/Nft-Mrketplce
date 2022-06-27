import React, { useRef } from "react";
import emailjs from "@emailjs/browser";




const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7iiyemj",
        "template_u58oh0r",
        form.current,
        "fMGtV8DYEbblPyi3A"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
       
  <form ref={form} onSubmit={sendEmail}>
        <div className="container contact-div" >
          <div className="row">
            <div className="col-md-6 col-10 mx-auto">
             
                <div className="form-group">
                  <label for="exampleFormControlInput1" style={{  color: 'white',paddingBottom:20}}>Enter Full Name</label>
                  <input
                    type="text"
                    name="user_name"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Enter Your Name"
                  />
                </div>
                <div className="form-group pt-3">
                  <label for="exampleFormControlInput1"style={{  color: 'white',paddingBottom:20}}>Contact Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="+216"
                  />
                </div>
                <div className="form-group pt-3">
                  <label for="exampleFormControlInput1"style={{  color: 'white',paddingBottom:20}}>Email address</label>
                  <input
                    type="email"
                    name="user_email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
  
                <div className="form-group pt-3">
                  <label for="exampleFormControlTextarea1"style={{  color: 'white',paddingBottom:20}}>
                    Type your Message Here
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Message"
                  ></textarea>
                </div>
  
                <div className="col-12 pt-3">
                  <button
                   
                    className="btn btn-outline-primary"
                    type="submit"
                    value="Send"
                  >
                    Submit form
                  </button>
                </div>
             
            </div>
          </div>
        </div></form>
      </>
    );
  }
  
  export default Contact;