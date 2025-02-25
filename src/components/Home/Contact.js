import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert("We will contact you shortly!"); 
  };

  return (
    <>
      <section className="contact" id="contact">
        <h1 className="heading">
          <span>contact</span> us
        </h1>
        <div className="row">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3016.370111228211!2d-74.56095752413711!3d40.88569552696429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c30a9019be0b8f%3A0x90970ec175b56d20!2sTable%2042!5e0!3m2!1sen!2sin!4v1732127747925!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>

          <form onSubmit={handleSubmit}>
            <h3>get in touch</h3>
            <div className="inputBox">
              <span className="fas fa-user"></span>
              <input type="text" placeholder="Name" required />
            </div>
            <div className="inputBox">
              <span className="fas fa-envelope"></span>
              <input type="email" placeholder="Email" required />
            </div>
            <div className="inputBox">
              <span className="fas fa-phone"></span>
              <input type="number" placeholder="Phone Number" required />
            </div>
            <input type="submit" value="contact now" className="btn" />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
