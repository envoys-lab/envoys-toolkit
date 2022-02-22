import React, { cloneElement, Children, ReactElement } from "react";
import styled, { useTheme } from "styled-components";
import Flex from "../Box/Flex";
import { TabMenuProps } from "./types";

const Wrapper = styled(Flex)`
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const Divider = styled.div`
  width: 1px;
  height: 40px;
  background: ${({ theme }) => theme.colors.tabDivider};
`;

const Inner = styled(Flex)`
  justify-content: space-between;
  flex-grow: 0;
`;

const BottomDivider = styled(Flex)`
  height: 3px;
  flex-direction: column;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.basicOrange};
`;

const TabWrapper = styled.div`
  margin: 0 25px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0 50px;
  }
`;

const ButtonMenu: React.FC<TabMenuProps> = ({ activeIndex = 0, onItemClick, children }) => {
  return (
    <Wrapper>
      <Inner>
        {Children.map(children, (child: ReactElement, index) => {
          const isActive = activeIndex === index;
          const isLast = index === children.length - 1;
          return (
            <Flex>
              <TabWrapper>
                {cloneElement(child, {
                  isLast,
                  isActive,
                  onClick: onItemClick ? () => onItemClick(index) : undefined,
                  color: isActive ? "basicOrange" : "textSubtle",
                  backgroundColor: "white",
                })}
                {isActive && <BottomDivider />}
              </TabWrapper>
              {!isLast && <Divider />}
            </Flex>
          );
        })}
      </Inner>
    </Wrapper>
  );
};

export default ButtonMenu;
