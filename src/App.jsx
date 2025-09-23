import { Provider } from 'react-redux';
import './App.css'
import { store } from './app/store';
import AppRoutes from './AppRoutes'
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
        <AppRoutes />
      </Provider>
    </>
  );
}

export default App
