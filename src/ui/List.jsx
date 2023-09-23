import Title from "./Title.jsx";

const List = ({ title, data, loading, children }) => {
  console.log(data);
  return (
    <>
      <div>
        <Title>{title}</Title>
        <div className={`content`}>
          {loading.includes(true) ? (
            <p>Loading...</p>
          ) : !data.length ? (
            <p>{`Не найдено`}</p>
          ) : (
            <div className={`grid12`}>{children}</div>
          )}
        </div>
      </div>
    </>
  );
};
export default List;
