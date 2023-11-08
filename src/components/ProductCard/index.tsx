import { type ReactNode } from "react";
import { type Product } from "../../types/product.types";
import styled from "styled-components";

const ItemWrap = styled.div``;

interface ProductCardProps {
  item: Product;
}

export default function ProductCard({ item }: ProductCardProps): ReactNode {
  return <ItemWrap>{item.title}</ItemWrap>;
}
