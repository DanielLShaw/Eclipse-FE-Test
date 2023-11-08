import { format, startOfTomorrow } from "date-fns";
import TruckIcon from "../../../assets/icons/truck";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 14px;
`;

const CountdownMessage = styled.span``;

export default function DeliveryCountdown() {
  const deliveryDay = format(startOfTomorrow(), "do MMMM");
  return (
    <Wrap>
      <TruckIcon />
      <CountdownMessage>
        Order in the next <strong>XX:XX:XX</strong> for delivery on{" "}
        <strong>{deliveryDay}</strong>
      </CountdownMessage>
    </Wrap>
  );
}
