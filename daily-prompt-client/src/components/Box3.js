import React from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import Tool3 from "../myPro-Achieve/images/carmen/toolbox/My Stress Management Toolbox-1.png";
import Detail2 from "../myPro-Achieve/images/carmen/toolbox/cups.png";
import "../style/toolBox3.css";

export default function Box3(props) {
    const [openFirst, setOpenFirst] = React.useState(false)
    const [openSecond, setOpenSecond] = React.useState(false)
    const littleLorem = (
      <p>
        Tricky Cups is one of our classics that has withstood the test of time. 
        It starts out easy, but quickly ramps up the difficulty to give even the most talented people a challenge. 
        It trains your attention control, and helps you focus more on tasks. 
        <br/><br/>Even if you do well in this game, 
        NEVER play it on the street for money if somebody offers!
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
              modal: 'customModal3',
              animationIn: 'customEnterAnimation',
              animationOut: 'customLeaveAnimation',
            }}
            animationDuration={500}
        >

          <h2>{props.title}</h2>
          <div className="btnbox3">
            <img src={Tool3} alt="Tool3" /> 
          </div>
          <button className="btntest3" onClick={() => setOpenSecond(true)}></button>
        </Modal>

        <Modal 
        open={openSecond} 
        onClose={() => setOpenSecond(false)} 
        center
        classNames={{
          overlay: 'customOverlay',
          modal: 'customModal32',
        }}
        >
        <h2 className="detail-head">Tricky Cups</h2>
        <div className="detail-content2">
          {littleLorem}
        </div>
        <div className="detail2">
          <img src={Detail2} alt="Detail2" />
        </div>
        <Link to="/goal-to-cups" className="to-cups">
          Let’s do it!
        </Link>
        </Modal>
      </>
    )
  }