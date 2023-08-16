import React from 'react';
import {Provider} from 'react-redux';

import {store} from './src/redux/store';
import ReduxCounter from './src/features/state_management/ReduxCounter';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <ReduxCounter />
    </Provider>
  );
}

export default App;
