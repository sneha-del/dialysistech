import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
    return (
      <div>
      <section className="page-title bg-1">
        <div className="overlay" />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Our services</span>
                <h1 className="text-capitalize mb-5 text-lg">What We Do</h1>
                {/* <ul class="list-inline breadcumb-nav">
          <li class="list-inline-item"><Link to="index.html" class="text-white">Home</Link></li>
          <li class="list-inline-item"><span class="text-white">/</span></li>
          <li class="list-inline-item"><Link to="#" class="text-white-50">Our services</Link></li>
        </ul> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section service-2">
        <div className="container">
          <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-block mb-5">
                <img src="images/service/service-8.jpg" alt="" className="img-fluid" />
                <div className="content">
                  <h4 className="mt-4 mb-2  title-color">Personal Care</h4>
                  <p className="mb-4">We take care of our each and every patient in a very well manner.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-block mb-5">
                <img src="images/service/service-4.jpg" alt="" className="img-fluid" />
                <div className="content">
                  <h4 className="mt-4 mb-2 title-color">Best Doctor Team</h4>
                  <p className="mb-4">We have a great staff of doctors. They work for there patients 24x7. </p>
                </div>
              </div>
            </div>
            
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-block mb-5">
                <img src="images/service/service-6.jpg" alt="" className="img-fluid" />
                <div className="content">
                  <h4 className="mt-4 mb-2 title-color">Laboratory Services</h4>
                  <p className="mb-4">We provides every test which is necessary for kidney.</p>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-block mb-5 mb-lg-0">
                <img src="images/service/service-4.jpg" alt="" className="img-fluid" />
                <div className="content">
                  <h4 className="mt-4 mb-2 title-color">Joint replacement</h4>
                  <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-block mb-5 mb-lg-0">
                <img src="images/service/service-6.jpg" alt="" className="img-fluid" />
                <div className="content">
                  <h4 className="mt-4 mb-2 title-color">Examination &amp; Diagnosis</h4>
                  <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                </div>
              </div>
            </div> */}
            {/* <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="service-block mb-5 mb-lg-0">
                <img src="images/service/service-8.jpg" alt="" className="img-fluid" />
                <div className="content">
                  <h4 className="mt-4 mb-2 title-color">Alzheimer's disease</h4>
                  <p className="mb-4">Saepe nulla praesentium eaque omnis perferendis a doloremque.</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <section className="section cta-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="cta-content">
                <div className="divider mb-4" />
                <h2 className="mb-5 text-lg">We are delighted to provide you with the <span className="title-color">opportunity to enjoy a healthy lifestyle. </span></h2>
                <Link to="/appointment" className="btn btn-main-2 btn-round-full">Get appoinment<i className="icofont-simple-right  ml-2" /></Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
}

export default Services
