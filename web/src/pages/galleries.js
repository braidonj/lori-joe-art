import React from "react";
import { graphql } from "gatsby";
import "../styles/styles.scss";

//Import Components
import Header from "../components/header";
import Footer from "../components/footer";
import SEO from "../components/SEO";
import GalleryCard from "../components/GalleryCard";

const GalleriesPage = ({ data }) => {
  return (
    <>
      <SEO title="Galleries" />
      <Header></Header>
      <div className="container">
        <h3 id="galleries-title">Galleries</h3>
        <div className="galleries">
          <GalleryCard data={data.kl} name="Kootenay Life"></GalleryCard>
          <GalleryCard data={data.mmh} name="Mickey Mouse Houses"></GalleryCard>
          <GalleryCard data={data.can} name="Canadiana"></GalleryCard>
          <GalleryCard data={data.dog} name="Dogs"></GalleryCard>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export const imgQuery = graphql`
  query {
    kl: allSanityPainting(
      limit: 1
      sort: { fields: _createdAt, order: DESC }
      filter: { category: { eq: "kl-gallery" } }
    ) {
      edges {
        node {
          _id
          category
          paintingImage {
            asset {
              fixed(height: 250, width: 250) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }
    mmh: allSanityPainting(
      limit: 1
      sort: { fields: _createdAt, order: DESC }
      filter: { category: { eq: "mmh-gallery" } }
    ) {
      edges {
        node {
          _id
          category
          paintingImage {
            asset {
              fixed(height: 250, width: 250) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }
    can: allSanityPainting(
      limit: 1
      sort: { fields: _createdAt, order: DESC }
      filter: { category: { eq: "can-gallery" } }
    ) {
      edges {
        node {
          _id
          category
          paintingImage {
            asset {
              fixed(height: 250, width: 250) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }
    dog: allSanityPainting(
      limit: 1
      sort: { fields: _createdAt, order: DESC }
      filter: { category: { eq: "dog-gallery" } }
    ) {
      edges {
        node {
          _id
          category
          paintingImage {
            asset {
              fixed(height: 250, width: 250) {
                ...GatsbySanityImageFixed
              }
            }
          }
        }
      }
    }
  }
`;

export default GalleriesPage;
