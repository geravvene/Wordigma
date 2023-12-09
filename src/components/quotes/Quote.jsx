import { useRef, useState, useEffect, useCallback } from 'react';
import { VscChevronDown } from 'react-icons/vsc';

import ClassicBtn from '@ui/buttons/ClassicBtn';
import FavoriteBtn from '@ui/buttons/FavoriteBtn';
import UpLink from '@comp/UpLink';
import QuoteText from './QuoteText';
import sizeControl from './QuoteSizeControl'



const Quote = ({ quote, user, openId, setOpenId, width }) => {
  const [open, setOpen] = useState({ isOpen: false, wasOpen: false });

  const refQuote = useRef(null);
  const refText = useRef(null);
  const refMore = useRef(null);

  useEffect(() => {
    if (openId != quote._id) setOpen({ ...open, isOpen: false });
    else setOpen({ ...open, isOpen: true });
  }, [openId]);

  useEffect(
    () =>
      sizeControl(
        open,
        setOpen,
        refQuote.current,
        refText.current,
        refMore.current,
       
      ),
    [open.isOpen, width]
  );

  const handleSetOpenId = useCallback(() => {
    setOpenId(quote._id == openId ? null : quote._id);
  }, [setOpenId, openId]);

  return (
    <>
      <div
        ref={refQuote}
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
          <div ref={refText} className="h-fit">
            <QuoteText style={`text-justify mr-2 ml-2`}>{quote.text}</QuoteText>
          </div>
          <div className={`min-w-fit flex flex-col items-center`}>
            {user ? <FavoriteBtn quote_id={quote._id} /> : null}

            <div
              ref={refMore}
              id={`more${quote._id}`}
              className={`max-w-fit h-full items-center hidden ${
                user ? `` : `mr-1`
              }
           `}
            >
              <ClassicBtn
                func={handleSetOpenId}
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
