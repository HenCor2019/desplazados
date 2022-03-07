import React, { useState, useEffect } from 'react';
import { AiOutlineLoading3Quarters as Loading } from 'react-icons/all';

export const LazySection = (Component) => {
  function HOC({ ...rest }) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(true);
    }, []);

    return (
      <div className="w-full flex-rigid" onLoad={() => { setLoading(false); }}>
        { loading && <Splash /> }
        <Component {...rest} />
      </div>
    );
  }

  return HOC;
};

function Splash() {
  return (
    <div className="fixed inset-0 flex items-center justify-center" style={{ backgroundColor: '#000000aa', zIndex: 100000 }}>
      <Loading color="white" className="animate-spin h-12 w-12" />
    </div>
  );
}
