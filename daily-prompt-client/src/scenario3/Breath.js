import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buddy3 from "../images/2aaaaa/2DKC 2.png";
import BgBreath from "../myPro-Achieve/images/gary/3.3\ daily\ prompt\ 10.png";
import mp3_file1 from '../audios/ninja/gary-448.mp3';
import '../style/prompt-3.css';

class Breath extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scenario: props.currentUser.user.scenario
        };
    }

    render() {
        return (
            <div className='bgBreathGoal'>
                <div className="bg-breath">
                    <img src={BgBreath} alt="BgBreath" />
                </div>
                <div className='talk-s3 ajust-breath-goal'>
                    <p>Now let’s do three deep, long breaths...very slowly...</p>
                </div>
                <div className="gary-end">
                    <img src={Buddy3} alt="Buddy3" />
                </div>
                <audio src={mp3_file1} controls autoPlay/>
                
                <Link to="/myProgress" className="exit-breath">
                    Exit
                </Link>
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

export default connect(mapStateToProps)(Breath);
