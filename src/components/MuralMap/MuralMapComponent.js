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

        function dragOver(e) {
            e.preventDefault(); //shows different cursor inside "element" and outside of it.
        }

        function dragStart(e) {
            MuralMapComponent.startX = e.clientX;
            MuralMapComponent.startY = e.clientY;
            e.dataTransfer.setDragImage(dragImg, 35, 75);
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
        return <div id="bigger-container" >
            <div id="container">
                <div id="elem" draggable="true" style={{ left: '-680px', top: '-300px' }}>
                    < MuralItemsComponent />
                </div>
            </div>
        </div>
    }

};

export default MuralMapComponent;
