import { type Product } from "../../../types/product.types";

import styled from "styled-components";
import classNames from "classnames";

const Wrap = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StockIndicator = styled.div`
  width: 100%;
  height: 4px;
  background-color: #cfcfcf;
  border-radius: 4px;
  overflow: hidden;

  position: relative;
  &:after {
    position: absolute;
    content: "";
    height: 100%;
    background-color: #27ae60;
    width: 100%;
  }

  &.low {
    &:after {
      background-color: var(--Red);
      width: 20%;
    }
  }
`;
const StockMessage = styled.div`
  font-size: 12px;
  &.low {
    color: var(--Red);
  }
`;
interface StockDisplayProps {
  stock: Product["stock"];
}

export default function StockDisplay({ stock = 0 }: StockDisplayProps) {
  const lowStock = stock < 5;
  return (
    <Wrap className="stock">
      <StockIndicator
        className={classNames("stock__indicator", { low: lowStock })}
      />
      <StockMessage className={classNames("stock__message", { low: lowStock })}>
        {lowStock ? "Last few left" : "In stock"}
      </StockMessage>
    </Wrap>
  );
}
