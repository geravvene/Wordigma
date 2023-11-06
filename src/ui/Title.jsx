const Title = ({ children, text }) => {
  return (
    <>
      <h1 className={`relative border-b-2 pb-3 border-gray-light flex`}>
        <div className={`text-xl font-bold tracking-widest`}>{text}</div>
        {children}
      </h1>
    </>
  );
};
export default Title;
