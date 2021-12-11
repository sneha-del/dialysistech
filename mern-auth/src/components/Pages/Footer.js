import React from "react";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <section id="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <ul className="text-center contact">
                  <li className="socials-icons">
                    <Link to="#" data-toggle="tooltip" title="Share in Facebook" className="facebook"><i className="fa fa-facebook" /></Link>
                  </li>
                  <li className="socials-icons">
                    <Link to="#" data-toggle="tooltip" title="Share in Twitter" className="twitter"><i className="fa fa-twitter" /></Link>
                  </li>
                  <li className="socials-icons">
                    <Link to="#" data-toggle="tooltip" title="Share in Google +" className="google-plus"><i className="fa fa-google-plus" /></Link>
                  </li>
                  <li className="socials-icons">
                    <Link to="#" data-toggle="tooltip" title="Share in Instagram" className="instagram"><i className="fa fa-instagram" /></Link>
                  </li>
                  <li className="socials-icons">
                    <Link to="#" data-toggle="tooltip" title="Share in Pinterest" className="pinterest"><i className="fa fa-pinterest" /></Link>
                  </li>
                  <li className="socials-icons">
                    <Link to="#" data-toggle="tooltip" title="Connect with Skype" className="skype"><i className="fa fa-skype" /></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="copy-right-text text-center">
                  © Copyright 2014, Your Website Link. Theme by <Link to="https://themewagon.com/">ThemeWagon</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Footer
