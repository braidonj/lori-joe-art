import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";

const Gallery = ({ data }) => {
  return (
    <div className="container">
      <div className="outer-gallery">
        <div className="gallery">
          {data.map(({ node: painting }) => (
            <Link to={painting.slug.current} key={painting.slug.current}>
              <div className="gallery-item">
                <Image
                  className="painting"
                  fluid={painting.paintingImage.asset.fluid}
                  alt={painting.name}
                />
                <p>{painting.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
