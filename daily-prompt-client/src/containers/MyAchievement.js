import React, { Component } from "react";
import { connect } from "react-redux";
import Nav1 from "../myPro-Achieve/Nav1";
import Badges from "../myPro-Achieve/images/carmen/achievementpage/bkg.png";
import BadgeBox from "../components/BadgeBox";
import "../style/achievement.css";

class MyAchievement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sc1: props.currentUser.user.scenario
        };
    }

    render() {
        return (
            
            <div>
                <Nav1 />
                {/* achievement */}
                <div className="wholeBadges">
                    <img src={Badges} alt="Badges" />
                </div>
                <div>
                    <BadgeBox />
                </div>
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

export default connect(mapStateToProps)(MyAchievement);
