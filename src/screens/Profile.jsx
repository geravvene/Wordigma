import Title from "../ui/Title.jsx";
import { DataService } from "../services/data.service.jsx";
import { useMutation } from "react-query";
import ClassicBtn from "../ui/Buttons/ClassicBtn.jsx";
import QuotesList from "../ui/Quotes/QuotesList.jsx";
import { useQueryClient } from "react-query";
import { useAuth } from "../hooks/useAuth.jsx";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user, setUser } = useAuth();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    [`create acc`],
    () => DataService.updateData(`users/${user._id}/delete/array/favorite`),
    {
      onSuccess: () => queryClient.invalidateQueries(`Избранные цитаты`),
    }
  );

  return !user.name ? (
    <Navigate to="/reg" />
  ) : (
    <>
      <Title text={user.name}></Title>
      <div className={`content`}>
        <div className={`flex justify-between w-fit gap-3`}>
          <img
            alt={`acc_icon`}
            className={`rounded-xl w-[5.5rem] h-[5.5rem]`}
            src={user.img}
          />
          <div className={`flexcol justify-between pb-[0.1rem] `}>
            <ClassicBtn
              func={setUser}
              arg={{}}
              rounded={`rounded-md`}
              color={`bg-red`}
              className={`w-full`}
            >
              Выход
            </ClassicBtn>
            <ClassicBtn func={mutate} rounded={`rounded-lg`} color={`bg-blue`}>
              Очистить избранное
            </ClassicBtn>
          </div>
        </div>
        <QuotesList title={`Избранные цитаты`} />
      </div>
    </>
  );
};
export default Profile;
