import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buddy1 from "../images/1aaaaa/Cool_Kid_Ninja_Cartoon_Icon_2_658326334_grande 1.png";
import Play from "../images/Group 171.png";
import Audio from "../audios/ninja/thank you for sharing i am glad you opened up to me.mp3";
import '../style/prompt-1.css';

const divStyle = {
    position: 'absolute',
    display: 'flex',
    alignItems: 'center',
    top: '416px',
    left: '614px',
};

class Response3 extends Component {
    
    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
      }

    render() {
        return (
            <div className='bgScenario1'>
                <div className='response-2-q'>
                    <p>Thank you for sharing! I am glad you opened up to me. <br/>
                    I have some activities that can help you deal with your anxiety.  <br/>
                    Do you want to try some out with me?</p>
                </div>
                <div className="play-audio">
                    <img src={Play} alt="Play" onClick={this.playAudio} />
                    <audio className="audio-element">
                    <source src={Audio}></source>
                    </audio>
                </div>
                <div className="ninja2">
                    <img src={Buddy1} alt="Buddy1" />
                </div>
               
                <div style={divStyle}>
                    <div className="aditionalCompnt ajustR3">

                        <div className="answerBox">
                            <Link to="/breath" className="answerMath">
                                Sounds good!
                            </Link>
                        </div>
                        <div className="answerBox">
                            <Link to="/endS1" className="answerMath">
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

export default connect(mapStateToProps)(Response3);
