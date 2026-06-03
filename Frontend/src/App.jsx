import { createBrowserRouter, Link, Outlet } from "react-router-dom";

import Navbar from "./Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";

function Layout() {
  return (
    <div>
      {/* <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav> */}
      <Navbar />

      <hr />

      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
