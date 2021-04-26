import React from "react";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import SEO from "../components/SEO";
import Header from "../components/header";
import Pagination from "../components/Pagination";

export const query = graphql`
  query($slug: String, $category: String) {
    sanityPainting(
      slug: { current: { eq: $slug } }
      paintingImage: { asset: { fluid: {} } }
    ) {
      category
      name
      paintingType
      dimensions
      prints
      sold
      price
      paintingImage {
        asset {
          fluid {
            ...GatsbySanityImageFluid
            src
          }
        }
      }
    }
    allSanityPainting(
      sort: { fields: _createdAt, order: DESC }
      filter: { category: { eq: $category } }
    ) {
      edges {
        next {
          slug {
            current
          }
        }
        node {
          slug {
            current
          }
        }
        previous {
          slug {
            current
          }
        }
      }
    }
  }
`;

export default function SinglePainting({ data, pageContext }) {
  const pagSlugs = data.allSanityPainting.edges;
  return (
    <>
      <SEO
        title={data.sanityPainting.name}
        image={data.sanityPainting.paintingImage?.asset?.fluid?.src}
      />
      <Header />
      <div className="container">
        <div className="painting-container">
          <Image
            className="painting-image"
            fluid={data.sanityPainting.paintingImage.asset.fluid}
            alt={data.sanityPainting.name}
            style={{ margin: "0.5rem", maxHeight: "calc(65vh - 2rem)" }}
            imgStyle={{ objectFit: "contain" }}
          ></Image>
          <div className="painting-description">
            <h3>{data.sanityPainting.name}</h3>
            <p>
              {data.sanityPainting.paintingType} -{" "}
              {data.sanityPainting.dimensions} -{" "}
              {data.sanityPainting.sold === false &&
              data.sanityPainting.price ? (
                <span>Price for Original: ${data.sanityPainting.price}</span>
              ) : (
                "Sold"
              )}{" "}
              {data.sanityPainting.prints ? " - Prints available" : ""}
            </p>
            <Pagination
              pagSlugs={pagSlugs}
              gallery={pageContext.category}
              currentSlug={pageContext.slug}
            ></Pagination>
            <Link
              title="Back to Gallery"
              to={`/${data.sanityPainting.category}`}
            >
              &larr; Back to Gallery
            </Link>
            {data.sanityPainting.sold === false ||
            data.sanityPainting.prints ? (
              <p>
                <span>
                  <Link id="price-link" to="/contact">
                    Contact for more information
                  </Link>
                </span>
              </p>
            ) : (
              ""
            )}
            <p className="painting-footer">
              Copyright &copy; Lori Joe Art {new Date().getFullYear()}. All
              Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
