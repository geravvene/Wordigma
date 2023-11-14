import { memo } from "react";

const QuoteText = ({ style, id, children }) => {
  return (
    <>
      <div
        id={id}
        className={`italic flex hyphens-auto h-fit rounded-md ${style}`}
      >
        <p>"</p>
        {children}"
      </div>
    </>
  );
};
export default memo(QuoteText);
