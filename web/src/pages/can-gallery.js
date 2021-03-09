import React from "react";
import { graphql } from "gatsby";
import Gallery from "../components/Gallery2";
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/SEO";

const canadianaGalleryPage = ({ data }) => {
  const paintingData = data.allSanityPainting.edges;
  return (
    <>
      <SEO title="Canadiana Gallery"></SEO>
      <Header></Header>
      <Gallery data={paintingData}></Gallery>
      <Footer></Footer>
    </>
  );
};

export const canQuery = graphql`
  query {
    allSanityPainting(
      sort: { fields: _createdAt, order: DESC }
      filter: { category: { eq: "can-gallery" } }
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

export default canadianaGalleryPage;
