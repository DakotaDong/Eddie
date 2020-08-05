import React, { Component } from "react";
import { connect } from "react-redux";
import { postNewMessage } from "../store/actions/messages";
import Buddy2 from "../images/3aaaaa/1 copy 2.png";
import KathyImage from "../images/3aaaaa/kathy.png";
import { Link } from "react-router-dom";
import $ from "jquery";
import Submit from "../images/1aaaaa/Group 170.png"
import Play from "../images/Group 171.png";
import Notright from "../audios/carmen/hm_not_quite_right_try.mp3";
import Right from "../audios/carmen/kathyloves.mp3";
import '../style/prompt-2.css';

class Kathy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            emoji:"",
            show:false,
            noShow: true
        };
        this.handleResult = this.handleResult.bind(this)
        this.handleText = this.handleText.bind(this)
        this.handleSelect = this.handleSelect.bind(this)
    }

    componentDidMount() {
        $('.emoji-word-card-kathy').click(function () {
          $(this).parent('.emoji-row-2').parent('.emoji-word-container-2').find('.emoji-row-2').find('.emoji-word-card-kathy').removeClass('s2-active-kathy');
          $(this).addClass('s2-active-kathy');
          console.log("Player clicked on ");
    
        })
      }

    handleText = event => {
        event.preventDefault();
        this.props.postNewMessage(this.state.message);
        this.setState({ message: "" });
    };

    handleSelect(choice) {
        this.setState({ emoji: choice });
    }

    handleResult() {
        if (this.state.emoji == "😌") {
            this.props.history.push("/endS2-3");
        } else {
            this.setState({show: true});
            this.setState({noShow: false});
        } 
    }

    playAudio() {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
      }

    render() {
        return (
            <div className='bgScenario2'>
                {this.state.noShow && 
                (<div className="play-audio">
                    <img src={Play} alt="Play" onClick={this.playAudio} />
                    <audio className="audio-element">
                    <source src={Right}></source>
                    </audio>
                </div>
                )}
                <div className="kathyArea"></div>
                {this.state.show && 
                (<div>
                    <div className='text-kathy adjust-text-kathy'>
                        <p>Hmm, not quite right. Try again?</p>
                    </div>
                    <div className="play-audio">
                        <img src={Play} alt="Play" onClick={this.playAudio} />
                        <audio className="audio-element">
                        <source src={Notright}></source>
                        </audio>
                    </div>
                </div>
                )}
                {this.state.noShow && 
                (<div className='text-kathy'>
                    <p>Kathy loves animals. <br/>
                    Today, she is going on a field trip to the farm! <br/>
                    She feels very <span className="changeColor2">content</span> petting the goats. </p>
                </div>
                )}
                
                <div className='text-kathy-2'>
                    <p>Kathy will have this face when she is feeling <span className="changeColor3">content</span>:</p>
                </div>
                <div className="emoji-word-container-2 adujust-kathy-emoji">
                    <div className="emoji-row-2">
                        <button type="button" className="emoji-word-card-kathy" >😆</button>
                        <button type="button" className="emoji-word-card-kathy">😐</button>
                        <button type="button" className="emoji-word-card-kathy" onClick={() => this.handleSelect("😌")}>😌</button>
                    </div>
                    <div className="emoji-row-2">
                        <button type="button" className="emoji-word-card-kathy" >🤒</button>
                        <button type="button" className="emoji-word-card-kathy" >😞</button>
                        <button type="button" className="emoji-word-card-kathy" >🙁</button>
                    </div>
                </div>
                <div className='text-kathy-3'>
                    <p>This is because</p>
                </div>
                <form onSubmit={this.handleText}>
                {this.props.errors.message && (
                    <div className="alert alert-danger">{this.props.errors.message}</div>
                )}
                
                <input
                    type="text"
                    className="form-control kathy-input"
                    value={this.state.message}
                    onChange={e => this.setState({ message: e.target.value })}
                />

                <div>
                    <img src={Submit} alt="Submit" className="textSubmit adjust-submit-kathy" onClick={() => this.handleResult()}/>
                </div>
                </form>
                <div className="kathySandiego">
                    <img src={Buddy2} alt="Buddy2" />
                </div>
                <div className="kathySandiego adjust-img-kathy">
                    <img src={KathyImage} alt="KathyImage" />
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

export default connect(mapStateToProps, { postNewMessage })(Kathy);
