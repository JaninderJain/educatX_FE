import React from "react";
import ContactUsForm from "../ContactUsPage/ContactUsForm";

const ContactFormSection = () => {
  return (
    <div className="mx-auto " style={{border:"solid" , borderRadius:"1rem" , borderColor:"#309151" ,borderWidth:"1px"}}>
      <div className="m-10">
        <h1 className="text-center text-4xl font-semibold">Get in Touch</h1>
        <p className="text-center text-richblack-300 mt-3">
          We&apos;d love to here for you, Please fill out this form.
        </p>
        <div className="mt-12 mx-auto">
          <ContactUsForm />
        </div>
      </div>
    </div>
  );
};

export default ContactFormSection;
