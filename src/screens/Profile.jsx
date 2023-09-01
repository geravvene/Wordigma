import Title from "../ui/Title.jsx";
import { DataService } from "../services/data.service.jsx";
import { useMutation } from "react-query";
import ClassicBtn from "../ui/Buttons/ClassicBtn.jsx";
import List from "../ui/List.jsx";
import { useQueryClient } from "react-query";
import { useAuth } from "../hooks/useAuth.jsx";
import { Navigate } from "react-router-dom";

const Profile = () => {
  const { user, setUser } = useAuth();
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    [`create acc`],
    () => DataService.clearFavoriteArray(),
    {
      onSuccess: () => queryClient.invalidateQueries(`fav quotes`),
    }
  );
  
  return !user.name ? (
    <Navigate to="/reg" />
  ) : (
    <>
      <Title text={user.name} />
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
              src={`Выход`}
              rounded={`rounded-md`}
              color={`bg-red`}
              className={`w-full`}
            />
            <ClassicBtn
              func={mutate}
              src={`Очистить избранное`}
              rounded={`rounded-lg`}
              color={`bg-blue`}
            />
          </div>
        </div>
        <List title={`Избранные Цитаты`} />
      </div>
    </>
  );
};
export default Profile;
