import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buddy2 from "../images/Buddies/Carmen Sandiego/04.png";
import Play from "../images/Group 171.png";
import Audio from "../audios/carmen/sure_nice_work_today_ill.mp3";
import '../style/prompt-2.css';

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
            <div className='bgScenario2'>

                <div className='end-s2-q'>
                    <p>Sure. Nice work today. I’ll check in with you <br/>
                    tomorrow!
                    </p>
                </div>
                <div className="play-audio">
                    <img src={Play} alt="Play" onClick={this.playAudio} />
                    <audio className="audio-element">
                    <source src={Audio}></source>
                    </audio>
                </div>
          
                <div className="sandiego2">
                    <img src={Buddy2} alt="Buddy2" />

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
        selectBuddy: state.selectBuddy
    };
}

export default connect(mapStateToProps)(End2);
