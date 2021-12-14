import React , { Fragment } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";


const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {


    const authLinks = (
		<ul className="navbar-nav ml-auto">

			<li className="nav-item"><Link className="nav-link" to="/">
				Home</Link>
			    </li>
				<li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
			  <li className="nav-item"><Link className="nav-link" to="/doctor">Doctor</Link></li>
           
              <li className="nav-item"><Link className="nav-link" to="/contact-us">Contact</Link></li>
			  
			  <li className="nav-item">
				<Link className="nav-link" to="/dashboard">
					<i className="fas fa-user"></i>{" "}
					<span className="hide-sm">Dashboard</span>
				</Link>
			</li>
			<li className="nav-item">
				<Link onClick={logout} className="nav-link" to="/" replace>
					<i className="fas fa-sign-out-alt"></i>{" "}
					<span className="hide-sm"> &nbsp;Logout</span>
				</Link>
			</li>
					  </ul>
	);

    const guestLinks = (
		<ul className="navbar-nav ml-auto">
            <li className="nav-item"><Link className="nav-link" to="/">
				Home</Link>
			    </li>
				<li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
			  <li className="nav-item"><Link className="nav-link" to="/doctor">Doctor</Link></li>
             
              
              
              <li className="nav-item"><Link className="nav-link" to="/contact-us">Contact</Link></li>
			  
              <li className="nav-item"><Link className="btn btn-main btn-round-full" to="/register">Signup</Link></li>
		</ul>
	);

    return (

<>
		<nav className="navbar navbar-expand-lg navigation" id="navbar">
        <div className="container">
          <a className="navbar-brand" href="index.html">
            <img src="images/logo.png" alt="" className="img-fluid" />
          </a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
            <span className="icofont-navigation-menu" />
          </button>
          <div className="collapse navbar-collapse" id="navbarmain">

		  {!loading && (
				<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
			)}
            {/* <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/services">Services</Link></li>
			  <li className="nav-item"><Link className="nav-link" to="/doctor">Doctor</Link></li>
             
              
              
              <li className="nav-item"><Link className="nav-link" to="/contact-us">Contact</Link></li>
			  
              <li className="nav-item"><Link className="nav-link" href="/singup">Signup</Link></li>
            </ul> */}
          </div>
        </div>
      </nav>
        {/* <section className="navs">
          <nav className="navbar navbar-default navbar-fixed-top" role="navigation">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <Link className="navbar-brand logo" to="/">
                  <span><i className="fa fa-stethoscope" /></span>
                  HealthCare
                </Link>
              </div>
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              
			{!loading && (
				<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
			)}
               
              </div>
            </div>
          </nav>
        </section> */}
		</>
    )
}

Navbar.propTypes = {
	logout: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
