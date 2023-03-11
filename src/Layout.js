import { NavLink, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav>
        <h1 className="logo">Bookstore CMS</h1>
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
