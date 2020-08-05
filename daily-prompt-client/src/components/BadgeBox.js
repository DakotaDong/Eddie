import React, { useState } from "react";
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';
import Badge1 from "../myPro-Achieve/images/carmen/achievementpage/Cocoon.png";
import Badge2 from "../myPro-Achieve/images/achivements/Group 193.png";
import "../style/achievement.css";

const BadgeBox = (props) => {
  const [popoverOpen, setPopoverOpen] = useState(false);

  const toggle = () => setPopoverOpen(!popoverOpen);


  return (
    <div>
      <Button 
        id="Popover1" 
        type="button" 
        className="clickBadge"
        style={{  
          backgroundImage: "url(" + Badge1 + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </Button>
      <Button 
        id="Popover2" 
        type="button" 
        className="clickBadge adjust-badge2"
        style={{  
          backgroundImage: "url(" + Badge2 + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
      </Button>
      <UncontrolledPopover 
        trigger="click" 
        placement="bottom" 
        target="Popover1"
        className=""
        style={{ 
          width:'400px',
          height:'250px',
          backgroundColor: "#FFD16D",
          borderStyle:'none',
        }}
      >
        <PopoverHeader className="badge-header">Emotion Cocoon</PopoverHeader>
        <PopoverBody className="badge-content">Wow emotion cocoon! You are able to identify emotions and match them with the right facial expressions.</PopoverBody>
      </UncontrolledPopover>

      <UncontrolledPopover 
        trigger="click" 
        placement="bottom" 
        target="Popover2"
        trigger="click" 
        style={{ 
          width:'400px',
          height:'250px',
          backgroundColor: "#FCF5EB",
          borderStyle:'none',
        }}
      >
        <PopoverHeader className="badge-header adjust-header">Master of Some</PopoverHeader>
        <PopoverBody className="badge-content adjust-content">Master of Some is rewarded to students who practiced across different skills. To get this badge, try to practice at least one prompt in each skill set.</PopoverBody>
      </UncontrolledPopover>
    </div>

  );
}

export default BadgeBox;