const Title = ({ text }) => {
  return (
    <>
      <h1
        className={`text-xl font-bold tracking-widest border-b-2 pb-3 border-gray-light`}
      >
        {text}
      </h1>
    </>
  );
};
export default Title;
