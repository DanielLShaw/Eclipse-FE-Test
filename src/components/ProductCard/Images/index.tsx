import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (max-width: 800px) {
    flex-direction: row;
    align-items: center;
  }
`;

export const ProductImage = styled.div`
  width: 347px;
  height: 287px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;

  @media (max-width: 800px) {
    width: 117px;
    height: 147px;
  }
`;

const BrandImage = styled.div`
  width: 84px;
  height: 47px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  @media (max-width: 800px) {
    width: 55px;
    height: 31px;
  }
`;

interface ImagesProps {
  productSrc?: string;
  logoSrc?: string;
  brandName?: string;
  productName?: string;
}

export default function Images({
  productSrc,
  logoSrc,
  brandName,
  productName,
}: ImagesProps) {
  return (
    <Wrap>
      <ProductImage
        style={{
          backgroundImage: `url(${productSrc ?? "/images/fallback.svg"})`,
        }}
        aria-describedby={`image for product ${productName}`}
      />
      <BrandImage
        style={{
          backgroundImage: `url(${logoSrc ?? "/images/fallback-logo.svg"})`,
        }}
        aria-describedby={`${brandName} logo for product ${productName}`}
      />
    </Wrap>
  );
}
