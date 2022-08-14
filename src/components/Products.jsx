import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/client";
import { GET_PRODUCTS } from "../graphql/queries";
import { ADD_TO_CART } from "../graphql/mutations";

const Products = () => {
  const [products, setProducts] = useState([]);
  const { data } = useQuery(GET_PRODUCTS, { variables: { count: 5 } });
  const [addToCart, { data: cartData }] = useMutation(ADD_TO_CART);

  useEffect(() => {
    if (data && data.products) {
      console.log("Data", data);
      setProducts(data.products.edges);
    }
    if (cartData) {
      console.log("cartData", cartData);
    }
  }, [data, cartData]);

  return (
    <div>
      <ul>
        {products.map((product) => (
          <li key={product.node.id}>
            {product.node.title} - {product.node.priceRange.minVariantPrice.amount}
            {"   "}
            {product.node.priceRange.minVariantPrice.currencyCode}
            {"   "}
            <button
              onClick={() =>
                addToCart({ variables: { variantId: product.node.variants.nodes[0].id } })
              }
            >
              Add to cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
