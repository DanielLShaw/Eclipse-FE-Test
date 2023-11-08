import styled from "styled-components";
import CheckIcon from "../../../assets/icons/CheckIcon";
import classNames from "classnames";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
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
  height: 11px;
`;

export default function Features({
  features,
  className,
}: {
  features: string[];
  className?: string;
}) {
  return (
    <Wrap className={classNames("features", className)}>
      {features?.map((feature) => (
        <FeatureWrap key={feature} className="features__feature">
          <StyledCheckIcon /> <Feature>{feature}</Feature>
        </FeatureWrap>
      ))}
    </Wrap>
  );
}
