const SectionContainer = ({ id, children, className = "" }) => {
  return (
    <section id={id} className={`${className && className}`}>
      {children}
    </section>
  );
};

export default SectionContainer;
