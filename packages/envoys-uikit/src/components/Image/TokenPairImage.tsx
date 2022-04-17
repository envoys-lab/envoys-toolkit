import React from "react";
import { TokenPairImageProps, variants } from "./types";
import { StyledPrimaryImage, StyledSecondaryImage } from "./styles";
import Wrapper from "./Wrapper";
import styled from "styled-components";

const Image = styled.img`
  width: 22px;
  height: 22px;
  position: absolute;
`

const RightImage = styled.img`
  width: 22px;
  height: 22px;
  position: absolute;
  right: 0%;
`

const TokenPairImage: React.FC<TokenPairImageProps> = ({
  primarySrc,
  secondarySrc,
  width,
  height,
  variant = variants.DEFAULT,
  primaryImageProps = {},
  secondaryImageProps = {},
  ...props
}) => {
// <<<<<<< HEAD

  return (
    <Wrapper position="relative" width={width} height={height} {...props}>
      <Image src={primarySrc}/>
      <RightImage src={secondarySrc}/>
    </Wrapper>
  );

 //     {/* <StyledPrimaryImage variant={variant} src={primarySrc} width={width} height={height} {...primaryImageProps} />
// =======
//   return (
//     <Wrapper position="relative" width={width * 1.8} height={height} {...props}>
//       <StyledPrimaryImage variant={variant} src={primarySrc} width={width} height={height} {...primaryImageProps} />
// >>>>>>> develop
//       <StyledSecondaryImage
//         variant={variant}
//         src={secondarySrc}
//         width={width}
//         height={height}
//         {...secondaryImageProps}
//       /> */}
    
  
};

export default TokenPairImage;
