import styled from "styled-components";
import CartIcon from "../../../assets/icons/cart";

interface CTAProps {
  text: string;
  onClick: () => void;
}

const Button = styled.button`
  appearance: none;
  border: none;

  border-radius: 25px;
  background: var(--Pink-Gradient);
  color: white;

  font-size: 16px;
  font-weight: 600;
  font-family: inherit;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;

  height: 42px;
  padding: 0 20px;
  width: 100%;

  cursor: pointer;

  &:hover {
    background-size: 150% 150%;
  }
`;

const StyledCartIcon = styled(CartIcon)`
  fill: white;
  height: 18px;
  width: 18px;
`;

export default function CTA({ text, onClick }: CTAProps) {
  return (
    <Button onClick={onClick}>
      <StyledCartIcon />
      {text}
    </Button>
  );
}
