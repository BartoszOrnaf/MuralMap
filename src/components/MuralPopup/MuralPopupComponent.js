import React, { useEffect } from 'react';
import './MuralPopupComponent.scss';
import MuralsData from '../../MuralsDataBase/MuralsDataBase.json';


function MuralPopupComponent(props) {
    useEffect(() => {
       console.log(`This mural url is:("${MuralsData[props.id].imgUrl}")`)

       return function() {
           console.log("Popup closed");
       };
    }, [3]);


    const popupImgStyle = {
        backgroundImage: `url("${MuralsData[props.id].imgUrl}")`,
    }

    return (
        <div id="muralPopupWindow" >
            <div id="muralPopupFrame">
                <button className="popup-closing-button" onClick={props.toggleVisibility}>
                    X
                    </button>
                <div className="popup-img" style={popupImgStyle} />

                <div className="popup-name">
                    {MuralsData[props.id].name}
                </div>

                <div className="popup-tag">
                    Autor:
                            </div>
                <div className="popup-tag-content">
                    {MuralsData[props.id].artist}
                </div>
                <div className="popup-tag">
                    Adres:
                            </div>
                <div id="popup-address" className="popup-tag-content">
                    {MuralsData[props.id].address}
                </div>
                <div className="popup-tag">
                    Data:
                            </div>
                <div className="popup-tag-content">
                    {MuralsData[props.id].date}
                </div>
                <div className="popup-history">
                    {MuralsData[props.id].history}
                </div>
                <div className="popup-source">
                    <a href={MuralsData[props.id].aboutUrl} target="_blank" rel="noopener noreferrer">Zobacz źródło</a>
                </div>
                <button className="popup-previous-button" onClick={props.showPrevious}>
                    &#60;
                        {/* previous button, arrow from unicode*/}
                </button>
                <button className="popup-next-button" onClick={props.showNext}>
                    &#62;
                        {/* next button, arrow from unicode */}
                </button>
            </div>
        </div>
    )


}

export default MuralPopupComponent;

