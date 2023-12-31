import ClassicBtn from '@ui/buttons/ClassicBtn';
import Title from '@comp/Title';

const Form = ({ children, text, button, arg, title, onSubmit }) => {
  return (
    <div className={`col-span-12 md:col-span-6`}>
      <Title text={title} />
      <form onSubmit={onSubmit} {...arg} className={`grid12-3 content`}>
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
