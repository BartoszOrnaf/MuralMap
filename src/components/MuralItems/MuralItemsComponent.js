import React from 'react';
import './MuralItemsComponent.scss';
import MuralsData from '../../MuralsDataBase/MuralsDataBase.json';
class MuralItemsComponent extends React.Component {

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

        // function muralPopup() {
        //     let x = document.getElementById("myDIV");
        //     if (x.style.display === "none") {
        //         x.style.display = "block";
        //     } else {
        //         x.style.display = "none";
        //     }
        // }
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