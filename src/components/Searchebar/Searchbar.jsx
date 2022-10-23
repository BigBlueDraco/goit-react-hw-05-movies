import { useState } from 'react';

export const Searchbar = ({ handleSubmit }) => {
  const [query, setQuerry] = useState();
  return (
    <form
      action=""
      onSubmit={e => {
        handleSubmit(query);
      }}
    >
      <label>
        Searche movie
        <input
          type="text"
          name="query"
          onChange={e => {
            setQuerry(e.target.value);
          }}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
};
