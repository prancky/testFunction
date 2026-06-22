import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 30C0 13.4315 13.4315 0 30 0H110C126.569 0 140 13.4315 140 30V70C140 86.5685 126.569 100 110 100H30C13.4315 100 0 86.5686 0 70V30Z" fill="#E9E6F7"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_d3aj6 = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_d3aj6;
export { SvgImage_d3aj6 };
