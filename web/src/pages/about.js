import React from "react";
import { graphql } from "gatsby";
import Image from "gatsby-image";
import BlockContent from "@sanity/block-content-to-react";
import "../styles/styles.scss";

//Import Components
import SEO from "../components/SEO";
import Header from "../components/header";
import Footer from "../components/footer";

const AboutPage = ({ data }) => (
  <>
    <SEO title="About"></SEO>
    <Header></Header>
    <div className="container about">
      <div>
        <h3>{data.allSanityAboutPage.nodes[0].name}</h3>
      </div>
      <div className="about-content">
        <BlockContent
          blocks={data.allSanityAboutPage.nodes[0]._rawText}
        ></BlockContent>
        <Image
          fluid={data.allSanityAboutPage.nodes[0].aboutImage.asset.fluid}
          alt="About the artist image"
        ></Image>
      </div>
    </div>
    <Footer />
  </>
);

export const aboutQuery = graphql`
  query {
    allSanityAboutPage {
      nodes {
        name
        _rawText(resolveReferences: { maxDepth: 10 })
        aboutImage {
          asset {
            fluid {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;

export default AboutPage;
