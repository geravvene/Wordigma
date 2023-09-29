import { FuncService } from "../../services/func.service";
import Input from "./Input";
import Form from "./Form";
import { withForm } from "../../HOCs/withForm";

async function checkAuthorization(acc, setUser, setText) {
  FuncService.checkExistence(
    `users/filter/${JSON.stringify({ name: acc.name })}`
  ).then((data) => {
    data
      ? data[0].password == acc.password
        ? setUser(data[0])
        : setText(`Неверный пароль`)
      : setText(`Пользователь не найден`);
  });
}

const Entry = ({
  isSubmitting,
  handleSubmit,
  mutate,
  errors,
  register,
  setUser,
  setText,
}) => {
  return (
    <>
      <Form
        arg={{
          onSubmit: handleSubmit(async (data) =>
            setUser
              ? checkAuthorization(data, setUser, setText)
              : mutate({ data: data, arg: { path: "users", check: "name" } })
          ),
        }}
        button={{
          color: setUser ? `bg-green` : `bg-blue`,
        }}
        isSubmitting={isSubmitting}
        text={setUser ? `Войти` : `Зарегистрироваться`}
      >
        <div className={`flexcol w-full col-span-6 gap-3`}>
          <Input
            name={`name`}
            register={register(`name`, {
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
              pattern: {
                value: /[\d]+/,
                message: "Содержит хотя бы одно число",
              },
            })}
            errors={errors}
          />
        </div>
      </Form>
    </>
  );
};
export default withForm(Entry);
