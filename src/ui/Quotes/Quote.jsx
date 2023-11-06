import { useState, useEffect } from 'react';
import { VscChevronDown } from 'react-icons/vsc';

import ClassicBtn from '../Buttons/ClassicBtn';
import FavoriteBtn from '../Buttons/FavoriteBtn';
import UpLink from '../Others/UpLink';
import QuoteText from './QuoteText';

const isTextOverflow = (quote_id) => {
  return (
    $(`#text${quote_id}`).height() >=
    125 - (window.location.href.includes(`authors`) ? 0 : 25)
  );
};
const QuoteSizeController = (quote_id, open, setOpen, width) => {
  if (open.isOpen && !open.wasOpen) {
    $(`#${quote_id}`).css({
      height:
        $(`#text${quote_id}`).height() +
        (window.location.href.includes(`authors`) ? 5 : 30) +
        `px`,
    });
    setOpen({ ...open, wasOpen: true });
  } else {
    $(`#${quote_id}`).css({
      height: `125px`,
    });
    setOpen({ ...open, wasOpen: false });
  }
  if (isTextOverflow(quote_id, width)) {
    $(`#text${quote_id}`).removeClass(`self-center`);
    $(`#more${quote_id}`).removeClass(`hidden`);
    $(`#more${quote_id}`).addClass(`flex`);
  } else if (open.wasOpen) {
    $(`#text${quote_id}`).removeClass(`self-center`);
    $(`#${quote_id}`).css({
      height: `125px`,
    });
    setOpen({ wasOpen: false, isOpen: false });
  } else {
    $(`#text${quote_id}`).addClass(`self-center`);
    $(`#more${quote_id}`).removeClass(`flex`);
    $(`#more${quote_id}`).addClass(`hidden`);
  }
};

const Quote = ({ quote, user, openId, setOpenId, width }) => {
  const [open, setOpen] = useState({ isOpen: false, wasOpen: false });
  useEffect(() => {
    if (openId != quote._id) setOpen({ ...open, isOpen: false });
    else setOpen({ ...open, isOpen: true });
  }, [openId]);
  useEffect(
    () => QuoteSizeController(quote._id, open, setOpen, width),
    [open.isOpen, width]
  );
  return (
    <>
      <div
        id={`${quote._id}`}
        className={`duration-100 flexcol justify-between bg-gray-light round shadows w-full h-[125px]`}
      >
        <div
          className={`flex justify-between h-full overflow-hidden ${
            window.location.href.includes('authors')
              ? `mb-[0.25rem]`
              : `mb-[25px]`
          }`}
        >
          <QuoteText style={`text-justify mr-2 ml-2`} id={`text${quote._id}`}>
            {quote.text}
          </QuoteText>

          <div className={`min-w-fit flex flex-col items-center`}>
            {user ? <FavoriteBtn quote={quote._id} /> : null}

            <div
              id={`more${quote._id}`}
              className={`max-w-fit h-full items-center hidden ${
                user ? `` : `mr-1`
              }
           `}
            >
              <ClassicBtn
                arg={{
                  onClick: () =>
                    setOpenId(quote._id == openId ? null : quote._id),
                }}
                padding={``}
                rounded={`round`}
                shadow={`shadow-black shadow`}
                color={`bg-gray`}
              >
                <VscChevronDown color="white" />
              </ClassicBtn>
            </div>
          </div>
        </div>
        {!window.location.href.includes(`authors`) ? (
          <div className="relative">
            <UpLink
              name={quote.author.name}
              path={`/authors/${quote.author._id}`}
              style={`h-[25px] hover:h-[40px]`}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};
export default Quote;
