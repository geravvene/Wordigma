import { DataService } from "../services/data.service";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import Title from "../ui/Title";
import { FuncService } from "../services/func.service";

async function postData(data, arg) {
  console.log(data);
  if (
    await FuncService.checkExistence(
      `${arg.path}/filter/${JSON.stringify({ [arg.check]: data[arg.check] })}`
    )
  )
    throw new Error("Имя занято");
  return await DataService.postData(
    arg.path,
    arg.parse ? { ...data, [arg.parse]: JSON.parse(data[arg.parse]) } : data
  );
}

export const withForm = (Component) => (props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm({ mode: `onChange`, criteriaMode: "all" });
  const { mutate } = useMutation(
    [`create quote`],
    async ({ data, arg }) => await postData(data, arg),
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
