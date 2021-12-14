import React from "react";
//import { Link } from "react-router-dom";

const Contact = () => {
    return (
      <div>
      <section className="page-title bg-1">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Contact Us</span>
                <h1 className="text-capitalize mb-5 text-lg">Get in Touch</h1>
                {/* <ul class="list-inline breadcumb-nav">
          <li class="list-inline-item"><Link to="index.html" class="text-white">Home</Link></li>
          <li class="list-inline-item"><span class="text-white">/</span></li>
          <li class="list-inline-item"><Link to="#" class="text-white-50">Contact Us</Link></li>
        </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* contact form start */}
      <section className="section contact-info pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="contact-block mb-4 mb-lg-0">
                <i className="icofont-live-support" />
                <h5>Call Us</h5>
                +91-9644705777
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="contact-block mb-4 mb-lg-0">
                <i className="icofont-support-faq" />
                <h5>Email Us</h5>
                globaldialysis@gmail.com
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="contact-block mb-4 mb-lg-0">
                <i className="icofont-location-pin" />
                <h5>Location</h5>
                Gandhi Road, Gwalior(M.P.) 474002
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-form-wrap section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center">
                <h2 className="text-md mb-2">Contact us</h2>
                <div className="divider mx-auto my-4" />
                <p className="mb-5">Are easy to find, so a patients can quickly get in touch should they need it.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <form id="contact-form" className="contact__form " method="post" action="mail.php">
                {/* form message */}
                <div className="row">
                  <div className="col-12">
                    <div className="alert alert-success contact__msg" style={{display: 'none'}} role="alert">
                      Your message was sent successfully.
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input name="name" id="name" type="text" className="form-control" placeholder="Your Full Name" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input name="email" id="email" type="email" className="form-control" placeholder="Your Email Address" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input name="subject" id="subject" type="text" className="form-control" placeholder="Your Query Topic" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input name="phone" id="phone" type="text" className="form-control" placeholder="Your Phone Number" />
                    </div>
                  </div>
                </div>
                <div className="form-group-2 mb-4">
                  <textarea name="message" id="message" className="form-control" rows={8} placeholder="Your Message" defaultValue={""} />
                </div>
                <div className="text-center">
                  <input className="btn btn-main btn-round-full" name="submit" type="submit" defaultValue="Send Messege" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="google-map ">
        <div id="map" />
      </div>
    </div>
    )
}

export default Contact
