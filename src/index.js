import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import Overview from './Overview';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Overview />
  </StrictMode>,
);
