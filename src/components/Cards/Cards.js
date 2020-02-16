import React, { Component } from "react";
import "./Cards.css";
// import rudy from "./Rudy.jpeg";

class Cards extends Component {
  state = {
    mouseX: 0,
    mouseY: 0,
    height: 0,
    width: 0,
    mouseLeaveDelay: null
  };

  cardEl = null;
  path = null;
  fullWidth = null;
  top = null;
  left = null;
  size = null;

  componentDidMount() {
    const height = this.cardEl.clientHeight;
    const width = this.cardEl.clientWidth;
    // this.fullWidth =
    //   window.innerWidth > 0 ? window.innerWidth : window.screen.width;
    // console.log(this.fullWidth);
    this.path = this.props.path;
    this.top = this.props.top;
    this.left = this.props.left;
    this.size = this.props.size;
    this.setState({ height: height, width: width });
  }

  get cardStyle() {
    const { mouseX, width } = this.state;
    const { mouseY, height } = this.state;
    const X = (mouseX / width) * 30;
    const Y = (mouseY / height) * -30;
    return {
      transform: `rotateY(${X}deg) rotateX(${Y}deg)`
    };
  }

  get backgroundStyle() {
    const { mouseX, width } = this.state;
    const { mouseY, height } = this.state;
    const X = (mouseX / width) * -20;
    const Y = (mouseY / height) * -20;
    return {
      backgroundImage: `url(${this.path})`,
      top: `${this.top}`,
      left: `${this.left}`,
      backgroundSize: `${this.size}`,
      transform: `translateX(${X}px) translateY(${Y}px)`
    };
  }

  mouseEnterHandler = () => {
    // if (this.fullWidth > 768) {
    clearTimeout(this.mouseLeaveDelay);
    // }
  };

  mouseMoveHandler = event => {
    const { width, height } = this.state;
    // if (this.fullWidth > 768) {
    const mouseX = event.pageX - this.cardEl.offsetLeft - width / 2;
    const mouseY = event.pageY - this.cardEl.offsetTop - height * 5.5;
    this.setState({
      mouseY: mouseY,
      mouseX: mouseX
    });
    // } else {
    //   this.setState({
    //     mouseY: 0,
    //     mouseX: 0
    //   });
    // }
  };

  mouseLeaveHandler = () => {
    // if (this.fullWidth > 768) {
    const delay = setTimeout(() => {
      this.setState({ mouseY: 0, mouseX: 0 });
    }, 900);
    this.setState({ mouseLeaveDelay: delay });
    // }
  };

  render() {
    return (
      <div style={{ display: "inline-block" }}>
        <div
          className="ParallaxCardWrap"
          onMouseEnter={this.mouseEnterHandler}
          onMouseMove={this.mouseMoveHandler}
          onMouseLeave={this.mouseLeaveHandler}
          ref={cardEl => (this.cardEl = cardEl)}
        >
          <div className="ParallaxCard" style={this.cardStyle}>
            <div className="ParallaxCardBg" style={this.backgroundStyle}></div>
            <div className="ParallaxCardInfo"></div>
          </div>
        </div>
        <div>
          <a
            href={this.props.linked}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <h3 style={{ color: "#22B573", textDecoration: "none" }}>
              {this.props.title}{" "}
              <span>
                <i
                  className="fab fa-linkedin "
                  style={{ color: "black", fontSize: "20px" }}
                ></i>
              </span>
            </h3>
          </a>
          <b style={{ position: "relative", top: "-30px" }}>
            {this.props.children}{" "}
          </b>
        </div>
      </div>
    );
  }
}

export default Cards;
