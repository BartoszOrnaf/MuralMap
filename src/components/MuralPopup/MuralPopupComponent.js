import React from 'react';
import './MuralPopupComponent.scss';
import MuralsData from '../../MuralsDataBase/MuralsDataBase.json';
import { GeneralContext } from '../ContextGeneral/ContextGeneralComponent';

class MuralPopupComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            muralId: 0,            
        }
        this.showNext = this.showNext.bind(this);
        this.showPrevious = this.showPrevious.bind(this);
    }
    static contextType = GeneralContext;
    
    renderPopup() {
        const currentId = this.context.state.id
        const murals = MuralsData;
        let popupImg = document.getElementById("popup-img");
        let muralTitle = document.getElementById("popup-title");
        let muralAddress = document.getElementById("popup-address");
        let muralArtist = document.getElementById("popup-artist");
        let muralDate = document.getElementById("popup-date");
        let muralHistory = document.getElementById("popup-history");
        let muralSource = document.getElementById("popup-source");
        
        popupImg.setAttribute("style", `
        background-image: url("${murals[currentId].imgUrl}");
        `);
        muralTitle.innerHTML = `${murals[currentId].name}`;
        muralAddress.innerHTML = `${murals[currentId].address}`;
        muralArtist.innerHTML = `${murals[currentId].artist}`;
        muralDate.innerHTML = `${murals[currentId].date}`;
        muralHistory.innerHTML = `${murals[currentId].history}`;
        muralSource.innerHTML = `<a href="${murals[currentId].aboutUrl}" target="_blank">Zobacz źródło</a>`;
    }
    
    componentDidMount() {
        this.renderPopup()
    }
    
    componentDidUpdate() {
        this.renderPopup()
    }

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
        return (
            <div id="muralPopupWindow" >
                <div id="muralPopupFrame">
                    <button className="popup-closing-button" onClick={this.hidePopup}>
                        X
                        {/* Closing button */}
                    </button>
                    <div id="popup-img">
                        {/* append background img here */}
                    </div>
                    <div id="popup-title">
                        {/* append mural name here */}
                    </div>
                    <div className="popup-tag">
                        Autor:
                            </div>
                    <div id="popup-artist" className="popup-tag-content">
                        {/* append artist name here */}
                    </div>
                    <div className="popup-tag">
                        Adres:
                            </div>
                    <div id="popup-address" className="popup-tag-content">
                        {/* append mural address here */}
                    </div>
                    <div className="popup-tag">
                        Data:
                            </div>
                    <div id="popup-date" className="popup-tag-content">
                        {/* append date here */}
                    </div>
                    <div id="popup-history">
                        {/* append mural description here */}
                    </div>
                    <div id="popup-source">
                        {/* append source url here */}
                    </div>
                    <button className="popup-previous-button" onClick={this.showPrevious}>
                        &#60;
                        {/* previous button */}
                    </button>
                    <button className="popup-next-button" onClick={this.showNext}>
                        &#62;
                        {/* next button */}
                    </button>
                </div>
            </div>
        )

    }
}

export default MuralPopupComponent;

