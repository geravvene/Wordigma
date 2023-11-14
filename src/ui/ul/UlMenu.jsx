const UlMenu = ({ children, text, arg }) => {
  return (
    <>
      <div {...arg}>
        <div className={`ml-3 font-bold pt-1`}>{text}</div>
        <ul className={`p-3 text-left `}>
          <div
            className={`border-t-2 border-gray-light tracking-normal font-normal`}
          >
            <div className={`mt-3 flexcol gap-6`}>{children}</div>
          </div>
        </ul>
      </div>
    </>
  );
};
export default UlMenu;
