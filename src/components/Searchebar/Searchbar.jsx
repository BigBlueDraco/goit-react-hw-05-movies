import { useState } from 'react';

export const Searchbar = ({ handleSubmit }) => {
  const [query, setQuerry] = useState();
  return (
    <form
      action=""
      onSubmit={e => {
        // e.preventDefault();
        handleSubmit(query);
      }}
    >
      <label htmlFor="">
        <input
          type="text"
          name="query"
          onChange={e => {
            setQuerry(e.target.value);
          }}
        />
      </label>
    </form>
  );
};
