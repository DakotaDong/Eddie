import React, { Component } from "react";
import { connect } from "react-redux";


class FifthComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tool: false,
      noTool: true
    };
    this.handleTool = this.handleTool.bind(this)
    // this.handleNoStart = this.handleNoStart.bind(this)
  }

  handleTool() {
    this.setState({ noTool: false });
    this.setState({ tool: true });
  }

  render() {
    return (
      <div className="component fifth-component">
        {/* <div className="tool-box">
          <Box />
        </div> */}
        
        
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(FifthComponent);

