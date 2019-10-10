import React from 'react'
import './MuralMapComponent.scss'
import MuralItemsComponent from '../MuralItems/MuralItemsComponent'

class MuralMapComponent extends React.Component {

    componentDidMount() {

        const element = document.getElementById('elem')
        const dragImg = new Image();
        dragImg.src = "/img/handSmall.png";

        this.startX = 0;
        this.startY = 0;

        element.addEventListener('dragover', dragOver);
        element.addEventListener('dragstart', dragStart);
        element.addEventListener('dragend', dragEnd);

        function dragStart(e) {
            MuralMapComponent.startX = e.clientX;
            MuralMapComponent.startY = e.clientY;
            e.dataTransfer.setDragImage(dragImg, 35, 75);
        }

        function dragOver(e) {
            e.preventDefault(); //shows different cursor inside "element" and outside of it.
        }

        function dragEnd(e) {
            let diffX = e.clientX - MuralMapComponent.startX
            let parsedLeft = parseInt(element.style.left);
            if (parsedLeft + diffX < 0 && parsedLeft + diffX > -1600) { element.style.left = parsedLeft + diffX + 'px'; }

            let diffY = e.clientY - MuralMapComponent.startY
            let parsedTop = parseInt(element.style.top);
            if (parsedTop + diffY < 0 && parsedTop + diffY > -800) { element.style.top = parsedTop + diffY + 'px'; }

        }
    }

    render() {
        return (
            <React.Fragment>
                <div id="bigger-container" >
                    <div id="container">
                        <div id="elem" draggable="true" style={{ left: '-680px', top: '-300px' }}>
                            < MuralItemsComponent />
                        </div>
                    </div>
                </div>
                <div id="muralPopupWindow" >
                    <div id="muralPopupFrame">
                        <button className="popup-closing-button">
                            X
                        {/* Closing button */}
                        </button>
                        <div className="popup-img">
                        {/* append background img here */}
                        </div>
                        <div className="popup-title">
                            Gentryfikacja
                            {/* append mural name here */}
                        </div>
                        <div className="popup-tag">
                            Autor:
                        </div>
                        <div className="popup-tag-content">
                            M-City
                            {/* append artist name here */}
                        </div>
                        <div className="popup-tag">
                            Adres:
                        </div>
                        <div className="popup-tag-content">
                        28 Pułku Strzelców Kaniowskich 48
                            {/* append mural adress here */}
                        </div>
                        <div className="popup-tag">
                            Data:
                        </div>
                        <div className="popup-tag-content">
                            2012
                            {/* append mural adress here */}
                        </div>
                        <div className="popup-text">
                            {/* append mural description here */}
                            Mariusz Waras aka M-City - ur. 1978 w Gdyni. Grafik, malarz zewnętrzny, podróżnik, architekt amator. Absolwent Wydziału Grafiki Akademii Sztuk Pięknych w Gdańsku, gdzie obecnie jest asystentem prof. zw. Jerzego Ostrogórskiego w pracowni malarstwa. Autor kilkuset murali w ramach autorskiego projektu m-city. Pracuje przy wykorzystaniu techniki szablonu. Do malowania wykorzystuje specjalne matryce wycięte zazwyczaj w tekturze lub grubej folii, które przykłada do malowanej powierzchni, a następnie pokrywa farbą.
                        </div>
                        <div className="popup-source">
                            Zobacz źródło
                        {/* append background img here */}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

};

export default MuralMapComponent;
