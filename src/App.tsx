import './App.scss';
import Home from './pages/Home/Home';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import {RootLayout} from './components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<Home />} />
    </Route>
  )
);

function App() {

  return (
    <RouterProvider router={router}/>
  );
}

export default App;
