const sorts = new Map([
  [
    'Нет',
    {
      view: (
        <option key="Нет" value={JSON.stringify({ id: 'Нет' })}>
          Нет
        </option>
      ),
      func: () => undefined,
    },
  ],
  [
    'По алфавиту',
    {
      view: (
        <option key="По алфавиту" value={JSON.stringify({ id: 'По алфавиту' })}>
          По алфавиту
        </option>
      ),
      func: () => (a, b) => a.text.localeCompare(b.text),
    },
  ],
  [
    'По длине',
    {
      view: (
        <option key="По длине" value={JSON.stringify({ id: 'По длине' })}>
          По длине
        </option>
      ),
      func: () => (a, b) => b.text.length - a.text.length,
    },
  ],
]);

export default sorts;
