import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import { App } from 'components/App/App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store.js';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './styles/styles.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>

    <ToastContainer
      autoClose={1000}
      position="top-center"
      progressStyle={{ height: '2px' }}
      hideProgressBar={true}
    />
  </StrictMode>
);
