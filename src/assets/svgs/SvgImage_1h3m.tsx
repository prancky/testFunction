import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.65 18L18.85 29.2L16 32L0 16L16 0L18.85 2.8L7.65 14H32V18H7.65Z" fill="#001E40"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_1h3m = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_1h3m;
export { SvgImage_1h3m };
