import { gql } from "@apollo/client";

export const ADD_TO_CART = gql`
  mutation ($variantId: ID!) {
    checkoutCreate(input: { lineItems: [{ variantId: $variantId, quantity: 1 }] }) {
      checkout {
        id
        webUrl
        lineItems(first: 5) {
          edges {
            node {
              title
              quantity
            }
          }
        }
      }
    }
  }
`;
