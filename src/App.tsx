import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Home from './pages/Home/page';
import Card from './components/card/card';
import Quiz from './pages/Quiz/page';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Card>
        <Outlet />
      </Card>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "quiz/:id",
        element: <Quiz />,
      }, 
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}