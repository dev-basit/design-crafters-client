import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import Artists from "../pages/artists/Artists";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
// // import Home from "./pages/home/Home";
// import Gigs from "./pages/gigs/Gigs";
// import Gig from "./pages/gig/Gig";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
// import Add from "./pages/add/Add";
// import Orders from "./pages/orders/Orders";
// import Messages from "./pages/messages/Messages";
// import Message from "./pages/message/Message";
// import MyGigs from "./pages/myGigs/MyGigs";
// import Profile from "./components/profile/profile";

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export const navbarItems = [
  {
    name: "Home",
    path: "/",
    permissions: ["buyer", "seller"],
  },
];

export const links = [
  {
    path: "/",
    component: Home,
    permissions: ["buyer", "seller"],
    others: { exact: true },
  },
  {
    path: "/login",
    component: Login,
    permissions: ["buyer", "seller"],
  },
  {
    path: "/register",
    component: Register,
    permissions: ["buyer", "seller"],
  },
  {
    path: "/artists",
    component: Artists,
    permissions: ["buyer", "seller"],
  },
  {
    path: "*",
    component: Layout,
    permissions: [""],
  },
];

// const router = createBrowserRouter([
//   {
//       {
//         path: "/gigs",
//         element: <Gigs />,
//       },
//       {
//         path: "/myGigs",
//         element: <MyGigs />,
//       },
//       {
//         path: "/orders",
//         element: <Orders />,
//       },
//       {
//         path: "/messages",
//         element: <Messages />,
//       },
//       {
//         path: "/message/:id",
//         element: <Message />,
//       },
//       {
//         path: "/add",
//         element: <Add />,
//       },
//       {
//         path: "/gig/:id",
//         element: <Gig />,
//       },
//       {
//         path: "/profile",
//         element: <Profile />,
//       },
//   },
// ]);

// return <RouterProvider router={router} />;
