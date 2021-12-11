import React , { Fragment } from "react"
import { Link } from "react-router-dom"
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";


const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {


    const authLinks = (
		<ul className="nav navbar-nav navbar-right">
			<li>
				<Link to="/dashboard">
					<i className="fas fa-user"></i>{" "}
					<span className="hide-sm">Dashboard</span>
				</Link>
			</li>
			<li>
				<Link onClick={logout} to="/" replace>
					<i className="fas fa-sign-out-alt"></i>{" "}
					<span className="hide-sm"> &nbsp;Logout</span>
				</Link>
			</li>
		</ul>
	);

    const guestLinks = (
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
		</ul>
	);

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
                <Link className="navbar-brand logo" to="/">
                  <span><i className="fa fa-stethoscope" /></span>
                  HealthCare
                </Link>
              </div>
              {/* Collect the nav links, forms, and other content for toggling */}
              <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              
			{!loading && (
				<Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
			)}
               
              </div>{/* /.navbar-collapse */}
            </div>{/* /.container-fluid */}
          </nav>
        </section>
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
