import React from 'react';
import './MuralItemsComponent.scss';
import MuralsData from '../../MuralsDataBase/MuralsDataBase.json';
import { GeneralContext } from '../ContextGeneral/ContextGeneralComponent';

class MuralItemsComponent extends React.Component {

    constructor(props) {
        super(props);
        this.showPopup = this.showPopup.bind(this);
    }

    static contextType = GeneralContext;


    componentDidMount() {
        const murals = MuralsData;
        const muralsVariables = [];
        const muralsDiv = document.getElementById("all-murals");

        for (let i = 0; i < MuralsData.length; i++) {
            muralsVariables[i] = document.createElement("button");
            muralsVariables[i].setAttribute("id", i);
            muralsVariables[i].setAttribute("class", "mural-button");
            muralsVariables[i].setAttribute("style", `left: ${murals[i].left}; top: ${murals[i].top}`);
            muralsDiv.appendChild(muralsVariables[i]);

            muralsVariables[i].addEventListener("mouseover", overStyle);
            muralsVariables[i].addEventListener('mouseout', outStyle);
            muralsVariables[i].addEventListener('click', this.showPopup);

        }

        function overStyle() {
            this.setAttribute("style", `
            left: ${parseInt(murals[this.id].left) - 120}px; 
            top: ${parseInt(murals[this.id].top) - 120}px;
            background-image: url("${murals[this.id].imgUrl}");
            `)
        }

        function outStyle() {
            this.setAttribute("style", `
            left: ${murals[this.id].left}; 
            top: ${murals[this.id].top};
            `)
        }

    }

    showPopup(e) {
        this.context.setId(e.srcElement.id)
        const popupWindow = document.getElementById('muralPopupWindow');
        popupWindow.setAttribute("style", `
        display: flex;
        `);
    }

    render() {
        return (
            <React.Fragment>
                <div id="all-murals">
                    {/* append Murals buttons here */}
                </div>

            </React.Fragment>
        )
    }
}

export default MuralItemsComponent;