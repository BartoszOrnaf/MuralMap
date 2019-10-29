import React from 'react';
import './MuralPopupComponent.scss';
import MuralsData from '../../MuralsDataBase/MuralsDataBase.json';
import { GeneralContext } from '../ContextGeneral/ContextGeneralComponent';

class MuralPopupComponent extends React.Component {
    constructor(props) {
        super(props);
       
        this.showNext = this.showNext.bind(this);
        this.showPrevious = this.showPrevious.bind(this);
    }

    static contextType = GeneralContext;
    
    hidePopup() {
        const popupWindow = document.getElementById('muralPopupWindow');
        popupWindow.setAttribute("style", `
        display: none;
        `);
    }

    showNext() {
        if (this.context.state.id < Object.keys(MuralsData).length - 1) {
            // json is a string, to make it an array and read the lenght use Object.keys()
            this.context.setId(parseInt(this.context.state.id) + 1)
            // have to parseInt because sometimes this.context.state.id value is interpreted as string, not a number and gives err
        }
    }

    showPrevious() {
        if (this.context.state.id > 0) {
            this.context.setId(parseInt(this.context.state.id) - 1)
        }
    }

    render() {
        const popupImgStyle = {
            backgroundImage: `url("${MuralsData[this.context.state.id].imgUrl}")`
        }

        return (
            <div id="muralPopupWindow" >
                <div id="muralPopupFrame">
                    <button className="popup-closing-button" onClick={this.hidePopup}>
                        X
                    </button>
                    <div className="popup-img" style={popupImgStyle} />
                    
                    <div className="popup-name">
                        {MuralsData[this.context.state.id].name} 
                    </div>
                     
                    <div className="popup-tag">
                        Autor:
                            </div>
                    <div className="popup-tag-content">
                        {MuralsData[this.context.state.id].artist} 
                    </div>
                    <div className="popup-tag">
                        Adres:
                            </div>
                    <div id="popup-address" className="popup-tag-content">
                        {MuralsData[this.context.state.id].address}
                    </div>
                    <div className="popup-tag">
                        Data:
                            </div>
                    <div className="popup-tag-content">
                        {MuralsData[this.context.state.id].date}
                    </div>
                    <div className="popup-history">
                        {MuralsData[this.context.state.id].history}
                    </div>
                    <div className="popup-source">
                        <a href={MuralsData[this.context.state.id].aboutUrl} target="_blank" rel="noopener noreferrer">Zobacz źródło</a>
                    </div>
                    <button className="popup-previous-button" onClick={this.showPrevious}>
                        &#60;
                        {/* previous button, arrow from unicode*/}
                    </button>
                    <button className="popup-next-button" onClick={this.showNext}>
                        &#62;
                        {/* next button, arrow from unicode */}
                    </button>
                </div>
            </div>
        )

    }
}

export default MuralPopupComponent;

