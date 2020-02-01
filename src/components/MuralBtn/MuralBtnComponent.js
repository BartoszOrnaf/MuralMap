// import React from 'react';
import React, { useState } from 'react';
import './MuralBtnComponent.scss'

function MuralBtnComponent(props) {

    const [top, setTop] = useState(props.top)
    const [left, setLeft] = useState(props.left)
    const [imgUrl, setImgUrl ] = useState("/img/logoRed.png")

    function overStyle() {
        setTop(parseInt(top) - 120);
        setLeft(parseInt(left) - 120);
        setImgUrl(props.imgUrl)
    }
 
  function  outStyle() {
        setTop(parseInt(top) + 120);
        setLeft(parseInt(left) + 120);
        setImgUrl("/img/logoRed.png")
        
    }

 
    const btnStyle = {
        left,
        top,
        backgroundImage: `url("${imgUrl}")`
    }

  

    return (
        <button id={props.id}   
            className="mural-button"
            onClick={props.onClick}
            onMouseOver={overStyle}
            onMouseOut={outStyle}
            style={btnStyle}>

        </button>

    )


}

export default MuralBtnComponent;