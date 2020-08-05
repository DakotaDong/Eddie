import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/messages";
import Buddy1 from "../images/1aaaaa/222 2.png";
import ToDraw from "../images/1aaaaa/Group 123.png"
import Submit from "../images/1aaaaa/Group 170.png"
import Play from "../images/Group 171.png";
import Audio from "../audios/ninja/no problem here is the text mode.mp3";
import '../style/prompt-1.css';

class Text extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
    this.handleResult = this.handleResult.bind(this)
    this.handleText = this.handleText.bind(this)
  }

  handleText = event => {
    event.preventDefault();
    this.props.postNewMessage(this.state.message);
    this.setState({ message: "" });
  };

  handleDraw() {
    this.props.history.push("/s1draw");
  }

  handleResult() {
    this.props.history.push("/s1response3");
  }

  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div className='bgScenario1'>
        <div className="play-audio">
            <img src={Play} alt="Play" onClick={this.playAudio} />
            <audio className="audio-element">
              <source src={Audio}></source>
            </audio>
          </div>
        <form onSubmit={this.handleText}>
          {this.props.errors.message && (
            <div className="alert alert-danger">{this.props.errors.message}</div>
          )}

          <input
            type="text"
            className="form-control textArea adjustText"
            value={this.state.message}
            onChange={e => this.setState({ message: e.target.value })}
          />

          {/* guided text */}
          <div className='s1-text-q'>
            <p>No problem. Here is the text mode!</p>
          </div>
          <img className="toText" onClick={() => this.handleDraw()} src={ToDraw} alt="ToDraw" />

          <img src={Submit} alt="Submit" className="textSubmit adjust-submit" onClick={() => this.handleResult()} />

        </form>
        <div className="textNinja1">
          <img src={Buddy1} alt="Buddy1" />
        </div>
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

export default connect(mapStateToProps, { postNewMessage })(Text);
