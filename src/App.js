import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Outlet, NavLink,
} from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';

function Layout() {
  return (
    <>
      <nav>
        <h1 className="heading">Bookstore</h1>
        <ul>
          <li>
            <NavLink to="/">
              Books
            </NavLink>
          </li>
          <li>
            <NavLink to="categories">
              Categories
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Books />} />
      <Route path="categories" element={<Categories />} />
      <Route path="*" element={<h2>Page Not Found</h2>} />
    </Route>,
  ),
);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
