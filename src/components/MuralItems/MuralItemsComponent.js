import React from 'react';
import './MuralItemsComponent.scss'; 
import MuralsData from '../../MuralsDataBase/MuralsDataBase.json';
import MuralBtnComponent from '../MuralBtn/MuralBtnComponent'

class MuralItemsComponent extends React.Component {
 onClickFactory(id) {
     return function(){
        this.props.setCurrentMuralId(id);
        this.props.toggleVisibility();

     }.bind(this);
 }
    render() {
        const murals = MuralsData;
        return (
                <div id="all-murals" >
                    
                    {murals.map((mural, index) => <MuralBtnComponent key ={index}
                                                                     id={index}
                                                                     top={mural.top}
                                                                     left={mural.left}
                                                                     imgUrl={mural.imgUrl}
                                                                     onClick={this.onClickFactory.call(this, index)}
                                                                    
                                                                    />)}
                </div>

        )
    }
}

export default MuralItemsComponent;