import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Pages/Navbar";
import Landing from "./components/layout/Landing";
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
import Blog from "./components/Pages/Blog";
import Contact from "./components/Pages/Contact";
import Gallery from "./components/Pages/Gallery";
import Faq from "./components/Pages/Faq";
import Doctor from "./components/Pages/Doctor";
import About from "./components/Pages/About";

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
            <Route exact path="/landing" component={Landing} />
            <Route exact path="/" component={Homepage} />
            <Route exact path="/services" component={Services} />
            <Route exact path="/blogs" component={Blog} />
            <Route exact path="/contact-us" component={Contact} />
            <Route exact path="/gallery" component={Gallery} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/doctors" component={Doctor} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/about" component={About} />
            <Route exact path="" component={NotFound} />
          </Switch>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
