import React, { useState, useEffect, useMemo } from 'react';

import useWindowDimensions from '../Hooks/UseWindowsDimensions';
import useOnClick from '../Hooks/UseOnClick';

const ConfigContext = React.createContext();

export const ConfigProvider = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTouchable, setIsTouchable] = useState(false);
  const [loading, setLoading] = useState(false);

  const { width } = useWindowDimensions();

  useEffect(()=> {
    setIsMobile(width <= 768);
  }, [width]);

  useEffect(()=> {
    const interval = setInterval(()=> {
      setIsTouchable((('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0)));
    }, 250);

    return () => { clearInterval(interval) }
  }, []);

  const startLoading = () => { setLoading(true) }
  const stopLoading = () => { setLoading(false) }

  const result = useMemo(()=> ({
    isMobile: isMobile,
    isTouchable: isTouchable,
    loading: loading,
    startLoading,
    stopLoading
  }), [isMobile, loading, isTouchable]);
  
  return <ConfigContext.Provider value={ result } {...props}/>
}

export const useConfigContext = () => {
  const context = React.useContext(ConfigContext);

  if(!context) {
    throw new Error("useConfigContext must be call inside of a ContextProvider component");
  };

  return context;
}