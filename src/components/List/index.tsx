import { useQuery } from "@tanstack/react-query";
import getAllProducts from "../../queries/products.queries";
import { type ReactNode } from "react";
import styled from "styled-components";
import ProductCard from "../ProductCard";

const ListWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const dataRetentionMilli = 3 * 60 * 1000;

export default function List(): ReactNode {
  // grab products
  const {
    data: rawResponse,
    dataUpdatedAt,
    // isStale
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    staleTime: dataRetentionMilli,
    gcTime: dataRetentionMilli,
  });

  // filter out brand = Apple
  const filteredProducts = rawResponse?.products?.filter(
    (product) => product.brand !== "Apple"
  );

  // sort highest rating desc

  const sortedProducts = filteredProducts?.sort((a, b) => {
    return (b?.rating ?? 0) - (a?.rating ?? 0);
  });

  // choose first 10
  const displayedProducts = sortedProducts?.slice(0, 10);
  return (
    <ListWrap>
      {displayedProducts?.map((item) => (
        <ProductCard
          key={item.id}
          item={item}
          deliveryCutoffTime={dataUpdatedAt + dataRetentionMilli}
        />
      ))}
    </ListWrap>
  );
}
