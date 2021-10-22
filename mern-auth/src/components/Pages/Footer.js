import React from "react"

const Footer = () => {
    return (
        <section id="footer">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-md-offset-3">
                <ul className="text-center contact">
                  <li className="socials-icons">
                    <a href="#" data-toggle="tooltip" title="Share in Facebook" className="facebook"><i className="fa fa-facebook" /></a>
                  </li>
                  <li className="socials-icons">
                    <a href="#" data-toggle="tooltip" title="Share in Twitter" className="twitter"><i className="fa fa-twitter" /></a>
                  </li>
                  <li className="socials-icons">
                    <a href="#" data-toggle="tooltip" title="Share in Google +" className="google-plus"><i className="fa fa-google-plus" /></a>
                  </li>
                  <li className="socials-icons">
                    <a href="#" data-toggle="tooltip" title="Share in Instagram" className="instagram"><i className="fa fa-instagram" /></a>
                  </li>
                  <li className="socials-icons">
                    <a href="#" data-toggle="tooltip" title="Share in Pinterest" className="pinterest"><i className="fa fa-pinterest" /></a>
                  </li>
                  <li className="socials-icons">
                    <a href="#" data-toggle="tooltip" title="Connect with Skype" className="skype"><i className="fa fa-skype" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="copy-right-text text-center">
                  © Copyright 2014, Your Website Link. Theme by <a href="https://themewagon.com/">ThemeWagon</a>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default Footer
