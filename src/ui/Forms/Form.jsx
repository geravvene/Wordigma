import ClassicBtn from "../Buttons/ClassicBtn";
const Form = ({
  handleSubmit,
  isSubmitting,
  func,
  arg,
  children,
  color,
  text,
}) => {
  return (
    <form
      onSubmit={handleSubmit(async (data) => func({ data: data, arg: arg }))}
      className={`grid12-3 content`}
    >
      {children}
      <div className={`col-span-6 col-start-4`}>
        <ClassicBtn
          type={`submit`}
          disabled={isSubmitting}
          rounded={`rounded-lg`}
          color={color}
        >
          {text}
        </ClassicBtn>
      </div>
    </form>
  );
};

export default Form;
