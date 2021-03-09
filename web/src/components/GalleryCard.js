import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";

const GalleryCard = ({ data, name }) => {
  return data.edges.map(({ node: card }) => (
    <Link to={`/${card.category}`} key={card._id}>
      <div className="gallery-card">
        <Image
          fixed={card.paintingImage.asset.fixed}
          alt={card.category.toString()}
        />
        <h3>{name}</h3>
      </div>
    </Link>
  ));
};

export default GalleryCard;
