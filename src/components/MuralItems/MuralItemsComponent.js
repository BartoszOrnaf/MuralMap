import React from 'react';
import './MuralItemsComponent.scss';
import MuralsData from '../../MuralsDataBase/MuralsDataBase.json';
import { GeneralContext } from '../ContextGeneral/ContextGeneralComponent';
import MuralBtnComponent from '../MuralBtn/MuralBtnComponent'

class MuralItemsComponent extends React.Component {
    static contextType = GeneralContext;

    render() {
        const murals = MuralsData;
       
        return (
            <React.Fragment>
                <div id="all-murals">
                    {murals.map((mural, index) => <MuralBtnComponent key ={index}
                                                                     id={index}
                                                                     top={mural.top}
                                                                     left={mural.left}
                                                                     imgUrl={mural.imgUrl}
                                                                    />)}
                </div>

            </React.Fragment>
        )
    }
}

export default MuralItemsComponent;