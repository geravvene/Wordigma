import device from "current-device";
const ClassicBtn = ({
  type,
  disabled,
  func,
  arg,
  src,
  color,
  padding,
  rounded,
  shadow,
  className,
}) => {
  return (
    <>
      <button
        type={type}
        onClick={func ? () => func(arg) : () => false}
        className={`flexcol items-center duration-150 w-full ${
          color +
          ` ` +
          (device.mobile() ? `active:` : `hover:`) +
          color +
          `-light` +
          ` ` +
          (padding ? padding : `p-1.5`) +
          ` ` +
          (rounded ? rounded : `rounded-md`) +
          ` ` +
          (shadow ? shadow : `shadows`) +
          ` ` +
          className
        }`}
        disabled={disabled}
      >
        {src}
      </button>
    </>
  );
};
export default ClassicBtn;
