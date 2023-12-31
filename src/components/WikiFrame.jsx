import {memo} from 'react'

const WikiFrame = ({ url }) => {
  return (
    <>
      <iframe
        src={url}
        width={`100%`}
        height={`300vh`}
        className={`round shadows`}
      />
    </>
  );
};
export default memo(WikiFrame);
