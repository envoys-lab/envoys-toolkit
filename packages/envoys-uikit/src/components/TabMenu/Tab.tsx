import styled from "styled-components";
import { color } from "styled-system";
import { TabProps } from "./types";

const Tab = styled.button<TabProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: 0;
  flex-grow: 1;
  border: none;
  font-size: 16px;
  font-weight: 500;
  height: 40px;

  ${({ theme }) => theme.mediaQueries.md} {
    flex-grow: 0;
  }

  ${color}
`;

Tab.defaultProps = {
  scale: "md",
};

export default Tab;
