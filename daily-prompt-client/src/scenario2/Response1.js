import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buddy2 from "../images/3aaaaa/Carmen.png";
import Play from "../images/Group 171.png";
import Audio from "../audios/carmen/i_noticed_you_paired_this.mp3";
import '../style/prompt-2.css';

const divStyle = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    top: '416px',
    left: '614px',
};

class Response1 extends Component {

    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
      }

    render() {
        return (
            <div className='bgScenario2'>

                <div className='response-s2-q'>
                    <div className="response-emoji">😆</div>
                    <div className="response-word">Content</div>
                    <p className="response-text"> 
                    I noticed you paired this emoji with the word “content”. <br/>
                    To me, this face seems happier than content. <br/>
                    People have this face when they’re <span className="changeColor2">very happy</span>!<br/>
                    I’m glad that you feel very happy today. 
                    </p>
                </div>
                <div className="sandiego-r1">
                    <img src={Buddy2} alt="Buddy2" />
                </div>
                <div className="play-audio">
                    <img src={Play} alt="Play" onClick={this.playAudio} />
                    <audio className="audio-element">
                    <source src={Audio}></source>
                    </audio>
                </div>
                <div style={divStyle}>
                    <div className="answer-response-1">
                        <Link to="/s2response2" className="answerMath">
                            Got it!
                        </Link>
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

export default connect(mapStateToProps)(Response1);
