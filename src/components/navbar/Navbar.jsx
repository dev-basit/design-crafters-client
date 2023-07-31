import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Navbar.scss";

function Navbar() {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = null

  const currentUser = {
    id: 1,
    username: "Daniyal",
    isSeller: true,
  };

  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link className="link" to="/">
            <span className="text">Design Crafters</span>
          </Link>
          {/* <span className="dot">.</span> */}
        </div>
        <div className="links">
          <NavLink to="/gigs" className="link" activeClassName="activeLink" exact>
            <span className="text">Artists</span>
          </NavLink>
          <NavLink to="/gigs" className="link" activeClassName="activeLink" exact>
            <span className="text">My Projects</span>
          </NavLink>
          <NavLink to="/gigs" className="link" activeClassName="activeLink" exact>
            <span className="text">Gigs</span>
          </NavLink>

          {/* <Link className="link" to="/gigs">
            <span className="text">Artists</span>
          </Link>
          <Link className="link" to="/gigs">
            <span className="text">My Projects</span>
          </Link>
          <Link className="link" to="/gigs">
            <span className="text">Gigs</span>
          </Link> */}

          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div
              className="user"
              onClick={() => setOpen(!open)}
              // onMouseOver={() => setOpen(true)}
              // onMouseOut={() => setOpen(false)}
            >
              <img src="/img/daniyal.jpeg" alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  <Link className="link" to="/profile">
                    My Profile
                  </Link>
                  <Link className="link" to="/mygigs">
                    Gigs
                  </Link>
                  <Link className="link" to="/add">
                    Add New Gig
                  </Link>
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <span>Sign in</span>
              <Link className="link" to="/register">
                <button>Join</button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Digital Artists
            </Link>
            <Link className="link menuLink" to="/">
              Craft Artists
            </Link>
            <Link className="link menuLink" to="/">
              Painters
            </Link>
            <Link className="link menuLink" to="/">
              Photographers
            </Link>
            <Link className="link menuLink" to="/">
              Sculptors
            </Link>
            <Link className="link menuLink" to="/">
              Illustrators
            </Link>
            <Link className="link menuLink" to="/">
              AI Artists
            </Link>
          </div>
          <hr />
        </>
      )}
    </div>
  );
}

export default Navbar;
