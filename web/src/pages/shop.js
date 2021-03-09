import React from "react";
import { graphql, Link } from "gatsby";
import Image from "gatsby-image";
import "../styles/styles.scss";
import SEO from "../components/SEO";
import Header from "../components/header";
import Footer from "../components/footer";

const ShopPage = ({ data }) => {
  return (
    <>
      <SEO title="Shop"></SEO>
      <Header></Header>
      <div className="container shop">
        <div className="shop-info">
          <h3>Shop</h3>
          <p>
            For information on prints, cards, calendars, and other items please{" "}
            <Link to="/contact">contact me</Link> directly. Prices available
            upon inquiry.
          </p>
        </div>
        <div className="shop-items">
          {data.allSanityShopItem.nodes.map(item => {
            return (
              <div className="shop-item" key={item._id}>
                <Image
                  fixed={item.itemImage.asset.fixed}
                  alt={item.name}
                ></Image>
                <h4>{item.name}</h4>
              </div>
            );
          })}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export const shopQuery = graphql`
  query {
    allSanityShopItem {
      nodes {
        _id
        name
        itemImage {
          asset {
            fixed(height: 300, width: 300) {
              ...GatsbySanityImageFixed
            }
          }
        }
      }
    }
  }
`;

export default ShopPage;
