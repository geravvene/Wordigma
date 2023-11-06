import device from 'current-device';
const ClassicBtn = ({
  children,
  color,
  padding,
  rounded,
  shadow,
  className,
  arg,
}) => {
  return (
    <>
      <button
        {...arg}
        className={`relative flexcol fullcenter duration-150 w-full ${color} ${
          device.mobile() ? `active:` : `hover:`
        }${color + `-light`} ${padding ?? `p-1.5`} ${rounded ?? `rounded-md`} ${
          shadow ?? `shadows`
        } ${className}`}
      >
        {children}
      </button>
    </>
  );
};
export default ClassicBtn;
