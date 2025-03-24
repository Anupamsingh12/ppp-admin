import React, { lazy, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import withAdminLayout from '../layout/OpenLayout';
const Feed = lazy(() => import('../container/feed'));
const Contact = lazy(() => import('../container/feed/Contact'));
const Articles = lazy(() => import('../container/feed/articles'));
const SingleArticle = lazy(() => import('../container/feed/SingleArticle'));

const NotFound = lazy(() => import('../container/pages/404'));

const FrontendRoutes = React.memo(() => {
  window.location.href = '/auth/login';
  return (
    <Routes>
      <Route path="/*" element={<Articles />} />
      <Route path="home/:category" element={<Articles />} />
      <Route path="headlines/*" element={<Feed />} />
      <Route path="contact/*" element={<Contact />} />
      <Route path="articles/:id" element={<SingleArticle />} />
      <Route path="articles/*" element={<Articles />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
});

export default withAdminLayout(FrontendRoutes);
