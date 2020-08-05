import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Buddy1 from "../images/1aaaaa/breath.png";
import '../style/prompt-1.css';

class BreathGoal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            render1: false,
            render2: true,
        }
    }

    componentDidMount() {
        setTimeout(function() { //Start the timer
            this.setState({render1: true}) //After 5 second, set render to true
        }.bind(this), 3000)
        setTimeout(function() { //Start the timer
            this.setState({render2: false}) //After 5 second, set render to true
        }.bind(this), 3000)
      }

    componentWillUnmount() {
        this.setState({ render1: false });
        this.setState({ render2: true });
    }
    render() {
        return (
            <div className='bgScenario1'>
                <div className='breath-intro'>
                    <p>
                        Now let’s do three deep, long breaths...very slowly...
                    </p>
                </div>
                <div to="/endS1-2" className="ninja2">
                    <img src={Buddy1} alt="Buddy1" />
                </div>
                <Link to="/endS1-2" className="exit-breath">
                    Exit
                </Link>
                {this.state.render1 && (<div className="circle adjust-breath"></div>)}
                {this.state.render2 && (<div className="circle2 adjust-breath"></div>)}
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

export default connect(mapStateToProps)(BreathGoal);
