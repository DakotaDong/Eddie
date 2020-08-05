import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buddy1 from "../images/Buddies/Ninja/2.png";
import Submit from "../images/1aaaaa/Group 170.png";
import Emoji from "../images/9emojis/😆.png";
import Emoji2 from "../images/9emojis/😩.png";
import Emoji3 from "../images/9emojis/🙁.png";
import Emoji4 from "../images/9emojis/😁.png";
import Emoji5 from "../images/9emojis/😐.png";
import Emoji6 from "../images/9emojis/😔.png";
import Emoji7 from "../images/9emojis/😌.png";
import Emoji8 from "../images/9emojis/🤒.png";
import Emoji9 from "../images/9emojis/😰.png";
import $ from "jquery";
import Play from "../images/Group 171.png";
import Audio from "../audios/ninja/hey andrew tell me how you feel today.mp3";
import '../style/prompt-1.css';

class PromptForm1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emotion1: "",
    };
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect(choice) {
    this.setState({ emotion1: choice });
  }

  componentDidMount() {
    $('.emoji-card').click(function () {
      $(this).parent('.emoji-row').parent('.emoji-container').find('.emoji-row').find('.emoji-card').removeClass('active');
      $(this).addClass('active');
      console.log("Player clicked on ");

    })
  }

  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    return (
      <div className="bgScenario1">
        <div className='emoji-q'>
          <p>Hey {this.props.currentUser.user.username}! Tell me how you feel today, <br/>
          with both an emoji and a word.</p>
        </div>
        <div className="play-audio">
            <img src={Play} alt="Play" onClick={this.playAudio} />
            <audio className="audio-element">
              <source src={Audio}></source>
            </audio>
          </div>
        <div className="emoji-container">
          <div className="emoji-row">
            <span><img className="emoji-image1" src={Emoji} alt="Emoji" /></span>
            <span><img className="emoji-image2" src={Emoji2} alt="Emoji" /></span>
            <span><img className="emoji-image3" src={Emoji3} alt="Emoji" /></span>
            <span><img className="emoji-image4" src={Emoji4} alt="Emoji" /></span>
            <span><img className="emoji-image5" src={Emoji5} alt="Emoji" /></span>
            <span><img className="emoji-image6" src={Emoji6} alt="Emoji" /></span>
            <span><img className="emoji-image7" src={Emoji7} alt="Emoji" /></span>
            <span><img className="emoji-image8" src={Emoji8} alt="Emoji" /></span>
            <span><img className="emoji-image9" src={Emoji9} alt="Emoji" /></span>
            <button type="button" className="emoji-card" onClick={() => this.handleSelect("Really Happy")}>Really Happy</button>
            <button type="button" className="emoji-card" onClick={() => this.handleSelect("Tired")}>Tired</button>
            <button type="button" className="emoji-card" onClick={() => this.handleSelect("Unhappy️")}>Unhappy️</button>
          </div>

          <div className="emoji-row">
            <button type="button" className="emoji-card" onClick={() => this.handleSelect("Happy")}>Happy</button>
            <button type="button" className="emoji-card" onClick={() => this.handleSelect("Okay")}>Okay</button>
            <button type="button" className="emoji-card" onClick={() => this.handleSelect("Sad")}>Sad</button>
          </div>

          <div className="emoji-row">
            <button type="button" className="emoji-card" onClick={() => this.handleSelect("Content")}>Content</button>
            <button type="button" className="emoji-card" onClick={() => this.handleSelect("Sick")}>Sick</button>
            <button type="button" className="emoji-card" onClick={() => this.handleSelect("Anxious")}>Anxious</button>
          </div>
        </div>
        <Link to="/s1response1" >
          <img src={Submit} alt="Submit" className="textSubmit" />
        </Link>
        <div className="ninja1">
          <img src={Buddy1} alt="Buddy1" />
        </div>
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

export default connect(mapStateToProps)(PromptForm1);
