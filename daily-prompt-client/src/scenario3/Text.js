import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/messages";
import Buddy3 from "../images/2aaaaa/333 1.png";
import ToDraw from "../images/1aaaaa/Group 123.png";
import Submit from "../images/1aaaaa/Group 170.png";
import Play from "../images/Group 171.png";
import Audio from "../audios/gary-prompt/no problem here's the text mode.mp3";
import '../style/prompt-3.css';

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
    this.props.history.push("/draw-s3");
  }

  handleResult() {
    this.props.history.push("/s3result");
  }

  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div>
        <div className='bgScenario3'>
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
                className="form-control textArea"
                value={this.state.message}
                onChange={e => this.setState({ message: e.target.value })}
              />

              {/* guided text */}
              <div className='s1-text-q ajust-text-s3'>
                <p>No problem. Here is the text mode!</p>
              </div>
              <img className="toText" onClick={() => this.handleDraw()} src={ToDraw} alt="ToDraw" />
              <img src={Submit} alt="Submit" className="textSubmit adjust-submit" onClick={() => this.handleResult()} />
            </form>
            <div className="DrawGary">
              <img src={Buddy3} alt="Buddy3" />
            </div>
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
