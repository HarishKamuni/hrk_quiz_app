import React from 'react';
import Quiz from './components/Quiz';
import { Provider } from 'react-redux';
import { store } from './store/store';

const App = () => {
  return (
    <Provider store={store}>
      <Quiz />
 {/* break */}
    </Provider>
  );
};

export default App;
