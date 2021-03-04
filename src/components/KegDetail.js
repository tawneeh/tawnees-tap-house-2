import React from "react";
import PropTypes from "prop-types";

function KegDetail(props) {
  const { keg, onClickingDelete } = props;
  return (
    <>
      <h1>Keg Details</h1>
      <h3>{keg.name}</h3>
      <h3>{keg.brand}</h3>
      <h3>{keg.price}</h3>
      <h3>{keg.alcoholContent}</h3>
      <h3>{keg.pintsLeft}</h3>
      <button onClick={ props.onClickingSold }>One Pint Sold</button>
      <button onClick={ props.onClickingEdit }>Update this Keg</button>
      <button onClick={ ()=> onClickingDelete(keg.id) }>Delete this Keg</button>
    </>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingSold: PropTypes.func,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default KegDetail;