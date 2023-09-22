import FavoriteBtn from "../Buttons/FavoriteBtn";
import { useState } from "react";
import { VscChevronDown } from "react-icons/vsc";
import ClassicBtn from "../Buttons/ClassicBtn";
import { useEffect } from "react";
import { FuncService } from "../../services/func.service";
import UpLink from "../UpLink";
import QuoteText from "./QuoteText";

const Quote = ({ quote, author, user, openId, setOpenId, width }) => {
  const [open, setOpen] = useState({ isOpen: false, wasOpen: false });
  useEffect(() => {
    if (openId != quote.id) setOpen({ ...open, isOpen: false });
    else setOpen({ ...open, isOpen: true });
  }, [openId]);
  useEffect(() => {
    if (open.isOpen && !open.wasOpen) {
      $(`#${quote.id}`).css({
        height:
          $(`#text${quote.id}`).height() +
          (window.location.href.includes(`authors`) ? 5 : 30) +
          `px`,
      });
      setOpen({ ...open, wasOpen: true });
    } else {
      $(`#${quote.id}`).css({
        height:`125px`,
      });
      setOpen({ ...open, wasOpen: false });
    }
    if (FuncService.isTextOverflow(quote.id, width)) {
      $(`#text${quote.id}`).removeClass(`self-center`);
      $(`#more${quote.id}`).removeClass(`hidden`);
      $(`#more${quote.id}`).addClass(`flex`);
    } else if (open.wasOpen) {
      $(`#text${quote.id}`).removeClass(`self-center`);
      $(`#${quote.id}`).css({
        height:`125px`,
      });
      setOpen({ ...open, wasOpen: false });
      setOpen({ ...open, isOpen: false });
    } else {
      $(`#text${quote.id}`).addClass(`self-center`);
      $(`#more${quote.id}`).removeClass(`flex`);
      $(`#more${quote.id}`).addClass(`hidden`);
    }
  }, [open.isOpen, width]);
  return (
    <>
      <div
        id={`${quote.id}`}
        className={`duration-100 flexcol justify-between bg-gray-light round shadows w-full h-[125px]`}
      >
        <div
          className={`flex justify-between h-full overflow-hidden ${
            window.location.href.includes("authors")
              ? `mb-[0.25rem]`
              : `mb-[25px]`
          }`}
        >
          <QuoteText
            style={`text-justify mr-2 ml-2`}
            text={
              <>
                <p>"</p>
                {quote.text}"
              </>
            }
            id={`text${quote.id}`}
          />
          <div className={`min-w-fit flex flex-col items-center`}>
            {user.name ? <FavoriteBtn quote_id={quote.id} /> : <></>}

            <div
              id={`more${quote.id}`}
              className={`max-w-fit h-full items-center hidden ${user.name ? `` :`mr-1`}
           `}>
              <ClassicBtn
                func={setOpenId}
                arg={quote.id == openId ? null : quote.id}
                padding={` `}
                src={<VscChevronDown color="white" />}
                rounded={`round`}
                shadow={`shadow-black shadow`}
                color={`bg-gray`}
              />
            </div>
          </div>
        </div>
        {!window.location.href.includes(`authors`) ? (
          <>
            <UpLink
              name={author.name}
              path={`/authors/${quote.author_id}`}
              height={`h-[25px] hover:h-[40px]`}
            />
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};
export default Quote;
