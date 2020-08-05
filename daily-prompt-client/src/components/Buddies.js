import React, { Component } from "react";
import { connect } from "react-redux";
import '../style/buddies.scss';
import PromptForm1 from "../scenario1/PromptForm1";
import PromptForm2 from "../scenario2/PromptForm2";
import PromptForm3 from "../scenario3/PromptForm3";

class Buddies extends Component {
  
  render() {
    return (
      <div>
            {this.props.currentUser.user.scenario === "1" && (
              <PromptForm1 />
            )}
            {this.props.currentUser.user.scenario === "2" && (
              <PromptForm2 />
            )}
            {this.props.currentUser.user.scenario === "3" && (
              <PromptForm3 />
            )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    selectBuddy: state.choice
  };
}

export default connect(mapStateToProps)(Buddies);
