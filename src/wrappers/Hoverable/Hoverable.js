import React, { useState, useRef, useEffect } from 'react';

import useWindowsDimensions from "../../Hooks/UseWindowsDimensions";
import useOnClickOutside from "../../Hooks/UseOnClickOutside";

import { useConfigContext } from '../../contexts/ConfigContext';

const Hoverable = ({ children, onHoverIn, onHoverOut, onClick, ...rest }) => {
  const mainRef = useRef();

  const { isTouchable } = useConfigContext();
  const [isClicked, setIsClicked] = useState(false);

  const isMobile = isTouchable 

  useEffect(() => {
    console.log("Cambie wey!", isTouchable);
  }, [isTouchable])

  useEffect(()=> {
    if(isClicked) {
      onHoverIn();
    }else {
      onHoverOut();
    }
  }, [isClicked]);

  useOnClickOutside(mainRef, ()=> {
    isMobile && setIsClicked(false);
  });

  const onMouseEnterHandler = (e) => {
    !isMobile  && onHoverIn();
  }

  const onMouseLeaveHandler = (e) => {
    !isMobile  && onHoverOut();
  }

  const onClickHandler = (e) => {
    if(!isMobile ) {
      onClick();
    } else {
      if(!isClicked) {
        setIsClicked(true);
      }else {
        onClick();
      }
    }
  }

  return(
    <div ref={mainRef}
      {...rest}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      onClick={onClickHandler}> 
      { children }
    </div>
  );
}

export default Hoverable;