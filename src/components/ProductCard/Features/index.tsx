import styled from "styled-components";
import CheckIcon from "../../../assets/icons/check";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
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
    <Wrap className="features">
      {features?.map((feature) => (
        <FeatureWrap key={feature} className="features__feature">
          <StyledCheckIcon /> <Feature>{feature}</Feature>
        </FeatureWrap>
      ))}
    </Wrap>
  );
}
