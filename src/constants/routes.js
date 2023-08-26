// import Footer from "../components/footer/Footer";
// import Navbar from "../components/navbar/Navbar";
// import { gigs } from "../data";
import Artists from "../pages/artists/Artists";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";

// import Navbar from "./components/navbar/Navbar";
// import Footer from "./components/footer/Footer";
// // import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import Register from "./pages/register/Register";
import Gigs from "../pages/gigs/Gigs";
import GigDetails from "../pages/gig/Gig";
import AddGig from "../pages/add/Add";
import Orders from "../pages/orders/Orders";
import Messages from "../pages/messages/Messages";
import Message from "../pages/message/Message";
import MyGigs from "../pages/myGigs/MyGigs";
import Profile from "../components/profile/profile";

// const Layout = () => {
//   return (
//     <div className="app">
//       <Navbar />
//       <Home />
//       <Footer />
//     </div>
//   );
// };

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
    path: "/gigs",
    component: Gigs,
    permissions: ["buyer", "seller"],
  },
  {
    path: "/gig/add",
    component: AddGig,
    permissions: ["seller"],
  },
  {
    path: "/gig/:id",
    component: GigDetails,
    permissions: ["buyer", "seller"],
  },
  {
    path: "/myGigs",
    component: MyGigs,
    permissions: ["seller"],
  },
  {
    path: "/orders",
    component: Orders,
    permissions: ["buyer", "seller"],
  },
  {
    path: "/messages",
    component: Messages,
    permissions: ["buyer", "seller"],
  },
  {
    path: "/message/:id",
    component: Message,
    permissions: ["buyer", "seller"],
  },

  {
    path: "/profile/:id",
    component: Profile,
    permissions: ["buyer", "seller"],
  },

  {
    path: "*",
    component: Home,
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
