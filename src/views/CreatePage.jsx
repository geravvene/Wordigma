import { useState } from 'react';

import { DataService } from '@serv/data.service';
import useMutate from '@hooks/useMutate';
import QuoteForm from '@forms/QuoteForm';
import AuthorForm from '@forms/AuthorForm';
import FormPage from '@forms/FormPage';

const CreatePage = () => {
  const [text, setText] = useState('Введите данные');

  const mutateAuthor = useMutate(
    'authors',
    'name',
    {
      onSuccess: () => {
        setText('Автор добавлен');
      },
      onError: (error) => setText(error.message),
    },
    DataService.postDataWithFile
  );

  const mutateQuote = useMutate('quotes', 'text', {
    onSuccess: () => {
      setText('Цитата добавлена');
    },
    onError: (error) => setText(error.message),
  });

  return (
    <>
      <FormPage text={text}>
        <QuoteForm onSubmit={mutateQuote} />
        <AuthorForm onSubmit={mutateAuthor} />
      </FormPage>
    </>
  );
};
export default CreatePage;
