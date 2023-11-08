import styled from "styled-components";
import CheckIcon from "../../../assets/icons/check";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

const FeatureWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const Feature = styled.span`
  font-size: 14px;
`;

const StyledCheckIcon = styled(CheckIcon)`
  width: 11px;
`;

export default function Features({ features }: { features: string[] }) {
  return (
    <Wrap>
      {features?.map((feature) => (
        <FeatureWrap key={feature}>
          <StyledCheckIcon /> <Feature>{feature}</Feature>
        </FeatureWrap>
      ))}
    </Wrap>
  );
}
