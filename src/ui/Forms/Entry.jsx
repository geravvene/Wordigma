import { FuncService } from "../../services/func.service";
import Input from "./Input";
import Form from "./Form";
import { withForm } from "../../HOCs/withForm";

async function checkAuthorization(acc) {
  FuncService.checkExistence(
    `users/filter/${JSON.stringify({ name: acc.data.username })}`
  ).then((data) => {
    data
      ? data[0].password == acc.data.password
        ? acc.arg.setUser(data[0])
        : acc.arg.setText(`Неверный пароль`)
      : acc.arg.setText(`Пользователь не найден`);
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
        func={setUser ? checkAuthorization : mutate}
        arg={
          setUser
            ? { setUser, setText }
            : { path: "users", check: "name"}
        }
        color={setUser ? `bg-green` : `bg-blue`}
        text={setUser ? `Войти` : `Зарегистрироваться`}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
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
                value: /[0-9]+/,
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
