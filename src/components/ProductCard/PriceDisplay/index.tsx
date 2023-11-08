import styled from "styled-components";

interface PriceDisplayProps {
  nowPrice: number;
  discountPercentage: number;
}

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const WasPrice = styled.span`
  font-size: 14px;
  color: var(--Grey);
  line-height: 14px;
  width: fit-content;
  background: linear-gradient(
    to left top,
    transparent 47.75%,
    currentColor 49.5%,
    currentColor 50.5%,
    transparent 52.25%
  );
`;
const NowPriceWrap = styled.div`
  display: flex;
  flex-direction: column;

  gap: 8px;
  line-height: 32px;

  @media (max-width: 800px) {
    flex-direction: row;
    align-items: center;
  }
`;
const NowPrice = styled.span`
  color: var(--Red);
  font-size: 30px;
  font-weight: 500;
`;
const Discount = styled.span`
  width: fit-content;
  color: var(--Red);
  background-color: #ed143d33;
  border-radius: 4px;
  padding: 3px 6px;
  font-size: 14px;
  line-height: 14px;
`;

const displayPrice = (number: number) => {
  if (Number.isInteger(number)) {
    // i.e £50
    return `£${number}`;
  } else {
    // i.e £50.25
    return `£${number.toFixed(2)}`;
  }
};

export default function PriceDisplay({
  nowPrice,
  discountPercentage,
}: PriceDisplayProps) {
  const hasDiscount = discountPercentage > 0;

  const discount = nowPrice * (discountPercentage / 100);
  const wasPrice = nowPrice + discount;

  return (
    <Wrap className="price-display">
      {hasDiscount && <WasPrice>RRP {displayPrice(wasPrice)}</WasPrice>}
      <NowPriceWrap>
        <NowPrice>{`£${nowPrice.toFixed(2)}`}</NowPrice>
        {hasDiscount && <Discount>Save {displayPrice(discount)}</Discount>}
      </NowPriceWrap>
    </Wrap>
  );
}
