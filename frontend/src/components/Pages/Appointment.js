const Appointment = () => {
    return (
        <div>
      <section className="page-title bg-1">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Book Bed</span>
                <h1 className="text-capitalize mb-5 text-lg">Book Appointment</h1>
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
      {/* <section className="section contact-info pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="contact-block mb-4 mb-lg-0">
                <i className="icofont-live-support" />
                <h5>Call Us</h5>
                +823-4565-13456
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="contact-block mb-4 mb-lg-0">
                <i className="icofont-support-faq" />
                <h5>Email Us</h5>
                contact@mail.com
              </div>
            </div>
            <div className="col-lg-4 col-sm-6 col-md-6">
              <div className="contact-block mb-4 mb-lg-0">
                <i className="icofont-location-pin" />
                <h5>Location</h5>
                North Main Street,Brooklyn Australia
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
                <p className="mb-5">Laboriosam exercitationem molestias beatae eos pariatur, similique, excepturi mollitia sit perferendis maiores ratione aliquam?</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <form id="contact-form" className="contact__form " method="post" action="mail.php">
                
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
      </section> */}

<section className="appoinment section">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <div className="mt-3">
                <div className="feature-icon mb-3">
                  <i className="icofont-support text-lg" />
                </div>
                <span className="h3">Call for an Emergency Service!</span>
                <h2 className="text-color mt-3">+919644705777 </h2>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="appoinment-wrap mt-5 mt-lg-0 pl-lg-5">
                <h2 className="mb-2 title-color">Book an appoinment</h2>
                <p className="mb-4">Assisting Our Patients And Their Families In Getting Back To What Really Matters.</p>
                <form id="#" className="appoinment-form" method="post" action="#">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="form-group">
                        <select className="form-control" id="exampleFormControlSelect1">
                          <option>Choose Department</option>
                          <option>Dialysis</option>
                          {/* <option>Development cycle</option>
                          <option>Software Development</option>
                          <option>Maintenance</option>
                          <option>Process Query</option>
                          <option>Cost and Duration</option>
                          <option>Modal Delivery</option> */}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <select className="form-control" id="exampleFormControlSelect2">
                          <option>Select Doctors</option>
                          <option>Dr. Abhinay Singh</option>
                          {/* <option>Development cycle</option>
                          <option>Software Development</option>
                          <option>Maintenance</option>
                          <option>Process Query</option>
                          <option>Cost and Duration</option>
                          <option>Modal Delivery</option> */}
                        </select>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input name="date" id="date" type="text" className="form-control" placeholder="dd/mm/yyyy" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input name="time" id="time" type="text" className="form-control" placeholder="Time" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input name="name" id="name" type="text" className="form-control" placeholder="Full Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="form-group">
                        <input name="phone" id="phone" type="Number" className="form-control" placeholder="Phone Number" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group-2 mb-4">
                    <textarea name="message" id="message" className="form-control" rows={6} placeholder="Your Message" defaultValue={""} />
                  </div>
                  <a className="btn btn-main btn-round-full" href="confirmation.html">Make Appoinment<i className="icofont-simple-right ml-2" /></a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <div className="google-map ">
        <div id="map" />
      </div> */}
    </div>
    )
}

export default Appointment
