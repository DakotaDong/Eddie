import React, { Component } from "react";
import TopD from "../images/general navigation/btn-top-dark.png"
import TopL from "../images/general navigation/btn-top-light.png"
import "./index.css"

export default class ScrollButton extends React.Component {
  constructor() {
    super();

    this.state = {
      intervalId: 0
    };
  }

  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }

  scrollToTop() {
    // let intervalId = setInterval(this.scrollStep.bind(this), this.props.delayInMs);
    // this.setState({ intervalId: intervalId });
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }

  render() {
    return (
      <div>
        <button title='Back to top' className='scrollTop'
          onClick={() => { this.scrollToTop(); }}>
          {/* <span className='arrow-up glyphicon glyphicon-chevron-up'>Top</span> */}
          <img src={TopL} alt="Top" />
        </button>
        <button title='Back to top' className='scrollTop2'
          onClick={() => { this.scrollToTop(); }}>
          {/* <span className='arrow-up glyphicon glyphicon-chevron-up'>Top</span> */}
          <img src={TopD} alt="Top" />
        </button>
        <button title='Back to top' className='scrollTop3'
          onClick={() => { this.scrollToTop(); }}>
          {/* <span className='arrow-up glyphicon glyphicon-chevron-up'>Top</span> */}
          <img src={TopL} alt="Top" />
        </button>
        <button title='Back to top' className='scrollTop4'
          onClick={() => { this.scrollToTop(); }}>
          {/* <span className='arrow-up glyphicon glyphicon-chevron-up'>Top</span> */}
          <img src={TopL} alt="Top" />
        </button>
        <button title='Back to top' className='scrollTop5'
          onClick={() => { this.scrollToTop(); }}>
          {/* <span className='arrow-up glyphicon glyphicon-chevron-up'>Top</span> */}
          <img src={TopL} alt="Top" />
        </button>
        <button title='Back to top' className='scrollTop6'
          onClick={() => { this.scrollToTop(); }}>
          {/* <span className='arrow-up glyphicon glyphicon-chevron-up'>Top</span> */}
          <img src={TopD} alt="Top" />
        </button>
      </div>
    );
    

  }
} 
