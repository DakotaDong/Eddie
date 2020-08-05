import React from "react";
import { Link } from "react-router-dom";
import ProgessImage from "../myPro-Achieve/images/gary/Bar chart.png";
import Buddy3 from "../images/Buddies/Gary/7.png";
import DownBtn from "../images/my progress overview/overview-Scroll down indicator.png"
import ScrollButton from "./ScrollButton";
import Slider from '../imageSlider/components/Slider';
import Slider2 from '../imageSlider/components/Slider2';
import Slider3 from '../imageSlider/components/Slider3';
import Slider4 from '../imageSlider/components/Slider4';
import Slider5 from '../imageSlider/components/Slider5';
import Slider6 from '../imageSlider/components/Slider6';
import images from '../imageSlider/carmen/images';
import images2 from '../imageSlider/carmen/images2';
import images3 from '../imageSlider/carmen/images3';
import images4 from '../imageSlider/carmen/images4';
import images5 from '../imageSlider/carmen/images5';
import images6 from '../imageSlider/carmen/images6';

import Footer from '../images/section-scroll-down indicators/yellow.png';
import Footer2 from '../images/section-scroll-down indicators/sand.png';
import Footer3 from '../images/section-scroll-down indicators/orange.png';
import Footer4 from '../images/section-scroll-down indicators/charcoal.png'
import Footer5 from '../images/section-scroll-down indicators/green.png';
import Box1 from "../components/Box1";
import Box3 from "../components/Box3";
import Box2 from "../components/Box2";
import Text1 from "../myPro-Achieve/images/gary/progress-knowing yourself/Group 132.png";
import Text2 from "../myPro-Achieve/images/gary/progress-knowing yourself/Group 152.png";
import Text12 from "../myPro-Achieve/images/gary/progress-identifying emotions/Group 147.png";
import Text22 from "../myPro-Achieve/images/gary/progress-identifying emotions/Group 153.png";
import Text13 from "../myPro-Achieve/images/gary/progress-self-belief/Group 146.png";
import Text23 from "../myPro-Achieve/images/gary/progress-self-belief/Group 154.png";
import Text14 from "../myPro-Achieve/images/gary/progress-self-motivation/Group 145.png";
import Text24 from "../myPro-Achieve/images/gary/progress-self-motivation/Group 155.png"
import Text15 from "../myPro-Achieve/images/gary/progress-stress management/Group 148.png";
import Text25 from "../myPro-Achieve/images/gary/progress-stress management/Group 156.png";
import Text16 from "../myPro-Achieve/images/gary/progress-attention control/Group 150.png";
import Text26 from "../myPro-Achieve/images/gary/progress-attention control/Group 99.png";

import "./index.css";


export default () => {
  return (
    <div className="wholeView">
      <section className="child" id="first">
        <div className="text-1">
          How's my Social and Emotional Learning going?
        </div>
        
        {/* progress bar */}
        <div className="progress">
          <img src={ProgessImage} alt="ProgessImage" />
        </div>
        <div className="buddy-1">
          <img src={Buddy3} alt="Buddy3" />
        </div>
        <div className="buddyText adjust-gary-progress">
        Good job, Christy! You made great progress on attention <br/>
        control this week! Scroll down to see more!
        </div>
        <div className="downBtn">
          <img src={DownBtn} alt="DownBtn" />
        </div>
      </section>

      {/* knowing yourself */}
      <section className="child" id="second">
        <Slider slides={images} />
        <div className="text1">
          <img src={Text1} alt="Text1" />
        </div >
        <div className="footer">
          <img src={Footer} alt="Footer" />
        </div>
        <div className="text2 ajust-text2-gary">
          <img src={Text2} alt="Text2" />
        </div >
        <div className="toolBox">
          <Box1 title="My knowing yourself toolbox" img="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.eso.org%2Fpublic%2Fimages%2F&psig=AOvVaw2nrHWvG_gbdrkFrc74siby&ust=1596027776403000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCMi2lfeA8OoCFQAAAAAdAAAAABAI" />
        </div>
      </section>

      {/* identifying emotions */}
      <section className="child" id="third">
        <Slider2 slides={images2} />
        <div className="text12">
          <img src={Text12} alt="Text12" />
        </div >
        <div className="footer2">
          <img src={Footer2} alt="Footer" />
        </div>
        <div className="text22 ajust-text22-gary">
          <img src={Text22} alt="Text22" />
        </div >
        <div className="toolBox2">
          <Box1 title="My identifying emotions toolbox" />
        </div>
        <div className="scroll">
          <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
        </div>
      </section>

      {/* self belief */}
      <section className="child" id="forth">
        <Slider3 slides={images3} />
        <div className="text13">
          <img src={Text13} alt="Text13" />
        </div >
        <div className="footer3">
          <img src={Footer3} alt="Footer" />
        </div>
        <div className="text23">
          <img src={Text23} alt="Text23" />
        </div >
        <div className="toolBox3">
          <Box2 title="My self belief toolbox" />
        </div>
      </section>

      {/* self motivation */}
      <section className="child" id="fifth">
        <Slider4 slides={images4} />
        <div className="text14">
          <img src={Text14} alt="Text14" />
        </div >
        <div className="footer4">
          <img src={Footer4} alt="Footer" />
        </div>
        <div className="text24 ajust-text24-gary">
          <img src={Text24} alt="Text24" />
        </div >
        <div className="toolBox4">
          <Box2 title="My self motivation toolbox" />
        </div>
      </section>

      {/* stress management */}
      <section className="child" id="sixth">
        <Slider5 slides={images5} />
        <div className="text15">
          <img src={Text15} alt="Text15" />
        </div >
        <div className="footer5">
          <img src={Footer5} alt="Footer" />
        </div>
        <div className="text25 ajust-text25-gary">
          <img src={Text25} alt="Text25" />
        </div >
        <div className="toolBox5">
          <Box2 title="My stress management toolbox" />
        </div>
      </section>

      {/* attention control */}
      <section className="child" id="seventh">
        <Slider6 slides={images6} />
        <div className="text16">
          <img src={Text16} alt="Text16" />
        </div >
        <div className="text26 ajust-text26-gary">
          <img src={Text26} alt="Text26" />
        </div >
        <div className="toolBox6">
          <Box3 title="My attention control toolbox" />
        </div>
      </section>
      <div className="scroll">
        <ScrollButton scrollStepInPx="50" delayInMs="16.66" />
      </div>
    </div>

  );
};
