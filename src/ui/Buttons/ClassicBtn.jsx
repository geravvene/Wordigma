import device from "current-device";
const ClassicBtn = ({
  type,
  disabled,
  func,
  arg,
  children,
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
        onClick={() => (func ? func(arg) : null)}
        className={`relative flexcol fullcenter duration-150 w-full ${color} ${
          device.mobile() ? `active:` : `hover:`
        }${color + `-light`} ${padding ?? `p-1.5`} ${rounded ?? `rounded-md`} ${
          shadow ?? `shadows`
        } ${className}`}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};
export default ClassicBtn;
