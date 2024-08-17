import SectionContainer from "./SectionContainer";

const CardGroup = ({ children, className = "" }) => {
  return (
    <SectionContainer className="card-group">
      <div className={`card-group--container ${className && className}`}>
        {children}
      </div>
    </SectionContainer>
  );
};

export default CardGroup;
