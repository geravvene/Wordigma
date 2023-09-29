import Input from "./Input";
import { withForm } from "../../HOCs/withForm";
import Form from "./Form";

const CreateAuthor = ({
  isSubmitting,
  handleSubmit,
  mutate,
  errors,
  register,
}) => {
  return (
    <>
      <Form
        arg={{
          onSubmit: () =>
            handleSubmit(async (data) => mutate({ data: data, arg: { path: "authors", check: "name" } })),
        }}
        button={{ disabled: isSubmitting, color: "bg-blue", type: "submit" }}
        text={"Создать"}
      >
        <div className={`flexcol w-full col-span-6 gap-3`}>
          <Input
            name={`name`}
            register={register(`name`, {
              required: `Имя необходимо`,
              minLength: {
                value: 4,
                message: "Минимум 2 символа",
              },
              maxLength: {
                value: 20,
                message: "Максимум 20 символов",
              },
            })}
            errors={errors}
          />
        </div>
        <div className={`flexcol col-span-6 gap-3`}>
          <Input
            name={`url`}
            register={register(`url`, {
              required: `Имя необходимо`,
              pattern: {
                value: /^https?:\/\/?ru\.m\.wikipedia.org/,
                message: "Сcылка на мобильную wiki",
              },
            })}
            errors={errors}
          />
        </div>
        <div className={`flexcol col-span-12 gap-3`}>
          <Input
            name={`img`}
            register={register(`img`, {
              required: `Фото необходимо`,
            })}
            errors={errors}
            arg={{ type: "file", onChange: (e) => console.log(e.target.value) }}
          />
        </div>
      </Form>
    </>
  );
};
export default withForm(CreateAuthor);
