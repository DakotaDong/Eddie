import React from "react";
import { Modal } from "react-responsive-modal";
import Tool1 from "../myPro-Achieve/images/carmen/toolbox/Group 98.png";
import "../style/toolBox.css";

export default function Box1(props) {
    const [openFirst, setOpenFirst] = React.useState(false)
    const [openSecond, setOpenSecond] = React.useState(false)
    const littleLorem = (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar
        risus non risus hendrerit venenatis. Pellentesque sit amet hendrerit
        risus, sed porttitor quam.
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
              modal: 'customModal',
              animationIn: 'customEnterAnimation',
              animationOut: 'customLeaveAnimation',
              
            }}
            // styles={background:}
            animationDuration={500}
        >
          <h2 className="boxTitle">{props.title}</h2>
          {/* {littleLorem} */}
          <div className="btnbox1">
            <img src={Tool1} alt="Tool1" />
          </div>
          
        </Modal>
        <Modal open={openSecond} onClose={() => setOpenSecond(false)} center>
          <p>Second modal</p>
          {littleLorem}
        </Modal>
      </>
    )
  }