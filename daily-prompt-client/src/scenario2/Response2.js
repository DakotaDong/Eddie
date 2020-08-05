import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buddy2 from "../images/3aaaaa/Carmen.png";
import Play from "../images/Group 171.png";
import Audio from "../audios/carmen/content_means_you_are_satisfied.mp3";
import '../style/prompt-2.css';

const divStyle = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    top: '456px',
    left: '614px',
};

class Response2 extends Component {
    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
      }
    render() {
        return (
            <div className='bgScenario2'>
                <div className='response-s2-q-2'>
                    <div className="response-emoji adjust-s2-r2">😌</div>
                    <div className="response-word adjust-s2-r2">Content</div>
                    <p className="response-text-2">
                        Content means you are <span className="changeColor2">satisfied</span>. <br />
                        It’s a <span className="changeColor2">positive</span> feeling. <br />
                        Do you want to learn more about feeling content?
                    </p>
                </div>
                <div className="play-audio">
                    <img src={Play} alt="Play" onClick={this.playAudio} />
                    <audio className="audio-element">
                    <source src={Audio}></source>
                    </audio>
                </div>
                <div className="sandiego-r1">
                    <img src={Buddy2} alt="Buddy2" />
                </div>
                <div style={divStyle}>
                    <div className="aditionalCompnt ajust-s2-end">
                        <div className="answerBox">
                            <Link to="/kathy" className="answerMath">
                            Sure!
                            </Link>
                        </div>
                        <div className="answerBox">
                            <Link to="/endS2-2" className="answerMath">
                            No...maybe next time.
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

export default connect(mapStateToProps)(Response2);
