import React from "react";
import { useState } from "react";
import { DataService } from "../../services/data.service";
import { useEffect } from "react";
import ClassicBtn from "./ClassicBtn";
import { useMutation } from "react-query";
import { VscHeart } from "react-icons/vsc";
import { VscHeartFilled } from "react-icons/vsc";
import { FuncService } from "../../services/func.service";

const FavoriteBtn = ({ quote_id }) => {
  const [favorite, setFavorite] = useState();
  useEffect(() => {
    const fetchData = async () => {
      window.location.href.includes(`acc`)
        ? setFavorite(true)
        : window.location.href.includes("rec")
        ? setFavorite(false)
        : setFavorite(FuncService.checkFavorite(quote_id));
    };
    fetchData();
  }, []);
  const { mutate } = useMutation(
    [`update favorite`],
    () => DataService.patchFavoriteArray(!favorite, quote_id),
    {
      onMutate: () => {
        setFavorite(!favorite);
      },
    }
  );
  return (
    <>
      <ClassicBtn
        func={mutate}
        rounded={`rounded-tr-md rounded-bl-xl`}
        shadow={`shadow shadow-black`}
        color={favorite ? `bg-green` : `bg-blue`}
      >
        {favorite ? (
          <VscHeartFilled size={`1.25rem`} color="white" />
        ) : (
          <VscHeart size={`1.25rem`} color="white" />
        )}
      </ClassicBtn>
    </>
  );
};
export default FavoriteBtn;
