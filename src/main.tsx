import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'
import App from './App.tsx'
import HomePage from './pages/HomePage.tsx';

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <>
    <RouterProvider router={appRouter}/>
  </>,
)
