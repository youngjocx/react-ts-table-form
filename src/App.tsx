import React, { useEffect } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { DefaultLayout } from 'layouts/DefaultLayout';
import { HomePage } from 'pages/Home';
import { getAllItems } from 'store/slices/items';
import { useAppDispatch } from 'store/hooks';

const App: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllItems());
  })

  return (
    <BrowserRouter>
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route index element={<HomePage />} />
        </Routes>
      </DefaultLayout>
    </BrowserRouter >
  );
}

export default App;
