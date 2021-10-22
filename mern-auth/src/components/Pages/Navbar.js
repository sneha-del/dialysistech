import React from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <section className="navs">
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container-fluid">
              {/* Brand and toggle get grouped for better mobile display */}
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a className="navbar-brand logo" href="#">
                  <span><i className="fa fa-stethoscope" /></span>
                  HealthCare
                </a>
              </div>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                <li>
				<Link to="/">Home</Link>
			    </li>
                <li>
				<Link to="/register">Register</Link>
			    </li>
                <li>
				<Link to="/login">Login</Link>
			    </li>
                {/* <li>
				<Link to="/services">Services</Link>
			    </li>
                <li>
				<Link to="/doctors">Doctor</Link>
			    </li>
                <li>
				<Link to="/blogs">Blog</Link>
			    </li>
                <li>
				<Link to="/faq">Faq</Link>
			    </li>
                <li>
				<Link to="/gallery">Gallery</Link>
			    </li> */}
                {/* <li>
				<Link to="/">Home</Link>
			    </li>
                <li>
				<Link to="/">Home</Link>
			    </li>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="services.html">Services</a></li>
                  <li><a href="doctors.html">Doctors</a></li>
                  <li><a href="blog.html">Blog</a></li>
                  <li><a href="faq.html">FAQs</a></li>
                  <li><a href="gallery.html">Gallery</a></li>
                  <li className="active"><a href="#">Contact Us</a></li> */}
                </ul>
              </div>{/* /.navbar-collapse */}
            </div>{/* /.container-fluid */}
          </nav>
        </section>
    )
}

export default Navbar
