import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
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
          <Link className="link" to="/gigs">
            <span className="text">Gigs</span>
          </Link>
          {/* <span>Liverr Business</span> */}
          {/* <span>Explore</span> */}
          {/* <span>English</span> */}
          {!currentUser?.isSeller && <span>Become a Seller</span>}
          {currentUser ? (
            <div className="user" onClick={() => setOpen(!open)}>
              <img src="/img/daniyal.jpeg" alt="" />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" to="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Orders
                  </Link>
                  <Link className="link" to="/messages">
                    Messages
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
