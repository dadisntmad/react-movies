import React from 'react';

import { useTypedSelector } from '../../hooks/useTypedSelector';

import { setClear, setPage, setQuery } from '../../redux/actions/movies';

import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

export const SearchForm: React.FC = () => {
  const dispatch = useDispatch();
  const query = useTypedSelector(({ movies }) => movies.query);
  let history = useHistory();

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setQuery(e.target.value));
  };

  const handleResults = (query: string) => {
    if (!query) return;
    history.push(`/search/${query}`);
    dispatch(setPage(1));
    dispatch(setClear());
  };

  const handleEnterClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      e.preventDefault();
      handleResults(query);
    } else {
      return false;
    }
  };

  return (
    <div className="find__button">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={handleOnChange}
        onKeyPress={handleEnterClick}
      />
      <div className="tooltip">
        <svg
          onClick={() => handleResults(query)}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="18px"
          height="18px">
          <path d="M22 20L20 22 14 16 14 14 16 14z" />
          <path d="M9,16c-3.9,0-7-3.1-7-7c0-3.9,3.1-7,7-7c3.9,0,7,3.1,7,7C16,12.9,12.9,16,9,16z M9,4C6.2,4,4,6.2,4,9c0,2.8,2.2,5,5,5 c2.8,0,5-2.2,5-5C14,6.2,11.8,4,9,4z" />
          <path d="M13.7 12.5H14.7V16H13.7z" transform="rotate(-44.992 14.25 14.25)" />
        </svg>
        <span className="tooltiptext">Search</span>
      </div>
    </div>
  );
};
