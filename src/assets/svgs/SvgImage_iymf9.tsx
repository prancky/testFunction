import React from 'react';
import { SvgXml } from 'react-native-svg';

const rawSvg = `<svg width="510" height="100" viewBox="0 0 510 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30 0.5H480C496.292 0.5 509.5 13.7076 509.5 30V70C509.5 86.2924 496.292 99.5 480 99.5H30C13.7076 99.5 0.5 86.2924 0.5 70V30C0.500001 13.7076 13.7076 0.5 30 0.5Z" stroke="#D0D0D3" stroke-width="0.5"/>
</svg>
`;

interface SvgImageProps {
  width?: number;
  height?: number;
  color?: string;
  style?: object;
}

const SvgImage_iymf9 = ({ width, height, color, style }: SvgImageProps) => {
  const svgString = color
    ? rawSvg
        .replaceAll('currentColor', color)
        .replaceAll(/fill="(?!none)[^"]*"/g, `fill="${color}"`)
        .replaceAll(/stroke="(?!none)[^"]*"/g, `stroke="${color}"`)
    : rawSvg;
  return <SvgXml xml={svgString} width={width} height={height} style={style} />;
};

export default SvgImage_iymf9;
export { SvgImage_iymf9 };
