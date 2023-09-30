import { DataService } from "../../services/data.service";
import Input from "./Input";
import { useQuery } from "react-query";
import { withForm } from "../../HOCs/withForm";
import Form from "./Form";

const CreateQuote = ({
  isSubmitting,
  handleSubmit,
  mutate,
  errors,
  register,
}) => {
  const { data, isLoading, isFetching } = useQuery([`authors`], () =>
    DataService.getData(`authors`)
  );

  if (isLoading || isFetching) return <p>Loading...</p>;

  return (
    <>
      <Form
        arg={{
          onSubmit: handleSubmit(async (data) =>
            mutate({
              data: { ...data, author: JSON.parse(data.author) },
              path: "authors",
              check: "name",
            })
          ),
        }}
        button={{ disabled: isSubmitting, color: "bg-blue", type: "submit" }}
        text={"Создать"}
      >
        <div className={`flexcol w-full col-span-6 gap-3`}>
          <Input
            name={`text`}
            register={register(`text`, {
              required: `Текст необходим`,
              minLength: {
                value: 4,
                message: "Минимум 4 символа",
              },
              maxLength: {
                value: 500,
                message: "Максимум 500 символов",
              },
            })}
            errors={errors}
          />
        </div>
        <div className={`flexcol col-span-6 gap-3`}>
          <select
            className="input"
            {...register(`author`, {
              required: `Автор необходим`,
            })}
          >
            {data.map((author) => (
              <option key={author._id} value={JSON.stringify(author)}>
                {author.name}
              </option>
            ))}
          </select>
        </div>
      </Form>
    </>
  );
};
export default withForm(CreateQuote);
