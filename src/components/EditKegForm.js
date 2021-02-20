import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditKegForm (props) {
  const { keg } = props;

  function handleEditKegFormSubmission(event) {
    event.preventDefault();
    props.onEditKeg({name: event.target.name.value, brand: event.target.brand.value, price: event.target.price.value, alcoholContent: parseInt(event.target.alcoholContent.value), pintsLeft: parseInt(event.target.pintsLeft.value), id: keg.id
    });
  }

  return (
    <>
      <ReusableForm
        formSubmissionHandler=
        {handleEditKegFormSubmission}
        buttonText="Update Keg!" />
    </>
  );
}

EditKegForm.propTypes = {
  onEditKeg: PropTypes.func
};

export default EditKegForm;