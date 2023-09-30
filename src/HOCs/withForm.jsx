import { DataService } from "../services/data.service";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import Title from "../ui/Title";
import { FuncService } from "../services/func.service";

async function postData(data, path, check) {
  if (
    await FuncService.checkExistence(
      `${path}/filter/${JSON.stringify({ [check]: data[check] })}`
    )
  )
    throw new Error("Имя занято");
  return await DataService.postData(path, data);
}

export const withForm = (Component) => (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({ mode: `onChange`, criteriaMode: "all" });
  const { mutate } = useMutation(
    [props.text],
    async ({ data, path, check }) => await postData(data, path, check),
    {
      onSuccess: () => {
        props?.setText(`Успешно`);
        reset();
      },
      onError: (error) => {
        props?.setText(error.message);
        reset();
      },
    }
  );
  return (
    <>
      <Title text={props.text}></Title>
      <Component
        {...props}
        errors={errors}
        register={register}
        mutate={mutate}
        isSubmitting={isSubmitting}
        handleSubmit={handleSubmit}
      ></Component>
    </>
  );
};
