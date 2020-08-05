import React, { Component } from 'react';
import { connect } from "react-redux";
import Game from "../memory-game/js/Main";
import Buddy3 from "../images/2aaaaa/2DKC copy 1.png";
import Play from "../images/Group 171.png";
import Audio from "../audios/gary-prompt/ok now i want to introduce you to a little memory game.mp3";
import '../style/prompt-3.css';



class MemoryGame extends Component {
    constructor(props) {
        super(props);
        this.handleFinish = this.handleFinish.bind(this)
    }
  
    handleFinish() {
      this.props.history.push("/endS33");
    };

    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
      }

    render() {

        return (
            <div className='bgScenario3'>
                <div>
                    <div className="gameArea"></div>
                    {/* buddy text */}
                    <div className='s1-draw-q adjust-game'>
                        Ok, now I want to introduce you to a little memory game to help you <br />
                        focus your attention! Ready? Let’s do it.
                    </div>

                    <div className="play-audio">
                        <img src={Play} alt="Play" onClick={this.playAudio} />
                        <audio className="audio-element">
                        <source src={Audio}></source>
                        </audio>
                    </div>
                     <div className='gameContent'>
                        <div className='detail'>
                            <Game />
                        </div>
                    </div>
                </div>
                <div className="gameGary">
                    <img src={Buddy3} alt="Buddy3" />
                </div>
            </div>

        );
    }
}

function mapStateToProps(state) {
    return {
        errors: state.errors,
        currentUser: state.currentUser
    };
}

export default connect(mapStateToProps)(MemoryGame);
