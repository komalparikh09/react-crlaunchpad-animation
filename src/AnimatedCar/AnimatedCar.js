import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import './AnimatedCar.css';

class AnimatedCar extends Component {
    state = {
        animationName: ''
    };

    clickHdl() {
        let styleSheet = document.styleSheets[0];

        let animationName = `animation${Math.round(Math.random() * 100)}`;

        let keyframes = `@-webkit-keyframes ${animationName} {
          10% {-webkit-transform:translate(${Math.random() * 300}px, ${Math.random() * 300
            }px)} 
          90% {-webkit-transform:translate(${Math.random() * 300}px, ${Math.random() * 300
            }px)}
          100% {-webkit-transform:translate(${Math.random() * 300}px, ${Math.random() * 300
            }px)}
      }`;

        styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

        this.setState({
            animationName: animationName
        });
    }

    render() {
        let style = {
            backgroundColor: "cyan",
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            cursor: "pointer",
            animationName: this.state.animationName,
            animationTimingFunction: "ease-in-out",
            animationDuration: "0.6s",
            animationDelay: "0.0s",
            animationIterationCount: 1,
            animationDirection: "normal",
            animationFillMode: "forwards",
        };

        return (
            <div>
                <button type="button" onClick={this.clickHdl.bind(this)}>
                    Animate!
                </button>
                <br/>
                <br/>
                <div className="boxAnimate" style={style}></div>
            </div>
        );
    }
}

//ReactDOM.render(<AnimatedCar />, document.body);
export default AnimatedCar;