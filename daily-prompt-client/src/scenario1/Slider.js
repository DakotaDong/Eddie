import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { Link } from "react-router-dom";
import '../style/prompt-1.css';

const useStyles = makeStyles((theme) => ({
    root: {
      width: 300,
    },
}));

const IOSSlider = withStyles({
    root: {
      height: 20,
      padding: '15px 0',
    },
    thumb: {
      height: 28,
      width: 28,
      backgroundColor: '#fff',
      marginTop: -4,
      marginLeft: -14,
      '&:focus, &:hover, &$active': {
        boxShadow: '80px 80px 80px rgba(169, 206, 227, 0.5), 80px 80px 80px rgba(169, 206, 227, 0.5)), 80px 80px 80px 80px rgba(169, 206, 227, 0.5)',
      },
    },
    active: {},
    track: {
      color: '#FFD16D',
      height: 20,
    },
    rail: {
      height: 20,
      opacity: 0.5,
      backgroundColor: '#bfbfbf',
    },
    mark: {
      backgroundColor: '#4B5161',
      height: 20,
      width: 10,
    },
    markActive: {
      opacity: 1,
      backgroundColor: 'currentColor',
    },
  })(Slider);

  

export default function DiscreteSlider() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.root}>
                <IOSSlider
                    style={{left: 100, width: 1000}}
                    defaultValue={3}
                    aria-labelledby="discrete-slider"
                    step={1}
                    marks
                    min={1}
                    max={5}
                />
            </div>
            <div className="nervous-label">
                <p>1<br/>Less Anxious</p>
            </div>
            <div className="nervous-label ajust-label1">
                <p>2</p>
            </div>
            <div className="nervous-label ajust-label2">
                <p>3</p>
            </div>
            <div className="nervous-label ajust-label3">
                <p>4</p>
            </div>
            <div className="nervous-label ajust-label4">
                <p>5<br/>More Anxious</p>
            </div>
        </div>

    );
}
