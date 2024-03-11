import React, {
  memo, FunctionComponent
} from 'react';

const App: FunctionComponent = memo((): JSX.Element => {
  return (
    <div className="app-container">
      <span>test</span>
    </div>
  );
});

export default App;
