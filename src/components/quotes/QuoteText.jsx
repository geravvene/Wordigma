import { memo } from "react";

const QuoteText = ({ style, children }) => {
  return (
    <>
      <div
        className={`italic flex hyphens-auto rounded-md ${style}`}
      >
        <p>"</p>
        {children}"
      </div>
    </>
  );
};
export default memo(QuoteText);
