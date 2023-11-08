import styled, { css } from "styled-components";
import classNames from "classnames";
import HeartIcon from "../../../assets/icons/HeartIcon";
import ChartIcon from "../../../assets/icons/ChartIcon";
const Wrap = styled.div`
  display: flex;
  gap: 8px;
`;

const Button = styled.button`
  appearance: none;
  background: none;
  border: none;
  cursor: pointer;

  width: 32px;
  height: 32px;

  border: 1px solid var(--Grey);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const iconCSS = css`
  fill: var(--Grey);
  height: 24px;
  width: 24px;
`;

const StyledHeart = styled(HeartIcon)`
  ${iconCSS}
`;

const StyledChart = styled(ChartIcon)`
  ${iconCSS}
`;

export default function DesktopActions({ className }: { className?: string }) {
  return (
    <Wrap className={classNames("desktop-actions", className)}>
      <Button>
        <StyledHeart />
      </Button>
      <Button>
        <StyledChart />
      </Button>
    </Wrap>
  );
}
