import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";
import Alert from "../layout/Alert";

const Login = ({ login, isAuthenticated }) => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const { email, password } = formData;

	const onChange = (e) =>
		setFormData({ ...formData, [e.target.name]: e.target.value });

	const onSubmit = async (e) => {
		e.preventDefault();

		login(email, password);
	};

	// Redirect if logged in
	if (isAuthenticated) {
		return <Redirect to="/dashboard" />;
	}

	return (
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
			<Alert />
			<br />
			<div className="row">
              <div className="col-lg-10">
			<form className="form" onSubmit={(e) => onSubmit(e)}>
				<div className="form-group">
					<input
						type="email"
						placeholder="Email Address"
						name="email"
						value={email}
						className="form-control"
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="password"
						placeholder="Password"
						name="password"
						minLength="6"
						value={password}
						className="form-control"
						onChange={(e) => onChange(e)}
						required
					/>
				</div>
				<input type="submit" className="btn btn-primary" value="Login" />
			</form>
			</div>
			</div>
			<p className="link">
				Don't have an account? <Link to="/register">Sign Up</Link>
			</p>
		</div>
		</div>
		</div>
		</section>

	);
};

Login.propTypes = {
	login: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
	isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
