import { gql } from "@apollo/client";

export const GET_PRODUCTS = gql`
  query ($count: Int!) {
    products(first: $count) {
      edges {
        node {
          id
          title
          description
          createdAt
          handle
          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }
          variants(first: 5) {
            nodes {
              id
              barcode
              image {
                url
              }
              title
              sku
              weight
            }
          }
        }
      }
    }
  }
`;
