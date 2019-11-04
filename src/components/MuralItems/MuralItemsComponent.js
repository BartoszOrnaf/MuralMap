import React from 'react';
import './MuralItemsComponent.scss';
import MuralsData from '../../MuralsDataBase/MuralsDataBase.json';
import MuralBtnComponent from '../MuralBtn/MuralBtnComponent'

class MuralItemsComponent extends React.Component {
 
    render() {
        const murals = MuralsData;
        return (
            <React.Fragment>
                <div id="all-murals" >
                    
                    {murals.map((mural, index) => <MuralBtnComponent key ={index}
                                                                     id={index}
                                                                     top={mural.top}
                                                                     left={mural.left}
                                                                     imgUrl={mural.imgUrl}
                                                                     setCurrentMuralId = {this.props.setCurrentMuralId}
                                                                     toggleVisibility = {this.props.toggleVisibility}
                                                                    />)}
                </div>

            </React.Fragment>
        )
    }
}

export default MuralItemsComponent;