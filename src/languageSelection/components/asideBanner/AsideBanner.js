import FlagSelection from "./languageSelection/FlagSelection";

import './AsideBanner.css';

export default function AsideBanner({onClick, onMouseOver}) {
return(
    <div className="asideBanner">
        <FlagSelection  onClick={onClick} onMouseOver={onMouseOver} />
    </div>
)
}
