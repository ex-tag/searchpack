import React, {
  memo, FunctionComponent
} from 'react';

import SearchBar from 'src/components/SearchBar';
import ConfigurationList from 'src/components/ConfigurationList';

const App: FunctionComponent = memo((): JSX.Element => {
  return (
    <div className="app-container">
      <div className="container-fluid">
        <div className="row">
          <div className="col mt-3">
            <div className="row">
              <div className="col mb-3">
                <SearchBar />
              </div>
            </div>
            <div className="row">
              <div className="col mb-3">
                <ConfigurationList />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="ratio ratio-16x9">
              <iframe src="https://www.google.com" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default App;
