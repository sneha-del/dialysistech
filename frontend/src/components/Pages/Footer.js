import React, { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [data, setData] = useState({
    email: "",
  });

  const { email } = data;

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://v1.nocodeapi.com/vikasnarwariya/google_sheets/mawZghuqeJsNDxky?tabId=Sheet3",
        {
          method: "post",
          body: JSON.stringify([[email, new Date().toLocaleString()]]),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      await response.json();
      setData({ ...data, email: "" });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <footer className="footer section gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mr-auto col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <div className="logo mb-4">
                <img src="images/logo.png" alt="" className="img-fluid" />
              </div>
              <p>
                Global Dialysis has been the pioneer in bringing ground-breaking
                healthcare technologies to India. Combining the best specialists
                and equipment to provide you nothing short of the best in
                healthcare.
              </p>
              <ul className="list-inline footer-socials mt-4">
                <li className="list-inline-item">
                  <Link to="https://www.facebook.com/themefisher">
                    <i className="icofont-facebook" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="https://twitter.com/themefisher">
                    <i className="icofont-twitter" />
                  </Link>
                </li>
                <li className="list-inline-item">
                  <Link to="https://www.pinterest.com/themefisher/">
                    <i className="icofont-linkedin" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Department</h4>
              <div className="divider mb-4" />
              <ul className="list-unstyled footer-menu lh-35">
                <li><Link to="#">Surgery </Link></li>
                <li><Link to="#">Wome's Health</Link></li>
                <li><Link to="#">Radiology</Link></li>
                <li><Link to="#">Cardioc</Link></li>
                <li><Link to="#">Medicine</Link></li>
              </ul>
            </div>
          </div> */}
          {/* <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Support</h4>
              <div className="divider mb-4" />
              <ul className="list-unstyled footer-menu lh-35">
                <li><Link to="#">Terms &amp; Conditions</Link></li>
                <li><Link to="#">Privacy Policy</Link></li>
                <li><Link to="#">Company Support </Link></li>
                <li><Link to="#">FAQuestions</Link></li>
                <li><Link to="#">Company Licence</Link></li>
              </ul>
            </div>
          </div> */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget widget-contact mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Get in Touch</h4>
              <div className="divider mb-4" />
              <div className="footer-contact-block mb-4">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-email mr-3" />
                  <span className="h6 mb-0">Support Available for 24/7</span>
                </div>
                <h4 className="mt-2">
                  <Link to="tel:+23-345-67890">globaldialysis@gmail.com</Link>
                </h4>
              </div>
              <div className="footer-contact-block">
                <div className="icon d-flex align-items-center">
                  <i className="icofont-support mr-3" />
                  <span className="h6 mb-0">Mon to Sat : 08:30 - 20:30</span>
                </div>
                <h4 className="mt-2">
                  <Link to="tel:+91-9644-705777">+91-9644-705777</Link>
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-btm py-4 mt-5">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6">
              <div className="copyright">
                © Copyright Reserved to GlobalDialysis by{" "}
                <Link to="https://themefisher.com/" target="_blank">
                  sv-devops
                </Link>
              </div>
            </div>
            {/* <div className="col-lg-6">
              <div className="subscribe-form text-lg-right mt-5 mt-lg-0">
                <form  id="form" className="subscribe" method="post" onSubmit={handleSubmit} >
                <input name="email" id="email" type="email" className="form-control" placeholder="Your Email Address" onChange={handleChange} value={email}/>
                  <button className="btn btn-main-2 btn-round-full">Subscribe</button>
                </form>
              </div>
            </div> */}
          </div>
          <div className="row">
            <div className="col-lg-4">
              <a className="backtop js-scroll-trigger" href="#top">
                <i className="icofont-long-arrow-up" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
