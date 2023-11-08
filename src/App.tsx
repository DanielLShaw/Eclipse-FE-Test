import List from "./components/List";
import { type ReactNode } from "react";

import styled from "styled-components";

const Wrap = styled.div`
  max-width: 1500px;
  margin: 0 auto;
`;

export default function App(): ReactNode {
  return (
    <Wrap>
      <List />
    </Wrap>
  );
}
