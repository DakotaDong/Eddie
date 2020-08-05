import React from "react";
import { render } from "react-dom";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import { Tool } from "../images/general navigation/btn-left-dark.png"
import "../style/toolBox.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
//   width: "1000px",
//   height: "60vh",
  
};

export default class Box extends React.Component {
    constructor() {
        super();
    
        this.state = {
            open: false
        };
      }

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    return (
        // style={styles}
        <div >
            <button type="button" className="button" onClick={this.onOpenModal}>ToolBox</button>
            <Modal 
            open={open} onClose={this.onCloseModal} 
            center
            classNames={{
                overlay: 'customOverlay',
                modal: 'customModal',
                animationIn: 'customEnterAnimation',
                animationOut: 'customLeaveAnimation',
              }}
            animationDuration={500}
            >
                <h2>{this.props.title}</h2>
                <div className="test-tool">
                    {this.props.img}
                    <img src={this.props.img} alt="Tool" />
                </div>
                
                
            </Modal>
      </div>
    );
  }
}
