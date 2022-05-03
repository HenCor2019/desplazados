import i18next from "i18next";

import './ShowLanguage.css';
export default function ShowLanguage({message}) {
    return(
        <div className="messageContainer">
            <h1>{message}</h1>
        </div>
    )
}