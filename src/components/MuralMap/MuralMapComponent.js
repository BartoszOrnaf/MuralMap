import React from 'react'
import './MuralMapComponent.scss'
import MuralItemsComponent from '../MuralItems/MuralItemsComponent'


class MuralMapComponent extends React.Component {

    componentDidMount() {

        this.startX = 0;
        this.startY = 0;
        const element = document.getElementById('elem')
        element.addEventListener('dragstart', dragStart);
        element.addEventListener('dragend', dragEnd);

        function dragStart(e) {
            MuralMapComponent.startX = e.clientX;
            MuralMapComponent.startY = e.clientY;
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
                <div id="elem" draggable="true" style={{ left: '-750px', top: '-250px' }}>
                    < MuralItemsComponent />
                </div>
            </div>
        </div>
    }

};

export default MuralMapComponent;
