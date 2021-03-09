import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import Image from "gatsby-image";

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      kmcp: allSanityPainting(
        sort: { fields: _createdAt, order: DESC }
        filter: { category: { eq: "kootenay-mountain-culture" } }
      ) {
        edges {
          node {
            name
            paintingImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            _id
            slug {
              current
            }
          }
        }
      }
      mmhp: allSanityPainting(
        sort: { fields: _createdAt, order: DESC }
        filter: { category: { eq: "mickey-mouse-house" } }
      ) {
        edges {
          node {
            name
            paintingImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            _id
            slug {
              current
            }
          }
        }
      }
      dogp: allSanityPainting(
        sort: { fields: _createdAt, order: DESC }
        filter: { category: { eq: "dog" } }
      ) {
        edges {
          node {
            name
            paintingImage {
              asset {
                fluid {
                  ...GatsbySanityImageFluid
                }
              }
            }
            _id
            slug {
              current
            }
          }
        }
      }
    }
  `);

  return (
    <div className="container">
      <div className="outer-gallery">
        <div className="gallery">
          {data.kmcp.edges.map(({ node: painting }) => (
            <Link to={painting.slug.current} key={painting._id}>
              <Image
                className="painting"
                fluid={painting.paintingImage.asset.fluid}
                alt={painting.name}
              />
              <p>{painting.name}</p>
            </Link>
          ))}
        </div>

        <div className="gallery">
          {data.mmhp.edges.map(({ node: painting }) => (
            <Link to={painting.slug.current} key={painting._id}>
              <Image
                className="painting"
                fluid={painting.paintingImage.asset.fluid}
                alt={painting.name}
              />
              <p>{painting.name}</p>
            </Link>
          ))}
        </div>

        <div className="gallery">
          {data.dogp.edges.map(({ node: painting }) => (
            <Link to={painting.slug.current} key={painting._id}>
              <Image
                className="painting"
                fluid={painting.paintingImage.asset.fluid}
                alt={painting.name}
              />
              <p>{painting.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
