import React, { lazy, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AuthLayout from '../container/profile/authentication/Index';

// import withAdminLayout from '../layout/';
const Login = lazy(() => import('../container/profile/authentication/overview/SignIn'));
const Feed = lazy(() => import('../container/feed'));
const SignUp = lazy(() => import('../container/profile/authentication/overview/Signup'));
const Organisation = lazy(() => import('../container/profile/authentication/overview/Organisation'));
const ForgotPass = lazy(() => import('../container/profile/authentication/overview/ForgotPassword'));

const AuthRoot = () => {
  const navigate = useNavigate();

  useEffect(() => navigate('/'));
};

const FrontendRoutes = React.memo(() => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="forgotPassword" element={<ForgotPass />} />
      <Route path="register" element={<SignUp />} />
      <Route path="*" element={<AuthRoot />} />
    </Routes>
  );
});

export default AuthLayout(FrontendRoutes);
