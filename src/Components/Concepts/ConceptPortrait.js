const ConceptPortrait = ({ concept, onClick, style }) => {
    return (
        <div>
            <p className={style} onClick = {() => onClick(concept)}>{concept.alt}</p>
        </div>
    );
}

export default ConceptPortrait