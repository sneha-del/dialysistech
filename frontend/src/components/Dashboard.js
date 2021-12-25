import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Dashboard = ({ auth: { user } }) => {
	return (
<>
		<section className="section cta-page">
        <div className="container" style={{height:"14em"}}>
          <div className="row">
            <div className="col-lg-4">
             
            </div>
          </div>
        </div>
      </section>
		<div style={{ marginTop: "5rem", textAlign: "center" }}>

			<h1>Welcome to Global Dialysis, {user && user.name}</h1>
		</div>
		</>
	);
};
Dashboard.propTypes = {
	auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
});

export default connect(mapStateToProps)(Dashboard);
