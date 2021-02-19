import React from "react";
import NewKegForm from "./NewKegForm";
import KegList from "./KegList";
import KegDetail from "./KegDetail";

class KegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterKegList: [],
      selectedKeg: null,
    };
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null,
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
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
        const newKegList = this.state.masterKegList
          .filter(keg => keg.id !== this.state.selectedKeg.id)
          .concat(newQuantity);
        this.setState({
          masterKegList: newKegList,
          selectedKeg: newQuantity
        });
      }
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.masterKegList.filter(keg => keg.id === id)[0];
    this.setState({selectedKeg: selectedKeg});
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMasterKegList = this.state.masterKegList.concat(newKeg);
    this.setState({masterKegList: newMasterKegList,
                  formVisibleOnPage: false});
  }

  render() {
    let currentVisibleState = null;
    let buttonText = null;
    if (this.state.selectedKeg != null) {
      currentVisibleState = <KegDetail keg = {this.state.selectedKeg} onClickingSold = {this.handleSellingPint} />
      buttonText = "Return to the Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to the Keg List";
    } else {
      currentVisibleState = <KegList kegList={this.state.masterKegList} onKegSelection={this.handleChangingSelectedKeg} />;
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

export default KegControl;