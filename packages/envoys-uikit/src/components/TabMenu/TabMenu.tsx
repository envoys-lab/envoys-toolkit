import React, {cloneElement, Children, ReactElement, useState, useEffect} from "react";
import styled from "styled-components";
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

const TabWrapper = styled.div<{ verticalMargin?: number; }>`
  margin: 0 25px;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0 ${({ verticalMargin }) => `${verticalMargin ?? 30}px`};
  }
  &.fix-items {
    margin: 0 auto;
  }
`;


const Wrapper = styled(Flex)`
  position: relative;
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

const BottomDivider = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  width: 50px;
  height: 3px;
  border-radius: 2px;
  transition-property: left, width;
  transition-timing-function: ease-in-out;
  transition-duration: ${({ theme }) => theme.animations.duration};
  background: ${({ theme }) => theme.colors.basicOrange};
`;

interface ChildMapItem {
  left: number;
  width: number;
}

const ButtonMenu: React.FC<TabMenuProps> = ({ fixedForItems = 0, nextIndex, activeIndex = 0, verticalMargin = 30, onItemClick, children }) => {
  let toIndex = nextIndex;
  if (nextIndex === undefined) {
    toIndex = activeIndex;
  }

  const [wrapperElement, setWrapperElement] = useState<HTMLElement | null>(null)
  const [dividerPos, setDividerPos] = useState<ChildMapItem | null>(null);

  useEffect(() => {
    if(wrapperElement) {
      const childElementsMap: ChildMapItem[] = [];
      const childNodes = wrapperElement.children;
      if (childNodes) {
        Array.from(childNodes).forEach((el) => {
          if (el.children) {
            const htmlEl = el.children[0] as HTMLElement;
            childElementsMap.push({
              left: htmlEl.offsetLeft,
              width: htmlEl.offsetWidth
            })
          }
        });
      }
      setDividerPos(childElementsMap[toIndex !== undefined ? toIndex : activeIndex]);
    }
  }, [activeIndex, toIndex, wrapperElement])

  return (
    <Wrapper className={fixedForItems ? 'fix-items': ''}>
      <Inner className={fixedForItems ? 'fix-items': ''} ref={setWrapperElement}>
        {Children.map(children, (child: ReactElement, index) => {
          const isActive = activeIndex === index;
          const isLast = index === children.length - 1;
          if (!child) {
              return null;
          }
          return (
            <Flex style={fixedForItems ? {width: `calc(100% / ${fixedForItems})`}: {}}>
              <TabWrapper verticalMargin={verticalMargin} className={fixedForItems ? 'fix-items': ''}>
                {cloneElement(child, {
                  isLast,
                  isActive,
                  onClick: onItemClick ? () => onItemClick(index) : undefined,
                  color: (isActive || (index === nextIndex)) ? "basicOrange" : "textSubtle",
                  backgroundColor: "white",
                })}
              </TabWrapper>
              {!isLast && <Divider />}
            </Flex>
          );
        })}
      </Inner>
      {dividerPos && <BottomDivider style={{...dividerPos}} />}
    </Wrapper>
  );
};

export default ButtonMenu;
