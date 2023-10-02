import ClassicBtn from "../Buttons/ClassicBtn";
import Title from "../Title";
const Form = ({ children, text, button, arg, title }) => {
  return (
    <div className={`col-span-12 md:col-span-6`}>
      <Title text={title} />
      <form {...arg} className={`grid12-3 content`}>
        {children}
        <div className={`col-span-6 col-start-4`}>
          <ClassicBtn rounded={`rounded-lg`} color={button.color} arg={button}>
            {text}
          </ClassicBtn>
        </div>
      </form>
    </div>
  );
};

export default Form;
