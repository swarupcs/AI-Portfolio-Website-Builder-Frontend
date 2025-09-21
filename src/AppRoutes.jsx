
import HomePage from "./Pages/HomePage";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPAge";
import SignUpPage from "./Pages/SignupPage";
import CheckEmailPage from "./Pages/CheckEmail";
import DashboardPage from "./Pages/DashboardPage";
import BuilderPage from "./Pages/BuilderPage";
import BuilderProjectPage from "./Pages/BuilderProjectPage";


function AppRoutes() {
  return (
    <>
      <Routes>
        {/* Public routes */}
        <Route path='/' element={<HomePage />} />

        {/* Auth routes - redirect to dashboard if already authenticated */}
        <Route
          path='/login'
          element={
            // <PublicRoute>
            <LoginPage />
            // </PublicRoute>
          }
        />
        <Route
          path='/signup'
          element={
            // <PublicRoute>
            <SignUpPage />
            // </PublicRoute>
          }
        />

        <Route
          path='/check-email'
          element={
            // <PublicRoute>
            <CheckEmailPage />
            // </PublicRoute>
          }
        />


        {/* Protected routes */}
        <Route
        path='/dashboard'
        element={
          // <ProtectedRoute>
            <DashboardPage />
          // </ProtectedRoute>
        }
      />
        <Route
        path='/builder'
        element={
          // <ProtectedRoute>
            <BuilderPage />
          // </ProtectedRoute>
        }
      />
        <Route
        path='/builder/:projectId'
        element={
          // <ProtectedRoute>
            <BuilderProjectPage />
          // </ProtectedRoute>
        }
      />

        {/* Catch all route - redirect to home */}
        {/* <Route path='*' element={<Navigate to='/' replace />} /> */}
      </Routes>
    </>
  );
}


export default AppRoutes;