import React from 'react';

function Search(props) {
  return (
    <div>
      <div className='search'>{props.name}</div>
      <div className='search'>{props.content}</div>
    </div>
  );
};

export default Search;