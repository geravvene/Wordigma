import { useState, useEffect } from 'react';

import { FaSortAmountDownAlt } from 'react-icons/fa';
import { FaSortAmountUpAlt } from 'react-icons/fa';

import ClassicBtn from '../../ui/buttons/ClassicBtn';

const SelectSort = ({ sorts, onChange }) => {
  const [reverse, setReverse] = useState(false);

  const handleOnChange = (e) => {
    const { id, obj } = JSON.parse(e.target.value);
    onChange({ sort: sorts.get(id).func(obj) });
  };

  useEffect(() => {
    onChange({ reverse });
  }, [reverse]);

  const toggleReverse = () => {
    setReverse((prev) => !prev);
  };

  return (
    <div className="flex gap-3">
      <select className="input" onChange={handleOnChange}>
        {Array.from(sorts.values()).map((sort) => sort.view)}
      </select>
      <ClassicBtn func={toggleReverse}>
        {reverse ? <FaSortAmountDownAlt /> : <FaSortAmountUpAlt />}
      </ClassicBtn>
    </div>
  );
};

export default SelectSort;
