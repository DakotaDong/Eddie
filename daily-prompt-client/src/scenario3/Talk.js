import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buddy3 from "../images/2aaaaa/111 1.png";
import Play from "../images/Group 171.png";
import Audio from "../audios/gary-prompt/do you want to share your thoughts i am here to listen.mp3";
import '../style/prompt-3.css';

const divStyle = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    top: '416px',
    left: '614px',
};



class Talk extends Component {
    
    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    }
    render() {
        return (
            <div className='bgScenario3'>
                <div className='talk-s3'>
                    <p>Do you want to talk about it? I am here to listen.</p>
                </div>
                <div className="play-audio">
                    <img src={Play} alt="Play" onClick={this.playAudio} />
                    <audio className="audio-element">
                    <source src={Audio}></source>
                    </audio>
                </div>
                <div className="gary-talk">
                    <img src={Buddy3} alt="Buddy3" />
                </div>
                <div style={divStyle}>
                    <div className="aditionalCompnt ajustTalk">
                        <div className="answerBox">
                            <Link to="/draw-s3" className="answerMath">
                                Yes!
                            </Link>
                        </div>
                        <div className="answerBox">
                            <Link to="/myAchievement" className="answerMath">
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

export default connect(mapStateToProps)(Talk);
