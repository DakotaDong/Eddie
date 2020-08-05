import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Homepage from "../components/Homepage";
import AuthForm from "../components/AuthForm";
import { authUser } from "../store/actions/auth";
import { removeError } from "../store/actions/errors";
import withAuth from "../hocs/withAuth";
import Buddies from '../components/Buddies';
import MyAchievement from "../containers/MyAchievement";
import MyProgress from "../containers/MyProgress";
import SetGoal from "../myPro-Achieve/SetGoal"
// scenario1
import EndS1 from "../scenario1/End1";
import EndS12 from "../scenario1/End2";
import S1Response1 from "../scenario1/Response1";
import S1Response2 from "../scenario1/Response2";
import S1Response3 from "../scenario1/Response3";
import S1Draw from "../scenario1/DrawCanvas";
import S1Text from "../scenario1/Text";
import Breath from "../scenario1/Breath"
// scenario2
import S2Response1 from "../scenario2/Response1";
import S2Response2 from "../scenario2/Response2";
import Kathy from "../scenario2/Kathy";
import EndS2 from "../scenario2/End";
import EndS22 from "../scenario2/End2";
import EndS23 from "../scenario2/End3";
// scenario3
import Talk from "../scenario3/Talk";
import DrawCanvas from "../scenario3/DrawCanvas"
import S3Result from "../scenario3/Result"
import MemoryGame from "../scenario3/MemoryGame";
import Text from "../scenario3/Text";
import EndS3 from "../scenario3/End1";
import EndS32 from "../scenario3/End2";
import EndS33 from "../scenario3/End3";
// setgoal
import EndGoal from "../myPro-Achieve/End"
import MyProgressS2goal from "../scrolling/MyProgressS2goal"
import BreathGoal from "../scenario3/Breath";
import Cups from "../scenario3/Cups";

const Main = props => {
  const { authUser, errors, removeError, currentUser } = props;
  var scenario = currentUser.user.scenario
  return (
    <div className="container">
      <Switch>
        <Route
          exact
          path="/"
          render={props => <Homepage currentUser={currentUser} {...props} />}
        />
        <Route
          exact
          path="/signin"
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText="Log in"
                heading="Welcome Back."
                {...props}
              />
            );
          }}
        />
        <Route
          exact
          path="/signup"
          render={props => {
            return (
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                signUp
                buttonText="Sign me up!"
                heading="Join Eddie today."
                {...props}
              />
            );
          }}
        />

        <Route
          exact
          path="/users/:id/buddies"
          render={props => <Buddies currentUser={currentUser} {...props} />}
        />

        <Route
          exact
          path="/draw-s3"
          render={props => <DrawCanvas currentUser={currentUser} {...props} />}
        />

        <Route
          exact
          path="/text-s3"
          render={props => <Text currentUser={currentUser} {...props} />}
        />

        {/* <Route
          exact
          path="/result"
          render={props => <Result currentUser={currentUser} {...props} />}
        /> */}

<Route
          exact
          path="/s3result"
          render={props => <S3Result currentUser={currentUser} {...props} />}
        />

        <Route
          exact
          path="/myAchievement"
          render={props => <MyAchievement currentUser={currentUser} {...props} />}
        />

        <Route
          exact
          path="/myProgress"
          render={props => <MyProgress currentUser={currentUser} goal="false" {...props} />}
        />

        <Route
          exact
          path="/setGoal"
          render={props => <SetGoal currentUser={currentUser} {...props} />}
        />
        

        <Route
          exact
          path="/game"
          render={props => <MemoryGame currentUser={currentUser} {...props} />}
        />

<Route
          exact
          path="/talk-s3"
          render={props => <Talk currentUser={currentUser} {...props} />}

        />

<Route
          exact
          path="/breath"
          render={props => <Breath currentUser={currentUser} {...props} />}

        />

<Route
          exact
          path="/goal-to-breath"
          render={props => <BreathGoal currentUser={currentUser} {...props} />}

        />

<Route
          exact
          path="/goal-to-cups"
          render={props => <Cups currentUser={currentUser} {...props} />}

        />
        
        <Route
          exact
          path="/endS3"
          render={props => <EndS3 currentUser={currentUser} {...props} />}

        />

        <Route
          exact
          path="/endS32"
          render={props => <EndS32 currentUser={currentUser} {...props} />}

        />

<Route
          exact
          path="/endS33"
          render={props => <EndS33 currentUser={currentUser} {...props} />}

        />


<Route
          exact
          path="/kathy"
          render={props => <Kathy currentUser={currentUser} {...props} />}

        />

<Route
          exact
          path="/endS1"
          render={props => <EndS1 currentUser={currentUser} {...props} />}

        />

<Route
          exact
          path="/endS1-2"
          render={props => <EndS12 currentUser={currentUser} {...props} />}

        />

<Route
          exact
          path="/endS2"
          render={props => <EndS2 currentUser={currentUser} {...props} />}

        />

<Route
          exact
          path="/endS2-2"
          render={props => <EndS22 currentUser={currentUser} {...props} />}

        />

<Route
          exact
          path="/endS2-3"
          render={props => <EndS23 currentUser={currentUser} {...props} />}

        />

<Route
          exact
          path="/s1response1"
          render={props => <S1Response1 currentUser={currentUser} {...props} />}

        />

<Route
          exact
          path="/s1response2"
          render={props => <S1Response2 currentUser={currentUser} {...props} />}

        />

<Route
          exact
          path="/s1response3"
          render={props => <S1Response3 currentUser={currentUser} {...props} />}

        />

<Route
          exact
          path="/s1text"
          render={props => <S1Text currentUser={currentUser} {...props} />}

        />

<Route
          exact
          path="/s1draw"
          render={props => <S1Draw currentUser={currentUser} {...props} />}

        />

<Route
          exact
          path="/s2response2"
          render={props => <S2Response2 currentUser={currentUser} {...props} />}

        />

<Route
          exact
          path="/s2response1"
          render={props => <S2Response1 currentUser={currentUser} {...props} />}

        />

<Route
          exact
          path="/end-goal"
          render={props => <EndGoal currentUser={currentUser} {...props} />}
        />

<Route
          exact
          path="/progress-goal"
          render={props => <MyProgress currentUser={currentUser} goal="true" {...props} />}
        />



      </Switch>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors
  };
}

export default withRouter(
  connect(mapStateToProps, { authUser, removeError })(Main)
);
