import { getTextAlign } from "../utils/helper";
import SectionContainer from "./SectionContainer";

const ButtonGroup = ({ className = "", alignment, children }) => {
  const alignClass = getTextAlign(alignment);

  return (
    <SectionContainer className="btn-group">
      <div
        className={`btn-group--container ${className && className} ${
          alignClass && alignClass
        }`}
      >
        {children}
      </div>
    </SectionContainer>
  );
};

export default ButtonGroup;
