import React from "react";
import { useHistory } from "react-router";
const Homepage = () => {
  const history = useHistory();
  const navigate = () => {
    history.push("/about");
  };
  return (
    <div>
      <section className="heading-slider">
        <div id="starting-slider" className="owl-carousel owl-theme">
          <div className="item">
            <div className="slider-1">
              <div className="slider-inner">
                <div className="container">
                  <div className="row">
                    <div className="slider-inner-text">
                      <h1>We're Professional</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Debitis illum dignissimos tempore ad, eos sint
                        ullam{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-2">
              <div className="slider-inner">
                <div className="container">
                  <div className="row">
                    <div className="slider-inner-text">
                      <h1>We're Caring</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Debitis illum dignissimos tempore ad, eos sint
                        ullam{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="slider-3">
              <div className="slider-inner">
                <div className="container">
                  <div className="row">
                    <div className="slider-inner-text">
                      <h1>We're Responsible</h1>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Debitis illum dignissimos tempore ad, eos sint
                        ullam{" "}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="starting-text">
        <div className="container">
          <div className="row">
            <div className="welcome">
              <h2 className="welcome-title">
                Welcome To Our Health Care Clinic
              </h2>
              <p className="welcome-txt">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.{" "}
              </p>
              <button className="welcome-btn" onClick={navigate}>
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-sm-12 col-xs-12">
              <h2 className="headline text-center">Why Choose Us</h2>
              <p className="sub-headline text-center">
                Lorem ipsum dolor sit amet, consectetur
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="hservice">
                <div className="service-img">
                  <img
                    className="img-responsive center-block"
                    src="assets/img/service1.jpg"
                    alt=""
                  />
                </div>
                <div className="service-description text-center">
                  <h4 className="service-heading">Top Qualified Doctors</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae nisi nostrum sunt cum, consequuntur asperiores,
                    impedit voluptate eveniet modi quas omnis.
                  </p>
                  <a href="#" className="rm-btn btn btn-primary">
                    Read More <i className="fa fa-caret-right" />
                  </a>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="hservice">
                <div className="service-img">
                  <img
                    className="img-responsive center-block"
                    src="assets/img/service2.jpg"
                    alt=""
                  />
                </div>
                <div className="service-description text-center">
                  <h4 className="service-heading">Online Q &amp; A</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio nulla necessitatibus adipisci consequatur explicabo
                    provident officiis fugit. Nihil dolorem officiis.
                  </p>
                  <a href="#" className="rm-btn btn btn-primary">
                    Read More <i className="fa fa-caret-right" />
                  </a>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="hservice">
                <div className="service-img">
                  <img
                    className="img-responsive center-block"
                    src="assets/img/service3.jpg"
                    alt=""
                  />
                </div>
                <div className="service-description text-center">
                  <h4 className="service-heading">Symptom Check</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias ipsum natus, odio quae! Ratione tempora
                    accusantium explicabo tenetur, porro numquam.
                  </p>
                  <a href="#" className="rm-btn btn btn-primary">
                    Read More <i className="fa fa-caret-right" />
                  </a>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="hservice">
                <div className="service-img">
                  <img
                    className="img-responsive center-block"
                    src="assets/img/service4.jpg"
                    alt=""
                  />
                </div>
                <div className="service-description text-center">
                  <h4 className="service-heading">Competitive Pricing</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Molestias ipsum natus, odio quae! Ratione tempora
                    accusantium explicabo tenetur, porro numquam.
                  </p>
                  <a href="#" className="rm-btn btn btn-primary">
                    Read More <i className="fa fa-caret-right" />
                  </a>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="hservice">
                <div className="service-img">
                  <img
                    className="img-responsive center-block"
                    src="assets/img/service5.jpg"
                    alt=""
                  />
                </div>
                <div className="service-description text-center">
                  <h4 className="service-heading">Medical Counseling</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Recusandae nisi nostrum sunt cum, consequuntur asperiores,
                    impedit voluptate eveniet modi quas omnis.
                  </p>
                  <a href="#" className="rm-btn btn btn-primary">
                    Read More <i className="fa fa-caret-right" />
                  </a>
                </div>
              </div>
              <div className="clearfix" />
            </div>
            <div className="col-lg-4 col-sm-6 col-xs-12">
              <div className="hservice">
                <div className="service-img">
                  <img
                    className="img-responsive center-block"
                    src="assets/img/service6.jpg"
                    alt=""
                  />
                </div>
                <div className="service-description text-center">
                  <h4 className="service-heading">Caring Staff</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Optio nulla necessitatibus adipisci consequatur explicabo
                    provident officiis fugit. Nihil dolorem officiis.
                  </p>
                  <a href="#" className="rm-btn btn btn-primary">
                    Read More <i className="fa fa-caret-right" />
                  </a>
                </div>
              </div>
              <div className="clearfix" />
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial" className="text-center">
        <div className="testimonial-wrapper">
          <div className="container">
            <div className="row client-content text-center">
              <div className="col-md-8">
                <div className="row">
                  <h1>Testimonial</h1>
                </div>
                <div className="row">
                  <div className="sub-headline">
                    <p>What Our Patients Say About Us</p>
                  </div>
                </div>
                <div
                  id="carousel-example-generic"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  {/* Wrapper for slides */}
                  <div className="carousel-inner" role="listbox">
                    <div className="item active">
                      <div id="client-speech">
                        <div className="item">
                          <div className="row">
                            <div className="col-md-12">
                              <i className="fa fa-quote-left" />
                            </div>
                            <div className="col-md-8 col-md-offset-2">
                              <p className="client-comment text-center">
                                When you form a team, why do you try to form a
                                team? Because teamwork builds trust and trust
                                builds speed.
                              </p>
                            </div>
                            <div className="col-md-12">
                              <i className="fa fa-quote-right" />
                            </div>
                            <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-6 col-xs-offset-3">
                              <img
                                className="img-circle img-responsive center-block"
                                src="assets/img/client3.jpg"
                                alt="Image"
                              />
                            </div>
                          </div>
                          <div className="row text-center">
                            <p className="client-name text-center">Julia Doe</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div id="client-speech">
                        <div className="item">
                          <div className="row">
                            <div className="col-md-12">
                              <i className="fa fa-quote-left" />
                            </div>
                            <div className="col-md-8 col-md-offset-2">
                              <p className="client-comment text-center">
                                When you form a team, why do you try to form a
                                team? Because teamwork builds trust and trust
                                builds speed.
                              </p>
                            </div>
                            <div className="col-md-12">
                              <i className="fa fa-quote-right" />
                            </div>
                            <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-6 col-xs-offset-3">
                              <img
                                className="img-circle img-responsive center-block"
                                src="assets/img/client1.jpg"
                                alt="Image"
                              />
                            </div>
                          </div>
                          <div className="row text-center">
                            <p className="client-name text-center">John Doe</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="item">
                      <div id="client-speech">
                        <div className="item">
                          <div className="row">
                            <div className="col-md-12">
                              <i className="fa fa-quote-left" />
                            </div>
                            <div className="col-md-8 col-md-offset-2">
                              <p className="client-comment text-center">
                                When you form a team, why do you try to form a
                                team? Because teamwork builds trust and trust
                                builds speed.
                              </p>
                            </div>
                            <div className="col-md-12">
                              <i className="fa fa-quote-right" />
                            </div>
                            <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-6 col-xs-offset-3">
                              <img
                                className="img-circle img-responsive center-block"
                                src="assets/img/client4.jpg"
                                alt="Image"
                              />
                            </div>
                          </div>
                          <div className="row text-center">
                            <p className="client-name text-center">Jane Doe</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="left carousel-control"
                    href="#carousel-example-generic"
                    role="button"
                    data-slide="prev"
                  >
                    <i className="fa fa-angle-left fa-3x" />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="right carousel-control"
                    href="#carousel-example-generic"
                    role="button"
                    data-slide="next"
                  >
                    <i className="fa fa-angle-right fa-3x" />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
              <div className="col-md-4">
                <div className="appointment">
                  <div className="header text-center">
                    <h2>Make an Appointment</h2>
                    <a href="#" className="number">
                      <i className="fa fa-phone fa-fw" />
                      1-800-123-4567
                    </a>
                    <span className="or">OR</span>
                  </div>
                  {/* form of appointment */}
                  <div className="row">
                    <form method="post" action="#">
                      <div className="form">
                        <div className="input-group margin-bottom-sm col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Full Name *"
                            required
                          />
                        </div>
                        <div className="input-group margin-bottom-sm col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Email Address *"
                            required
                          />
                        </div>
                        <div className="input-group margin-bottom-sm col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Appointment Date *"
                            required
                          />
                        </div>
                        <div className="input-group margin-bottom-sm col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                          <input
                            className="form-control"
                            type="text"
                            placeholder="Mobile Number *"
                            required
                          />
                        </div>
                      </div>
                      <div className="input-group margin-bottom-sm col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                        <textarea
                          className="form-control"
                          rows={6}
                          placeholder="Your Problem *"
                          required
                          defaultValue={""}
                        />
                      </div>
                      <div className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1">
                        <div className="captcha-container">
                          <label>Are you human? </label>
                          <br />
                          <img
                            src="http://inspirythemesdemo.com/healthpress/wp-content/themes/healthpress-theme/captcha/captcha.php"
                            alt=""
                          />
                          <input
                            type="text"
                            className="captcha required"
                            name="captcha"
                            maxLength={5}
                            title=" Please enter the code characters displayed in image!"
                          />
                        </div>
                        <input
                          className="btn btn-primary send"
                          type="submit"
                          defaultValue="Send"
                        />
                      </div>
                    </form>
                  </div>
                  {/* end of form */}
                </div>
                {/* end of appointment*/}
              </div>
            </div>{" "}
            {/*  client-content  */}
          </div>
        </div>
      </section>{" "}
      {/* testimonial */}
    </div>
  );
};

export default Homepage;
