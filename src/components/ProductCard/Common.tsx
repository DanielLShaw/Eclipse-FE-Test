import styled from "styled-components";

export const Title = styled.span`
  color: var(--Charcoal, #333);
  font-family: var(--title-font-family);
  font-size: 26px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  text-transform: capitalize;

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

export const CardWrap = styled.div`
  border-radius: 20px;
  background: white;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.12);
  padding: 40px 20px 20px 20px;
  border: 2px solid transparent;

  position: relative;

  &.recommended {
    border-color: var(--Charcoal-Gradient, #333);
    box-shadow: 0px 0px 20px 0px #e61577;
    &:after {
      content: "Eclipse recommended";
      position: absolute;
      top: 0;
      left: 20px;
      background: var(--Charcoal-Gradient);
      color: white;
      padding: 10px;
      border-radius: 0px 0px 5px 5px;
      line-height: 12px;
      font-size: 12px;
    }
  }
`;
