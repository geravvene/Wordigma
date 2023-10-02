import QuoteText from "../Quotes/QuoteText";
import { useState } from "react";
const FormPage = ({ children, text }) => {
  return (
    <div className={`absolute h-full w-full flexcol`}>
      <div className={`grid12`}>{children}</div>
      <div className={`h-full fullcenter flex`}>
        <QuoteText style={`text-center text-lg bg-gray-light p-3`}>
          {text}
        </QuoteText>
      </div>
    </div>
  );
};

export default FormPage;
