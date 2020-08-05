import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buddy3 from "../images/2aaaaa/2DKC 2.png";
import Play from "../images/Group 171.png";
import '../style/prompt-3.css';

const divStyle = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    top: '416px',
    left: '614px',
};

class End1 extends Component {
   
    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
      }
    render() {
        return (
            <div className='bgScenario3'>

                <div className='talk-s3 ajust-end1-s3'>
                    <p>Great! I am so happy that you are controlling your attention well! <br/>
                    I‘ll check in with you tomorrow!</p>
                </div>
                <div className="gary-end">
                    <img src={Buddy3} alt="Buddy3" />
                </div>
                <div className="play-audio">
                    <img src={Play} alt="Play" onClick={this.playAudio} />
                    <audio className="audio-element">
                    <source src="https://assets.coderrocketfuel.com/pomodoro-times-up.mp3"></source>
                    </audio>
                </div>
                <div style={divStyle}>
                    <div className="aditionalCompnt ajust-s2-end">
                        <div className="answerBox">
                            <Link to="/myProgress" className="answerMath">
                            See my progress
                            </Link>
                        </div>
                        <div className="answerBox">
                            <Link to="/" className="answerMath">
                            Catch you tomorrow!
                            </Link>
                        </div>
                    </div>
                </div >
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

export default connect(mapStateToProps)(End1);
