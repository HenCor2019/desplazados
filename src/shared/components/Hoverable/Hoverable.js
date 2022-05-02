import React, { useState, useRef, useEffect } from 'react';

import useOnClickOutside from '../../../Hooks/UseOnClickOutside';

import { useConfigContext } from '../../../contexts/ConfigContext';

function Hoverable({
  onHoverIn = () => {},
  onHoverOut = () => {},
  onClick = () => {},
  doubleTap = false,
  HtmlTag = 'div',
  ...rest
}) {
  const mainRef = useRef();

  const { isTouchable } = useConfigContext();
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    if (isClicked) {
      onHoverIn();
    } else {
      onHoverOut();
    }
  }, [isClicked]);

  useOnClickOutside(mainRef, () => {
    isTouchable && setIsClicked(false);
  });

  const onMouseEnterHandler = (e) => {
    !isTouchable && onHoverIn();
  };

  const onMouseLeaveHandler = (e) => {
    !isTouchable && onHoverOut();
  };

  const onClickHandler = (e) => {
    if (!isTouchable) {
      onClick();
    } else if (!isClicked && doubleTap) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
      onClick();
    }
  };

  return (
    <HtmlTag
      ref={mainRef}
      {...rest}
      onMouseEnter={onMouseEnterHandler}
      onMouseLeave={onMouseLeaveHandler}
      onClick={onClickHandler}
    />
  );
}

export default Hoverable;
