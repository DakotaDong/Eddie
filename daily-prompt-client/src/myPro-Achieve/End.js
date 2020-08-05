import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buddy2 from "../images/Buddies/Carmen Sandiego/04.png";
import Nav1 from "../myPro-Achieve/Nav1";
import $ from "jquery";
import BadgeEg from "../myPro-Achieve/images/carmen/setagoal/Group 127.png";

const divStyle = {
  position: 'absolute',
  display: 'flex',
  alignItems: 'center',
  top: '416px',
  left: '614px',
};

class End extends Component {
    constructor(props) {
        super(props);
        this.state = {
          scenario: props.currentUser.user.scenario
        };
    }

    componentDidMount() {
      $('.emoji-word-card-2').click(function () {
        $(this).parent('.emoji-row-2').parent('.emoji-word-container-2').find('.emoji-row-2').find('.emoji-word-card-2').removeClass('s2-active-2');
        $(this).addClass('s2-active-2');
        console.log("Player clicked on ");
  
      })
    }

    render() {
        return (
            <div className="bg-setgoal">
                <Nav1 />
                <div className='end-s2-q adjust-goal2'>
                    <p>Goal set! I will help you with identifying emotions starting tomorrow. <br /><br />
                    When you achieve your goal, you’ll know how to use the right emoji <br />
                    to match what you feel. You’ll also win the Emotion Caterpillar <br />
                    badge! <br /><br />
                    Remember to check in with me every day!
                    </p>
                </div>
                <div className="sandiego-setgoal">
                    <img src={Buddy2} alt="Buddy2" />
                </div>
                <div className="badge-eg">
                    <img src={BadgeEg} alt="BadgeEg" />
                </div>
                <div style={divStyle}>
                    <div className="aditionalCompnt ajust-end-goal">
                        <div className="answerBox">
                            <Link to="/progress-goal" className="answerMath">
                            Sure!
                            </Link>
                        </div>
                        <div className="answerBox">
                            <Link to="/setGoal" className="answerMath">
                            No, I want to change my goal
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

export default connect(mapStateToProps)(End);
