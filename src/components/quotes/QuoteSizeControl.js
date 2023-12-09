const QuoteSizeControl = (open, setOpen, quote, text, more) => {
  const isAuthor = window.location.href.includes(`authors`);

  if (open.isOpen && !open.wasOpen) {
    quote.style.height = text.offsetHeight + (isAuthor ? 5 : 30) + `px`;
    setOpen({ ...open, wasOpen: true });
  } else {
    quote.style.height = '125px';
    setOpen({ ...open, wasOpen: false });
  }
  if (text.offsetHeight >= 125 - (isAuthor ? 0 : 25)) {
    text.classList.remove(`self-center`);
    more.classList.remove(`hidden`);
    more.classList.add(`flex`);
  } else if (open.wasOpen) {
    text.classList.remove(`self-center`);
    quote.style.height = '125px';
    setOpen({ wasOpen: false, isOpen: false });
  } else {
    text.classList.add(`self-center`);
    more.classList.remove(`flex`);
    more.classList.add(`hidden`);
  }
};

export default QuoteSizeControl