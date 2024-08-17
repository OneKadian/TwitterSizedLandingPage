import clsx from "clsx";

const TitleType = {
  default: "",
  badge: "inline-flex items-center gap-3",
};

const CardHeader = ({ children, className, hasArrow = false, hasBadge }) => {
  // Has badge should chage styling for h2
  return (
    <div className="card--header">
      <h2
        className={clsx(
          "h2 font-medium text-primary-900",
          {
            [TitleType.badge]: hasBadge == true,
            [TitleType.default]: hasBadge == false,
          },
          className
        )}
      >
        {children}
      </h2>
      {/* {hasArrow && (

        <h1>Anirudh</h1>
      )} */}
    </div>
  );
};

export default CardHeader;
