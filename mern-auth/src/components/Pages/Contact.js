import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <div>
        
        <section className="contact-title text-center">
          <div className="contact-wrapper">
            <div className="container">
              <div className="row">
                <div>
                  <h1 className="headline">Contact us</h1>
                </div>
              </div>
              <div className="row">
                <div className="sub-headline">
                  <p>Lorem ipsum dolor sit amet, consectetur </p>
                </div>
              </div>	
            </div>
          </div>
        </section>
        <section className="contact-content">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="google-map">
                  <div id="map-canvas" />
                </div>
                <div className="quick-contact">
                  <h3>Quick Contact</h3>
                  <hr />
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        <i className="fa fa-home" /> 
                        <span>Full Address:</span> 
                        62 West 55th Street, Suite 302 New York, NY, 10230
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        <i className="fa fa-phone" />
                        <span>Cell No:</span>
                        +880 1234567890
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <p>
                        <i className="fa fa-fax" /> 
                        <span>Fax No:</span>
                        +58 - 0123456789
                      </p>
                    </div>
                    <div className="col-md-6">
                      <p>
                        <i className="fa fa-ambulance" />
                        <span>Ambulance:</span>
                        + 000 987654321
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="appointment">
                  <div className="header text-center">
                    <h2>Make an Appointment</h2>
                    <Link to="#" className="number">
                      <i className="fa fa-phone fa-fw" />
                      1-234-567-890
                    </Link>
                    <span className="or">OR</span>
                  </div>
                  {/* form of appointment */}
                  <div className="row">
                    <form method="post" action="#">
                      <div className="form">
                        <div className="input-group margin-bottom-sm col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                          <input className="form-control" type="text" placeholder="Full Name *" required />
                        </div>
                        <div className="input-group margin-bottom-sm col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                          <input className="form-control" type="text" placeholder="Email Address *" required />
                        </div>
                        <div className="input-group margin-bottom-sm col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                          <input className="form-control" type="text" placeholder="Appointment Date *" required />
                        </div>
                        <div className="input-group margin-bottom-sm col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                          <input className="form-control" type="text" placeholder="Mobile Number *" required />
                        </div>
                      </div>
                      <div className="input-group margin-bottom-sm col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                        <textarea className="form-control" rows={6} placeholder="Your Problem *" required defaultValue={""} />
                      </div>
                      <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                        <div className="captcha-container">
                          <label>Are you human? </label><br />
                          <img src="http://inspirythemesdemo.com/healthpress/wp-content/themes/healthpress-theme/captcha/captcha.php" alt="" />
                          <input type="text" className="captcha required" name="captcha" maxLength={5} title=" Please enter the code characters displayed in image!" />
                        </div>
                        <input className="btn btn-primary send" type="submit" defaultValue="Send" />
                      </div>
                    </form>
                  </div>
                  {/* end of form */}
                </div>{/* end of appointment*/}
              </div>
            </div>
          </div>
        </section>
        
      </div>
    )
}

export default Contact
