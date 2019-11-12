import React from 'react';
import './MuralPopupComponent.scss';
import MuralsData from '../../MuralsDataBase/MuralsDataBase.json';


class MuralPopupComponent extends React.Component {

    render() {
        
        const popupImgStyle = {
            backgroundImage: `url("${MuralsData[this.props.id].imgUrl}")`,
        }

        return (
            <div id="muralPopupWindow" >
                <div id="muralPopupFrame">
                    <button className="popup-closing-button" onClick={this.props.toggleVisibility}>
                        X
                    </button>
                    <div className="popup-img" style={popupImgStyle} />
                    
                    <div className="popup-name">
                        {MuralsData[this.props.id].name} 
                    </div>
                     
                    <div className="popup-tag">
                        Autor:
                            </div>
                    <div className="popup-tag-content">
                        {MuralsData[this.props.id].artist} 
                    </div>
                    <div className="popup-tag">
                        Adres:
                            </div>
                    <div id="popup-address" className="popup-tag-content">
                        {MuralsData[this.props.id].address}
                    </div>
                    <div className="popup-tag">
                        Data:
                            </div>
                    <div className="popup-tag-content">
                        {MuralsData[this.props.id].date}
                    </div>
                    <div className="popup-history">
                        {MuralsData[this.props.id].history}
                    </div>
                    <div className="popup-source">
                        <a href={MuralsData[this.props.id].aboutUrl} target="_blank" rel="noopener noreferrer">Zobacz źródło</a>
                    </div>
                    <button className="popup-previous-button" onClick={this.props.showPrevious}>
                        &#60;
                        {/* previous button, arrow from unicode*/}
                    </button>
                    <button className="popup-next-button" onClick={this.props.showNext}>
                        &#62;
                        {/* next button, arrow from unicode */}
                    </button>
                </div>
            </div>
        )

    }
}

export default MuralPopupComponent;

