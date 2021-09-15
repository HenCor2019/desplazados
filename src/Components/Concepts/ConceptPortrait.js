const ConceptPortrait = ({ concept, onClick }) => {
    let textStyle = "font-crayon py-4 px-4 ease-in-out w-auto hover:bg-brownie-gray cursor-pointer";

    return (
        <div>
            <p className={textStyle} onClick = {() => onClick(concept)}>{concept.alt}</p>
        </div>
        
    );
}

export default ConceptPortrait