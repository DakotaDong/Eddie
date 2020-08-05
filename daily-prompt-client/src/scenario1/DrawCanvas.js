import React, { Component } from 'react';
import { connect } from "react-redux";
import { TOOL_PENCIL, TOOL_LINE, TOOL_RECTANGLE, TOOL_ELLIPSE } from '../helper/tools';
import SketchPad from '../helper/SketchPad';
import Buddy1 from "../images/Buddies/Ninja/1.png";
import ToText from "../images/1aaaaa/Group 153.png";
import Play from "../images/Group 171.png";
import Audio from "../audios/ninja/great let us practice a technique called visualization.mp3";
import '../style/prompt-1.css';

class DrawCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tool: TOOL_PENCIL,
      size: 2,
      color: '#000000',
      fill: false,
      fillColor: '#444444',
      items: [],
      text: false,
      noText: true
    }
    this.handleText = this.handleText.bind(this)
  }

  handleText() {
    this.props.history.push("/s1text");
  };

  playAudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.play()
  }

  render() {
    const { tool, size, color, fill, fillColor, items } = this.state;
    return (
      <div>
        <div className='bgScenario1'>
          <div className="play-audio">
            <img src={Play} alt="Play" onClick={this.playAudio} />
            <audio className="audio-element">
              <source src={Audio}></source>
            </audio>
          </div>
          <div className="drawing">
            <SketchPad className="drawing"
              width={1204}
              height={600}
              animate={true}
              size={size}
              color={color}
              fillColor={fill ? fillColor : ''}
              items={items}
              tool={tool}
            />
          </div>

          {/* make btn groups center */}
          <div className="col-md-12 text-center tools"
            style={{
              position: 'absolute',
            }}>
            <button
              style={{ margin: 20 }, tool == TOOL_PENCIL ? { fontWeight: 'bold' } : undefined}
              className="btn btn-outline-secondary btnTool"
              onClick={() => this.setState({ tool: TOOL_PENCIL })}
            >Pencil
            </button>
            <button
              style={tool == TOOL_LINE ? { fontWeight: 'bold' } : undefined}
              className="btn btn-outline-secondary btnTool"
              // className={tool == TOOL_LINE  ? 'item-active' : 'item'}
              onClick={() => this.setState({ tool: TOOL_LINE })}
            >Line
            </button>
            <button
              style={tool == TOOL_ELLIPSE ? { fontWeight: 'bold' } : undefined}
              className="btn btn-outline-secondary btnTool"
              onClick={() => this.setState({ tool: TOOL_ELLIPSE })}
            >Ellipse
            </button>
            <button
              style={tool == TOOL_RECTANGLE ? { fontWeight: 'bold' } : undefined}
              className="btn btn-outline-secondary btnTool"
              onClick={() => this.setState({ tool: TOOL_RECTANGLE })}
            >Rectangle
            </button>
            <div className="aditionalCompnt">
              <div className="aditionalTool">
                <label htmlFor="">size:&nbsp;</label>
                <input min="1" max="10" type="range" value={size} onChange={(e) => this.setState({ size: parseInt(e.target.value) })} />
              </div>
              <div className="aditionalTool">
                <label htmlFor="">color:&nbsp;</label>
                <input type="color" value={color} onChange={(e) => this.setState({ color: e.target.value })} />
              </div>
            </div>
            {(this.state.tool == TOOL_ELLIPSE || this.state.tool == TOOL_RECTANGLE) ?
              <div className="aditionalCompnt">
                <div className="aditionalTool">
                  <label htmlFor="">fill in:&nbsp;</label>
                  <input type="checkbox" value={fill}
                    onChange={(e) => this.setState({ fill: e.target.checked })} />
                </div>

                <div className="aditionalTool">
                  {fill ? <span>
                    <label htmlFor="">with color:&nbsp;</label>
                    <input type="color" value={fillColor} onClick={(e) => this.setState({ fillColor: e.target.value })} />
                  </span> : ''}
                </div>

              </div> : ''
            }
          </div>
          {/* guided text */}
          <div className='s1-draw-q'>
            <p>Great! Let us practice a technique called <span className="changeColor">Visualization</span>. <br />Sketch out what made you anxious here.</p>
          </div>
          <img className="toText" onClick={() => this.handleText()} src={ToText} alt="ToText" />

        </div>

        <div className="drawNinja">
          <img src={Buddy1} alt="Buddy1" />
        </div>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    errors: state.errors,
    currentUser: state.currentUser
  };
}

export default connect(mapStateToProps)(DrawCanvas);
