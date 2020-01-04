import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "assets/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "assets/scss/now-ui-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/nucleo-icons-page-styles.css";

import Index from "views/Index.js";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Switch>
        <Route path="/" render={props => <Index {...props} />} />
      </Switch>
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

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
                <i className="fa fa-chevron-up"></i>
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
  <GoTop scrollStepInPx="30" delayInMs="0" />
</div>
);

ReactDOM.render(Scrollups, document.querySelector('#app'));