import React, { FunctionComponent, memo } from 'react';

import SearchBar from 'src/components/SearchBar';

const ConfigurationList: FunctionComponent = memo((): JSX.Element => {
  return (
    <div className="configuration-list-container">
      <div className="row">
        <div className="col">
          <form>
            <div className="card">
              <div className="card-header">
                <span>config_01</span>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <div className="input-group">
                    <input type="text" className="form-control"
                      placeholder="address (e.g. www.google.com)"
                      aria-label="Address with Search" />
                    <button className="btn btn-primary"
                      type="button">Search</button>
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
      </div>
    </div>
  );
});

export default ConfigurationList;
