import { useState } from 'react';

import Quote from './Quote';

const QuotesColumn = ({ data, user, width }) => {
  const [openId, setOpenId] = useState(false);
  
  return (
    <>
      <div className={`col-span-12 sm:col-span-6 lg:col-span-4 flexcol gap-6`}>
        {data.map((quote) => (
          <Quote
            key={quote._id}
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
