import { Provider } from 'react-redux';
import './App.css'
import { persistor, store } from './app/store';
import AppRoutes from './AppRoutes'
import { PersistGate } from 'redux-persist/integration/react';
// Protected Route component
function ProtectedRoute({ children }) {


}

// Public Route component (redirects to dashboard if authenticated)
function PublicRoute({ children }) {

}
function App() {

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppRoutes />
        </PersistGate>
      </Provider>
    </>
  );
}

export default App
