import SectionContainer from "./SectionContainer";
import clsx from "clsx";

const titleVariant = {
  heavy: "text-4xl lg:text-6xl",
  default: "text-3xl lg:text-5xl",
};

const Accordion = ({ children, className = "", type = "" }) => {
  const titleClass = clsx("h2 font-semibold", titleVariant[type], className);

  return (
    <SectionContainer
      className={`page-title--content max-w-3xl ${className && className}`}
    >
      <h1 className={titleClass}>{children}</h1>
    </SectionContainer>
  );
};

export default Accordion;
