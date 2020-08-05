import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buddy3 from "../images/2aaaaa/2DKC 2.png";
import Submit from "../images/1aaaaa/Group 170.png"
import Play from "../images/Group 171.png";
import Audio from "../audios/gary-prompt/good afternoon christy this is the third day.mp3";
import '../style/prompt-3.css';


class PromptForm3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      render1: true,
      render2: false,
      choice: "",
    }
    this.handleNew = this.handleNew.bind(this)
}

handleNew(c) {
  this.setState({ choice: c });
}

  componentDidMount() {
    setTimeout(function() { //Start the timer
        this.setState({render1: false}) //After 5 second, set render to true
    }.bind(this), 5000)
    setTimeout(function() { //Start the timer
        this.setState({render2: true}) //After 5 second, set render to true
    }.bind(this), 5000)
  }

  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div>
        <div className='bgScenario3'>
          <div className="gary1">
            <img src={Buddy3} alt="Buddy3" />
          </div>
          <div className="play-audio">
            <img src={Play} alt="Play" onClick={this.playAudio} />
            <audio className="audio-element">
              <source src={Audio}></source>
            </audio>
          </div>
          
          {this.state.render1 &&
            (<div className='distract-q'>
              <p>Good afternoon, {this.props.currentUser.user.username}! <br/>
              This is the third day we're practicing attention control together.</p>
            </div>
            )
          }
          {this.state.render2 &&
            (<div className='distract-q'>
              <p>Sometimes my friends are distracted by these things in class.<br/>
              Did one of these things also distract you today?</p>
            </div>
            )
          }
          
          <div className="disContainer">
            <div className="DisRow">
                <button id="DisItem1" className="DisItem" onClick={() => this.handleNew("YES")}></button>
                <button id="DisItem2" className="DisItem" onClick={() => this.handleNew("YES")}></button>
                <button id="DisItem3" className="DisItem" onClick={() => this.handleNew("YES")}></button>
            </div>
            <div className="DisRow">
                <button id="DisItem4" className="DisItem" onClick={() => this.handleNew("YES")}></button>
                <button id="DisItem5" className="DisItem" onClick={() => this.handleNew("SHOW")}></button>
                <button id="DisItem6" className="DisItem" onClick={() => this.handleNew("NO")}></button>
            </div>
          </div>
        </div>

      <Link to="/talk-s3" className="textSubmit s2-adjust-submit">
        <img src={Submit} alt="Submit" />
      </Link>
        
        {this.state.choice === "YES" && (
            <div>
              <Link to="/talk-s3" className="textSubmit s2-adjust-submit">
                <img src={Submit} alt="Submit" />
              </Link>
            </div>
        )}
        {this.state.choice === "SHOW" && (
            <div>
              <Link to="/draw-s3" className="textSubmit s2-adjust-submit">
                <img src={Submit} alt="Submit" />
              </Link>
            </div>
        )}
        {this.state.choice === "NO" && (
            <div>
              <Link to="/endS3" className="textSubmit s2-adjust-submit">
                <img src={Submit} alt="Submit" />
              </Link>
            </div>
        )}

      </div>

    );
  }
}


function mapStateToProps(state) {
  return {
    errors: state.errors,
    currentUser: state.currentUser,
  };
}

export default connect(mapStateToProps)(PromptForm3);
