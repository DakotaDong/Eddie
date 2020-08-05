import React from "react";
import { Link } from "react-router-dom";
import PromptForm1 from "../scenario1/PromptForm1";
import PromptForm2 from "../scenario2/PromptForm2";
import PromptForm3 from "../scenario3/PromptForm3";
import MainNav from "../containers/MainNav";

const Homepage = ({ currentUser }) => {
  
    return (
      <div>
        <MainNav />
        <div className="home-hero">
          <h1>How are you feeling today?</h1>
          <h4>New to Daily Prompts?</h4>
          <Link to="/signup" className="btn btn-primary">
            Sign up here
          </Link>
        </div>
      </div>
    );
  // if (!currentUser.isAuthenticated) {
  //   return (
  //     <div>
  //       <MainNav />
  //       <div className="home-hero">
  //         <h1>How are you feeling today?</h1>
  //         <h4>New to Daily Prompts?</h4>
  //         <Link to="/signup" className="btn btn-primary">
  //           Sign up here
  //         </Link>
  //       </div>
  //     </div>
  //   );
  // }
  // return (
  //   <div>
  //     { currentUser.user.scenario == '1' && (
  //                 <PromptForm1 />
                    
  //               )
  //               }
  //               { currentUser.user.scenario == '2' && (
  //               <div className='platform'>
  //                   <PromptForm2 />
  //               </div>)
  //               }
  //               { currentUser.user.scenario == '3' && (
  //                 <PromptForm3 />
                    
  //               )
  //               }
  //           </div>
  // )
};

export default Homepage;
