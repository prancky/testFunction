import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="32" height="40" viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 22V7.65L2.85 12.8L0 10L10 0L20 10L17.15 12.8L12 7.65V22H8ZM22 40L12 30L14.85 27.2L20 32.35V18H24V32.35L29.15 27.2L32 30L22 40Z" fill="white"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_pobne = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_pobne;
export { SvgImage_pobne };
