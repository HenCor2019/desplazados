import i18next from 'i18next';
import AsideBanner from 'languageSelection/components/asideBanner/AsideBanner';
import ShowLanguage from 'languageSelection/components/showLanguage/ShowLanguage';
import { Redirect } from 'react-router-dom';
import { useHistory } from "react-router-dom";


import '../../Style/languageSelection.css';
export default function LanguageSelection() {
    const history = useHistory();

    const onClick = (language) => {
        i18next.changeLanguage(language);
        history.push("/video");
    };

    const onMouseOver = (language) => {
        i18next.changeLanguage(language);
    };

    const message = i18next.language === 'es' ? 'Bienvenido' : 'Welcome';

    return(
        <div className="principalContainer">
            <div className="containerLeft">
            <AsideBanner onClick = {onClick} onMouseOver={onMouseOver}/>
            </div>
            <div className="containerRight">
            <ShowLanguage message={message}/>
            </div>
        </div>
    )
};
    