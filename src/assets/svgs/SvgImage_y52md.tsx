import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="24" height="14" viewBox="0 0 24 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.63333 14L0 12.3667L8.63333 3.675L13.3 8.34167L19.3667 2.33333H16.3333V0H23.3333V7H21V3.96667L13.3 11.6667L8.63333 7L1.63333 14Z" fill="#006D2F"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_y52md = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_y52md;
export { SvgImage_y52md };
