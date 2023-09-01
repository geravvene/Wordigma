const QuoteText = ({ style, id, text }) => {
  return (
    <>
      <div
        id={id}
        className={`italic flex hyphens-auto h-fit rounded-md ${style}`}
      >
        {text}
      </div>
    </>
  );
};
export default QuoteText;
