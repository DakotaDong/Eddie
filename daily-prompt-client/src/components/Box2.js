import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import Tool2 from "../myPro-Achieve/images/carmen/toolbox/My Stress Management Toolbox.png";
import Detail1 from "../myPro-Achieve/images/carmen/toolbox/448.png";
import "../style/toolBox2.css";

export default function Box2(props) {
    const [openFirst, setOpenFirst] = React.useState(false)
    const [openSecond, setOpenSecond] = React.useState(false)
    const littleLorem = (
      <p>
        It is normal for us to get fearful or nervous sometimes - 
        say, before a big test. Our breathing might become shallow, and it might feel like we have butterflies in our 
        stomach. We might become wild as we feel “out of breath”. That’s when the 4-4-8 breathing exercise becomes helpful.<br/><br/>
        In this exercise, we are going to take a few deep breaths. 
        Breathe in for 4 seconds, hold your breath for 4 seconds, and then exhale for 8 seconds.
      </p>
    )
    return (
      <>
        <button className="button" onClick={() => setOpenFirst(true)}>
          My ToolBox
        </button>
        <Modal 
            open={openFirst} 
            onClose={() => setOpenFirst(false)} 
            center
            classNames={{
              overlay: 'customOverlay',
              modal: 'customModal2',
              animationIn: 'customEnterAnimation',
              animationOut: 'customLeaveAnimation',
            }}
            animationDuration={500}
        >
          <h2>{props.title}</h2>
          <div className="btnbox2">
            <img src={Tool2} alt="Tool2" />
          </div>
          <button className="btntest2" onClick={() => setOpenSecond(true)}></button>
        </Modal>

        <Modal 
          open={openSecond} 
          onClose={() => setOpenSecond(false)} 
          center
          classNames={{
            overlay: 'customOverlay',
            modal: 'customModal22',
          }}
        >
          <h2 className="detail-head">The 4-4-8 breathing technique</h2>
          <div className="detail-content1">
            {littleLorem}
          </div>
          <div className="detail1">
            <img src={Detail1} alt="Detail1" />
          </div>
          <Link to="/goal-to-breath" className="to-breath">
          Let’s do it!
          </Link>
        </Modal>
      </>
    )
  }