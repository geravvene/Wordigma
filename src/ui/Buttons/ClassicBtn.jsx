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
        onClick={() => func(arg) ?? null}
        className={`flexcol items-center duration-150 w-full ${
          color +
          ` ` +
          (device.mobile() ? `active:` : `hover:`) +
          color +
          `-light` +
          ` ` +
          (padding ?? `p-1.5`) +
          ` ` +
          (rounded ?? `rounded-md`) +
          ` ` +
          (shadow ?? `shadows`) +
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
