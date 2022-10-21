import { useState } from 'react';
import { useLocation } from 'react-router-dom';

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

      <button type="submit">Submit</button>
    </form>
  );
};
