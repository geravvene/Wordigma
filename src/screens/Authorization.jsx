import Title from "../ui/Title";
import Entry from "../ui/Forms/Entry";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import QuoteText from "../ui/Quotes/QuoteText";

const Authorization = () => {
  const { user, setUser } = useAuth();
  const [text, setText] = useState(
    "Без авторизации вы не сможете добавлять цитаты в избранное"
  );
  return user.name ? (
    <Navigate to="/rec" />
  ) : (
    <>
      <div className={`absolute h-full w-full flexcol`}>
        <div className={`grid12`}>
          <div className={`col-span-12 md:col-span-6`}>
            <Title>Вход</Title>
            <Entry setUser={setUser} setText={setText} />
          </div>
          <div className={`col-span-12 md:col-span-6`}>
            <Title>Регистрация</Title>
            <Entry setText={setText} />
          </div>
        </div>
        <div className={`h-full fullcenter flex`}>
          <QuoteText style={`text-center text-lg bg-gray-light p-3`}>
            {text}
          </QuoteText>
        </div>
      </div>
    </>
  );
};
export default Authorization;
