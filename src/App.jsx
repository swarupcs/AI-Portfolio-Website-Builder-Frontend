import { Provider } from 'react-redux';
import './App.css'
import { persistor, store } from './app/store';
import AppRoutes from './AppRoutes'
import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Protected Route component
function ProtectedRoute({ children }) {


}

// Public Route component (redirects to dashboard if authenticated)
function PublicRoute({ children }) {

}
function App() {
   const queryClient = new QueryClient();

  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <AppRoutes />
          </QueryClientProvider>
        </PersistGate>
      </Provider>
    </>
  );
}

export default App
