import Entry from "../ui/Forms/Entry";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import FormPage from "../ui/Forms/FormPage";
import { useState } from "react";

const Authorization = () => {
  const { user, setUser } = useAuth();
  const [text, setText] = useState(
    "Без авторизации вы не сможете добавлять цитаты в избранное"
  );
  return user.name ? (
    <Navigate to="/rec" />
  ) : (
    <>
      <FormPage text={text}>
        <Entry setUser={setUser} setText={setText} />
        <Entry setText={setText} />
      </FormPage>
    </>
  );
};
export default Authorization;
