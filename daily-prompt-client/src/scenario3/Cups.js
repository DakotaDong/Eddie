import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buddy3 from "../images/2aaaaa/2DKC 2.png";
import BgCups from "../myPro-Achieve/images/gary/3.6 memory game.png";
import '../style/prompt-3.css';

class Cups extends Component {
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
                    <img src={BgCups} alt="BgBreath" />
                </div>
                <div className="gary-end adjust-goal-cups">
                    <img src={Buddy3} alt="Buddy3" />
                </div>
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

export default connect(mapStateToProps)(Cups);
