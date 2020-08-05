import React from "react";
import "../game.css"

class Navbar extends React.Component {
  render() {
    const { score } = this.props;
    return (
      <div className="gameResult">
        {/* <div className="game-title">Memory</div> */}
        <div className="score">Score: {score}</div>
      </div>
    );
  }
}

export default Navbar;
