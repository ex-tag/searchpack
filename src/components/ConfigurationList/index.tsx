import React, { FunctionComponent, memo } from 'react';

import Configuration from 'src/components/Configuration';

const ConfigurationList: FunctionComponent = memo((): JSX.Element => {
  return (
    <div className="configuration-list-container">
      <div className="row">
        <div className="col">
          <Configuration />
        </div>
      </div>
    </div>
  );
});

export default ConfigurationList;
