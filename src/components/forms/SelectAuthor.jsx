import { useQuery } from 'react-query';

import { DataService } from '@serv/data.service';

const SelectAuthor = ({ properties, title }) => {
  const { data } = useQuery([`authors`], () => DataService.getData(`authors`));

  return (
    <select className="input" {...properties}>
      <option value="">{title}</option>
      {data?.map((author) => (
        <option key={author._id} value={JSON.stringify(author)}>
          {author.name}
        </option>
      ))}
    </select>
  );
};

export default SelectAuthor;
