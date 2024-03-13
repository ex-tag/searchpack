import React, { FunctionComponent, memo } from 'react';

const SearchBar: FunctionComponent = memo((): JSX.Element => {
  return (
    <div className="search-bar-container">
      <form className="d-flex" role="search">
        <div className="input-group">
          <input type="text" className="form-control"
            placeholder="https://www.google.com"
            aria-label="Enter website url"
            aria-describedby="button-addon2" />
          <button className="btn btn-primary" type="button"
            id="button-addon2">Search</button>
        </div>
      </form>
    </div>
  );
});

export default SearchBar;
