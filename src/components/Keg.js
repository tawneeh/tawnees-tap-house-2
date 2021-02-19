import React from "react";
import PropTypes from "prop-types";

function Keg(props) {
  return (
    <>
      <div onClick = { () => props.whenKegClicked(props.id) }>
        <h3>{props.name}</h3>
        <h3>{props.brand}</h3>
        <h3>{props.price}</h3>
        <h3>{props.alcoholContent}</h3>
        <h3>{props.pintsLeft}</h3>
      </div>
    </>
  );
}

Keg.propTypes = {
  name: PropTypes.string, 
  brand: PropTypes.string,
  price: PropTypes.string, 
  alcoholContent: PropTypes.number,
  pintsLeft: PropTypes.number,
  whenKegClicked: PropTypes.func
};

export default Keg;