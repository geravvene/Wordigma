import Quote from "./Quote";
import { useState } from "react";

const QuotesColumn = ({ authors, data, user, width }) => {
  const [openId, setOpenId] = useState(false);
  return (
    <>
      <div className={`col-span-12 sm:col-span-6 lg:col-span-4 flexcol gap-6`}>
        {data.map((quote) => (
          <Quote
            key={quote.id}
            author={
              Array.isArray(authors)
                ? authors?.filter((author) => author.id == quote.author_id)[0]
                : authors
            }
            quote={quote}
            user={user}
            openId={openId}
            setOpenId={setOpenId}
            width={width}
          />
        ))}
      </div>
    </>
  );
};
export default QuotesColumn;
