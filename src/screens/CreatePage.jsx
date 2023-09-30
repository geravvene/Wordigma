import CreateQuote from "../ui/Forms/CreateQuote";
import CreateAuthor from "../ui/Forms/CreateAuthor";

const CreatePage = () => {
  return (
    <>
      <div className={`absolute h-full w-full flexcol`}>
        <div className={`grid12`}>
          <div className={`col-span-12 md:col-span-6`}>
            <CreateQuote text={"Создать цитату"} />
          </div>
          <div className={`col-span-12 md:col-span-6`}>
            <CreateAuthor text={"Создать Автора"} />
          </div>
        </div>
      </div>
    </>
  );
};
export default CreatePage;
