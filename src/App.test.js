import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

it('renders without crashing', async () => {
  const div = document.createElement('div');
  const root = createRoot(div);

  await act(async () => {
    root.render(
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <App />
      </BrowserRouter>
    );
  });

  await act(async () => {
    root.unmount();
  });
});
