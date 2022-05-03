import './FlagContainer.css';

export default function FlagContainer({src, title, onClick, onMouseOver}) {
    return(
            <div className="innerContainer ">
                <img src={src} alt="spainFlag" className='h-24 w-24' onClick={onClick} onMouseOver={onMouseOver}/>
                <h3 className="ml-4" onClick={onClick} onMouseOver={onMouseOver}>{title}</h3>
            </div>
    )
}