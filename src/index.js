/*

=========================================================
* Now UI Kit React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-react
* Copyright 2019 Creative Tim (http://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-react/blob/master/LICENSE.md)

* Designed by www.invisionapp.com Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// styles for this kit
import "assets/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";
// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/index" render={props => <Index {...props} />} />
        <Route
          path="/nucleo-icons"
          render={props => <NucleoIcons {...props} />}
        />
        <Route
          path="/landing-page"
          render={props => <LandingPage {...props} />}
        />
        <Route
          path="/profile-page"
          render={props => <ProfilePage {...props} />}
        />
        <Route path="/login-page" render={props => <LoginPage {...props} />} />
        <Redirect to="/index" />
        <Redirect from="/" to="/index" />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

const Scrollup = (prop) => {
  return (
    <div class="scrollup">
    </div>
  );
};

class GoTop extends React.Component {
  state = {
       intervalId: 0,
       thePosition: false
   };

  componentDidMount() {
      document.addEventListener("scroll", () => {
          if (window.scrollY > 170) {
              this.setState({ thePosition: true })
          } else {
              this.setState({ thePosition: false })
          }
      });
      window.scrollTo(0, 0);
  }
  
  onScrollStep = () => {
      if (window.pageYOffset === 0){
          clearInterval(this.state.intervalId);
      }
      window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop = () => {
      let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
      this.setState({ intervalId: intervalId });
  }

  renderGoTopIcon = () => {
      if (this.state.thePosition){
          return (
              <div className="go-top" onClick={this.scrollToTop}>
                  Go Top
              </div>
          )
      }
  }

  render(){
      return (
          <React.Fragment>
              {this.renderGoTopIcon()}
          </React.Fragment>
      )
  }
}

const Scrollups = (
<div>
  <GoTop scrollStepInPx="50" delayInMs="30" />
</div>
);

ReactDOM.render(Scrollups, document.querySelector('#app'));