import ClassicBtn from "../Buttons/ClassicBtn";
const Form = ({ children, text, button, arg}) => {
  return (
    <form {...arg} className={`grid12-3 content`}>
      {children}
      <div className={`col-span-6 col-start-4`}>
        <ClassicBtn rounded={`rounded-lg`} color={button.color} arg={button}>
          {text}
        </ClassicBtn>
      </div>
    </form>
  );
};

export default Form;
