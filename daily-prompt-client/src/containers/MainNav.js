import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../store/actions/auth";
import Logo from "../images/navbar/logo.png";
import { Navbar } from 'reactstrap';

class MainNav extends Component {
  logout = e => {
    e.preventDefault();
    this.props.logout();
  };
  render() {
    return (
      <Navbar fixed="top" className="navbar navbar-expand">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img src={Logo} alt="Home" />
          </Link>
          {this.props.currentUser.isAuthenticated ? (
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
              <li>
                <Link to={`/users/${this.props.currentUser.user.id}/buddies`} 
                >
                  Daily Prompt
                </Link>
              </li>
              <li>
                <a onClick={this.logout}>Log out</a>
              </li>

            </ul>
          ) : (
            <ul className="nav navbar-nav navbar-left">
              <li>
                <Link to="/signup">Sign up</Link>
              </li>
              <li>
                <Link to="/signin">Log in</Link>
              </li>
            </ul>
          )}
        </div>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps, { logout })(MainNav);
