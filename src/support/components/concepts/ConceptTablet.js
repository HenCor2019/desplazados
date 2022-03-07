function ConceptPortrait({ concept, onClick, style }) {
  return (
    <div className="w-5/12">
      <p className={style} onClick={() => onClick(concept)}>{concept.alt}</p>
    </div>
  );
}

export default ConceptPortrait;
