import {
  format,
  intervalToDuration,
  startOfTomorrow,
  Duration,
  isAfter,
} from "date-fns";
import TruckIcon from "../../../assets/icons/TruckIcon";
import styled from "styled-components";
import { useState, useEffect, useCallback } from "react";

const Wrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  font-size: 14px;
`;

const CountdownMessage = styled.span``;

interface DeliveryCountdownProps {
  cutOffTime: number;
}

export default function DeliveryCountdown({
  cutOffTime,
}: DeliveryCountdownProps) {
  const [timeLeft, setTimeLeft] = useState<Duration>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [cutoffPassed, setCutoffPassed] = useState(false);

  const checkTimeLeft = useCallback(() => {
    setTimeLeft(
      intervalToDuration({
        // takes 2 dates and returns an object with hours minutes seconds between dates
        start: new Date(),
        end: new Date(cutOffTime),
      })
    );

    setCutoffPassed(isAfter(new Date(), new Date(cutOffTime)));
  }, [cutOffTime]);

  useEffect(() => {
    checkTimeLeft();
    const interval = setInterval(checkTimeLeft, 1000);

    () => {
      clearInterval(interval);
    };
  }, [checkTimeLeft]);

  const deliveryDay = format(startOfTomorrow(), "do MMMM");

  const paddedTimeLeft = `${String(timeLeft.hours).padStart(2, "0")}:${String(
    timeLeft.minutes
  ).padStart(2, "0")}:${String(timeLeft.seconds).padStart(2, "0")}`;

  return (
    <Wrap>
      <TruckIcon />
      <CountdownMessage>
        Order in the next{" "}
        <strong>{cutoffPassed ? "00:00:00" : paddedTimeLeft}</strong> for
        delivery on <strong>{deliveryDay}</strong>
      </CountdownMessage>
    </Wrap>
  );
}
