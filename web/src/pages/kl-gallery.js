import React from "react";
import { graphql } from "gatsby";
import Gallery from "../components/Gallery2";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/SEO";

const kootenayLifeGalleryPage = ({ data }) => {
  const paintingData = data.allSanityPainting.edges;
  return (
    <>
      <SEO title="Kootenay Life Gallery"></SEO>
      <Header></Header>
      <Gallery data={paintingData}></Gallery>
      <Footer></Footer>
    </>
  );
};

export const klQuery = graphql`
  query {
    allSanityPainting(
      sort: { fields: _createdAt, order: DESC }
      filter: { category: { eq: "kl-gallery" } }
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
`;

export default kootenayLifeGalleryPage;
