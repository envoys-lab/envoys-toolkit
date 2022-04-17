import React from "react";
import Link from "./Link";
import { LinkProps } from "./types";
import OpenNewIcon from "../Svg/Icons/OpenNew";
import styled from "styled-components";

const IconContainer = styled.div`
  margin-left: 4px;
  opacity: 0.7;
`;

const LinkExternal: React.FC<LinkProps> = ({ children, ...props }) => {
  return (
    <Link external {...props}>
      {children}
      <IconContainer>
        <OpenNewIcon color={props.color ? props.color : "primary"} ml="4px" />
      </IconContainer>
    </Link>
  );
};

export default LinkExternal;
