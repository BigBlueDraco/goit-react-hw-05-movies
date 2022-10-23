import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="index">Home</NavLink>
          </li>
          <li>
            <NavLink to="/movies">Movies</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};
