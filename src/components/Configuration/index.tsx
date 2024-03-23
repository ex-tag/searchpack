import React, { useState, useCallback, memo, FunctionComponent } from 'react';

declare global {
  interface Window {
    browserViewApi: any;
  }
}

const Configuration: FunctionComponent = memo((): JSX.Element => {

  let [ url, setUrl ] = useState('https://github.com');
  const updateUrl = (event: any) => {
    // event.preventDefault();
    const { value } = event.target;
    // console.log(value);
    setUrl(value);
  };

  const createBrowserRequest = () => {
    // console.log(url);
    window.browserViewApi.updateUrl(url);
  };

  return (
    <div className="configuration-container">
      <form>
        <div className="card">
          <div className="card-header">
            <span>config_01</span>
          </div>
          <div className="card-body">
            <div className="mb-3">
              <div className="input-group">
                <input type="text" className="form-control"
                  placeholder="website url"
                  aria-label="Address with Search"
                  onChange={updateUrl}
                />
                <button className="btn btn-primary" type="button"
                  onClick={createBrowserRequest}>Search</button>
              </div>
            </div>
            inurl:
            site:
            filetype:
            ext:
            related:
            intitle:
            allintitle:
          </div>
          <div className="card-footer">
            <div className="row">
              <div className="col">
                <button type="button" className="btn btn-sm btn-secondary"
                  >Delete</button>
              </div>
              <div className="col text-end">
                <button
                  type="submit"
                  className="btn btn-sm btn-secondary"
                >Duplicate</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
});

export default Configuration;