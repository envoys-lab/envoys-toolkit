import React, { cloneElement, Children, ReactElement } from "react";
import styled, { useTheme } from "styled-components";
import Flex from "../Box/Flex";
import { TabMenuProps } from "./types";

const Inner = styled(Flex)`
  justify-content: space-between;
  flex-grow: 0;
  &.fix-items {
    flex-grow: 1;
    justify-content: stretch;
  }
`;

const TabWrapper = styled.div<{ verticalMargin: number; }>`
  margin: 0 25px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0 ${({ verticalMargin }) => (verticalMargin + 'px')};
  }
  &.fix-items {
    margin: 0 auto;
  }
`;


const Wrapper = styled(Flex)`
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  
  &.fix-items {
    color: ${({ theme }) => theme.colors.darkClear};
    width: 100%;
    > div {
      width: 100%;
    }
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 40px;
  background: ${({ theme }) => theme.colors.tabDivider};
`;

const BottomDivider = styled(Flex)`
  height: 3px;
  flex-direction: column;
  border-radius: 2px;
  background: ${({ theme }) => theme.colors.basicOrange};
`;


const ButtonMenu: React.FC<TabMenuProps> = ({ fixedForItems = 0, activeIndex = 0, verticalMargin = 30, onItemClick, children }) => {
  return (
    <Wrapper className={fixedForItems ? 'fix-items': ''}>
      <Inner className={fixedForItems ? 'fix-items': ''}>
        {Children.map(children, (child: ReactElement, index) => {
          const isActive = activeIndex === index;
          const isLast = index === children.length - 1;
          return (
            <Flex style={fixedForItems ? {width: `calc(100% / ${fixedForItems})`}: {}}>
              <TabWrapper verticalMargin={verticalMargin} className={fixedForItems ? 'fix-items': ''}>
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
