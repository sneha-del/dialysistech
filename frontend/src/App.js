import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Pages/Navbar";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./routing/PrivateRoute";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./actions/auth";
import Homepage from "./components/Pages/Homepage";
import Services from "./components/Pages/Services";
import Footer from "./components/Pages/Footer";
import Contact from "./components/Pages/Contact";
import Doctor from "./components/Pages/Doctor";
import About from "./components/Pages/About";
import Appointment from "./components/Pages/Appointment";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <>
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/doctor" component={Doctor} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="/appointment" component={Appointment} />
            <Route exact path="" component={NotFound} />
           
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
