import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buddy2 from "../images/Buddies/Carmen Sandiego/01_do not loop.gif";
import Submit from "../images/1aaaaa/Group 170.png"
import $ from "jquery";
import Play from "../images/Group 171.png";
import Audio from "../audios/carmen/heyamy.mp3";
import '../style/prompt-2.css';
import '../style/styles.scss';

class PromptForm2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emotion1: "",
      emotion2: "",
    };
    this.handleSelect2 = this.handleSelect2.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(choice) {
    this.setState({ emotion1: choice });
  }
  handleSelect2(choice) {
    this.setState({ emotion2: choice });
  }

  componentDidMount() {
    $('.emoji-word-card-2').click(function () {
      $(this).parent('.emoji-row-2').parent('.emoji-word-container-2').find('.emoji-row-2').find('.emoji-word-card-2').removeClass('s2-active-2');
      $(this).addClass('s2-active-2');
      console.log("Player clicked on ");

    })

    $('.emoji-word-card').click(function () {
      $(this).parent('.emoji-word-row').parent('.emoji-word-container').find('.emoji-word-row').find('.emoji-word-card').removeClass('s2-active');
      $(this).addClass('s2-active');
      console.log("Player clicked on ");

    })
  }
  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div className='bgScenario2'>
        <div className='emoji-with-word-q'>
          <p>Hey {this.props.currentUser.user.username}! 
          Hey Amy! Do you want to share with me how you <br />
          feel today, with both emoji and word?
          </p>
        </div>

        {/* Choose one emoji */}
        <div className='choose-emoji'>
          <p>Choose one emoji</p>
        </div>
        <div className="play-audio">
            <img src={Play} alt="Play" onClick={this.playAudio} />
            <audio className="audio-element">
              <source src={Audio}></source>
            </audio>
          </div>
        <div className="emoji-word-container-2">
          <div className="emoji-row-2">
            <button type="button" className="emoji-word-card-2" onClick={() => this.handleSelect("😆")} >😆</button>
            <button type="button" className="emoji-word-card-2">😐</button>
            <button type="button" className="emoji-word-card-2">😌</button>
          </div>
          <div className="emoji-row-2">
            <button type="button" className="emoji-word-card-2" >🤒</button>
            <button type="button" className="emoji-word-card-2" >😞</button>
            <button type="button" className="emoji-word-card-2" >🙁</button>
          </div>
        </div>

        {/* Choose one word */}
        <div className='choose-word'>
          <p>Choose one word</p>
        </div>
        <div className="emoji-word-container">
          <div className="emoji-word-row">
            <button type="button" className="emoji-word-card" onClick={() => this.handleSelect2("Really Happy")} >Really Happy</button>
            <button type="button" className="emoji-word-card" >Tired</button>
            <button type="button" className="emoji-word-card" >Unhappy</button>
          </div>
          <div className="emoji-word-row">
            <button type="button" className="emoji-word-card" onClick={() => this.handleSelect2("Content")}>Content</button>
            <button type="button" className="emoji-word-card"  >Nervous</button>
            <button type="button" className="emoji-word-card"  >Sad</button>
          </div>
        </div>
      <div >

      <Link to="/s2response1" className="textSubmit s2-adjust-submit">
        <img src={Submit} alt="Submit" />
      </Link>
          
          {this.state.emotion1 == "😆" && this.state.emotion2 == "Really Happy"
            && (
              <div>
                <Link to="/endS2" className="textSubmit s2-adjust-submit">
                  <img src={Submit} alt="Submit" />
                </Link>
              </div>
            )}
          {this.state.emotion1 != "😆" || this.state.emotion2 != "Really Happy"
            && (
              <div>
                <Link to="/s2response1" className="textSubmit s2-adjust-submit">
                  <img src={Submit} alt="Submit" />
                </Link>
              </div>
            )}
        </div>

        <div className="sandiego1">
          <img src={Buddy2} alt="Buddy2" />
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

export default connect(mapStateToProps)(PromptForm2);
