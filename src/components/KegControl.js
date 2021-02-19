import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";
import * as a from './../actions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedKeg: null
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        selectedKeg: null
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleSoldClick = () => {
    console.log("handleSoldClick reached!");
  }

  handleSellingPint = () => {
    const selectedKeg = this.state.selectedKeg;
    const newQuantity = Object.assign({}, selectedKeg, {pintsLeft: selectedKeg.pintsLeft - 1});
      if (selectedKeg.pintsLeft === 0) {
        return;
      } else {
        const newKegList = Object.values(this.props.masterKegList[selectedKeg.id])
          .concat(newQuantity);
        this.setState({
          masterKegList: newKegList,
          selectedKeg: newQuantity
        });
      }
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.props.masterKegList[id];
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const { dispatch } = this.props;
    const action = a.addKeg(newKeg);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKeg != null) {
      currentVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingSold = {this.handleSellingPint} />
      buttonText = "Return to the Keg List";
    } else if (this.props.formVisibleOnPage) {
      currentVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to the Keg List";
    } else {
      currentVisibleState = <KegList kegList={this.props.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
      buttonText = "Add a Keg";
    }
    return (
      <>
        {currentVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </>
    );
  }
}

KegControl.propTypes = {
  masterKegList: PropTypes.object,
  formVisibleOnPage: PropTypes.bool
};

const mapStateToProps = state => {
  return {
    masterKegList: state.masterKegList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}

KegControl = connect(mapStateToProps)(KegControl);

export default KegControl;