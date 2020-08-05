import React, { Component } from "react";
import $ from "jquery";
// import "./prompt.css";
import p5 from "p5";

const paths = [];
let currentPath = [];

const setup = p5 => {
  p5.createCanvas(200, 200);
  p5.background(255);
};

const mousePressed = p5 => {
  currentPath = [];
	paths.push(currentPath);
}

  export default function Draw() {
    setup();
    mousePressed();
  
    if(p5.mouseIsPressed){
      const point = {
        x: p5.mouseX,
        y: p5.mouseY,
        color: $('#color').value,
        weight: $('#weight').value
      };
      currentPath.push(point);
    }
  
    paths.forEach(path => {
      p5.beginShape();
      path.forEach(point => {
        p5.stroke(point.color);
        p5.strokeWeight(point.weight);
        p5.vertex(point.x, point.y);
      });
      p5.endShape();
    });

    $('#clear').click(function () {
      paths.splice(0);
	    p5.background(255);
      
    });

    return (
      <div className="sidebar">
        <ul>
          <li>
            <label for="color">Color:</label>
            <input type="color" id="color"/>
          </li>
          <li>
            <label for="weight">Stroke:</label>
            <input type="number" id="weight" min="2" max="200" value="3"/>
          </li>
          <li>
            <button id="clear"><i class="fa fa-trash"></i></button>
          </li>
        </ul>
      </div>
    );


  }
