import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buddy1 from "../images/1aaaaa/breath.png";
import BgBreath from "../myPro-Achieve/images/gary/3.3\ daily\ prompt\ 10.png";
import mp3_file1 from '../audios/ninja/gary-448.mp3';
import '../style/prompt-1.css';

class Breath extends Component {

    constructor(props) {
        super(props);
        this.state = {
            render1: false,
            render2: true,
        }
    }

    render() {
        return (
            <div className='bgScenario1'>
                <div to="/endS1-2" className="ninja2">
                    <img src={Buddy1} alt="Buddy1" />
                </div>
                <div className="bg-breath">
                    <img src={BgBreath} alt="BgBreath" />
                </div>
                <audio src={mp3_file1} controls autoPlay/>
                
                <Link to="/endS1-2" className="exit-breath">
                    Exit
                </Link>
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

export default connect(mapStateToProps)(Breath);
