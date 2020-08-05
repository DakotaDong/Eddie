import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import Logo from "../images/navbar/logo.png";
import Avatar from "../myPro-Achieve/images/carmen/setagoal/Avatar 4.png";
import { Navbar } from 'reactstrap';

class Nav1 extends Component {
  render() {
    return (
      <div>
        <Navbar fixed="top" className="navbar navbar-expand">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="Home" />
          </Link>
          <ul className="nav navbar-nav ">
            <li>
              <Link to={"/myProgress"}
              >
                My Progress
                </Link>
            </li>
            <li>
              <Link to="/myAchievement">
                My Achievement
              </Link>
            </li>
          </ul>
          <div className="navbar-avator">
            <img src={Avatar} alt="Avatar" />
          </div>
          
        </Navbar>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { logout })(Nav1);
