import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate
        loading={null} /*отображается вместо APP пока данные загружаются из LocalStorage */
        // onBeforeLift={() => new Promise(resolve => setTimeout(resolve, 3000))}  /* задержка, кот. позволит дольше показывать Loading*/
        persistor={store.persistor}
      >
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
