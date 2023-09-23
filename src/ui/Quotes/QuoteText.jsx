const QuoteText = ({ style, id, children }) => {
  return (
    <>
      <div
        id={id}
        className={`italic flex hyphens-auto h-fit rounded-md ${style}`}
      >
        {children}
      </div>
    </>
  );
};
export default QuoteText;
