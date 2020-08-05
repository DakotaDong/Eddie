import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buddy1 from "../images/1aaaaa/Cool_Kid_Ninja_Cartoon_Icon_5_658326334_grande 1.png";
import Slider from "./Slider";
import Submit from "../images/1aaaaa/Group 170.png";
import Play from "../images/Group 171.png";
import Audio from "../audios/ninja/i am sorry to hear that you feel anxious.mp3";
import '../style/prompt-1.css';

class Response1 extends Component {
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
                <div className='nervous'>
                    <p>I am sorry to hear that you feel anxious. <br /><br />
                    On a scale of 1-5, how anxious do you feel?</p>
                </div>
                <div className="ninja2">
                    <img src={Buddy1} alt="Buddy1" />
                </div>
                <div className='nervous-level'>
                    <Slider />
                </div>
                <Link to="/s1response2" >
                    <img src={Submit} alt="Submit" className="textSubmit" />
                </Link>
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
