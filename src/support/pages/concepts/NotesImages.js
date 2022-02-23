import { getNoteImage } from "support/helpers/getNoteImage"

const NotesImages = ({ content }) => {
    //Styles depending on the position of the image
    const leftStyle = "w-full mt-6 lg:col-start-1 lg:col-end-0"
    const centerStyle = "w-full mt-6 lg:col-start-2 lg:col-end-3 lg:mt-6"
    const rightStyle = "w-full mt-6 lg:col-start-3 lg:col-end-4 lg:mt-12"
    let style = "";

    if(content.position === 0) {
        style = leftStyle;
    }
    else if(content.position === 1) {
        style = centerStyle;
    }
    else {
        style = rightStyle;
    }

    return (
        <div className={style}>
            <img src={getNoteImage(content.index)} alt={content.alt} className="m-auto"></img>
        </div>
    )
}

export default NotesImages
