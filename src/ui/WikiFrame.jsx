const WikiFrame = ({ url }) => {
  return (
    <>
      <iframe
        src={url}
        width={`100%`}
        height={`400vh`}
        className={`round shadows`}
      />
    </>
  );
};
export default WikiFrame;
