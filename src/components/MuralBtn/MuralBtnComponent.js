import React from 'react';
import './MuralBtnComponent.scss'
import { GeneralContext } from '../ContextGeneral/ContextGeneralComponent';

class MuralBtnComponent extends React.Component {
    state = {
        id: this.props.id,
        top: this.props.top,
        left: this.props.left,
        imgUrl: "/img/logoRed.png"
    }
    static contextType = GeneralContext;
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

    showPopup() {
        
        this.context.setId(this.state.id)
        const popupWindow = document.getElementById('muralPopupWindow');
        popupWindow.setAttribute("style", `
        display: flex;
        `);
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
                onClick={this.showPopup = this.showPopup.bind(this)}
                onMouseOver={this.overStyle = this.overStyle.bind(this)}
                onMouseOut={this.outStyle = this.outStyle.bind(this)}
                style={btnStyle}>
            </button>

        )
    }

}

export default MuralBtnComponent;