import React from 'react'
import './MuralMapComponent.scss'
import MuralItemsComponent from '../MuralItems/MuralItemsComponent'
import MuralPopupComponent from '../MuralPopup/MuralPopupComponent';
import MuralsData from '../../MuralsDataBase/MuralsDataBase.json';


class MuralMapComponent extends React.Component {

    state = {
        popupVisibility: "none",
        currentMuralId: 0,
    }

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

    setCurrentMuralId(id) {
        this.setState({
            currentMuralId: id
        })
    }
    showNext() {
        if (this.state.currentMuralId < Object.keys(MuralsData).length - 1) {
            this.setState({
                currentMuralId: this.state.currentMuralId + 1
            })
        }
    }

    showPrevious() {
        if (this.state.currentMuralId > 0) {
            this.setState({
                currentMuralId: this.state.currentMuralId - 1
            })
        }
    }

    toggleVisibility() {
               
        if (this.state.popupVisibility === "none") {
            this.setState({
                popupVisibility: "flex"
            })
        } else {
            this.setState({
                popupVisibility: "none"
            })
        }
    }

    render() {

        return (
            <React.Fragment>
                <div id="bigger-container" >
                    <div id="container">
                        <div id="elem" draggable="true" style={{ left: '-680px', top: '-300px' }}>
                            < MuralItemsComponent 
                            setCurrentMuralId={this.setCurrentMuralId = this.setCurrentMuralId.bind(this)} 
                            toggleVisibility={this.toggleVisibility = this.toggleVisibility.bind(this)}
                            />
                        </div>
                        <MuralPopupComponent
                            popupVisibility={this.state.popupVisibility}
                            id={this.state.currentMuralId}
                            showNext={this.showNext = this.showNext.bind(this)}
                            showPrevious={this.showPrevious = this.showPrevious.bind(this)}
                            toggleVisibility={this.toggleVisibility = this.toggleVisibility.bind(this)}
                        />
                    </div>
                </div>
            </React.Fragment>
        )
    }

};

export default MuralMapComponent;
