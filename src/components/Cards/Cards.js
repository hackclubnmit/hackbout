import React, { Component } from "react";
import styles from "./Cards.css";

class Cards extends Component {
  componentDidMount() {
    const wrapper = document.querySelectorAll(".CardWrap");

    wrapper.forEach(element => {
      let state = {
        mouseX: 0,
        mouseY: 0,
        height: element.clientHeight,
        width: element.clientWidth
      };

      element.addEventListener("mousemove", ele => {
        const card = element.querySelector(".Card");
        const cardBg = card.querySelector(".CardBg");
        state.mouseX = ele.pageX - element.offsetLeft - state.width / 2;
        state.mouseY = ele.pageY - element.offsetTop - state.height / 2;

        // parallax angle in card
        const angleX = (state.mouseX / state.width) * 30;
        const angleY = (state.mouseY / state.height) * -30;
        card.style.transform = `rotateY(${angleX}deg) rotateX(${angleY}deg) `;

        // parallax position of background in card
        const posX = (state.mouseX / state.width) * -40;
        const posY = (state.mouseY / state.height) * -40;
        cardBg.style.transform = `translateX(${posX}px) translateY(${posY}px)`;
      });

      element.addEventListener("mouseout", () => {
        const card = element.querySelector(".Card");
        const cardBg = card.querySelector(".CardBg");
        card.style.transform = `rotateY(0deg) rotateX(0deg) `;
        cardBg.style.transform = `translateX(0px) translateY(0px)`;
      });
    });
  }

  mouseEnterHandler = () => {};

  mouseMoveHandler = event => {};

  mouseLeaveHandler = () => {};

  render() {
    return (
      <div className="cont">
        <div className="CardWrap">
          <div className="Card">
            <div className="CardBg" style={{}}></div>
            <div className="CardInfo">
              <h3 className="CardTitle">Mathematics</h3>
              <p>A subject which deals with.... Well Maths!</p>
            </div>
          </div>
        </div>
        <div className="CardWrap">
          <div className="Card">
            <div className="CardBg" style={{}}></div>
            <div className="CardInfo">
              <h3 className="CardTitle">Mathematics</h3>
              <p>A subject which deals with.... Well Maths!</p>
            </div>
          </div>
        </div>
        <div className="CardWrap">
          <div className="Card">
            <div className="CardBg" style={{}}></div>
            <div className="CardInfo">
              <h3 className="CardTitle">Mathematics</h3>
              <p>A subject which deals with.... Well Maths!</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
