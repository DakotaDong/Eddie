import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buddy3 from "../images/2aaaaa/111 1.png";
import Play from "../images/Group 171.png";
import Audio from "../audios/gary-prompt/thanks for sharing i have some activities that can help you.mp3";
import '../style/prompt-3.css';

const divStyle = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    top: '416px',
    left: '614px',
};

class Result extends Component {
    
    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    }

    render() {
        return (
            <div className='bgScenario3'>
                <div className='talk-s3 ajust-result-s3'>
                    <p>Thanks for sharing! <br /><br />
                    I have some activities that can help you. <br />
                    Do you want to try some out with me?</p>
                </div>
                <div className="gary-talk">
                    <img src={Buddy3} alt="Buddy3" />
                </div>
                <div className="play-audio">
                    <img src={Play} alt="Play" onClick={this.playAudio} />
                    <audio className="audio-element">
                    <source src={Audio}></source>
                    </audio>
                </div>
                <div style={divStyle}>
                    <div className="aditionalCompnt ajust-btn-s3">
                        <div className="answerBox">
                            <Link to="/game" className="answerMath">
                                Yes!
                            </Link>
                        </div>
                        <div className="answerBox">
                            <Link to="/endS32" className="answerMath">
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
    };
}

export default connect(mapStateToProps)(Result);
