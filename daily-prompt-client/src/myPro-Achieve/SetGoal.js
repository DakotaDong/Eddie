import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buddy2 from "../images/Buddies/Carmen Sandiego/04.png";
import Nav1 from "../myPro-Achieve/Nav1";
import QMark from "../myPro-Achieve/images/carmen/setagoal/questionmark.png";
import $ from "jquery";
import Submit from "../images/1aaaaa/Group 170.png"

class SetGoal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scenario: props.currentUser.user.scenario
    };
  }

  componentDidMount() {
    $('.emoji-word-card-2').click(function () {
      $(this).parent('.emoji-row-2').parent('.emoji-word-container-2').find('.emoji-row-2').find('.emoji-word-card-2').removeClass('end-active-2');
      $(this).addClass('end-active-2');
      console.log("Player clicked on ");

    })
  }

  render() {
    return (
      <div className="bg-setgoal">
        <Nav1 />
        <div className='end-s2-q adjust-goal'>
          <p>Hey Amy, which skill do you want to work on for the next two weeks?</p>
        </div>
        <div className="sandiego-setgoal">
          <img src={Buddy2} alt="Buddy2" />
        </div>
        <div className="qmark1">
          <img src={QMark} alt="QMark" />
        </div>
        <div className="qmark2">
          <img src={QMark} alt="QMark" />
        </div>
        <div className="qmark3">
          <img src={QMark} alt="QMark" />
        </div>
        <div className="qmark4">
          <img src={QMark} alt="QMark" />
        </div>
        <div className="qmark5">
          <img src={QMark} alt="QMark" />
        </div>
        <div className="qmark6">
          <img src={QMark} alt="QMark" />
        </div>
        <div className="emoji-word-container-2 ajdust-container-goal">
          <div className="emoji-row-2 ajdust-row-goal">
            <button type="button" className="emoji-word-card-2 ajdust-choice-goal">Knowing yourself</button>
            <button type="button" className="emoji-word-card-2 ajdust-choice-goal">Identifying emotions</button>
          </div>
          <div className="emoji-row-2 ajdust-row-goal">
            <button type="button" className="emoji-word-card-2 ajdust-choice-goal" >Self-belief</button>
            <button type="button" className="emoji-word-card-2 ajdust-choice-goal" >Self-motivation</button>
          </div>
          <div className="emoji-row-2 ajdust-row-goal">
            <button type="button" className="emoji-word-card-2 ajdust-choice-goal" >Stress management</button>
            <button type="button" className="emoji-word-card-2 ajdust-choice-goal" >Attention control</button>
          </div>
        </div>

        <Link to="/end-goal" className="textSubmit s2-adjust-submit">
          <img src={Submit} alt="Submit" />
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

export default connect(mapStateToProps)(SetGoal);
