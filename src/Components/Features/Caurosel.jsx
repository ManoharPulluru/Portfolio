import React from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";

const Carousel = () => {
  // Container style for the carousel
  const containerStyle = {
    position: "relative",
    height: "100%",
    width: "100%",
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "middle"
  };

  // Card style for each card in the carousel
  const cardStyle = {
    height: "200px",
    width: "200px",
    paddingTop: "80px",
    textAlign: "center",
    background: "#52C0F5",
    color: "#FFF",
    fontFamily: "sans-serif",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "10px",
    boxSizing: "border-box"
  };

  return (
    <div style={containerStyle}>
      <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
        <div style={cardStyle}>First Card</div>
        <div style={cardStyle}>Second Card</div>
        <div style={cardStyle}>Third Card</div>
        <div style={cardStyle}>Fourth Card</div>
        <div style={cardStyle}>Fifth Card</div>
      </ReactCardCarousel>
    </div>
  );
};

export default Carousel;