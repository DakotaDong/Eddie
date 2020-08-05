import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buddy1 from "../images/1aaaaa/222 2.png";
import Play from "../images/Group 171.png";
import Audio from "../audios/ninja/great are you feeling a little better now.mp3";
import '../style/prompt-1.css';

const divStyle = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    top: '416px',
    left: '614px',
};

class End2 extends Component {
   
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
                <div className='end-s1-q adjust-s1-end'>
                    <p>Great! Are you feeling a little better now? Nice work today. <br/><br/>
                    I will check in with you tomorrow!
                    </p>
                </div>
                <div className="ninja3">
                    <img src={Buddy1} alt="Buddy1" />
                </div>
                <div style={divStyle}>
                    <div className="aditionalCompnt ajustR3">

                        <div className="answerBox">
                            <Link to="/" className="answerMath">
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
        selectBuddy: state.selectBuddy
    };
}

export default connect(mapStateToProps)(End2);
