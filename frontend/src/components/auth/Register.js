import React, { useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { register } from "../../actions/auth";
import PropTypes from "prop-types";
import Alert from "../layout/Alert";
import { setAlert } from "../../actions/alert";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    console.log("Form data", e);
    e.preventDefault();
    if (password !== password2) {
      setAlert("Password do not match", "danger");
    } else {
      register({ name, email, password });
    }
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <>

<section class="contact-form-wrap section">
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="section-title text-center">
                    <h2 class="text-md mb-2">Sign Up</h2>
                    <div class="divider mx-auto my-4"></div>
                    <p class="mb-5">Create Your Account</p>
                </div>
            </div>
        </div>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
		{/* <h1 className="heading">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Create Your Account
        </p> */}
        <Alert />
        <br />
          <form onSubmit={(e) => onSubmit(e)}
            
          >
			  
            
            <div className="row">
              <div className="col-lg-10">
                <div className="form-group">
				  <input
              type="text"
              placeholder="Full Name"
              name="name"
              value={name}
			  className="form-control"
              onChange={(e) => onChange(e)}
            />
                </div>
              </div>
              <div className="col-lg-10">
                <div className="form-group">
				<input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
			  className="form-control"
              onChange={(e) => onChange(e)}
            />
                </div>
              </div>
              <div className="col-lg-10">
                <div className="form-group">
				<input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
			  className="form-control"
              onChange={(e) => onChange(e)}
            />
                </div>
              </div>
              <div className="col-lg-10">
			  <div className="form-group">
			  <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              value={password2}
			  className="form-control"
              onChange={(e) => onChange(e)}
            />
                </div>
              </div>
            </div>
			<input type="submit" className="btn btn-main btn-round-full" value="Register" />
          </form>
          <br/>
		  <p className="mb-5">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
        </div>
      </div>
	  </div>
	  </section>

      {/* <div className="register-form">
        <h1 className="heading">Sign Up</h1>
        <p className="lead">
          <i className="fas fa-user"></i> Create Your Account
        </p>
        <Alert />
        <br />
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              name="password"
              minLength="6"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              placeholder="Confirm Password"
              name="password2"
              minLength="6"
              value={password2}
              onChange={(e) => onChange(e)}
            />
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
        <p className="link">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div> */}
    </>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
