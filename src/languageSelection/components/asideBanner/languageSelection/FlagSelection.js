import {
    SpainFlag,
    UsaFlag
} from 'languageSelection/assets';

import FlagContainer from './FlagContainer/FlagContainer';

import './FlagSelection.css';

export default function FlagSelection({onClick, onMouseOver}) {
    return(
      <div className="flagDis">
          <FlagContainer src={UsaFlag} title="English" onClick={() => onClick('en')} onMouseOver={() => onMouseOver('en')} />
          <FlagContainer src={SpainFlag} title="Español"onClick={() => onClick('es')} onMouseOver={() => onMouseOver('es')}/>
      </div>
    )
}   
