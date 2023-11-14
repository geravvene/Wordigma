import { useState } from 'react';

import CreateQuote from '../components/forms/CreateQuote';
import CreateAuthor from '../components/forms/CreateAuthor';
import FormPage from '../components/forms/FormPage';

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
