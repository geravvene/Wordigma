import QuotesColumn from "../ui/Quotes/QuotesColumn";

export const FuncService = {
  getQuotesList(data, user, authors, width) {
    let list = [];
    let amount = width >= 1024 ? 3 : width >= 640 ? 2 : 1;
    for (let i = 0; i < amount; i++) {
      list.push(
        <QuotesColumn
          key={i}
          authors={authors}
          data={data.filter((item, index) => !((index + amount - i) % amount))}
          user={user}
          width={width}
        />
      );
    }
    return list;
  },
  getPropertyArray(data, property) {
    return data.map((item) => item[property]);
  },
  isTextOverflow(quote_id) {
    return (
      $(`#text${quote_id}`).height() >=
      125 - (window.location.href.includes(`authors`) ? 0 : 25)
    );
  },
  getList(data, type, user, id) {
    switch (type) {
      case `Цитаты`:
        return user.id ? data?.filter((n) => !user.favorite.includes(n.id)) : data;
      case `Избранные Цитаты`:
        return data?.filter((n) => user.favorite.includes(n.id));
      case `Цитаты автора`:
        return data?.filter((n) => (n.author_id == id));
      default:
        return data;
    }
  },
};
