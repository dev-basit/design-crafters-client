import React from "react";

import "./Artist.scss";
import Card from "../../components/card/Card";
import { projects } from "../../data";

function Artists() {
  return (
    <div className="artists">
      {projects.map((card, index) => (
        <div className="artistsCardContainer" key={index}>
          <Card key={card.id} card={card} />
        </div>
      ))}
    </div>
  );
}

export default Artists;
