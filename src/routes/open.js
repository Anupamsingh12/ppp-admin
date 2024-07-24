import React, { lazy, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import withAdminLayout from '../layout/OpenLayout';
const Feed = lazy(() => import('../container/feed'));
const Articles = lazy(() => import('../container/feed/articles'));

const NotFound = lazy(() => import('../container/pages/404'));

const FrontendRoutes = React.memo(() => {
  return (
    <Routes>
      <Route path="/*" element={<Feed />} />
      <Route path="feed/*" element={<Feed />} />
      <Route path="about/*" element={<Feed />} />
      <Route path="contact/*" element={<Feed />} />
      <Route path="articles/*" element={<Articles />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
});

export default withAdminLayout(FrontendRoutes);
