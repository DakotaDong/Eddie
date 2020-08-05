import React from "react";
import { messages } from "./messages";
import { Link } from 'react-router-dom';

class EndGame extends React.Component {
  handleClick = () => {
    this.props.newGame(false);
  };
  render() {
    messages.sort(() => Math.random() - 0.5);
    return (
      <div className="end-game">
        <div className="message">
          <h2>{messages[0].title}</h2>
          <p className="message-content">{messages[0].message}</p>
          
          <Link to="/endS33" className="btn btn-light">
            Done!
          </Link>
        </div>
      </div>
    );
  }
}

export default EndGame;
