import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buddy1 from "../images/Buddies/Ninja/4.png";
import Submit from "../images/1aaaaa/Group 170.png";
import Play from "../images/Group 171.png";
import Audio from "../audios/ninja/do you want to share i am here to listen.mp3";
import '../style/prompt-1.css';

const divStyle = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    top: '416px',
    left: '614px',
};

class Response2 extends Component {
    constructor(props) {
        super(props);
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
                <div className='response-2-q'>
                    <p>Do you want to share? I am here to listen.</p>
                </div>
                <div className="ninja2">
                    <img src={Buddy1} alt="Buddy1" />
                </div>
                <div style={divStyle}>
                    <div className="aditionalCompnt ajustS1R2">
                        <Link to="/s1draw" className="answerBox answerMath">
                            Yes!
                        </Link>
                        <Link to="/s1response3" className="answerBox answerMath">
                            No...maybe next time.
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

export default connect(mapStateToProps)(Response2);
