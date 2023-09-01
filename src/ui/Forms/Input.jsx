import { ErrorMessage } from "@hookform/error-message";

const Input = ({name, register, errors}) => {
  
  return (
    <>
      <input
        className={`input ${errors[name] ? `border-red border-[1px]` : ``}`}
        {...register}
        placeholder={name}
      />
      <ErrorMessage
        errors={errors}
        name={name}
        render={({ messages }) =>
          messages &&
          Object.entries(messages).map(([type, message]) => (
            <p key={type} className={`error`}>
              {message}
            </p>
          ))
        }
      />
    </>
  );
};
export default Input;
