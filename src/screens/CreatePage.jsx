import { useState } from 'react';

import CreateQuote from '../ui/Forms/CreateQuote';
import CreateAuthor from '../ui/Forms/CreateAuthor';
import FormPage from '../ui/Forms/FormPage';

const CreatePage = () => {
  const [text, setText] = useState('Введите данные');
  return (
    <>
      <FormPage text={text}>
        <CreateQuote setText={setText} />
        <CreateAuthor setText={setText} />
      </FormPage>
    </>
  );
};
export default CreatePage;
