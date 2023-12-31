import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import "./Gigs.scss";
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard";
import { gigService } from "../../services/gigService";

function Gigs() {
  // const [sort, setSort] = useState("sales");
  // const [open, setOpen] = useState(false);
  // const minRef = useRef();
  // const maxRef = useRef();
  const [gigs, setGigs] = useState([]);
  const [queryParameters] = useSearchParams();

  let titleParam = queryParameters.get("title");
  let categoryParam = queryParameters.get("category");

  useEffect(() => {
    console.log("hiii");
    if (titleParam) fetchGigs(`title=${titleParam}`);
    else if (categoryParam) fetchGigs(`category=${categoryParam}`);
    else fetchGigs();
  }, [titleParam, categoryParam]);

  const fetchGigs = async (queryParams) => {
    try {
      const response = await gigService.getAllGigs(queryParams ? queryParams : "");
      console.log("fetch gigs ", response);
      setGigs(response.data);
    } catch (error) {}
  };

  // const reSort = (type) => {
  //   setSort(type);
  //   setOpen(false);
  // };

  // const apply = () => {
  //   console.log(minRef.current.value);
  //   console.log(maxRef.current.value);
  // };

  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrumbs">Design Crafters</span>
        <h1>Best Artists</h1>
        <p>Explore the boundaries of art and technology with Design Crafters artists</p>
        {/* <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">Sort by</span>
            <span className="sortType">{sort === "sales" ? "Best Selling" : "Newest"}</span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                  <span onClick={() => reSort("createdAt")}>Newest</span>
                ) : (
                  <span onClick={() => reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
            )}
          </div>
        </div> */}
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
