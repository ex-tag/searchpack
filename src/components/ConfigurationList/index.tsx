import React, { FunctionComponent, memo } from 'react';

const ConfigurationList: FunctionComponent = memo((): JSX.Element => {
  return (
    <div className="configuration-list-container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <span>config_01</span>
            </div>
            <div className="card-body">
              inurl:
              site:
              filetype:
              ext:
              related:
              intitle:
              allintitle:
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ConfigurationList;
