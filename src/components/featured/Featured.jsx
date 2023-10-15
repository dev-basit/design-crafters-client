import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Featured.scss";

function Featured() {
  const [search, setSearch] = useState("");

  return (
    <div className="featured">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <span>artist work</span>
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="./img/search.png" alt="" />
              <input
                type="text"
                value={search}
                placeholder="Are you looking for artists?"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <Link to={`/gigs?title=${search}`}>
              <button>Search</button>
            </Link>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <Link to="/gigs?category=digitalArtists">
              <button>Digital Artists</button>
            </Link>

            <Link to="/gigs?category=illustrators">
              <button>Illustrators</button>
            </Link>

            <Link to="/gigs?category=aiArtists">
              <button>AI Artists</button>
            </Link>
          </div>
        </div>
        <div className="right">
          <img src="./img/landing.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Featured;
