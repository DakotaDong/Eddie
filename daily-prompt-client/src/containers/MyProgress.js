import React, { Component } from "react";
import MyProgressS2 from "../scrolling/MyProgressS2";
import MyProgressS22 from "../scrolling/MyProgressS2goal";
import { connect } from "react-redux";
import Nav1 from "../myPro-Achieve/Nav1";
import MyProgressS3 from "../scrolling/MyProgressS3";

class MyProgress extends Component {
    constructor(props) {
        super(props);
        this.state = {
          scenario: props.currentUser.user.scenario,
          goal: props.goal
        };
    }

    render() {
        return (
            <div>
                <Nav1 />
                { this.state.scenario === '2' && this.state.goal==="true" && (
                <div className='platform'>
                    <MyProgressS22 />
                </div>)
                }
                { this.state.scenario === '2' && this.state.goal==="false" && (
                <div className='platform'>
                    <MyProgressS2 />
                </div>)
                }
                { this.state.scenario === '3' && (
                    <div className='platform'>
                        <MyProgressS3 />
                    </div>
                )
                }
                { this.state.scenario === '1' && (
                    <div className='platform'>
                        <MyProgressS2 />
                    </div>
                )
                }
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

export default connect(mapStateToProps)(MyProgress);
