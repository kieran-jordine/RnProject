import React from 'react';
import {Provider} from 'react-redux';

import {store} from './src/redux/store';
import ReduxStart from './src/features/state_management/RtkQuery';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ReduxStart />
    </Provider>
  );
}

export default App;
