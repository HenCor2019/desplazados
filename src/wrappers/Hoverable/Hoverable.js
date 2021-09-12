import React, { useState, useRef, useEffect } from 'react';

import useWindowsDimensions from "../../Hooks/UseWindowsDimensions";
import useOnClickOutside from "../../Hooks/UseOnClickOutside";

import { useConfigContext } from '../../contexts/ConfigContext';

const Hoverable = ({ onHoverIn=()=>{}, onHoverOut=()=>{}, onClick=()=>{}, HtmlTag="div",...rest }) => {
  const mainRef = useRef();

  const { isTouchable } = useConfigContext();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(()=> {
    if(isClicked) {
      onHoverIn();
    }else {
      onHoverOut();
    }
  }, [isClicked]);

  useOnClickOutside(mainRef, ()=> {
    isTouchable && setIsClicked(false);
  });

  const onMouseEnterHandler = (e) => {
    !isTouchable  && onHoverIn();
  }

  const onMouseLeaveHandler = (e) => {
    !isTouchable  && onHoverOut();
  }

  const onClickHandler = (e) => {
    if(!isTouchable ) {
      onClick();
    } else {
      if(!isClicked) {
        setIsClicked(true);
      }else {
        setIsClicked(false);
        onClick();
      }
    }
  }

  return(
    <HtmlTag ref={mainRef}
      {...rest}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      onClick={onClickHandler}/>
  );
}

export default Hoverable;