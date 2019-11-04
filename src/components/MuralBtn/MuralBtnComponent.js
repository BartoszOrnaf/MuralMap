import React from 'react';
import './MuralBtnComponent.scss'

class MuralBtnComponent extends React.Component {
    state = {
        id: this.props.id,
        top: this.props.top,
        left: this.props.left,
        imgUrl: "/img/logoRed.png"
    }
    
    overStyle() {
        this.setState((state) => {
            return {
                top: parseInt(state.top) - 120,
                left: parseInt(state.left) - 120,
                imgUrl: this.props.imgUrl
            }
        }
        )
    }

    outStyle() {
        this.setState((state) => {
            return {
                top: parseInt(state.top) + 120,
                left: parseInt(state.left) + 120,
                imgUrl: "/img/logoRed.png"
            }
        }
        )
    }
   
    render() {
        const btnStyle = {
            left: this.state.left,
            top: this.state.top,
            backgroundImage: `url("${this.state.imgUrl}")`
        }
        
        return (
            <button id={this.props.id}
                className="mural-button"
                onClick = {this.props.toggleVisibility}
                onMouseOver={this.overStyle = this.overStyle.bind(this)}
                onMouseOut={this.outStyle = this.outStyle.bind(this)}
                style={btnStyle}>
            </button>

        )
    }

}

export default MuralBtnComponent;