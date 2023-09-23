import { useForm } from "react-hook-form";
import ClassicBtn from "../Buttons/ClassicBtn";
import { useMutation } from "react-query";
import { DataService } from "../../services/data.service";
import Input from "./Input";

const Entry = ({ setUser, setText }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({ mode: `onChange`, criteriaMode: "all" });
  const { mutate } = useMutation(
    [`create acc`],
    async (data) => await DataService.postUserRegistrationData(data),
    {
      onSuccess: () => {
        setText(`Вы успешно зарегистрировались`);
        reset();
      },
      onError: (error) => {
        setText(error.message);
        reset();
      },
    }
  );

  return (
    <>
      <form
        onSubmit={handleSubmit(
          setUser
            ? async (data) =>
                await DataService.checkAuthorization(data, setUser, setText)
            : mutate
        )}
        className={`grid12-3 content`}
      >
        <div className={`flexcol w-full col-span-6 gap-3`}>
          <Input
            name={`username`}
            register={register(`username`, {
              required: `Имя необходимо`,
              minLength: {
                value: 4,
                message: "Минимум 4 символа",
              },
              maxLength: {
                value: 10,
                message: "Максимум 10 символов",
              },
            })}
            errors={errors}
          />
        </div>
        <div className={`flexcol col-span-6 gap-3`}>
          <Input
            name={`password`}
            register={register(`password`, {
              required: `Пароль необходим`,
              minLength: {
                value: 6,
                message: "Минимум 6 символов",
              },
              pattern: { value: /[0-9]+/, message: "Содержит хотя бы одно число" },
            })}
            errors={errors}
          />
        </div>
        <div className={`col-span-6 col-start-4`}>
          <ClassicBtn
            type={`submit`}
            disabled={isSubmitting}
            rounded={`rounded-lg`}
            color={setUser ? `bg-green` : `bg-blue`}>{setUser ? `Войти` : `Зарегистрироваться`}</ClassicBtn>
          
        </div>
      </form>
    </>
  );
};
export default Entry;
